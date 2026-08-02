import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="box flex flex-col items-center gap-5 py-10 text-center">
      <span className="rounded-full bg-red-50 p-4 text-red-500">
        <ShoppingCart className="size-8" />
      </span>

      <div>
        <h1 className="text-2xl font-bold">Sepetiniz Boş</h1>
        <p className="muted mt-2">Henüz sepete bir ürün eklemediniz!</p>
      </div>

      <Link to="/" className="pill bg-red-500 text-white hover:bg-red-500/90">
        Restoranlara Gözat
      </Link>
    </div>
  );
};

export default CartEmpty;
