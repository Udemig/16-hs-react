import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Content from "./components/Content";

/*
 * Bir bileşeni kullanmak için
 * 1) kullanmak istediğimiz bileşenleri import ederiz
 * 2) return satırı içerisinde bileşeni çağırırız
 * * <Bileşenİsmi />
 */

function App() {
  //  Çoklu renderlama yöntemini kullanmak için öncelikle bir diziye ihtiyacımız var
  const ürünler = [
    { isim: "Fanta", fiyat: 612.99, resim: "https://cdn-image.getir.com/market/product/00c97417-3076-436a-8e0d-333cf2dd5608.jpg" },
    { isim: "Erikli Su", fiyat: 32.5, resim: "https://cdn-image.getir.com/market/product/86a5552a-d7d7-4a46-8f41-308a514ea76b.jpg" },
    { isim: "Uludağ Gazoz", fiyat: 66.5, resim: "https://cdn-image.getir.com/market/product/3141a7e8-0e14-436d-bc9c-e2a034a204be.jpg" },
    { isim: "Erikli Su", fiyat: 32.5, resim: "https://cdn-image.getir.com/market/product/86a5552a-d7d7-4a46-8f41-308a514ea76b.jpg" },
    { isim: "Fanta", fiyat: 62.99, resim: "https://cdn-image.getir.com/market/product/00c97417-3076-436a-8e0d-333cf2dd5608.jpg" },
    { isim: "Uludağ Gazoz", fiyat: 66.5, resim: "https://cdn-image.getir.com/market/product/3141a7e8-0e14-436d-bc9c-e2a034a204be.jpg" },
  ];

  return (
    <div className="page">
      <Header />

      <main>
        <Content />

        {ürünler.map((ürün, index) => (
          <Card key={index} isim={ürün.isim} fiyat={ürün.fiyat} resim={ürün.resim} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
