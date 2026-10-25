import type { FC } from "react";
import type { Product } from "../../types";

interface Props {
  product: Product;
}

const Badge: FC<Props> = ({ product }) => {
  if (!product.discount && !product.isNew) return null;

  return (
    <span
      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold text-white ${product.discount ? "bg-yellow" : "bg-blue"}`}
    >
      {product.discount ? `%${product.discount} İndirim` : "Yeni"}
    </span>
  );
};

export default Badge;
