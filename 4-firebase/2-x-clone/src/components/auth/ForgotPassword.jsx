import { useState } from "react";
import ResetModal from "../modal/ResetModal";

const ForgotPassword = ({ isLoginMode }) => {
  if (!isLoginMode) return <div className="h-7 w-1" />;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer"
      >
        Şifreni mi unuttun ?
      </button>

      <ResetModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default ForgotPassword;
