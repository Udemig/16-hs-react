import { useState, useEffect } from "react";

const Countdown = () => {
  const [count, setCount] = useState(10);

  // bileşenin ekrana basılma anında fonksiyonu çalıştırır
  useEffect(() => {
    // her saniye sayaç değerini 1 azalt
    const id = setInterval(() => setCount((prev) => (prev > 0 ? prev - 1 : 0)), 1000);

    // bileşenin ekrandan ayrılma anında fonksiyon çalıştır (componentWillUnmout)
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>Geri Sayım</h1>

      <h1>{count}</h1>
    </div>
  );
};

export default Countdown;
