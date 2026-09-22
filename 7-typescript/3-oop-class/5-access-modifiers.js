"use strict";
/*
 ! Erişim Belirteçleri
 * Class elemanları ile veri tutucağımız zaman, bu verilerin class'ın dışarısında erişilebilir olup olmama durumunu belirlememizi sağlar

 * Erişim Belirteçleri:
 * public (varsayılan): Her yerde erişilebilir
 * protected: sadece sınıfın kendisi ve alt sınıflar özelliğe erişebilir
 * private: sadece sınıfın kendisi özelliğe erişebilir
*/
// Ev sınıfı
class Ev {
    adres = "İstanbul";
    fiyat = 5400000;
    sahip = "Ahmet Yılmaz";
    tanim() {
        console.log(`Bilgiler, ${this.adres}, ${this.fiyat}, ${this.sahip}`);
    }
}
// Ev sınıfını miras alan Villa sınıfı
class Villa extends Ev {
    tanim() {
        console.log(`Bilgiler, ${this.adres}, ${this.fiyat}`);
    }
}
// Ev sınıfından bir örnek oluştur
const ev = new Ev();
console.log(ev.adres);
/*

  * Belirteç          Tanımlandığı Sınıf                  Miras Alan Sınıf           Sınıf Örneği

  * public                   evet                            evet                      evet

  * protected                evet                            evet                      hayır

  * private                  evet                            hayır                     hayır

*/
// Örnek
class BankaHesabi2 {
    hesapNumarasi;
    bakiye;
    pin;
    constructor(hesapNumarasi, bakiye, pin) {
        this.hesapNumarasi = hesapNumarasi;
        this.bakiye = bakiye;
        this.pin = pin;
    }
}
class BankaHesabi {
    hesapNumarasi;
    bakiye;
    pin;
    constructor(hesapNumarasi, bakiye, pin) {
        this.hesapNumarasi = hesapNumarasi;
        this.bakiye = bakiye;
        this.pin = pin;
    }
}
console.log(new BankaHesabi("1294832907238462354", 893463, 1234));
console.log(new BankaHesabi2("1294832907238462354", 893463, 1234));
