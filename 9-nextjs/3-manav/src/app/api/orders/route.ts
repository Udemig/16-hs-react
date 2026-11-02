import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "@/lib/localized";
import { getOrders } from "@/server/queries";
import { getUserId } from "@/server/user";

// Yalnızca çağıran misafir kullanıcının ödenmiş siparişleri döner
export async function GET(request: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) return NextResponse.json({ message: "Oturum bulunamadı" }, { status: 401 });

    const locale = resolveLocale(request.nextUrl.searchParams.get("locale"));

    return NextResponse.json({ orders: await getOrders(userId, locale) });
  } catch (error) {
    console.error("Siparişler alınamadı:", error);
    return NextResponse.json({ message: "Siparişler alınamadı" }, { status: 500 });
  }
}
