import { useRef, useState } from "react";
import Button3 from "./components/Button";
import Form from "./components/Form";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSend = () => {
    alert(inputRef.current?.value + " e-posta adresiniz bültene kaydiledi");
  };

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>

      <br />
      <br />

      <input type="text" ref={inputRef} />
      <button onClick={onSend}>Gönder</button>

      <br />
      <br />

      <Button3 title="Bana Tıkla" />

      <br />
      <br />

      <Form />
    </div>
  );
};

export default App;
