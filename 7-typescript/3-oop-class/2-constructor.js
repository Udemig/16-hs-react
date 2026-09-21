"use strict";
/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan alamaya yarar
 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Constructor ile class'a gelene parametreler erişebiliriz
*/
class Insan {
    // özellikler:
    isim;
    soyad;
    yas;
    // constructor
    constructor(isim, soyad, yas) {
        this.isim = isim;
        this.soyad = soyad;
        this.yas = yas;
    }
}
const insan1 = new Insan("Ali", "Kaya", 34);
const insan2 = new Insan("Fatma", "Güneş", 19);
console.log(insan1);
console.log(insan2);
