import { useState, type FC } from "react";

interface Props {
  colors: string;
}

const Color: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h2 className="font-semibold mb-3">Renk</h2>

      <div className="flex gap-4">
        {colors.split(",").map((color, key) => (
          <button
            key={key}
            style={{ background: color }}
            onClick={() => setSelected(color === selected ? "" : color)}
            className={`size-9 rounded-full ring-offset-2 ring-offset-gray ${selected === color ? "ring-2 ring-dark-gray" : "ring-1 ring-main-gray/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Color;
