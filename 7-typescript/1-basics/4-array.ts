/*
 ! Array Type
 * Typescript'de dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak demek yerine bu değişken string elemanlara sahip bir dizi olucak deriz.

 * Yanı dizinin içeriği ne olucak? dizinin elemanlarının tipi ne olucak?

 * Tanım:
 * tip[]
 * string[] | number[] | object[]
*/

// Örnek - 1
let numbers: number[] = [1, 6, 4, 7, 9, 24];

// Örnek - 2
let names: string[] = ["a", "n", "b", "z"];

// Soru: Dizide birden fazla farklı tipte eleman olabilir mi?
// Cevap: Evet, union types özelliğini kullanırız
let mixed: (string | number)[] = ["a", 4, "b", 9, 6, 3, 5, "c"];
