import { createContext, useState } from "react";

//! context yapısının temelini oluştur
export const BasketContext = createContext();

//! context sağlayıcı bileşeni oluştur
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    // ürün sepete daha önce eklendi mi?
    const found = basket.find((item) => item.id === product.id);

    // eklenmediyse: yeni bir dizi oluşturup ürünü ekle
    if (!found) setBasket([...basket, product]);
  };

  const removeFromBasket = (id) => {
    // id'si eşleşmeyen ürünleri tut: ürün sepetten direkt kaldırılır
    setBasket(basket.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
