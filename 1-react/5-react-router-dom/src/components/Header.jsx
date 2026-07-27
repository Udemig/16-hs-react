import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 border-bottom text-center shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Kitap Kurdu</h1>

        <nav className="d-flex gap-4">
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/ürünler">Ürünler</NavLink>
          <NavLink to="/kategori/hikaye">Hikaye</NavLink>
          <NavLink to="/kategori/roman">Roman</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
