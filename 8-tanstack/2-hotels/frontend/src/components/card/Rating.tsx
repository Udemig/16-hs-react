import type { FC } from "react";

interface Props {
  rating: number;
  expand?: boolean;
}

const Rating: FC<Props> = ({ rating, expand }) => {
  // renk belirle
  const color: string =
    rating >= 4.7
      ? "bg-blue-500"
      : rating >= 4
        ? "bg-green-500"
        : rating >= 3
          ? "bg-yellow-500"
          : "bg-red-500";

  // yazıyı belirle
  const text: string =
    rating >= 4.7 ? "Çok İyi" : rating >= 4 ? "İyi" : rating >= 3 ? "Ortalama" : "Kötü";

  return (
    <div className="flex items-center gap-2">
      <span className={`p-2 rounded-lg font-bold w-fit text-white ${color} `}>{rating}</span>

      {expand && <span className="font-semibold text-lg text-nowrap">{text}</span>}
    </div>
  );
};

export default Rating;
