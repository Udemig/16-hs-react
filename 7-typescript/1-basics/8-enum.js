"use strict";
/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
*/
// Örnek - 1
// Trafik ışığının aşamalarının verisini tut
// 1) klasik js yöntemi
const renkler = {
    kirmizi: 0,
    sari: 1,
    yesil: 2,
};
const yananIsik1 = renkler.kirmizi;
// 2) typescript enum yöntemi
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 0] = "kirmizi";
    Renk[Renk["sari"] = 1] = "sari";
    Renk[Renk["yesil"] = 2] = "yesil";
})(Renk || (Renk = {}));
const yananIsik2 = Renk.kirmizi;
// Örnek - 2
var Gun;
(function (Gun) {
    Gun[Gun["pazartesi"] = 1] = "pazartesi";
    Gun[Gun["sali"] = 2] = "sali";
    Gun[Gun["carsamba"] = 3] = "carsamba";
    Gun[Gun["persembe"] = 4] = "persembe";
    Gun[Gun["cuma"] = 5] = "cuma";
    Gun[Gun["cumartesi"] = 6] = "cumartesi";
    Gun[Gun["pazar"] = 7] = "pazar";
})(Gun || (Gun = {}));
const gun1 = Gun.pazartesi;
const gun6 = Gun[6];
console.log("Gün-1", gun1);
console.log("Gün-6", gun6);
