import connectMongo from "./db";
import Cart from "./models/Cart";
import Grocery from "./models/Grocery";
import Order from "./models/Order";
import { getStripe } from "./stripe";
import { roundMoney } from "@/lib/format";
import { Locale, localize } from "@/lib/localized";
import { CustomerInfo, MAX_QUANTITY, MIN_ORDER_AMOUNT, isValidQuantity } from "@/lib/validation";
import { isValidId } from "./queries";

export class CheckoutError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

export type CheckoutRequest =
  | { type: "cart" }
  | { type: "single"; groceryId: string; quantity: number };

interface StartCheckoutInput {
  userId: string;
  request: CheckoutRequest;
  customer: CustomerInfo;
  origin: string;
  locale: Locale;
}

interface RequestedLine {
  groceryId: string;
  quantity: number;
}

// Ödeme isteğine göre satın alınacak satırları belirler
async function resolveLines(userId: string, request: CheckoutRequest): Promise<RequestedLine[]> {
  if (request.type === "single") {
    if (!isValidId(request.groceryId) || !isValidQuantity(request.quantity)) {
      throw new CheckoutError("Geçersiz istek", 400);
    }
    return [{ groceryId: request.groceryId, quantity: request.quantity }];
  }

  await connectMongo();

  const cart = await Cart.findOne({ userId }).lean();
  const lines = (cart?.items ?? []).map((item) => ({
    groceryId: String(item.grocery),
    quantity: item.quantity,
  }));

  if (lines.length === 0) throw new CheckoutError("Sepet boş", 400);

  return lines;
}

// Ödeme oturumunu açar ve siparişi oluşturup hemen "paid" yapar (stok düşer, sepet temizlenir).
export async function startCheckout({ userId, request, customer, origin, locale }: StartCheckoutInput) {
  const lines = await resolveLines(userId, request);

  await connectMongo();

  const groceries = await Grocery.find({ _id: { $in: lines.map((line) => line.groceryId) } }).lean();

  const priced = lines.map((line) => {
    const grocery = groceries.find((g) => String(g._id) === line.groceryId);
    if (!grocery) throw new CheckoutError("Ürün bulunamadı", 404);
    if (line.quantity > grocery.stock || line.quantity > MAX_QUANTITY) {
      throw new CheckoutError(`Yetersiz stok: ${localize(grocery.name, locale)}`, 400);
    }
    return { grocery, quantity: line.quantity };
  });

  const total = roundMoney(priced.reduce((sum, line) => sum + line.grocery.price * line.quantity, 0));

  if (total < MIN_ORDER_AMOUNT) {
    throw new CheckoutError(`Minimum sipariş tutarı ${MIN_ORDER_AMOUNT}₺'dir`, 400);
  }

  // Fiyat sunucudaki güncel veriden hesaplanır; istemciden gelen fiyat kullanılmaz
  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items: priced.map(({ grocery, quantity }) => ({
      quantity,
      price_data: {
        currency: "try",
        unit_amount: Math.round(grocery.price * 100),
        product_data: {
          name: localize(grocery.name, locale),
          description: localize(grocery.description, locale),
          metadata: { product_id: String(grocery._id) },
        },
      },
    })),
    success_url: `${origin}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/${locale}/cancel`,
  });

  if (!session.url) throw new CheckoutError("Ödeme oturumu oluşturulamadı", 500);

  await Order.create({
    items: priced.map(({ grocery, quantity }) => ({
      product: grocery._id,
      quantity,
      price: grocery.price,
      name: localize(grocery.name, locale),
    })),
    total_amount: total,
    currency: "TRY",
    customer_id: userId,
    customer_name: customer.name,
    customer_phone: customer.phone,
    delivery_address: customer.deliveryAddress,
    is_delivery: customer.isDelivery,
    status: "pending",
    stripe_session_id: session.id,
  });

  // Webhook kapalıyken de sipariş oluşsun diye ödeme sayfasına geçişte hemen işlenir.
  // Webhook daha sonra gelirse fulfillOrder siparişi yeniden işlemez.
  await fulfillOrder(session.id);

  return session.url;
}

// Ödeme onaylandığında siparişi "paid" yapar, stoku düşer ve satın alınan ürünleri sepetten çıkarır.
// Aynı oturum için birden fazla çağrılırsa yalnızca ilki işlenir.
export async function fulfillOrder(sessionId: string): Promise<void> {
  await connectMongo();

  const order = await Order.findOneAndUpdate(
    { stripe_session_id: sessionId, status: "pending" },
    { $set: { status: "paid" } },
  );

  // Sipariş bulunamadıysa zaten işlenmiştir ya da bilinmeyen bir oturumdur
  if (!order) return;

  try {
    for (const item of order.items) {
      await Grocery.updateOne({ _id: item.product }, { $inc: { stock: -item.quantity } });
    }
  } catch (error) {
    // Stok düşümü tamamlanamadıysa sipariş tekrar bekleyen duruma alınır; Stripe yeniden dener
    await Order.updateOne({ _id: order._id }, { $set: { status: "pending" } });
    throw error;
  }

  await Cart.updateOne(
    { userId: order.customer_id },
    { $pull: { items: { grocery: { $in: order.items.map((item) => item.product) } } } },
  );
}
