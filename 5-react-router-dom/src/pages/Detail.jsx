import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../api";

const Detail = () => {
  // useNavigate kurulum
  const navigate = useNavigate();

  // url'deki id parametresine eriş
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // bileşenin ekrana basılma anında fonksiyon çalıştırır
  useEffect(() => {
    setIsLoading(true);

    // api'dan kitap bilgisini alıp state'e aktar
    api
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => navigate("/404", { state: err.message }))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  return (
    <div className="my-3">
      <Link to={-1}>Geri</Link>

      <h2 className="my-4">Detay Sayfası</h2>

      <div>
        <img src={book.image} className="img-fluid rounded mb-2" style={{ maxHeight: "420px" }} />

        <h1>{book.title}</h1>

        <p>{book.description}</p>

        <div className="row g-3 w-100">
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yazar</span>
            <span className="fw-semibold">{book.author}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Kategori</span>
            <span className="fw-semibold">{book.category}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Yıl</span>
            <span className="fw-semibold">{book.year}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Sayfa</span>
            <span className="fw-semibold">{book.page}</span>
          </p>
          <p className="col-12 col-md-6 d-flex flex-column p-3 rounded bg-secondary-subtle">
            <span>Fiyat</span>
            <span className="fw-semibold">{book.price} ₺</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
