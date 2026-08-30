import AuthForm from "../../components/auth/AuthForm";
import GoogleButton from "../../components/auth/GoogleButton";

const Auth = () => {
  return (
    <div className="h-screen bg-dark text-white grid place-items-center">
      <div className="bg-black py-16 px-28 rounded-lg flex flex-col gap-10 sm:w-[80%] max-w-137.5">
        <div className="flex justify-center">
          <img src="x-logo.webp" alt="c-logo" className="h-15" />
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-center">X'e Giriş Yap</h1>

        <GoogleButton />

        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
