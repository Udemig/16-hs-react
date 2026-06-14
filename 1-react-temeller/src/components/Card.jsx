// Bileşen kullanılırken gönderilen proplara erişmek için fonksiyonun parametre kısmını kullanırız
// Proplar nesne formatında gelir
function Card(props) {
  return (
    <div className="card">
      <img src={props.resim} />

      <h3>{props.isim}</h3>

      <p>{props.fiyat} ₺</p>

      <button>Sepete Ekle</button>
    </div>
  );
}

export default Card;
