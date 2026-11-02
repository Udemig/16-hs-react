import { NextResponse } from "next/server";
import { CheckoutError, CheckoutRequest, startCheckout } from "@/server/payments";
import { getUserId } from "@/server/user";
import { resolveLocale } from "@/lib/localized";
import { parseCustomerInfo } from "@/lib/validation";

const json = (body: unknown, status = 200) => NextResponse.json(body, { status });

// Tek ürün ({ grocery, quantity }) veya tüm sepet ({ cart }) için ödeme oturumu başlatır
export async function POST(req: Request) {
  try {
    const userId = await getUserId();
    if (!userId) return json({ message: "Oturum bulunamadı" }, 401);

    const body = await req.json();

    const { data: customer, error } = parseCustomerInfo(body.customerInfo);
    if (!customer) return json({ message: error }, 400);

    const locale = resolveLocale(body.locale);

    const request: CheckoutRequest = body.grocery
      ? { type: "single", groceryId: body.grocery, quantity: body.quantity }
      : { type: "cart" };

    const url = await startCheckout({
      userId,
      request,
      customer,
      origin: new URL(req.url).origin,
      locale,
    });

    return json({ url });
  } catch (error) {
    if (error instanceof CheckoutError) return json({ message: error.message }, error.status);

    console.error("Ödeme başlatılamadı:", error);
    return json({ message: "Ödeme başlatılamadı" }, 500);
  }
}
