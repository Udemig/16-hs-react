"use client";
import { FC } from "react";
import { BiErrorCircle } from "react-icons/bi";

interface Props {
  error: Error;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div className="min-h-[60vh] grid place-items-center p-5">
      <div className="card p-8 max-w-md w-full text-center space-y-4">
        <div className="size-16 mx-auto rounded-full bg-red-50 grid place-items-center">
          <BiErrorCircle className="text-4xl tex-red-500" />
        </div>

        <div className="space-y-1">
          <h1 className="text-xl font-bold text-zinc-900">Bir Sorun Oluştu</h1>
          <p className="text-sm text-red-600 font-medium wrap-break-word">{error.message}</p>
        </div>

        <button onClick={reset} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700">Yeniden Dene</button>
      </div>
    </div>
  );
};

export default Error;
