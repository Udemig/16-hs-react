/*
 ! Inheritance (Kalıtım / Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasını sağlar.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır 
*/

// Parent Class
class GeometrikSekil {
  isim: string;
  renk: string;

  constructor(isim: string, renk: string) {
    this.isim = isim;
    this.renk = renk;
  }

  tanit() {
    console.log(`${this.isim} isimli ve ${this.renk} renginde bir şekildir`);
  }
}

// Derived Class - Constructor'ı Yok
class Kare extends GeometrikSekil {
  kenarSayisi: number = 4;
  kenarUzunlugu: number = 350;
}

// Derived Class - Constructor'ı Var
// Bir alt sınıfın kendi constructor'ı varsa parent sınıfın constructor'ına super ile değer göndermek zorunnda
class Daire extends GeometrikSekil {
  yariCap: number;

  constructor(isim: string, renk: string, yariCap: number) {
    // super: parent class'ın constructor'ına değer göndermeye yarar
    super(isim, renk);
    this.yariCap = yariCap;
  }
}

new Kare("Kare", "mavi");

new Daire("Daire", "kırmızı", 30);

// Örnek
class Arac {
  marka: string;
  model: string;
  teker: number;

  constructor(marka: string, model: string, teker: number) {
    this.marka = marka;
    this.model = model;
    this.teker = teker;
  }

  calistir(): void {
    console.log(`${this.marka} marka araca giriş yapılıyor..`);
  }
}

// Derived Class
class Otomobil extends Arac {
  beygir: number;
  yakitTipi: string;

  constructor(marka: string, model: string, teker: number, beygir: number, yakitTipi: string) {
    super(marka, model, teker);
    this.beygir = beygir;
    this.yakitTipi = yakitTipi;
  }

  gazaBas(): void {
    console.log("Gaza basılıyor...");
  }

  // Method overriding
  calistir(): void {
    super.calistir()
    console.log("Kontak çevrildi");
  }
}

const bmw = new Otomobil("BMW", "X4", 4, 250, "benzin");
bmw.calistir();
