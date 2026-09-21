"use strict";
/*
 ! Inheritance (Kalıtım / Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasını sağlar.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf" tan türetilmiş olan "alt sınıf" lar arasında gerçekleşir
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır
*/
// Parent Class
class GeometrikSekil {
    isim;
    renk;
    constructor(isim, renk) {
        this.isim = isim;
        this.renk = renk;
    }
    tanit() {
        console.log(`${this.isim} isimli ve ${this.renk} renginde bir şekildir`);
    }
}
// Derived Class - Constructor'ı Yok
class Kare extends GeometrikSekil {
    kenarSayisi = 4;
    kenarUzunlugu = 350;
}
// Derived Class - Constructor'ı Var
// Bir alt sınıfın kendi constructor'ı varsa parent sınıfın constructor'ına super ile değer göndermek zorunnda
class Daire extends GeometrikSekil {
    yariCap;
    constructor(isim, renk, yariCap) {
        // super: parent class'ın constructor'ına değer göndermeye yarar
        super(isim, renk);
        this.yariCap = yariCap;
    }
}
new Kare("Kare", "mavi");
new Daire("Daire", "kırmızı", 30);
// Örnek
class Arac {
    marka;
    model;
    teker;
    constructor(marka, model, teker) {
        this.marka = marka;
        this.model = model;
        this.teker = teker;
    }
    calistir() {
        console.log(`${this.marka} marka araca giriş yapılıyor..`);
    }
}
// Derived Class
class Otomobil extends Arac {
    beygir;
    yakitTipi;
    constructor(marka, model, teker, beygir, yakitTipi) {
        super(marka, model, teker);
        this.beygir = beygir;
        this.yakitTipi = yakitTipi;
    }
    gazaBas() {
        console.log("Gaza basılıyor...");
    }
    // Method overriding
    calistir() {
        super.calistir();
        console.log("Kontak çevrildi");
    }
}
const bmw = new Otomobil("BMW", "X4", 4, 250, "benzin");
bmw.calistir();
