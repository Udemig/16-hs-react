import { getProducts } from "@/utils/service";
import { FC } from "react";
import ProductCard from "./ProductCard";

interface Props {
  q?: string;
}

const ProductList: FC<Props> = async ({ q }) => {
  const products = await getProducts(q);

  if (products.length === 0)
    return <p className="text-center text-zinc-500 mt-20">Aramanıza uygun ürün bulunamadı</p>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
