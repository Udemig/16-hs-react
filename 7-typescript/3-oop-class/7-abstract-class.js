"use strict";
/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birer şablon görevi görür
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özellik ve methodlarını tanımlarız
 * Soyut sınıfların doğrudan örnekleri oluşturulamaz
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi görür
*/
class Foto {
    kameraModu;
    filtre;
    constructor(kameraModu, filtre) {
        this.kameraModu = kameraModu;
        this.filtre = filtre;
    }
    // normal sınıflarda olduğu gibi method tanımlayalım
    fotoCek() {
        console.log("Fotoğraf çekiliyor");
    }
}
// soyut sınıfı miras alan bir sınıf tanımlayalım
class Instagram extends Foto {
    fotoPaylas(kim) {
        console.log(`Foto instada ${kim} ile paylaşılıyor`);
    }
}
// soyut sınıfı miras alan başka bir sınıf tanımlayalım
class Twitter extends Foto {
    fotoPaylas(kim) {
        console.log(`Foto twitter'da ${kim} ile paylaşılıyor`);
    }
}
new Instagram("Geniş Açı", "Siyah Beyaz").fotoPaylas("Ahmet");
new Twitter("Portre", "Canlı").fotoPaylas("Mehmet");
