import { NextResponse } from "next/server";
import Stripe from "stripe";
import { fulfillOrder } from "@/server/payments";
import { getStripe } from "@/server/stripe";

const json = (body: unknown, status = 200) => NextResponse.json(body, { status });

// Stripe ödeme olaylarını buraya gönderir. İmza doğrulanmadan hiçbir veri işlenmez.
export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !secret) return json({ message: "Geçersiz istek" }, 400);

  // İmza doğrulaması ham gövde üzerinden yapılmalı; req.json() kullanılmaz
  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret);
  } catch {
    return json({ message: "Geçersiz imza" }, 400);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      try {
        await fulfillOrder(session.id);
      } catch (error) {
        console.error("Sipariş işlenemedi:", error);
        // 500 dönülürse Stripe olayı yeniden gönderir
        return json({ message: "Sipariş işlenemedi" }, 500);
      }
    }
  }

  return json({ received: true });
}
