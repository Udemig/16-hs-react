/*
 ! Union Type (Birleşmiş Tipler)
 * Bir değişkenin alabileceği birden fazla farklı türde veri varsa kullanılabilir
*/

// * Örnek - 1
// * Bir değişkeni var ama şehir ismi (string) mi yoksa şehir plakası (number) mı belli değil. Bu tarz durumlarda hem string hem number değeri alabileceğini söylemeliyiz

let sehir: string | number;

sehir = "İzmir";
sehir = 35;

//* Örnek - 2
//* Kullanıcının telefon bilgilerini bir değişkene atıyacaz ama telefon iphone mu yoksa android mi bilmiyoruz
type IOS = {
  model: string;
  iosVersion: number;
  airdropStatus: boolean;
};

type Android = {
  model: string;
  androidVersion: string;
  googlePlayVersion: number;
};

let phone: IOS | Android;

phone = {
  model: "17 pro",
  iosVersion: 26.0,
  airdropStatus: true,
};

// Union Type'ı nesneler ile kullandığımızda
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// bir değişkeni union type ile tanımlayalım
let example: AType | BType;

// değer atarken hata vermemesi için ya a tipinin bütün özellikleri tanımlanır
example = { key1: "x", key2: "y" };

// ya b tipinin bütün özellikleri tanımlanır
example = { key3: 1, key4: 2 };

// yada her iki tipin bütün özellikleri tanımlanabilir
example = { key1: "x", key2: "y", key3: 1, key4: 2 };
