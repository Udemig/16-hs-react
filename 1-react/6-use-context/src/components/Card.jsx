import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const Card = ({ product }) => {
  // BasketContext'ten sepet dizisine ve ekleme fonksiyonuna eriş
  const { basket, addToBasket } = useContext(BasketContext);

  // ekrana basılan ürün sepette var mı?
  const inBasket = basket.some((item) => item.id === product.id);

  return (
    <div className="card py-2">
      <div className="card-body d-flex flex-column gap-1 justify-content-between">
        <div className="d-flex flex-column gap-1">
          <h4>{product.title}</h4>

          <p className="d-flex gap-2">
            <span>Kategori:</span>
            <b>{product.category}</b>
          </p>
          <p className="d-flex gap-2">
            <span>Fiyat:</span>
            <b>{product.price}₺</b>
          </p>
        </div>

        <button
          className="rounded btn btn-dark"
          disabled={inBasket}
          onClick={() => addToBasket(product)}
        >
          {inBasket ? "Sepette" : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
