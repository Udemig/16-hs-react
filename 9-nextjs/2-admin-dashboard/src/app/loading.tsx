import { FC } from "react";
import { BiLoader } from "react-icons/bi";

interface Props {
  designs?: string;
}

const Loading: FC<Props> = ({ designs }) => {
  return (
    <div className={`grid min-h-[60vh] place-items-center ${designs}`}>
      <BiLoader className="text-2xl text-blue-500 animate-spin" />
    </div>
  );
};

export default Loading;
