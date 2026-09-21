"use strict";
/*
 ! Type Annotation
 * JS'de değişkenin türünü belirlimem gibi bir özellik söz konusu değildir
 * Fakat ts'de tanımladığımız değişkenlerin tiplerini belirleyebiliyoruz
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz.
 * Bu kısıtlama kodda oluşabiliecek hataların daha erken tespit edilmesini sağlar
*/
let foo = 10;
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
let value1 = "yurotek";
let value2 = 888;
let value3 = true;
let value4 = null;
let value5 = undefined;
let value6 = {};
let value7 = [];
let value8 = () => { };
let value9 = Symbol(123);
let value10 = 10n;
/*
 ! Type Inferance
 * Eğer bir değişkenin tipini belirlemezsek TS kendisi değişkenin değerine göre otomatik olarak belirler
 * Bu özelliği mümkünse hiç kullanmazsak daha iyi (Bazen yanlış belirleyebiliyor)
*/
let value12 = 435;
console.log(value12);
