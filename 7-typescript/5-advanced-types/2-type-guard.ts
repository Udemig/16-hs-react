/*
 ! Type Guard
 * Bu teknik sayesinde belirli türdeki değeleri kontrol edip türe özgü işmler gerçekleştirebiliyoruz
 * Bu tekniği typeOf ve instanceOf javascript methodları ile uygularız
*/

// typeOf: bir değişkenin tipini kontrol etmek için kullanılır
console.log(typeof "hello");
console.log(typeof 234);
console.log(typeof false);
console.log(typeof { id: 123 });

// typeof ile typeguard tekniği uygulama
function log(input: string | number): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toFixed(2));
  }
}

log("Selam dünya!");
log(9999.9999);

// typeof örnek
// girdi olarak hem string "123" hem de number 123 formatında sayı kabul eden bir fonksiyon yazalım
// eğerki girdi sayı ise direkt return etsin
// eğerki girdi string ise sayıya çevirip return tesin
// sayıya çevirlmiyorsa 0 return etsin

const formatNumber = (input: string | number): number => {
  if (typeof input === "number") {
    return input;
  } else {
    const value = parseInt(input);

    return isNaN(value) ? 0 : value;
  }
};

console.log(formatNumber(3274623));
console.log(formatNumber("3274623"));
console.log(formatNumber("asjhdas"));

// instanceOf nedir?
class Kaplumbaga {}

class Tavsan {}

const tospik = new Kaplumbaga();

console.log(
  "Tospik nesnesi, Tavşan sınıfından oluşturulan bir örnek mi?",
  tospik instanceof Tavsan,
);
console.log(
  "Tospik nesnesi, Kaplumbaga sınıfından oluşturulan bir örnek mi?",
  tospik instanceof Kaplumbaga,
);

//! instanceOf ile typeguard tekniği
class Kedi {
  isim: string = "Tekir";

  miyavla(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Kopek {
  isim: string = "Karabaş";

  havla(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

// aşağıdaki fonksiyon parametre olarak aldığı hayvana göre hayvanın sesini çıakran fonksiyonu çalıştırsın
function sesCikar(hayvan: Kedi | Kopek): void {
  if (hayvan instanceof Kedi) {
    console.log(hayvan.isim);
    hayvan.miyavla();
  } else {
    console.log(hayvan.isim);
    hayvan.havla();
  }
}

sesCikar(new Kedi());
sesCikar(new Kopek());
