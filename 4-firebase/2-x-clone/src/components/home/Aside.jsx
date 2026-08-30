import { FiSearch } from "react-icons/fi";
import { footerLinks, suggestions, trends } from "../../utils/constants";
import { BsThreeDots } from "react-icons/bs";

const Aside = () => {
  return (
    <div className="px-6 py-2 main-container max-w-xl sticky-bottom-0 self-start max-xl:hidden">
      {/* Arama */}
      <div className="sticky top-0 bg-primary py-2 z-10">
        <div className="flex items-center gap-3 bg-gray/60 rounded-full px-4 py-2.5 focus-within:ring-1 focus-within:ring-blue">
          <FiSearch className="text-zinc-400" />
          <input
            type="text"
            placeholder="Ara"
            className="bg-transparent outline-none w-full text-sm placeholder:text-zinc-400"
          />
        </div>
      </div>

      {/* Premium */}
      <div className="border border-gray rounded-2xl p-4 mt-3">
        <h2 className="text-xl font-extrabold mb-1">Premium'a abone ol</h2>
        <p className="text-sm mb-3">
          Abone ol; yeni özelliklerin kilidini aç ve uygun olman halinde gelir payı kazan.
        </p>
        <button className="bg-blue text-white font-bold rounded-full px-4 py-1.5 text-sm">
          Abone Ol
        </button>
      </div>

      {/* Neler Oluyor */}
      <div className="bg-gray/20 rounded-2xl mt-4 overflow-hidden">
        <h2 className="text-xl font-extrabold px-3 py-3">Neler oluyor</h2>

        {trends.map((t, key) => (
          <div
            key={key}
            className="flex justify-between items-start px-4 py-3 hover:bg-gray/40 cursor-pointer"
          >
            <div>
              <p className="text-xs text-zinc-400">{t.category}</p>
              <p className="font-bold text-sm">{t.title}</p>
              <p className="text-xs text-zinc-400">{t.posts}</p>
            </div>

            <BsThreeDots className="text-zinc-400 hover:text-blue" />
          </div>
        ))}

        <button className="text-blue text-sm px-4 py-3 hover:bg-gray/40 w-full text-left">
          Daha fazla göster
        </button>
      </div>

      {/* Kimi takip etmeli */}
      <div className="bg-gray/20 rounded-xl mt-4 overflow-hidden">
        <h2 className="text-xl font-extrabold p-3">Kimi takip etmeli</h2>

        {suggestions.map((s, key) => (
          <div
            key={key}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray/40 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img src={s.avatar} alt={s.name} className="size-10 rounded-full" />
              <p className="font-bold text-sm">{s.name}</p>
              <p className="text-xs text-zinc-400">{s.username}</p>
            </div>

            <button className="bg-secondary text-primary font-bold rounded-full px-4 py-1.5 text-xs whitespace-nowrap">
              Takip et
            </button>
          </div>
        ))}
        <button className="text-blue text-sm px-4 py-3 hover:bg-gray/40 w-full text-left">
          Daha fazla göster
        </button>
      </div>

      {/* Footer */}
      <div className="text-xs text-zinc-500 mt-4 flex flex-wrap gap-x-3 gap-y-1 px-2 pb-6">
        {footerLinks.map((i, key) => (
          <a key={key} href="#" className="hover:underline">
            {i}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Aside;
