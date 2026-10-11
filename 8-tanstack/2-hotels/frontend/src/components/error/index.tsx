import type { FC } from "react";

interface Props {
  message: string;
  refetch: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  return (
    <div className="border border-red-500 p-4 py-10 rounded-md text-center flex flex-col items-center gap-5 bg-red-500/20">
      <h1 className="font-bold text-lg">Üzgünüz bir sorun oluştu</h1>

      <p>{message}</p>

      <button onClick={refetch} className="border p-2 px-4 rounded-md">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
