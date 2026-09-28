import type { FC } from "react";

interface IProps {
  message: string;
}

const Error: FC<IProps> = ({ message }) => {
  return (
    <div className="text-center space-y-10">
      <h1 className="text-xl">Üzgünüz, bir hata oluştu</h1>
      <p className="text-red-500">{message}</p>
    </div>
  );
};

export default Error;
