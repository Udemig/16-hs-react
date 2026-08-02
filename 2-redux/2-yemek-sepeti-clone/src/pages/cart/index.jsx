import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Cart = () => {
  const { loading, error, cart } = useSelector((store) => store.cart);

  return (
    <div className="container space-y-6">
      <div>
        <span className="pill bg-white/80">Siparişiniz</span>

        <h1 className="text-3xl font-bold">Sepet</h1>

        <p className="muted mt-1">Eklediğiniz ürünleri düzenleyin ve teslimata hazırlayın</p>
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
        <div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : cart.length === 0 ? (
            <CartEmpty />
          ) : (
            cart.map((product) => <CartItem key={product.id} product={product} />)
          )}
        </div>

        <CartSummary cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
