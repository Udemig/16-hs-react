import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Rating from "./Rating";
import { handleDeleteProduct } from "@/utils/action";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const stockClass =
    product.stock > 25
      ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20"
      : product.stock > 0
        ? "bg-amber-50 text-amber-700 ring-amber-600/20"
        : "bg-red-50 text-red-700 ring-red-600/20";

  return (
    <div className="group card hover:shadow-lg transition duration-300 overflow-hidden hover:-translate-y-1">
      {/* Üst Kısım */}
      <div className="h-56 relative overflow-hidden">
        <Image
          fill
          unoptimized
          alt={product.name}
          src={product.image_url}
          className="object-contain p-4 group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-3 right-3">
          <span
            className={`${stockClass} px-2.5 py-1 rounded-full text-xs font-semibold ring-1 ring-inset`}
          >
            {product.stock > 0 ? `${product.stock} adet` : "Stokta yok"}
          </span>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="p-5">
        <div className="mb-3">
          <p className="text-zinc-500 font-medium uppercase tracking-wider mb-1">{product.brand}</p>
          <h3 className="font-bold text-lg text-zinc-900 line-clamp-1 group-hover:text-blue-600 transition duration-300">
            {product.name}
          </h3>
        </div>

        <p className="text-zinc-600 text-sm mb-4 line-clamp-2 leading-relaxed h-10">
          {product.description}
        </p>

        <Rating product={product} />

        <p className="text-2xl font-bold text-zinc-900 mb-5 tracking-tight tabular-nums">
          {product.price.toLocaleString("tr", { style: "currency", currency: "try" })}
        </p>

        <div className="flex gap-2">
          <Link
            href={`/products/edit/${product.id}`}
            className="flex-1 bg-blue-50 text-blue-700 px-3 py-2.5 text-sm rounded-lg font-semibold hover:bg-blue-100 transition text-center"
          >
            Düzenle
          </Link>

          {/* server action */}
          <form action={handleDeleteProduct} className="flex-1">
            <input type="text" name="id" value={product.id} readOnly hidden />

            <button className="flex-1 w-full bg-red-50 text-red-700 px-3 py-2.5 text-sm rounded-lg font-semibold hover:bg-red-100 transition text-center">
              Sil
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
