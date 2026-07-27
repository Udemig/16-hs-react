import axios from "axios";
import { createContext, useEffect, useState } from "react";

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Context sağlayıcı bileşeni oluştur (HOC)
export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // context yapısından bileşenlere aktarılacak verileri belirle
  return (
    <ProductContext.Provider value={{ isLoading, error, products }}>
      {children}
    </ProductContext.Provider>
  );
};
