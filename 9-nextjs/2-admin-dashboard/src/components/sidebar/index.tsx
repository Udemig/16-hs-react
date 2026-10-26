"use client";

import { links } from "@/utils/constants";
import { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./NavLink";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <aside
      className={`flex flex-col border border-zinc-200 transition-all duration-200 bg-white text-gray-500 sticky top-0 h-screen ${isOpen ? "min-w-40" : "min-w-16"}`}
    >
      <div className="flex items-center gap-2 p-4 border-b border-zinc-200 h-16">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center size-9 text-xl rounded-lg text-zinc-700 hover:bg-zinc-100 hover:text-blue-500 px-2"
        >
          <RxHamburgerMenu />
        </button>

        <span
          className={`font-bold text-zinc-800 tracking-tight transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
        >
          Admin
        </span>
      </div>

      <nav className="flex flex-col gap-1 p-2 mt-2">
        {links.map((i, key) => (
          <NavLink key={key} item={i} isOpen={isOpen} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
