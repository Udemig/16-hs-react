import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const BasketInfo = () => {
  const [count, setCount] = useState("");
  const { basket, clearBasket } = useContext(BasketContext);

  // sepetteki toplam ürün adedini hesapla
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  // sepetteki ürünlerin toplam fiyatını hesapla
  const totalPrice = basket.reduce((total, i) => total + i.price * i.amount, 0);

  return (
    <div className="border p-4 rounded my-5 fs-4">
      <p className="d-flex gap-3">
        <span>Ürün Adedi:</span>
        <b className="text-warning">{totalAmount}</b>
      </p>

      <p className="d-flex gap-3">
        <span>Toplam Fiyat:</span>
        <b className="text-warning">{totalPrice.toFixed(2)}₺</b>
      </p>

      <button className="btn btn-dark">Ödeme Yap</button>
    </div>
  );
};

export default BasketInfo;
