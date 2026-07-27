import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const Counter = () => {
  /*
   * useReducer hook'u parametre olarak iki değer alır
   * 1) reducer fonksiyon
   * * state'in nasıl değişeceğine karar veren fonksiyon
   * 2) initial state
   * * state'in başlangıç değeri

   * useReducer hook'unu çağırdığımızda geriye iki değer döndür
   * 1) state'in güncel değeri
   * 2) action'u reducer'a aktarmaya yarayan dispatch fonksiyonu
   */
  const [countState, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="counter">
      <h1>SAYAÇ: {countState}</h1>

      <button onClick={() => dispatch({ type: "ARTTIR" })}>+</button>
      <button onClick={() => dispatch({ type: "AZALT" })}>-</button>
      <button onClick={() => dispatch({ type: "SIFIRLA" })}>SIFIRLA</button>
    </div>
  );
};

export default Counter;
