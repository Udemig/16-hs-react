import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/product-context";

const Home = () => {
  // product context'inde tutulan verilere abone ol
  const { isLoading, error, products } = useContext(ProductContext);

  return (
    <div className="container py-4">
      <h2 className="my-2">Popüler Ürünler</h2>

      <div className="card-wrapper">
        {isLoading ? (
          <p>Yükleniyor...</p>
        ) : error ? (
          <p>Hata!: {error}</p>
        ) : (
          products.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default Home;
