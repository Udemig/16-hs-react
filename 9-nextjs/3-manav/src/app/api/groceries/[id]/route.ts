import { NextResponse } from "next/server";
import { resolveLocale } from "@/lib/localized";
import { getGroceryById, isValidId } from "@/server/queries";

type Params = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Params) {
  try {
    const { id } = await params;

    if (!isValidId(id)) return NextResponse.json({ message: "Geçersiz ürün ID" }, { status: 400 });

    const locale = resolveLocale(new URL(req.url).searchParams.get("locale"));
    const grocery = await getGroceryById(id, locale);
    if (!grocery) return NextResponse.json({ message: "Aranan ürün bulunamadı" }, { status: 404 });

    return NextResponse.json({ grocery });
  } catch (error) {
    console.error("Ürün alınamadı:", error);
    return NextResponse.json({ message: "Ürün verileri alınamadı" }, { status: 500 });
  }
}
