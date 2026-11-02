import { getTranslations } from "next-intl/server";
import type { FC } from "react";
import { TbReceipt, TbShoppingBag } from "react-icons/tb";
import { Link } from "@/i18n/navigation";
import CartBadge from "./CartBadge";
import LocaleSwitcher from "./LocaleSwitcher";
import SearchForm from "./SearchForm";

const Header: FC = async () => {
  const t = await getTranslations("Header");

  return (
    <header className="sticky top-0 z-10 bg-white flex flex-wrap justify-between items-center gap-y-3 py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
      <Link
        href="/"
        className="text-green-600 font-bold text-2xl lg:text-3xl flex items-center gap-2"
      >
        <TbShoppingBag />
        <span>MANAV</span>
      </Link>

      <SearchForm />

      <div className="flex items-center gap-5">
        <Link href="/orders" className="header-link">
          <TbReceipt className="text-2xl" />
          <span className="max-md:hidden">{t("orders")}</span>
        </Link>

        <CartBadge />

        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Header;
