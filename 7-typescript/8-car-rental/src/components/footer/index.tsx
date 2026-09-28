import type { FC } from "react";

const Footer: FC = () => {
  return <footer className="footer">Tüm hakları saklıdır &copy; {new Date().getFullYear()}</footer>;
};

export default Footer;
