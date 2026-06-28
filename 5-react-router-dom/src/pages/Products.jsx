import { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/Card";

const Products = () => {
  const [books, setBooks] = useState([]);

  // bileşenin yüklenme anında çalışır:
  useEffect(() => {
    // api'dan kitap verisini alıp state'e aktar:
    api.get("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="page my-5">
      <div>
        <h1 className="title">Ürünler</h1>
        <p>Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>

      <div className="row p-1 g-4">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
