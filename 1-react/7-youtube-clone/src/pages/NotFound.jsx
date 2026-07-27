import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page h-full flex-center">
      <div className="flex flex-col items-center max-w-80 gap-10 text-center">
        <img src="/monkey.png" alt="monkey" />

        <h1>Üzgünüz, aradığınız sayfa mevcut değil. Lütfen farklı bir şey aratın</h1>

        <Link to="/" className="underline text-blue-500">
          Anasayfa'ya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
