import type { FC } from "react";
import type { Product } from "../../types";

interface Props {
  product: Product;
  designs?: string;
}

const Price: FC<Props> = ({ product, designs }) => {
  const price = product.price * (1 - (product.discount || 0) / 100);

  return (
    <span className={`${product.discount ? "text-yellow" : "text-white"} ${designs}`}>
      ${price.toLocaleString()}
    </span>
  );
};

export default Price;
