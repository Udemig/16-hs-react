import type { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-2xl md:text-3xl font-bold text-gradient">CarHUB</h1>
        </Link>

        <Button text="Kaydol" />
      </div>
    </header>
  );
};

export default Header;
