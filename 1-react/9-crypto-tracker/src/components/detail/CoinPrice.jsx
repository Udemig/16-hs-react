import { TrendingDown, TrendingUp } from "lucide-react";
import { formatPercentage, formatPrice } from "../../utils/helpers";

const CoinPrice = ({ coin }) => {
  const priceChange = coin.market_data.price_change_percentage_24h;
  const color = priceChange > 0 ? "text-green-500" : priceChange < 0 && "text-red-500";
  const icon = priceChange > 0 ? <TrendingUp /> : priceChange < 0 && <TrendingDown />;

  return (
    <div className="box">
      <div className="flex w-full items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Güncel Fiyat</p>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">
            {formatPrice(coin.market_data.current_price.usd)}
          </p>
        </div>

        <div className={`flex items-center gap-2 ${color}`}>
          {icon}

          <div className="text-right">
            <p className="text-lg font-semibold">{formatPercentage(priceChange)}</p>
            <p className="text-sm">{formatPrice(coin.market_data.price_change_24h)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPrice;
