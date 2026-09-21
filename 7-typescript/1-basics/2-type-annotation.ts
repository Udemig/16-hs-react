/* 
 ! Type Annotation
 * JS'de değişkenin türünü belirlimem gibi bir özellik söz konusu değildir
 * Fakat ts'de tanımladığımız değişkenlerin tiplerini belirleyebiliyoruz
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz.
 * Bu kısıtlama kodda oluşabiliecek hataların daha erken tespit edilmesini sağlar
*/

let foo: number = 10;

/*
 * Javascript'de bulunan veri tipleri
 * string
 * number
 * boolean
 * object
 * array
 * undefined
 * null
 * symbol
 * bigint
 */

let value1: string = "yurotek";
let value2: number = 888;
let value3: boolean = true;
let value4: null = null;
let value5: undefined = undefined;
let value6: object = {};
let value7: object = [];
let value8: object = () => {};
let value9: symbol = Symbol(123);
let value10: bigint = 10n;

/*
 ! Type Inferance
 * Eğer bir değişkenin tipini belirlemezsek TS kendisi değişkenin değerine göre otomatik olarak belirler
 * Bu özelliği mümkünse hiç kullanmazsak daha iyi (Bazen yanlış belirleyebiliyor)
*/

let value12 = 435;

console.log(value12);
