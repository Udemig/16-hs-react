import { Link } from "react-router-dom";
import { formatBigNumber, formatPercentage, formatPrice } from "../../utils/helpers";
import { TrendingUp, TrendingDown } from "lucide-react";
const CoinCard = ({ coin }) => {
  const changeValue = coin.price_change_percentage_24h;
  const color =
    changeValue > 0 ? "text-green-700" : changeValue < 0 ? "text-red-700" : "text-gray-700";
  const sign =
    changeValue > 0 ? (
      <TrendingUp className="size-4" />
    ) : (
      changeValue < 0 && <TrendingDown className="size-4" />
    );

  return (
    <Link
      to={`/coin/${coin.id}`}
      className="bg-zinc-100/10 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 hover:scale-105 transition"
    >
      {/* üst kısım */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={coin.image} width={48} height={48} className="rounded-full size-12" />
            <span className="absolute -top-2 -right-2 bg-blue-700 size-6 text-xs grid place-items-center font-bold rounded-full border-2  dark:border-gray-800  text-white">
              {coin.market_cap_rank}
            </span>
          </div>

          <div>
            <h1 className="font-bold text-lg text-gray-900 dark:text-white">{coin.symbol}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-40 truncate">
              {coin.name}
            </p>
          </div>
        </div>
      </div>

      {/* orta kısım */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="card-label">Fiyat</span>
          <span className="card-value text-xl font-bold">{formatPrice(coin.current_price)}</span>
        </div>
        <div className="flex justify-between">
          <span className="card-label">24s Değişim (%)</span>
          <span className={`card-value text-xl font-semibold flex items-center gap-1 ${color}`}>
            {sign} {formatPercentage(coin.price_change_percentage_24h)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="card-label">Market Hacmi</span>
          <span className="card-value">{formatBigNumber(coin.market_cap)}</span>
        </div>
        <div className="flex justify-between">
          <span className="card-label">24s Hacim</span>
          <span className="card-value">{formatBigNumber(coin.total_volume)}</span>
        </div>
      </div>

      {/* alt kısım */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end text-gray-500 dark:text-gray-400">
        <span>
          {new Date(coin.last_updated).toLocaleDateString("tr", {
            day: "2-digit",
            month: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </Link>
  );
};

export default CoinCard;
