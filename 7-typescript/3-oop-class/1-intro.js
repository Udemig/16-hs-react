"use strict";
/*
 ! OOP (Object Orianted Programming)
 * Nesneye yönelimli programlama, yazılım geliştime sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım hayattaki kavramları koda uyarlar.
 * Kod tekrar azaltır
 * Daha düzenli, modüler bir yapı kurmak için tercih edilir
 * Java, C#, C++, Phyton, Ruby, Swift, Kotlin, PHP, Typescript, Javascript, Dart
  
 * OOP'nin temel kavramları:
 * Class (Sınıf)
 * Object (Nesne)
 * Inheritance (Kalıtım)
 * Interface (Arayüz)
 * Polymorphism (Çok bicimcilik):
 * * Aynı metot/fonksiyonun farklı nesnelerde farklı davranmasıdır.
 * Encapsulation (Kapsülleme):
 * *  Bir nesnenin içindeki verileri ve işlemleri dışarıdan doğrudan erişime kapatıp kontrollü şekilde kullanmaktır.
 * Abstraction (Soyutlama)
 * * Gereksiz detayları gizleyip kullanıcıya sadece gerekli kısmı göstermektir.
*/
/*
 ! Class (Sınıf)
 * Sınıflar nesnelerin şablonudur
 * Bir sınıf, belirli türdeki nesneler için özellik ve fonksiyon tanımlar
 * Örneğin "Araba" sınıfı bir arabanın sahip olcucağı özellikleri (renk,marka,model) ve davranışlarını (hızlanma,frenleme,vites değiştirme) tanımlar
*/
class AkilliTelefon {
    // properties (özellikler)
    marka = "Apple";
    model = "Iphone 17";
    ekranTuru = "OLED";
    batarya = 99;
    // methods
    ekranAc() {
        console.log("Ekran açıldı");
    }
    aramaYap(numara) {
        console.log(numara + " aranıyor...");
    }
}
/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına bir anlam ifade etmez
 * Fonksiyonlarda olduğu gibi tanımladıktan sonra çağırmamız gerekli
 * Class'larda da durum aynıdır class'ı new anahtar kelimesi ile çağırırız ve bir nesne oluşturur
 * Class'ın oluşturduğu bu nesneye "instance" (örnek) denir
*/
const telefon1 = new AkilliTelefon();
const telefon2 = new AkilliTelefon();
console.log(telefon1);
console.log(telefon2);
telefon1.ekranAc();
telefon2.aramaYap("+90544323874238");
