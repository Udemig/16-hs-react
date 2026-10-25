import { useState, type FC } from "react";
import { SIZES } from "../../constants";

interface Props {
  sizes: string;
}

const Size: FC<Props> = ({ sizes }) => {
  const [selected, setSelected] = useState("");
  const stock = sizes.split(",");

  return (
    <div>
      <h2 className="font-semibold mb-3">Renk</h2>

      <div className="grid grid-cols-5 gap-2">
        {SIZES.map((size) => (
          <button
            key={size}
            disabled={!stock.includes(size)}
            onClick={() => setSelected(size === selected ? "" : size)}
            className={`py-3 rounded-xl font-semibold disabled:line-through ${selected === size ? "bg-dark-gray text-white" : "bg-white hover:bg-dark-gray/10"}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;
