"use client";

// Wrapper: Farklı bir bileşeni kapsayan ve o bileşene children propu aracılığıyla erişen bileşen
const ClientComponent = ({ children }) => {
  console.log("Client component render oldu");

  return (
    <div className="bg-red-500 p-5 rounded-md font-bold text-3xl">
      ClientComponent
      {children}
    </div>
  );
};

export default ClientComponent;
