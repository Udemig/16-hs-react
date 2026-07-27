import { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/Card";
import { useSearchParams, useLocation } from "react-router-dom";

const Products = () => {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // useLocation
  const location = useLocation();
  console.log(location);

  // url'deki arama parametresine erişme
  const searchTerm = searchParams.get("aramaTerimi");

  // bileşenin yüklenme anında çalışır:
  useEffect(() => {
    // gönderilecek paramtreyi belire
    const params = { q: searchTerm };

    // api'dan kitap verisini alıp state'e aktar:
    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchTerm]);

  return (
    <div className="page my-5">
      <div>
        <h1 className="title">Ürünler</h1>
        <p>Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>

      <form>
        <input
          type="text"
          placeholder="ara..."
          className="form-control mx-3"
          defaultValue={searchTerm}
          onChange={(e) => {
            // yeni bir arama parametresi oluştur
            searchParams.set("aramaTerimi", e.target.value);
            // arama parametrelerini url'e aktar
            setSearchParams(searchParams);
          }}
        />
      </form>

      <div className="row p-1 g-4">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
