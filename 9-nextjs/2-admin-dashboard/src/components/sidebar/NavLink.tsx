import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  item: NavItem;
  isOpen: boolean;
}

const NavLink: FC<Props> = ({ item, isOpen }) => {
  const path = usePathname();

  const isActive = item.url === path;

  return (
    <Link
      href={item.url || "#"}
      className={`inline-flex items-center ps-4 px-3 gap-3 py-2.5 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition group text-sm font-medium ${isActive ? "text-blue-600 bg-blue-50 hover:text-blue-600!" : ""}`}
    >
      <div className="text-lg shrink-0 group-hover:scale-110 transition-all">{item.icon}</div>

      <span
        className={`whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 w-0 overflow-hidden"}`}
      >
        {item.name}
      </span>
    </Link>
  );
};

export default NavLink;
