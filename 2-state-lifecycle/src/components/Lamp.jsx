import openLamp from "../assets/open-lamp.png";
import closedLamp from "../assets/closed-lamp.png";
import { useState } from "react";

function Lamp() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <h1>Lamba</h1>

      {/* Butona her tıklandığında state'in değerini tersine çevir */}
      <button onClick={() => setIsOpen(!isOpen)}>Kapat / Aç</button>

      <p>
        Lamba şu anda: <b>{isOpen ? "Açık" : "Kapalı"}</b>
      </p>

      <img src={isOpen ? openLamp : closedLamp} width={250} />
    </div>
  );
}

export default Lamp;
