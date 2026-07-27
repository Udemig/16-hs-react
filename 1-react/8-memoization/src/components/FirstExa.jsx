import { useState, useMemo } from "react";

const FirstExa = () => {
  const [count, setCount] = useState(1);

  /*
  * Bir react bileşeni her render olduğunda içerisindeki hespalamlar tekrar çalışır
  * Eğerki bu hesaplama kapsamlıysa her render sırasında tekrar yapılması aşırı bellek/işlemci kullanımına sebep olur
  * useMemo() hesaplamayı yapar ardından return edilen değeri cache'de saklar
  * Componen her render olduğunda hesaplamayı baştan yapmak yerine önceki hesaplamanın sonucunu kullanır
  * Cache süresi bileşenin yaşam döngüsü kadardır bileşen ekrandan gidince cache temizlenir
  
  *                           useMemo olmadan           useMemo ile
  * 10m'luk diziyi dön >            5sn                      5sn
  * 10m'luk diziyi dön >            5sn                      1ms
  * 10m'luk diziyi dön >            5sn                      1ms
  */
  const total = useMemo(() => {
    // a) 10m rastgele elemanlı bir dizi oluştur
    const numbers = Array.from({ length: 10000000 }, () => Math.floor(Math.random() * 100));

    // b) toplamlarını hesapla (cache'de tutulacak)
    return numbers.reduce((total, num) => total + num, 0);
  }, []);

  return (
    <div>
      <h1>useMemo()</h1>
      <h1>SAYI TOPLAMI: {total.toLocaleString()}</h1>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default FirstExa;
