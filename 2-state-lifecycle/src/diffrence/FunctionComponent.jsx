import { useState, useEffect } from "react";

function FunctionComponent(props) {
  const [count, setCount] = useState(0);

  /*
   * Fonksiyonel bileşenlerde sınıflardan bildiriğimiz yaşam döngüsü methodlarını kullanamayız
   * Yaşam döngüsü methodlarının yerine useEffect adı verilen react hook'unu kullanırız
   * parametreler:
   * 1) çalışıcak fonksiyon
   * 2) bağımlılık dizisi (dependency array)
   */

  // Bileşenin ekrana gelme anını izle (componentDidMount)
  useEffect(() => {
    console.log("component ekrana geldi");
  }, []);

  // Bileşenin güncellenme anını izle (componentDidUpdate)
  useEffect(() => {
    console.log("component güncellendi");
  }, [count]);

  // Bileşenin ekrandan ayrılma anını izle (componentWillUnmount)
  useEffect(() => {
    // return satırı içerisinde tanımlanan fonksiyon bileşen ekrandan ayrılınca çalışır
    return () => console.log("component ekrandan ayrıldı");
  }, []);

  // Her render anını izler
  useEffect(() => {
    console.log("bileşen render oldu", count);
    // setCount(count + 1);
  });

  return (
    <div>
      <h1>{props.title}</h1>

      <button onClick={() => setCount(count + 1)}>Arttır: {count}</button>
    </div>
  );
}

export default FunctionComponent;
