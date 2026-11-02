import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connectMongo from "@/server/db";
import Cart from "@/server/models/Cart";
import Grocery from "@/server/models/Grocery";
import { getCart, isValidId } from "@/server/queries";
import { getUserId } from "@/server/user";
import { resolveLocale } from "@/lib/localized";
import { MAX_QUANTITY, isValidQuantity } from "@/lib/validation";

const json = (body: unknown, status = 200) => NextResponse.json(body, { status });

// Kullanıcının sepetini getir
export async function GET(req: Request) {
  try {
    const userId = await getUserId();
    if (!userId) return json({ message: "Oturum bulunamadı" }, 401);

    const locale = resolveLocale(new URL(req.url).searchParams.get("locale"));

    return json({ cart: await getCart(userId, locale) });
  } catch (error) {
    console.error("Sepet alınamadı:", error);
    return json({ message: "Sepet bilgileri alınamadı" }, 500);
  }
}

// Ürün ekle; sepetteki mevcut miktarla birlikte stok kontrolü yapılır
export async function POST(req: Request) {
  try {
    const userId = await getUserId();
    if (!userId) return json({ message: "Oturum bulunamadı" }, 401);

    const { groceryId, quantity = 1 } = await req.json();
    if (!isValidId(groceryId) || !isValidQuantity(quantity)) {
      return json({ message: "Geçersiz istek" }, 400);
    }

    await connectMongo();

    const grocery = await Grocery.findById(groceryId).lean();
    if (!grocery) return json({ message: "Ürün bulunamadı" }, 404);

    const existing = await Cart.findOne({ userId, "items.grocery": grocery._id }, { "items.$": 1 }).lean();
    const currentQuantity = existing?.items[0]?.quantity ?? 0;
    const nextQuantity = currentQuantity + quantity;

    if (nextQuantity > grocery.stock || nextQuantity > MAX_QUANTITY) {
      return json({ message: "Yetersiz stok" }, 400);
    }

    if (existing) {
      await Cart.updateOne(
        { userId, "items.grocery": grocery._id },
        { $set: { "items.$.quantity": nextQuantity } },
      );
    } else {
      await Cart.updateOne(
        { userId },
        { $push: { items: { grocery: new Types.ObjectId(groceryId), quantity } } },
        { upsert: true },
      );
    }

    const locale = resolveLocale(new URL(req.url).searchParams.get("locale"));

    return json({ message: "Ürün sepete eklendi", cart: await getCart(userId, locale) });
  } catch (error) {
    console.error("Ürün sepete eklenemedi:", error);
    return json({ message: "Ürün sepete eklenemedi" }, 500);
  }
}

// Tüm sepeti boşalt
export async function DELETE() {
  try {
    const userId = await getUserId();
    if (!userId) return json({ message: "Oturum bulunamadı" }, 401);

    await connectMongo();
    await Cart.updateOne({ userId }, { $set: { items: [] } });

    return json({ message: "Sepet boşaltıldı" });
  } catch (error) {
    console.error("Sepet boşaltılamadı:", error);
    return json({ message: "Sepet boşaltılamadı" }, 500);
  }
}
