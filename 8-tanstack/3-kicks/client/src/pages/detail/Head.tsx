import type { FC } from "react";
import type { Product } from "../../types";
import Badge from "../../components/card/Badge";
import Price from "../../components/card/Price";

interface Props {
  product: Product;
}

const Head: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3">
      <Badge product={product} />

      <h1 className="font-rubik font-bold text-3xl lg:text-4xl">{product.name}</h1>

      <div className="flex items-baseline gap-3 text-2xl font-semibold">
        <Price product={product} designs="text-blue!" />
        {product.discount > 0 && (
          <span className="text-lg text-main-gray line-through">
            ${product.price.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default Head;
