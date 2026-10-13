import type { FC } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../assets/icons/hamburger.svg?react";
import Logo from "../../assets/icons/logo.svg?react";
import UserInfo from "./UserInfo";

const Header: FC = () => {
  return (
    <header className="grid grid-cols-3 items-center bg-white px-5 py-4 md:px-8 md:py-6 rounded-3xl mb-8">
      <button className="md:hidden">
        <Hamburger />
      </button>

      <nav className="hidden md:flex gap-8 font-semibold">
        <Link to="/" className="hover:text-blue">
          Yeni Gelenler 🔥
        </Link>
        <Link to="/" className="hover:text-blue">
          Erkek
        </Link>
        <Link to="/" className="hover:text-blue">
          Kadın
        </Link>
      </nav>

      <Link to="/" className="justify-self-center">
        <Logo className="h-8 md:h-10" />
      </Link>

      <UserInfo />
    </header>
  );
};

export default Header;
