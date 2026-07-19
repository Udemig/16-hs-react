import { useState, useCallback } from "react";
import Display from "./Display";

const SecondExa = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  /*
  * Component her render olduğunda bu fonksiyon yeniden oluşur (bellekte farklı bir referansı oluşur)

  * Fonksiyonu prop olarak display bileşnine gönderdiğimizde, display react.memo() kullanıyor olsa bile bileşen yeniden render olduğunda fonksiyon bellekte yeni bir referansla oluştuğundan react.memo() bunu farklı bir foknsiyon olarak algılayarak görevini yapamazz

  * useCallback ile count değişmediğikçe her render sırasında fonksiyonun yeniden farklı bir referans ile oluşturulmasının önüne geçer
  */

  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>React.memo()</h1>
      <Display count={count} handleIncrease={handleIncrease} />

      <br />
      <br />
      <h2>İsminiz: {name}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default SecondExa;
