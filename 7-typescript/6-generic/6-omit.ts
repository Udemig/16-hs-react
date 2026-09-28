/*
! Omit
* Bir type'da istemediğimiz değer / değerler olduğunda bütün tipi baştan yazmak yerine istemediğimiz değerleri tipten kaldırmak için kullanırız
*/

type Urun = {
  id: number;
  isim: string;
  fiyat: number;
  stok: number;
};

// api'dan ürünnleri alan fonksiyon
const urunleriGetir = (): Urun[] => {
  return [];
};

// api'a yeni ürün ekleme fonksiyonu - v1
const urunOlustur1 = (yeniUrun: { isim: string; fiyat: number; stok: number }) => {
  // api.post
};

// api'a yeni ürün ekleme fonksiyonu - v2
const urunOlustur2 = (yeniUrun: Omit<Urun, "id" | "stok">) => {};

urunOlustur1({ isim: "Iphone", fiyat: 67999, stok: 56 });
urunOlustur2({ isim: "Iphone", fiyat: 67999 });
