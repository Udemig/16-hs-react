import { CardItem } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  item: CardItem;
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="card p-5 flex justify-between items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition duration-300">
      <div>
        <h4 className="text-zinc-500 text-xs uppercase font-semibold tracking-wider whitespace-nowrap">
          {item.label}
        </h4>
        <p className="font-bold text-2xl text-zinc-900 tracking-tight mt-1">{item.value}</p>
      </div>

      <div className="bg-blue-50 rounded-xl p-2">
        <Image src={item.icon} alt={item.label} width={45} height={45} />
      </div>
    </div>
  );
};

export default Card;
