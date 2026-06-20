import { useRef } from "react";

const Scroll = () => {
  // sayanın başı başlığının referansı
  const topRef = useRef(null);

  // butona tıklanınca çalışır
  const handleScroll = () => {
    // scrollIntoView: element ekrana gelene kadar sayfayı kaydırır
    topRef.current.scrollIntoView();
  };

  return (
    <div>
      <h1>Örnek-2: DOM Elementlerine Erişim</h1>
      <p>
        <b>Açıklama</b> sayfanın aşağısına kaydırmış olan kullanıcıyı yukarıya geri göndermek için useRef ile sitediğimiz elementin referansını alıcaz
      </p>

      <h3 ref={topRef} className="my-5">
        ⬆️ Sayfanın Başı
      </h3>

      <div className="d-grid gap-5">
        {new Array(30).fill("udemig").map((item, index) => (
          <div key={index} className="card card-body text-black">
            Kart
          </div>
        ))}
      </div>

      <h3 className="my-5">⬇️ Sayfanın Sonu</h3>

      <div className="d-flex justify-content-center ">
        <button onClick={handleScroll} className="btn btn-primary">
          ^ Başa Dön ^
        </button>
      </div>
    </div>
  );
};

export default Scroll;
