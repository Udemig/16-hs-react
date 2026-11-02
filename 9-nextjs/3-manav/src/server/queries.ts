import { Types } from "mongoose";
import connectMongo from "./db";
import Cart from "./models/Cart";
import Grocery, { IGrocery, localizedTextPaths } from "./models/Grocery";
import Order from "./models/Order";
import { Locale, localize } from "@/lib/localized";
import type { Basket, Order as OrderDto, Product } from "@/types";

// Server component'lerden client'a aktarılabilmesi için ObjectId ve Date değerlerini düz veriye çevirir
const toPlain = <T>(value: unknown): T => JSON.parse(JSON.stringify(value));

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Ürün adı ve açıklaması istenen dile çevrilir; dil yoksa varsayılan dil kullanılır
const localizeGrocery = (grocery: IGrocery, locale: Locale) => ({
  ...grocery,
  name: localize(grocery.name, locale),
  description: localize(grocery.description, locale),
});

// Sipariş içindeki (populate edilmiş) ürünler de aynı dile çevrilir
const localizeOrder = (order: { items: { product: unknown }[] }, locale: Locale) => ({
  ...order,
  items: order.items.map((item) => ({
    ...item,
    product: item.product ? localizeGrocery(item.product as IGrocery, locale) : null,
  })),
});

export const isValidId = (id: unknown): id is string =>
  typeof id === "string" && Types.ObjectId.isValid(id);

export interface GroceryFilter {
  category?: string;
  query?: string;
  organic?: boolean;
  locale: Locale;
}

export async function getGroceries({ category, query, organic, locale }: GroceryFilter) {
  await connectMongo();

  const filter: Record<string, unknown> = {};

  if (category) filter.category = category;
  if (organic) filter.isOrganic = true;
  if (query) {
    // Kullanıcı girdisi regex olarak değil, düz metin olarak aranır; tüm dillerde ve eski tek dilli kayıtlarda aranır
    const pattern = { $regex: escapeRegex(query.slice(0, 100)), $options: "i" };
    filter.$or = [...localizedTextPaths, "name", "description"].map((path) => ({ [path]: pattern }));
  }

  const groceries = await Grocery.find(filter).lean();

  return toPlain<Product[]>(groceries.map((grocery) => localizeGrocery(grocery, locale)));
}

export async function getGroceryById(id: string, locale: Locale) {
  if (!isValidId(id)) return null;

  await connectMongo();

  const grocery = await Grocery.findById(id).lean();

  return grocery ? toPlain<Product>(localizeGrocery(grocery, locale)) : null;
}

// Silinmiş ürünlere ait sepet kalemleri listeye dahil edilmez
export async function getCart(userId: string, locale: Locale): Promise<Basket> {
  await connectMongo();

  const cart = await Cart.findOne({ userId }).populate("items.grocery").lean();

  const items = (cart?.items ?? []).flatMap((item) => {
    const grocery = item.grocery as unknown as IGrocery | null;
    return grocery ? [{ grocery: localizeGrocery(grocery, locale), quantity: item.quantity }] : [];
  });

  return toPlain<Basket>({ items });
}

// Yalnızca ödemesi tamamlanmış siparişler listelenir
export async function getOrders(userId: string, locale: Locale) {
  await connectMongo();

  const orders = await Order.find({ customer_id: userId, status: "paid" })
    .populate("items.product")
    .sort({ createdAt: -1 })
    .lean();

  return toPlain<OrderDto[]>(orders.map((order) => localizeOrder(order, locale)));
}

export async function getOrderById(id: string, userId: string, locale: Locale) {
  if (!isValidId(id)) return null;

  await connectMongo();

  const order = await Order.findOne({ _id: id, customer_id: userId, status: "paid" })
    .populate("items.product")
    .lean();

  return order ? toPlain<OrderDto>(localizeOrder(order, locale)) : null;
}

// Stripe'tan dönüşte oturum kimliğiyle sipariş aranır; webhook henüz çalışmadıysa null döner
export async function getOrderBySession(sessionId: string, userId: string, locale: Locale) {
  await connectMongo();

  const order = await Order.findOne({
    stripe_session_id: sessionId,
    customer_id: userId,
    status: "paid",
  })
    .populate("items.product")
    .lean();

  return order ? toPlain<OrderDto>(localizeOrder(order, locale)) : null;
}
