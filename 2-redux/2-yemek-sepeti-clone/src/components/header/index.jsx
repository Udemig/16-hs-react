import { ShoppingBasket, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 pb-3 pt-4 backdrop-blur">
      <div className="container">
        <div className="box flex flex-wrap items-center justify-between gap-5 px-4 py-4">
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-sr text-red-500 font-bold tracking-tight drop-shadow-sm"
          >
            Yemek Sepeti
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <button className="pill">
              Yakınınızda 10 <UtensilsCrossed /> <span className="max-sm:hidden">restoran</span>
            </button>

            <Link
              to="/cart"
              className="flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 text-white shadow-lg transition hover:bg-red-600"
            >
              <ShoppingBasket />
              <span className="font-semibold">4</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
