"use strict";
/*
 ! Void
 * Sadece fonksiyon return bölümünde kullanılan bir tip.
 * Bir fonksiyon void return tipine sahipse, bu fonksiyon bir değer return etmediği anlamına gelir
 * Eğer return tipi void ise, return sadece fonksiyonu durdurmak amacıyla kullanılabilir ama değer döndüremez
*/
const func1 = () => {
    return "selam";
};
const func2 = () => {
    return 455;
};
const func3 = (a) => {
    console.log("selam");
    return; // fonksiyonu durduran return
};
// Örnek
const deleteProduct = (id) => {
    fetch(`www.api.com/${id}`, { method: "DELETE" });
};
/*
 ! Never Type
 * Sadece fonksiyonlarda kullanılan bir tip
 * Fonksiyon hata fırlatıyorsa return tipi olarak never kullanılır
 * Fonksiyon hiçbir zaman görevini tamamlayamayacak durumunu ifade eder
*/
const log = (message) => {
    if (message) {
        console.log("Mesaj alındı");
    }
    else {
        throw new Error("Fonksiyona mesaj sağlanmadı");
    }
};
log("Selam Dünya");
// log();
// Örnek
function setMode(mode) {
    if (mode === "açık")
        return "açık mod";
    if (mode === "koyu")
        return "koyu mod";
    return wrongMode(mode);
}
function wrongMode(mode) {
    throw new Error("Geçersiz mod: " + mode);
}
console.log(setMode("açık"));
console.log(setMode("yeşil"));
