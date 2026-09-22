"use strict";
/*
 ! Readonly
 * Readonly anahtar kelimesi class'ın veya nesnenin özelliklerinin sadece okunabilir olmasını sağlar
 * Readınly ile tanımladığımız özelliklere değer ataması sadece şu durumlarda gerçekleşir:
 * - sınıflarda sadece constructor içerisinde değer atanabilir
 * - nesnelerde sadece nesne oluşturuken değer atanabilir
*/
const kisi = {
    isim: "Ahmet",
    soyad: "Yıldırım",
    tcNo: "12343534723748632",
};
kisi.isim = "Mehmet";
kisi.soyad = "Yılmaz";
//? Sınıflardaki Kullanım
class Kitap {
    isim;
    sayfa;
    yazar;
    constructor(isim, sayfa, yazar) {
        this.isim = isim;
        this.sayfa = sayfa;
        this.yazar = yazar;
    }
}
console.log(new Kitap("Game Of Thrones", 1534, "George R.R. Martin"));
