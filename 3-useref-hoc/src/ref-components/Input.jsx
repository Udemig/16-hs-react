import { useRef } from "react";

function Input() {
  // useRef kullanım
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  // odaklan butonuna tıklanınca çalışır
  const handleFocus = () => {
    inputRef.current.focus();

    inputRef.current.style.background = "crimson";
  };

  // temizle butonuna tıklanınca çalışır
  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.style.background = "white";
  };

  return (
    <div>
      <h1>Örnek-1: Input</h1>
      <p>
        <b>Açıklama:</b> useRef ile input elementine direkt erişim sağlayıp focus yapıp stilini değiştirelim
      </p>

      <input ref={inputRef} type="text" className="form-control my-4" />

      <button
        ref={buttonRef}
        onClick={handleFocus}
        onMouseEnter={() => (buttonRef.current.style.background = "green")}
        onMouseLeave={() => (buttonRef.current.style.background = "blue")}
        className="btn btn-primary odaklan"
      >
        Odaklan
      </button>

      <button onClick={handleClear} className="btn btn-primary mx-4">
        Temizle
      </button>
    </div>
  );
}

export default Input;
