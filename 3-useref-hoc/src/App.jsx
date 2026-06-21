import Input from "./ref-components/Input";
import Scroll from "./ref-components/Scroll";
import Counter from "./ref-components/Counter";
import Timer from "./ref-components/Timer";
import Modal from "./hoc-component/Modal";
import Form from "./form-componets/Form";
import { useState } from "react";

function App() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);

  return (
    <div>
      <Form />

      <hr />

      <h1>Örnek-6: HOC - Modal</h1>
      <button onClick={() => setIsConfirmOpen(true)}>Onay Modalını Aç</button>
      <button onClick={() => setIsTimerOpen(true)}>Sayaç Modalını Aç</button>

      <Modal isOpen={isConfirmOpen} close={() => setIsConfirmOpen(false)}>
        <h3>Hesabınızı silmek istediğinziden emin misiniz?</h3>
        <p>Bu işlem geri alınamaz</p>
      </Modal>

      <Modal isOpen={isTimerOpen} close={() => setIsTimerOpen(false)}>
        <Timer />
      </Modal>

      <Counter />
      <Input />
      <Scroll />
    </div>
  );
}

export default App;
