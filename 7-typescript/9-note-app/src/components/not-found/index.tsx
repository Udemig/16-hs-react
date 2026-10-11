import type { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="flex items-center justify-center flex-col my-60 gap-10">
      <h1 className="text-4xl font-bold">404</h1>
      <h1 className="text-2xl">Aradığınız not bulunamadı</h1>
      <Link to="/" className="border px-5 py-2 rounded-sm">
        Notlara Dön
      </Link>
    </div>
  );
};

export default NotFound;
