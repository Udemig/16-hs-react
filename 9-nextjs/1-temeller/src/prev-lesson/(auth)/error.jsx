"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="text-red-500 text-center flex flex-col gap-5">
      <h2>{error.message}</h2>
      <p>Bir sorun oluştu</p>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
