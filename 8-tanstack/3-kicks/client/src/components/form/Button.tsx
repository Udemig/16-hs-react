import type { FC } from "react";

const Button: FC<{ img: string; alt: string }> = ({ img, alt }) => {
  return (
    <button className="py-4 border border-dark-gray flex justify-center rounded-xl hover:bg-zinc-200">
      <img src={img} alt={alt} className="size-6 lg:size-8" />
    </button>
  );
};

export default Button;
