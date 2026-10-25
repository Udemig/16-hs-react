import type { FC } from "react";

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-4 h-fit">
      {images.map((image, key) => (
        <img
          key={key}
          src={image}
          className="w-full aspect-square object-cover rounded-3xl first:col-span-2"
        />
      ))}
    </div>
  );
};

export default Images;
