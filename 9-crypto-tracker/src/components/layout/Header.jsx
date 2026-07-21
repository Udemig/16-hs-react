import { Moon, Star, TrendingUp, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header className="bg-white shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <TrendingUp className="text-gray-100" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Udemig Tracker</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Kripto paralar için takip sistemi.
              </p>
            </div>
          </Link>

          {/* Iconlar */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 p-2 rounded-lg bg-zinc-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <Star className="size-5" />
              <span className="text-sm">3</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400"
            >
              {isDarkTheme ? <Moon /> : <Sun />}
            </button>

            <button className="flex items-center gap-2 text-gray-600">
              <div className="size-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Canlı</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
