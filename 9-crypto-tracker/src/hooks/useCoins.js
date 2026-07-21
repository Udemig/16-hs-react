import { useEffect, useMemo, useState } from "react";
import api from "../utils/api";

// custom hook
const useCoins = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCoins = (isRefreshing) => {
    isRefreshing ? setIsRefreshing(true) : setIsLoading(true);
    setError(null);

    api
      .get("/coins/markets?vs_currency=usd")
      .then((res) => setCoins(res.data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
        setIsRefreshing(false);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  // aratılan terime göre filtrele
  const filtredCoins = useMemo(
    () =>
      coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase().trim()),
      ),
    [coins, searchTerm],
  );

  // otomatik yenileme
  useEffect(() => {
    // her 30 saniyede bir api'dan güncel verileri al
    const id = setInterval(() => fetchCoins(true), 30000);

    // performans kaybını önlemek için bileşen ekrandan ayrılınca interval'ı durdur
    return () => clearInterval(id);
  }, []);

  return { isLoading, error, coins, filtredCoins, isRefreshing, fetchCoins, setSearchTerm };
};

export default useCoins;
