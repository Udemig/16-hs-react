import { IoMdClose } from "react-icons/io";

// HOC: Higher Order Component
const Modal = ({ children, close, isOpen }) => {
  if (!isOpen) return;

  return (
    <div className="fixed inset-0 bg-zinc-800/20 backdrop-blur-xs z-999 grid place-items-center">
      <div className="bg-black py-10 px-8 w-3/4 max-w-125 rounded-md">
        <div className="flex justify-end">
          <button onClick={close} type="button">
            <IoMdClose className="text-3xl hover:text-gray-500" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
