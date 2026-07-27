function Content() {
  // bu değişkeni başlık içerisinde yazdırmak istiyoruz
  const girişYapildiMi = false;
  const indirimVarMi = true;

  return (
    <>
      <form onSubmit={() => {}}>
        <h1>{girişYapildiMi ? "Hoş Geldin" : "Giriş Yapın"}</h1>

        <h1>{indirimVarMi && "Kampanya Başladı!!!"}</h1>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={() => console.log("fonksiyon çalıştı")} />

        <button onClick={() => {}}>Gönder</button>
      </form>

      <aside>yan içeirik</aside>
    </>
  );
}

export default Content;
