import { AlertCircle } from "lucide-react";
import type { FC } from "react";

interface Props {
  message: string;
  refetch: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  return (
    <div className="flex flex-col items-center gap-3 my-20 text-center">
      <AlertCircle className="size-12 text-red-500" />
      <h1 className="text-2xl font-bold">Üzgünüz, bir sorun oluştu</h1>
      <p className="text-main-gray">{message}</p>
      <button onClick={refetch} className="btn mt-2">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
