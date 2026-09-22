/*
 ! Intersection Types | Kesişim Türler
 * Type'de kesişim türler, iki veya daha fazla tipi birleştirerek yeni bir tür oluşturmamıza olanak sağlar
*/

type AType = { key1: string };
type BType = { key2: number };

// Intersection: Her iki nesne tipinin özelliklerini birleştirelim
type ABType = AType & BType & { key3: boolean };

let foo: ABType = { key1: "Merhaba", key2: 78, key3: true };

// Örnek
type Kisi = {
  id: string;
  isim: string;
};

type Iletisim = {
  eposta: string;
  telefon: string;
};

type Calisan = {
  departman: string;
  maas: number | string;
};

type Kullanici = {
  bakiye: number;
  aktif: boolean;
};



















type Eleman = Kisi & Iletisim & Calisan;

const eleman: Eleman = {
  id: "1",
  isim: "Veli",
  eposta: "veli@firma.com",
  telefon: "444-5654-23-34",
  departman: "Satış",
  maas: 56789,
};

type Musteri = Kisi & Iletisim & Kullanici;

const musteri: Musteri = {
  id: "2",
  isim: "Feyza",
  eposta: "feyza@gmail.com",
  telefon: "547-3765-34-23",
  bakiye: 24000,
  aktif: true,
};
