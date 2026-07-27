import { useEffect, useState } from "react";
import api from "../utils/api";

const usePriceHistory = (id) => {
  // seçili zaman aralığı
  const [selectedPeriod, setSelectedPeriod] = useState(7);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceHistory, setPriceHistory] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = { vs_currency: "usd", days: selectedPeriod };

    api
      .get(`/coins/${id}/market_chart`, { params })
      .then((res) => setPriceHistory(res.data.prices))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedPeriod]);

  // hook'un return ettiği verileri belirle
  return { selectedPeriod, setSelectedPeriod, loading, error, priceHistory };
};

export default usePriceHistory;
