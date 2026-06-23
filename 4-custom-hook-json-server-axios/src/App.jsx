import UserListOne from "./components/UserListOne";
import UserListTwo from "./components/UserListTwo";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1>Custom Hooks</h1>
      <p>
        Şimdiye kadar useState,useEffect gibi hazır hooklar kullandık. Ama bir uygulamada aynı mantığı birden fazla yerde kullanıyorsak o mantığı
        kendi oluşturduğumuz ayrı bir hook içerisine taşıyabiliriz. <br />
        <br />
        Örneğin, bir projede kullanıcıları çekiyoruz, ürünleri çekiyoruz, kategorileri çekiyoruz bu durumda her componentta aynı useState ve useEffect
        kodlarını yazmak zorundayız ama custom hook ile kod tekrarını önleyebiliriz
      </p>

      <Button yazi="Kayıt Ol" renk="red" />

      <Button yazi="Gönder" renk="yellow" />

      <Button yazi="Kullanıcıyı Sil" renk="orange" />

      <UserListOne />

      <UserListTwo />
    </div>
  );
};

export default App;
