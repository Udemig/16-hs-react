import { RefreshCw } from "lucide-react";

const RefreshButton = ({ isRefreshing, fetchCoins }) => {
  return (
    <button
      disabled={isRefreshing}
      onClick={() => fetchCoins(true)}
      className="p-3 bg-blue-600 rounded-lg text-white "
    >
      <RefreshCw className={isRefreshing && "animate-spin"} />
    </button>
  );
};

export default RefreshButton;
