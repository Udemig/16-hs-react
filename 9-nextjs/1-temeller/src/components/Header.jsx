// import { fetchRecipes } from "@/utils/server";
import NavLink from "./NavLink";

const Header = async () => {
  // const data = await fetchRecipes();

  return (
    <header className={`border-b p-5 px-10 font-matcha`}>
      HEADER
      <nav className="flex gap-5 justify-center mt-1 text-lg">
        <NavLink href="/recipes-server">Tarifler (S)</NavLink>
        <NavLink href="/recipes-client">Tarifler (C)</NavLink>
        <NavLink href="/deneme">Deneme (C)</NavLink>
        <NavLink href="/deneme-s">Deneme (S)</NavLink>
        <NavLink href="/form">Form (S)</NavLink>
      </nav>
    </header>
  );
};

export default Header;
