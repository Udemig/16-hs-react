import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const BasketCard = ({ product }) => {
  const { removeFromBasket } = useContext(BasketContext);

  return (
    <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between border p-3 rounded">
      <h4 className="w-100">{product.title}</h4>

      <div className="d-flex justify-content-between align-items-center w-100 gap-3">
        <h3>{product.price}₺</h3>

        <button className="btn btn-outline-danger" onClick={() => removeFromBasket(product.id)}>
          Kaldır
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
