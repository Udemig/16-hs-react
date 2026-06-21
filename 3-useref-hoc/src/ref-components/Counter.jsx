import { useState, useRef } from "react";

const Counter = () => {
  // state
  const [countState, setCountState] = useState(0);
  // ref
  const countRef = useRef(0);

  return (
    <div>
      <h1>Örnek-3: Değer Tutma</h1>
      <p>
        <b>Açıklama</b> useState vs useRef karşılaştırmasında useState ile tutulan değer her değiştiğinde bileşen yeniden render olurken useRef ile
        tutulan değerin değişmesi rendera sebep olmaz
      </p>

      <h5>State: {countState}</h5>
      <h5>Ref: {countRef.current}</h5>

      <button
        className="btn btn-primary"
        onClick={() => {
          // setCountState(countState + 1);
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        Arttır (+1)
      </button>
    </div>
  );
};

export default Counter;
