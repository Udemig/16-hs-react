import EmailInput from "./EmailInput";
import ForgotPassword from "./ForgotPassword";
import SubmitButton from "./SubmitButton";
import PasswordInput from "./PasswordInput";
import AuthToggle from "./AuthToggle";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { simplifyError } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (isLoginMode) {
        // giriş yapma
        const res = await signInWithEmailAndPassword(auth, email, password);

        // maili doğrulanmamışsa bildirim
        if (!res.user.emailVerified)
          return toast.warning("Lütfen e-posta adresinizi, gelen mail ile doğrulayın");

        // anasayfaya yönlendir
        navigate("/home");

        // bildirim gönder
        toast.info("Oturum açıldı");
      } else {
        // kayıt olma
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // doğrulama epostası gönder
        await sendEmailVerification(res.user);

        // giriş yapma moduna geç
        setIsLoginMode(true);

        // bildirim gönder
        toast.info("E-posta adresinize doğrulama maili gönderildi");
      }
    } catch (error) {
      toast.error(simplifyError(error.code));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />
      <PasswordInput />
      <ForgotPassword isLoginMode={isLoginMode} />
      <SubmitButton isLoginMode={isLoginMode} />
      <AuthToggle isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </form>
  );
};

export default AuthForm;
