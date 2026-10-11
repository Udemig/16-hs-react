import type { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="border-t-4 border-blue-500 rounded-full size-10 animate-spin" />
    </div>
  );
};

export default Loader;
