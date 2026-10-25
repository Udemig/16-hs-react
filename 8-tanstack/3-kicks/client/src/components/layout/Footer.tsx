import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-10 bg-dark-gray text-white text-sm text-center p-5 rounded-3xl">
      &copy; {new Date().getFullYear()} <b className="font-rubik">KICKS</b> . Tüm Hakları Saklıdır
    </footer>
  );
};

export default Footer;
