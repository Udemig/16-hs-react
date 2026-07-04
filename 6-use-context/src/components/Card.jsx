import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const Card = ({ product }) => {
  // BasketContext yapısındaki sepeteEkle fonksiyonuna eriş
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="card py-2">
      <div className="d-flex justify-content-center">
        <img src={product.thumbnail} alt={product.title} height={120} />
      </div>

      <div className="card-body d-flex flex-column gap-1 justify-content-between">
        <div className="d-flex flex-column gap-1">
          <h4>{product.title}</h4>

          <p className="d-flex gap-2">
            <span>Kategori:</span>
            <b>{product.category}</b>
          </p>
          <p className="d-flex gap-2">
            <span>Fiyat:</span>
            <b>{product.price}$</b>
          </p>
          <p className="d-flex gap-2">
            <span>Rating:</span>
            <b>⭐ {product.rating}</b>
          </p>
        </div>

        <button className="rounded btn btn-dark" onClick={() => addToBasket(product)}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
