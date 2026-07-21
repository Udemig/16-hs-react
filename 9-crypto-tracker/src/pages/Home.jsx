import InfoList from "../components/home/InfoList";
import RefreshButton from "../components/home/RefreshButton";
import Searchbar from "../components/home/Searchbar";
import Loader from "../components/loader";
import Error from "../components/error";
import useCoins from "../hooks/useCoins";
import CoinCard from "../components/home/CoinCard";
import RefreshInfo from "../components/home/RefreshInfo";

const Home = () => {
  const { isLoading, error, coins, filtredCoins, isRefreshing, fetchCoins, setSearchTerm } =
    useCoins();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} refetch={fetchCoins} />;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* başlık */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kripto Para Piyasası</h1>
          <p className="text-gray-600 dark:text-gray-400">En popüler kripto para birimleri</p>
        </div>

        {/* filtreleme */}
        <div className="flex items-center gap-5">
          <Searchbar setSearchTerm={setSearchTerm} />
          <RefreshButton isRefreshing={isRefreshing} fetchCoins={fetchCoins} />
        </div>
      </div>

      <InfoList />

      <div className="my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtredCoins.map((coin, key) => (
          <CoinCard key={key} coin={coin} />
        ))}
      </div>

      <RefreshInfo isRefreshing={isRefreshing} />
    </div>
  );
};

export default Home;
