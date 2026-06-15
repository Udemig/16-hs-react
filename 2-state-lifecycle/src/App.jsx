import Counter from "./components/Counter";
import Lamp from "./components/Lamp";
import BuyList from "./components/BuyList";
import FunctionComponent from "./diffrence/FunctionComponent";
import ClassComponent from "./diffrence/ClassComponent";
import { useState } from "react";

// src içerisindeki fotoyu import ederiz
import yaz from "./assets/kayik.jpg";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Gizle / Göster</button>

      {isVisible && <FunctionComponent title="Fonksiyon Bileşen" />}
      <hr />

      {/* <ClassComponent title="Sınıf Bileşeni" /> */}

      <BuyList />
      <hr />

      <Lamp />
      <hr />

      <Counter />
      <hr />

      <h1>Resim</h1>

      {/* src içerisinde tutulan resim */}
      <img src={yaz} width={200} height={300} />

      {/* public içerisinde tutulan resim */}
      <img src="/cicek.jpg" width={200} height={300} />
    </div>
  );
}

export default App;
