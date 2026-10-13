import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="text-center bg-white text-dark-gray p-3 rounded-2xl font-semibold mt-5">
      <p>Tüm hakları saklıdır &copy; {new Date().getFullYear()} | KICK SHOES</p>
    </footer>
  );
};

export default Footer;
