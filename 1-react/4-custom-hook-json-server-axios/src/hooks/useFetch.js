import { useState, useEffect } from "react";

// Kendi Custom Hook'umuzu Oluşturalım
// Bir fonksiyonun hook olması için tek şart isminin başında use kelimesi geçmesi
// Bir custom hook diğer hook'ları da kullanabilir

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // hook'u çağırdığımız bileşende state'lere erişebilmek için return ediyoruz
  return { isLoading, error, data };
};

export default useFetch;
