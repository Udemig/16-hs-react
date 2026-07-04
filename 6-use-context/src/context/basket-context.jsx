import { createContext, useState } from "react";

//! context yapısının temelini oluştur
export const BasketContext = createContext();

//! context sağlayacı bileşeni oluştur
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (newProduct) => {
    // ürün sepete daha önce eklendi mi?
    const found = basket.find((item) => item.id === newProduct.id);

    if (found) {
      // eğer ürün sepete daha önce eklendiyse: miktarını arttır
      // a) bulunan ürün nesnesinin miktar değerini 1 arttır
      const updated = { ...found, amount: found.amount + 1 };

      // b) sepet dizindeki güncelle
      setBasket(basket.map((item) => (item.id === updated.id ? updated : item)));
    } else {
      // eğer ürün sepete daha önce eklenmediyse: ürünü sepete ekle (miktar:1)
      setBasket([...basket, { ...newProduct, amount: 1 }]);
    }
  };

  const removeFromBasket = () => {};

  const clearBasket = () => {};

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
