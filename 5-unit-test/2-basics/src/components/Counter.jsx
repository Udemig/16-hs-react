import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center gap-10 text-2xl">
      <button
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
        className="px-6 py-2 rounded-md hover:brightness-75 cursor-pointer bg-blue-500 font-bold text-white transition disabled:brightness-50"
      >
        Azalt
      </button>

      <b>{count}</b>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 rounded-md hover:brightness-75 cursor-pointer bg-blue-500 font-bold text-white transition"
      >
        Arttır
      </button>
    </div>
  );
};

export default Counter;
