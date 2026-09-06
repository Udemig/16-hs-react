import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-20">
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold">{title}</h3>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="py-2 px-5 bg-black text-white rounded-md cursor-pointer"
        >
          Gizle/Göster
        </button>
      </div>

      <p data-testid="paragraph" className={`mt-5 text-xl ${isOpen ? "block" : "hidden"}`}>
        {content}
      </p>
    </div>
  );
};

export default Accordion;
