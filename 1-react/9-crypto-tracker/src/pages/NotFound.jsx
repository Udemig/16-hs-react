import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center my-60 gap-10">
      <h1 className="text-4xl">404</h1>
      <h2 className="text-2xl">Aradığınız içerik bulunamadı</h2>
      <Link to="/" className="text-blue-500 underline">
        Anasayfa'ya Dön
      </Link>
    </div>
  );
};

export default NotFound;
