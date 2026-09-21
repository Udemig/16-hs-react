"use strict";
/*
 ! Type Aliases
 * Typescripde bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine type aliases ile ayrı bir tip oluşturabiliyoruz
 */
// 1. Yötem: fonksiyonu yazarken tip tanımlama
let func1 = (par1, par2) => {
    return par1 + par2;
};
let func2 = (par1, par2) => {
    return par1 + par2;
};
const havaNasil = (sehir, derece) => {
    if (derece > 30) {
        return `${sehir}, hava sıcak`;
    }
    else if (derece < 10) {
        return `${sehir}, hava soğuk`;
    }
    else {
        return `${sehir}, hava normal`;
    }
};
console.log(havaNasil("İstabul", 29));
