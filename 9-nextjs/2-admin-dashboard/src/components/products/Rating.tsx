import { Product } from "@/types";
import { FC } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  product: Product;
}

const Rating: FC<Props> = ({ product }) => {
  // tam yıldız sayısı
  const fullCount = Math.floor(product.rating);

  // yarım yıldız var mı
  const hasHalf = product.rating % 1 >= 0.5;

  return (
    <div className="flex items-center mb-3 gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, key) => {
          // tam yıldız
          if (key < fullCount) return <FaStar key={key} className="size-4 fill-amber-400" />;

          // yarım yıldız
          if (key === fullCount && hasHalf)
            return <FaStarHalfAlt key={key} className="size-4 fill-amber-400" />;

          // boş yıldız
          return <FaRegStar key={key} className="size-4 text-zinc-400" />;
        })}
      </div>

      <p className="text-sm text-zinc-600">
        <span className="font-semibold text-zinc-900">{product.rating}</span>
        <span className="text-zinc-400 ml-1">({product.reviews_count})</span>
      </p>
    </div>
  );
};

export default Rating;
