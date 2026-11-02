import { NextResponse } from "next/server";
import { resolveLocale } from "@/lib/localized";
import { getOrderById, isValidId } from "@/server/queries";
import { getUserId } from "@/server/user";

type Params = { params: Promise<{ id: string }> };

// Sipariş yalnızca sahibi tarafından okunabilir; güncelleme ve silme dışarıya açık değildir
export async function GET(req: Request, { params }: Params) {
  try {
    const userId = await getUserId();
    if (!userId) return NextResponse.json({ message: "Oturum bulunamadı" }, { status: 401 });

    const { id } = await params;
    if (!isValidId(id)) return NextResponse.json({ message: "Geçersiz sipariş ID" }, { status: 400 });

    const locale = resolveLocale(new URL(req.url).searchParams.get("locale"));
    const order = await getOrderById(id, userId, locale);
    if (!order) return NextResponse.json({ message: "Sipariş bulunamadı" }, { status: 404 });

    return NextResponse.json({ order });
  } catch (error) {
    console.error("Sipariş alınamadı:", error);
    return NextResponse.json({ message: "Sipariş verileri alınamadı" }, { status: 500 });
  }
}
