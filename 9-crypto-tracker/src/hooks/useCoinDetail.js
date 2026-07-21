import { useEffect, useState } from "react";
import api from "../utils/api";

const useCoinDetail = (coinId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);

  const getCoinDetails = (isRefreshing) => {
    isRefreshing ? setIsRefreshing(true) : setIsLoading(true);
    setError(null);

    api
      .get(`/coins/${coinId}`)
      .then((res) => setCoin(res.data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
        setIsRefreshing(false);
      });
  };

  const refetch = () => {
    getCoinDetails(false);
  };

  const refreshData = () => {
    getCoinDetails(true);
  };

  useEffect(() => {
    getCoinDetails();
  }, []);

  return { isLoading, isRefreshing, coin, error, refetch, refreshData };
};

export default useCoinDetail;
