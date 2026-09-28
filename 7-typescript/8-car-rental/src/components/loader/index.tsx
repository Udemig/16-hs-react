import type { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="size-10 rounded-full border-4 border-primary-blue border-t-transparent animate-spin" />
      <p className="text-gray-light animate-pulse">Araçlar yükleniyor...</p>
    </div>
  );
};

export default Loader;
