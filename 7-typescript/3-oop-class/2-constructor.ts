/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan alamaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Constructor ile class'a gelene parametreler erişebiliriz
*/

class Insan {
  // özellikler:
  isim: string;
  soyad: string;
  yas: number;

  // constructor
  constructor(isim: string, soyad: string, yas: number) {
    this.isim = isim;
    this.soyad = soyad;
    this.yas = yas;
  }

  // method
  konus() {
    console.log(`Merhaba ben ${this.isim} ${this.soyad}`);
  }
}

const insan1 = new Insan("Ali", "Kaya", 34);
const insan2 = new Insan("Fatma", "Güneş", 19);

console.log(insan1);
console.log(insan2);

/*
 ! Challange
 * Bir teknolojik / ev aleti için class oluşturun
 * Bu class oluşturduğunuz nesnenin değerlerini constructor'dan alsın
 * Bu class en az 4 özellik ve 1 mehthoda sahip olsun
 * Class'tan bir örnek oluşturun
*/
