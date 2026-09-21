"use strict";
/*
 ! Rest Params
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.

 * Özellikleri
 * Bir parametreyi res param yapmak için "..." operatörünü kullanırız.
 * Bir res parametrenin ardından normal bir parametre gelemez
 * Sebebi rest parametrenin kaç değer alıcağının belli olmaması
 * Rest parametrenin aldığı değerler en son dizi haline gelir
*/
const yoklama = (ogretmen, ...ogrenciler) => {
    console.log(ogretmen + " yoklama alıyor");
    console.log("----------------------");
    ogrenciler.forEach((ogrenci) => console.log(ogrenci + " burdaaaaaaa!"));
};
yoklama("Ayşe Öğretmen", "Ali", "Ahment", "Fatma", "Faruk", "Ayşe");
