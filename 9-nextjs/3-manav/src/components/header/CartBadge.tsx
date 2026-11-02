import { getTranslations } from "next-intl/server";
import type { FC } from "react";
import { TbShoppingCart } from "react-icons/tb";
import { Link } from "@/i18n/navigation";

const CartBadge: FC = async () => {
  const t = await getTranslations("Header");

  return (
    <Link href="/cart" className="header-link">
      <div className="relative">
        <TbShoppingCart className="text-2xl" />

        <span className="absolute -right-3.5 -top-3.5 shadow font-bold text-sm bg-green-500 text-white size-6 grid place-items-center rounded-full tabular-nums border-2 border-white">
          4
        </span>
      </div>

      <span className="max-md:hidden">{t("cart")}</span>
    </Link>
  );
};

export default CartBadge;
