import { useState } from "react";

const Form = () => {
  // 3) bütün form verilerini tutuan state
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  // 3) değişen inputa göre formState'indeki ilgili alanı güncelleyen fonksiyon
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // form gönderilince çalışan fonk
  const handleSubmit = (e) => {
    // sayfa yenilenmesinin önüne geç
    e.preventDefault();

    // formdaki verilere eriş
    // 1.yol)
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    // 2.yol)
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));

    // 3.yol)
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="d-grid gap-4">
      <h1>Örn-7: Giriş Yapma Formu</h1>

      <input name="email" type="email" placeholder="Email" className="form-control" onChange={handleChange} />

      <input name="password" type="password" placeholder="Şifre" className="form-control" onChange={handleChange} />

      <button disabled={!formState.email || !formState.password} type="submit" className="btn btn-primary">
        Giriş Yap
      </button>
    </form>
  );
};

export default Form;
