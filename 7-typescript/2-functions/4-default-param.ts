/*
 ! Default Param (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerin undefined olmasını istemeyebiliriz
 * Undefined olması yerine varsayılan bir değer sahip olmasını istersek bu yöntemi kullanırız
*/

// Örnek - 1
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Furkan"); // Merhaba Furkan
selamVer(); // Merhaba Dünya

// Örnek-2
// Ürünün kdv eklenmiş fiyatını hesaplayan bir fonksyion yazalım
// Fonksiyon 2 parametre alsın: ürün fiyatı, kdv oranı(opsiyonel)
// KDV oranı parametresi gönderilmezse varsayılan %18 den hesaplansın

function fiyatHesapla(fiyat: number, kdv: number = 0.18): number {
  return fiyat + fiyat * kdv;
}

console.log(fiyatHesapla(200, 0.35)); // 270
console.log(fiyatHesapla(200)); // 236
