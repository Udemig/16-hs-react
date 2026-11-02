import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "@/lib/localized";
import { getGroceries } from "@/server/queries";

// Ürünleri listele; category, query, organic=true ve locale (tr, en, de) filtreleri desteklenir
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const groceries = await getGroceries({
      category: searchParams.get("category") ?? undefined,
      query: searchParams.get("query") ?? undefined,
      organic: searchParams.get("organic") === "true",
      locale: resolveLocale(searchParams.get("locale")),
    });

    return NextResponse.json({ groceries });
  } catch (error) {
    console.error("Ürünler alınamadı:", error);
    return NextResponse.json({ message: "Manav verileri alınamadı" }, { status: 500 });
  }
}
