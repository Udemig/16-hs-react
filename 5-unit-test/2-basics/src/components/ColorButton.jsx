import { useState } from "react";

const ColorButton = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <div className="flex justify-center my-10">
      <button
        onClick={() => setIsRed(!isRed)}
        style={{ background: isRed ? "red" : "blue" }}
        className="px-4 py-2 rounded-md text-xl font-semibold text-white cursor-pointer w-45"
      >
        {isRed ? "Maviye Çevir" : "Kırmızıya Çevir"}
      </button>
    </div>
  );
};

export default ColorButton;
