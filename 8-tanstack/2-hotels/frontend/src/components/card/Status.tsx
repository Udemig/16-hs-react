import type { FC } from "react";
import { SquareCheck, SquareX } from "lucide-react";

interface Props {
  availability: boolean;
}

const Status: FC<Props> = ({ availability }) => {
  return (
    <div
      className={`border border-zinc-200 p-1 rounded-md ${availability ? "bg-green-100" : "bg-red-100"}`}
    >
      {availability ? (
        <SquareCheck className="text-green-500 size-5 md:size-6" />
      ) : (
        <SquareX className="text-red-500 size-5 md:size-6" />
      )}
    </div>
  );
};

export default Status;
