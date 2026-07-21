import { Search } from "lucide-react";

const Searchbar = ({ setSearchTerm }) => {
  return (
    <form className="bg-white w-full dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-w-2xl md:max-w-lg mx-auto">
      <div className="flex items-center gap-4 px-4 py-1">
        <div className="flex-1 relative">
          <Search className="absolute size-5 left-1 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />

          <input
            type="text"
            className="w-full pl-10 p-4 outline-none dark:text-gray-100 text-gray-900 placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="coin ara..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
