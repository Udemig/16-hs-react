import { useContext } from "react";
import { BasketContext } from "../context/basket-context";
import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import BasketInfo from "../components/BasketInfo";

const Basket = () => {
  const { basket, clearBasket } = useContext(BasketContext);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4 fs-1">Sepetiniz</h1>

        {basket.length > 0 && (
          <button className="btn btn-outline-dark" onClick={clearBasket}>
            Temizle
          </button>
        )}
      </div>

      <div className="d-flex flex-column gap-5">
        {basket.length === 0 ? (
          <p className="text-center my-5 lead">
            <span>Sepetiniz Boş</span>
            <Link to="/" className="d-block my-4">
              Ürünler'e Git
            </Link>
          </p>
        ) : (
          basket.map((product) => <BasketCard key={product.id} product={product} />)
        )}
      </div>

      <BasketInfo />
    </div>
  );
};

export default Basket;
