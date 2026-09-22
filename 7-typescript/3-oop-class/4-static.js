"use strict";
/*
 ! Static
 * Static anahtar kelimesi, özelliği veya methodu sınıfın örneği oluşturulmadan kullanabilmemizi sağlar
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz
*/
//! Static Method
class Matematik {
    x = 10;
    // static olmayan methodlar sınıfın içerisindeki özelliklere erişebilir
    topla(y) {
        console.log(y + y + this.x);
    }
    // static methodlar sınıf içerisindeki özelliklere erişemez
    static carp(a) {
        console.log(a * a);
    }
}
// static olamyan fonknsiyona erişmek için öncelikle sınıfın örneği alınmalı
const mat = new Matematik();
mat.topla(99);
mat.x;
// static olan carp fonksiyonuna erişmek için sınıftan örnek almaya gerek yok
Matematik.carp(10);
//? Örnekler
// static olamayan bir method örneği
new Date().toLocaleDateString();
// static method örneği
Date.now();
// static method örneği
Object.fromEntries([]);
//! Static Property
// Doğrudan class üzerinden erişilebilen özelliklerdir
class Ogrenci {
    isim;
    static ogrenciSayisi = 0;
    constructor(isim) {
        this.isim = isim;
        Ogrenci.ogrenciSayisi++;
    }
}
console.log(new Ogrenci("Meryem"));
console.log(new Ogrenci("Mert"));
console.log(new Ogrenci("Ömer"));
console.log(new Ogrenci("Vedat").isim);
console.log(Ogrenci.ogrenciSayisi);
