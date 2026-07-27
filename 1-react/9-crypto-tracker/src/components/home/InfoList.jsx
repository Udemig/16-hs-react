import { TrendingUp, RefreshCw } from "lucide-react";

const InfoList = ({ coinCount, lastUpdated }) => {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      <div className="card">
        <div>
          <p className="card-label">Toplam Coin</p>
          <p className="card-value text-2xl font-bold">{coinCount}</p>
        </div>

        <TrendingUp className="text-blue-500" />
      </div>

      <div className="card">
        <div>
          <p className="card-label">Son Güncellenme</p>
          <p className="card-value text-lg font-bold">
            {new Date(lastUpdated).toLocaleTimeString()}
          </p>
        </div>

        <RefreshCw className="text-blue-500" />
      </div>

      <div className="card">
        <div>
          <p className="card-label">Durum</p>

          <p className="card-value text-lg font-bold flex items-center gap-2">
            <span className="size-2 bg-green-500 rounded-full animate-pulse" />
            <span>Canlı</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoList;
