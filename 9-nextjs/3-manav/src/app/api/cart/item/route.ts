import { NextResponse } from "next/server";
import connectMongo from "@/server/db";
import Cart from "@/server/models/Cart";
import Grocery from "@/server/models/Grocery";
import { getCart, isValidId } from "@/server/queries";
import { getUserId } from "@/server/user";
import { resolveLocale } from "@/lib/localized";
import { isValidQuantity, MAX_QUANTITY } from "@/lib/validation";

const json = (body: unknown, status = 200) => NextResponse.json(body, { status });

// Sepetteki bir ürünün miktarını güncelle
export async function PUT(req: Request) {
  try {
    const userId = await getUserId();
    if (!userId) return json({ message: "Oturum bulunamadı" }, 401);

    const { groceryId, quantity } = await req.json();
    if (!isValidId(groceryId) || !isValidQuantity(quantity)) {
      return json({ message: "Geçersiz istek" }, 400);
    }

    await connectMongo();

    const grocery = await Grocery.findById(groceryId).lean();
    if (!grocery) return json({ message: "Ürün bulunamadı" }, 404);

    if (quantity > grocery.stock || quantity > MAX_QUANTITY) {
      return json({ message: "Yetersiz stok" }, 400);
    }

    const result = await Cart.updateOne(
      { userId, "items.grocery": groceryId },
      { $set: { "items.$.quantity": quantity } },
    );

    if (result.matchedCount === 0) return json({ message: "Ürün sepette bulunamadı" }, 404);

    const locale = resolveLocale(new URL(req.url).searchParams.get("locale"));

    return json({ message: "Ürün miktarı güncellendi", cart: await getCart(userId, locale) });
  } catch (error) {
    console.error("Ürün güncellenemedi:", error);
    return json({ message: "Ürün güncellenemedi" }, 500);
  }
}

// Sepetten ürün kaldır
export async function DELETE(req: Request) {
  try {
    const userId = await getUserId();
    if (!userId) return json({ message: "Oturum bulunamadı" }, 401);

    const groceryId = new URL(req.url).searchParams.get("groceryId");
    if (!isValidId(groceryId)) return json({ message: "Geçersiz istek" }, 400);

    await connectMongo();
    await Cart.updateOne({ userId }, { $pull: { items: { grocery: groceryId } } });

    const locale = resolveLocale(new URL(req.url).searchParams.get("locale"));

    return json({ message: "Ürün sepetten kaldırıldı", cart: await getCart(userId, locale) });
  } catch (error) {
    console.error("Ürün kaldırılamadı:", error);
    return json({ message: "Ürün kaldırılamadı" }, 500);
  }
}
