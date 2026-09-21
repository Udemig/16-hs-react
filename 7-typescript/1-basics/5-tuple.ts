/*
 ! Tuple Type
 * Tuple, dizinin bir alt tipidir.
 * Uzunluğu ve elemanlarının sırası sabit olan dizilerin tip tanımında kullanılır
*/

// Örnek-1: Eğitim uygulmasında ders verisinin tipi
const ders1: [string, number] = ["Matematik", 5];
const ders2: [string, number] = ["İnkilap", 3];

// Örnek-2: Bir css gradient verisi api'dan dizi formatında geliyor olsun
// [doğrultu,renk1,renk2]
const gradients: [number, string, string] = [180, "#94387", "#84356"];

// Örnek-3: Bir css rgb/rgba verisi api'dan dizi formatında geliyor olsun
// [red,green,blue,alpha(opsiyonel)]
// Bu seneryoda dizideki son değer opsiyoneldir.
let color: [number, number, number?, number?];

color = [123, 78, 92];
color = [123, 78, 92, 0.1];

// Örnek-4: API'dan kordinal dizisi geliyor olsun
const coordinates: [number, number][] = [
  [44.23, 63.12],
  [45.13, 43.32],
  [54.25, 64.12],
  [81.84, 43.52],
];
