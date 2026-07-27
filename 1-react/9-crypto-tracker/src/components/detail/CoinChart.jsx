import { Calendar } from "lucide-react";
import usePriceHistory from "../../hooks/usePriceHistory";
import ChartLoader from "../loader/ChartLoader";
import PriceChart from "./PriceChart";

const CoinChart = ({ id }) => {
  const { selectedPeriod, setSelectedPeriod, loading, error, priceHistory } = usePriceHistory(id);

  const periodOptions = [
    { day: 1, label: "1G" },
    { day: 7, label: "7G" },
    { day: 30, label: "1A" },
    { day: 365, label: "1Y" },
  ];

  return (
    <div className="box">
      {/* Gün Seçme */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-gray-600 dark:text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Fiyat Geçmişi</h2>
        </div>

        <div className="flex gap-2">
          {periodOptions.map(({ day, label }) => (
            <button
              key={day}
              onClick={() => setSelectedPeriod(day)}
              className={`px-3 py-1 text-sm rounded-md ${selectedPeriod === day ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Fiyat Grafiği */}
      {loading ? (
        <ChartLoader />
      ) : error ? (
        <p className="h-80 flex items-center justify-center w-full text-red-700">
          Üzgünüz bir sorun oluştu
        </p>
      ) : (
        <PriceChart priceHistory={priceHistory} days={selectedPeriod} />
      )}
    </div>
  );
};

export default CoinChart;
