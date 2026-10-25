import type { FC } from "react";
import type { Product } from "../../types";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import Price from "./Price";

interface Props {
  product: Product;
}

const Card: FC<Props> = ({ product }) => {
  return (
    <Link to={`/shoe/${product.id}`} className="group flex flex-col gap-4">
      <div className="relative bg-white p-2 rounded-3xl overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Badge product={product} />
        </div>

        <img
          src={product.picture[0]}
          className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 transition duration-300"
        />
      </div>

      <h2 className="flex-1 font-bold line-clamp-2 lg:text-xl">{product.name}</h2>

      <div className="flex justify-between bg-dark-gray text-white text-sm font-semibold px-3 py-3 rounded-xl group-hover:bg-blue transition">
        Ürünü İncele <Price product={product} />
      </div>
    </Link>
  );
};

export default Card;
