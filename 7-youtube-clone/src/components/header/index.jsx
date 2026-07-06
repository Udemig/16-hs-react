import { MdMenu, MdMic, MdApps, MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between gap-6 md:gap-8 px-4 h-14">
      {/* Sol */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-gray" onClick={toggleSidebar}>
          <MdMenu className="text-xl md:text-2xl" />
        </button>

        <Link to="/" className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">Youtube</span>
        </Link>
      </div>

      {/* Orta */}
      <div className="flex-1 max-w-182 flex-center">
        <form className="flex w-full max-w-160 items-center">
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Ara"
              className="w-full bg-[#121212] border border-gray h-10 px-4 text-white focus:border-blue-500 outline-none rounded-l-full"
            />
            <button className="w-16 h-10 bg-[#222222] border border-gray rounded-r-full flex-center hover:bg-gray">
              <CiSearch className="text-xl" />
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-gray rounded-full max-sm:hidden">
            <MdMic />
          </button>
        </form>
      </div>

      {/* Sağ */}
      <div className="flex items-center gap-2">
        <button className="icon max-sm:hidden">
          <IoIosVideocam />
        </button>

        <button className="icon max-sm:hidden">
          <MdApps />
        </button>

        <button className="icon relative">
          <FaBell />

          <span className="absolute -right-1 -top-1 bg-red-600 size-5 rounded-full text-xs font-bold flex-center">
            3
          </span>
        </button>

        <button className="icon">
          <MdOutlineAccountCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
