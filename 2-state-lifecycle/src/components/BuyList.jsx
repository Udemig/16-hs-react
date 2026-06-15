import { useState } from "react";

function BuyList() {
  const [list, setList] = useState([]);
  const [product, setProduct] = useState("");

  // yeni ürün oluşturma fonksiyonu
  const handleAdd = () => {
    // list dizisine ilk eleman olarak inputa girilen ürünü ekle
    setList([product, ...list]);
  };

  return (
    <div>
      <h1>Alışveriş Listesi</h1>

      <div>
        <input type="text" placeholder="ürün adı" onChange={(e) => setProduct(e.target.value)} />
        <button onClick={handleAdd} disabled={!product}>
          ekle
        </button>
      </div>

      {/* Çoklu elemean renderlama yöntemiyle list dizisindeki herbir ürün için ekrana <li> elemanı bas */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuyList;
