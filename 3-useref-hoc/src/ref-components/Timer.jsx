import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // sayacı başlat
  const startTimer = () => {
    // sayaç çalışıyor mu state'ini true yap
    setIsRunning(true);
    // her saniye seconds state'ini 1 arttır
    intervalRef.current = setInterval(() => setSeconds((prev) => prev + 1), 1000);
  };

  // sayacı durdur
  const stopTimer = () => {
    // sayaç çalışıyor mu state'i false yap
    setIsRunning(false);

    // interval'ı durdur
    clearInterval(intervalRef.current);
  };

  // sayacı sıfırla
  const resetTimer = () => {
    // sayacı durdur
    stopTimer();

    // saniye değerini 0'a eşitle
    setSeconds(0);
  };

  // bileşen ekrandan ayrılınca sayacı temizle
  useEffect(() => {
    return () => resetTimer();
  }, []);

  return (
    <div>
      <h1 className="text-black">Örnek-4: Değer Tutma</h1>
      <p className="text-black">
        <b>Açıklama</b> Kronometre
      </p>

      <h1 className="text-black">
        {Math.floor(seconds / 3600)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0")}
        :{(seconds % 60).toString().padStart(2, "0")}
      </h1>

      <div>
        <button disabled={isRunning} onClick={startTimer} className="btn btn-primary">
          Başlat
        </button>
        <button onClick={stopTimer} className="btn btn-danger mx-2">
          Durdur
        </button>
        <button onClick={resetTimer} className="btn btn-warning">
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
