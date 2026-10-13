import type { FC } from "react";
import authBg from "../../assets/images/auth-bg.png";
import google from "../../assets/icons/google.png";
import apple from "../../assets/icons/apple.png";
import facebook from "../../assets/icons/facebook.png";
import logo from "../../assets/icons/logo.svg";
import ArrowForward from "../../assets/icons/arrow_forward.svg?react";
import FormField from "../../components/form/FormField";
import Button from "../../components/form/Button";
import { Formik, Form } from "formik";
import { LOGIN_INITIAL_VALUES } from "../../constants";
import { LOGIN_SCHEMA } from "../../constants/schemas";
import { useLogin } from "../../service/auth";
import { Link } from "react-router-dom";

const Login: FC = () => {
  const { isPending, mutate } = useLogin();

  const handleSubmit = (values: any) => {
    mutate(values);
  };

  return (
    <div className="flex min-h-screen max-lg:flex-col">
      <section className="relative flex lg:flex-1 justify-center max-lg:h-[25vh] max-lg:overflow-hidden max-lg:items-center">
        <img src={logo} alt="logo" className="absolute w-62 mt-20 drop-shadow-2xl" />
        <img src={authBg} alt="ayakkabı" className="lg:h-screen w-full object-cover" />
      </section>

      <section className="p-10 flex-1 bg-white lg:px-15 xl:px-30 2xl:pt-15 flex justify-center">
        <Formik
          initialValues={LOGIN_INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={LOGIN_SCHEMA}
        >
          <Form className="flex flex-col justify-center gap-4  h-full flex-1" noValidate>
            <div>
              <h1 className="mb-2">Giriş Yap</h1>
              <p>Bu yöntemleri kullanabilirsin</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Button img={google} alt="google" />
              <Button img={apple} alt="apple" />
              <Button img={facebook} alt="facebook" />
            </div>

            <span className="font-semibold">YA DA</span>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Giriş Bilgileri</h1>

              <div className="grid gap-8">
                <FormField placeholder="Email" name="email" />
                <FormField placeholder="Şifre" name="password" />
              </div>
            </div>

            <FormField type="checkbox" name="session" label="Oturumu açık tut" styles="mt-5" />

            <button
              type="submit"
              disabled={isPending}
              className="flex items-center bg-dark-gray text-white justify-between px-4 py-2 rounded-lg font-medium text-sm"
            >
              <span>Giriş Yap</span>
              <ArrowForward className="text-white" />
            </button>

            <p className="mt-4">
              Hesabınız yoksa{" "}
              <Link to="/register" className="text-blue-500 underline">
                Kaydolun
              </Link>
            </p>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default Login;
