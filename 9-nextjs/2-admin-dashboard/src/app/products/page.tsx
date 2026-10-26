import ProductList from "@/components/products/ProductList";
import Link from "next/link";
import { FC, Suspense } from "react";
import { BiPlus } from "react-icons/bi";
import Loading from "../loading";

interface Props {
  searchParams: Promise<{ q: string }>;
}

const Products: FC<Props> = async ({ searchParams }) => {
  const { q } = await searchParams;

  return (
    <div className="page">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h1 className="title">Ürünler</h1>
            <p className="text-zinc-500 mt-1">
              {q ? `"${q}" için arama sonuçları` : "Tüm ürünlerinizi yönetin"}
            </p>
          </div>

          <Link
            href="/products/create"
            className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition"
          >
            <BiPlus className="text-xl" />
            Yeni Ürün Ekle
          </Link>
        </div>

        {/* Ürün Listesi (key: arama her değişitğinde loading tekrar görünsün) */}
        <Suspense key={q} fallback={<Loading />}>
          <ProductList q={q} />
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
