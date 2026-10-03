import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-auto bg-card border-t border-border">
      <div className="container p-4 sm:px-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Not App - Modern Not Uygulaması</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
