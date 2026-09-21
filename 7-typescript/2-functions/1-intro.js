"use strict";
/*
 ! Function Type
 * Typescript'de fonksiyon tipini tanımlamaktan kastımız fonksiyonun aldığı parametrenin ve döndürdüğü değeri tipini tanımlamaktır
*/
// normal function
function topla(a, b) {
    return a + b;
}
console.log(topla(99, "selam"));
// arrow function
const topla2 = (a, b) => {
    return a + b;
};
// Örnek - 1
// Sayının pozitif olup olmadığını kontrol eden fonksiyon
// 10 => true || -3 => false
const isPositive = (sayi) => sayi > 0;
console.log(isPositive(10));
console.log(isPositive(-3));
// Örnek - 2
// Bir dizi sayıyı parametre olarak alıp ortalamasını döndüren fonksiyon
const ortalama = (sayilar) => {
    const toplam = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
    return Number((toplam / sayilar.length).toFixed(2));
};
console.log(ortalama([56, 34, 12, 78, 12, 90, 23, 67, 23]));
