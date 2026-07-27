import { useState } from "react";

function Counter() {
  /*
   * React'da arayüzde değişme sebep olucak bütün veriler state'de tutulur
   * useState parametre olarak tutucağımız verinin başlangıç değerini alır
   * useState fonksiyonu çağrılınca geriye dizi içerisinde 2 veri döndürür
   * [stateDegeri,stateGuncelle]
   * stateDegeri ni değiştirmek için sadece stateGuncelleme fonksiyonuna yeni değer parametre olarak gönderilmeli
   */
  const [stateDegeri, stateGuncelle] = useState(0);

  return (
    <div>
      <h1>Sayaç</h1>

      <button onClick={() => stateGuncelle(stateDegeri - 1)}>Azalt</button>

      <h2>{stateDegeri}</h2>

      <button
        onClick={() => {
          // setState methodu 1. kullanım
          // aynı fonksiyon içerisinde state'i 1'den fazla kere güncelleyemiyoruz
          stateGuncelle(stateDegeri + 1); // 0 + 1
          stateGuncelle(stateDegeri + 2); // 0 + 2
          stateGuncelle(stateDegeri + 1); // 0 + 1

          // setState methodu 2. kullanım
          // aynı fonksiyon içerisinde state'i 1'den fazla kere güncelleyebiliyoruz
          stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 0 + 1
          stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 1 + 1
          stateGuncelle((oncekiDeger) => oncekiDeger + 1); // 2 + 1
        }}
      >
        Arttır
      </button>
    </div>
  );
}

export default Counter;
