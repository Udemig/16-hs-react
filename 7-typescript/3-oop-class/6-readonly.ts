/*
 ! Readonly
 * Readonly anahtar kelimesi class'ın veya nesnenin özelliklerinin sadece okunabilir olmasını sağlar
 * Readınly ile tanımladığımız özelliklere değer ataması sadece şu durumlarda gerçekleşir:
 * - sınıflarda sadece constructor içerisinde değer atanabilir
 * - nesnelerde sadece nesne oluşturuken değer atanabilir
*/

//? Nesneler için Kullanım
type Insan = {
  isim: string;
  soyad: string;
  readonly tcNo: string;
};

const kisi: Insan = {
  isim: "Ahmet",
  soyad: "Yıldırım",
  tcNo: "12343534723748632",
};

kisi.isim = "Mehmet";
kisi.soyad = "Yılmaz";

//? Sınıflardaki Kullanım
class Kitap {
  constructor(
    public isim: string,
    public sayfa: number,
    private readonly yazar: string,
  ) {}
}

const kitap = new Kitap("Game Of Thrones", 1534, "George R.R. Martin");
kitap.sayfa = 1634;

/*
 ! Challange
 * Bir class tanımlayın ve bu class'tan bir örnek oluşturun
 * Bu class en az 4 özelliğe sahip olsun
 * Bu özelliklerden en az 1'i readonly olsun
 * Erişim belirteçlerini kullanın (public protected private)
  
 * Yasaklı: Kişi, İnsan, Araba, Kitap
*/

class Sinav {
  constructor(
    public isim: string,
    public soruSayisi: number,
    private readonly sinavUcreti: number,
    protected sinavYeri: string,
  ) {}
}

const sinav = new Sinav("kpss", 120, 800, "OMU ziraat fakultesi");
sinav.isim = "YDS";

console.log(sinav);
