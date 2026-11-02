import Stripe from "stripe";

let stripeClient: Stripe | null = null;

// Stripe istemcisini ilk kullanımda oluşturur; ortam değişkeni eksikse anlamlı hata verir
export function getStripe(): Stripe {
  if (!stripeClient) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) throw new Error("STRIPE_SECRET_KEY ortam değişkeni tanımlı değil (.env)");

    stripeClient = new Stripe(secretKey);
  }

  return stripeClient;
}
