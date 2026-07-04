import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/product-context";
import { BasketContext } from "../context/basket-context";

const Header = () => {
  const { products } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);

  // todo: amount toplamlarını hesapla - reduce
  console.log(basket);

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Context Store
        </Link>
        <button
          type="button"
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Anasayfa ({products?.length})
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sepet">
                Sepet ({basket?.length})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
