import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const BasketInfo = () => {
  const { basket } = useContext(BasketContext);

  // sepetteki ürünlerin toplam fiyatını hesapla
  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="border p-4 rounded my-5 fs-4">
      <p className="d-flex gap-3">
        <span>Ürün Adedi:</span>
        <b className="text-warning">{basket.length}</b>
      </p>

      <p className="d-flex gap-3">
        <span>Toplam Fiyat:</span>
        <b className="text-warning">{totalPrice}₺</b>
      </p>

      <button className="btn btn-dark">Ödeme Yap</button>
    </div>
  );
};

export default BasketInfo;
