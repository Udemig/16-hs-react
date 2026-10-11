import type { FC } from "react";

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-4 w-full">
      <div className="w-full">
        <img
          src={images[0]}
          alt="Ana görsel"
          loading="lazy"
          className="rounded-lg object-cover size-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {images.slice(1, 5).map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Görsel"
            loading="lazy"
            className="object-cover size-full rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
