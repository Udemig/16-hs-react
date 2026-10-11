import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur border-t border-zinc-200 shadow-sm">
      <div className="container text-center">Tüm hakları saklıdır &copy; Tripster</div>
    </footer>
  );
};

export default Footer;
