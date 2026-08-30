import { useRef } from "react";
import Modal from ".";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ResetModal = ({ isOpen, close }) => {
  const emailInputRef = useRef(null);

  const handleClick = () => {
    // inputtaki yazıya eriş
    const email = emailInputRef.current.value.trim();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Mailinize şifre sıfırlama bağlantısı gönderildi");
        close();
      })
      .catch(() => toast.error("İşlem başarısız"));
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col gap-3 mx-auto max-w-87.5 mt-5">
        <h1 className="text-3xl">Şifreni mi unuttun?</h1>

        <p className="text-zinc-400">Email adresine bir şifre sıfırlama bağlantısı gönderildi</p>

        <input
          ref={emailInputRef}
          type="email"
          className="input mt-10"
          placeholder="mailinizi giriniz..."
        />

        <button
          type="button"
          onClick={handleClick}
          className="bg-white hover:bg-gray-300 text-black rounded-full mt-8 py-1"
        >
          Şifre sıfırlama maili gönder
        </button>

        <button
          type="button"
          className="bg-zinc-800 hover:bg-zinc-900 text-white rounded-full mt-1 py-1"
        >
          İptal
        </button>
      </div>
    </Modal>
  );
};

export default ResetModal;
