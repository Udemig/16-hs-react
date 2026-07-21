const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 dark:bg-gray-800 dark:border-gray-700">
      <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Crypto Tracker. Eğitim amaçlı proje
        </p>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span>API: CoinGecko • </span>
          <span>React + TailwindCSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
