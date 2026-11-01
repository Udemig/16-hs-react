import { useEffect, useState } from "react";
import api from "../utils/api";

// verilen url ve parametrelerle api'dan veri çeken genel hook
const useFetch = (url, params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // url hızlı değişirse eski isteğin cevabını yok saymak için
    let ignore = false;
    setIsLoading(true);

    // params her render'da yeni obje olduğu için dependency olarak string'ini veriyoruz
    api
      .get(url, { params })
      .then((res) => !ignore && setData(res.data))
      .catch((err) => !ignore && setError(err.message))
      .finally(() => !ignore && setIsLoading(false));

    return () => {
      ignore = true;
    };
  }, [url, JSON.stringify(params)]);

  return { isLoading, error, data };
};

export default useFetch;
