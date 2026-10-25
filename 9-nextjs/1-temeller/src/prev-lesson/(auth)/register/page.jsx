import delay from "@/utils/delay";

const Register = async () => {
  await delay(2500); // api isteği bekleniyor..
  throw new Error("Bağlantı gecikmeye uğradı"); // api dan hata geldi

  return (
    <div>
      <h1>Kayıt Olma Sayfası</h1>
    </div>
  );
};

export default Register;
