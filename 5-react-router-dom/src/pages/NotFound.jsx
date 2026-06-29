import { useLocation } from "react-router-dom";

const NotFound = () => {
  // Diğer sayfalardan yönlendirme anında gönderilen veriye location.state aracılığıyla erişiriz
  const location = useLocation();

  return (
    <div>
      <h1>{location.state ? location.state : "SAYFA BULUNAMADI"}</h1>
    </div>
  );
};

export default NotFound;
