import delay from "@/utils/delay";

const Login = async () => {
  await delay(2000); // api'dan yanıt bekleniyor..

  return (
    <div>
      <h1>Giriş Yapma Sayfası</h1>
    </div>
  );
};

export default Login;
