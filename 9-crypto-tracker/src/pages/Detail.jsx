import { useParams } from "react-router-dom";
import useCoinDetail from "../hooks/useCoinDetail";
import Loader from "../components/loader";
import Error from "../components/error";
import CoinHeader from "../components/detail/CoinHeader";
import CoinPrice from "../components/detail/CoinPrice";
import CoinChart from "../components/detail/CoinChart";
import CoinStats from "../components/detail/CoinStats";
import CoinDescription from "../components/detail/CoinDescription";

const Detail = () => {
  // url'deki id parametresine eriş
  const { id } = useParams();

  // coin detaylarını api'dan al
  const { isLoading, isRefreshing, error, coin, refetch, refreshData } = useCoinDetail(id);

  console.log(coin);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} refetch={refetch} />;

  return (
    <div className="space-y-6">
      <CoinHeader coin={coin} refreshData={refreshData} isRefreshing={isRefreshing} />

      <CoinPrice coin={coin} />

      <CoinChart />

      <CoinStats coin={coin} />

      <CoinDescription description={coin.description.en} />
    </div>
  );
};

export default Detail;
