import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const BasketCard = ({ product }) => {
  const { addToBasket, removeFromBasket } = useContext(BasketContext);

  const title = product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title;

  return (
    <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between border p-3 rounded">
      <div className="d-flex align-items-center gap-3 w-100">
        <div className="rounded bg-white p-1">
          <img src={product.thumbnail} alt={product.title} width={70} />
        </div>

        <h4>{title}</h4>
      </div>

      <div className="d-flex justify-content-between align-items-center w-100 gap-3">
        <h3>{(product.price * product.amount).toFixed(2)}$</h3>

        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => removeFromBasket(product.id)}>
            -
          </button>
          <span className="btn btn-light fw-bold">{product.amount}</span>
          <button className="btn btn-primary" onClick={() => addToBasket(product)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
