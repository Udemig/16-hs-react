"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname === href ? "text-red-500!" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
