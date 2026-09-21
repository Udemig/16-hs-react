/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'deki varolan tiplerin yanısıra birkaç ts'e özel tip kullandık.
 * Kapsamlı projelerde o an yaptığımız işe özel spesifik tiplere ihtiyaç duyarız
 * Bunları tnaımlamak için type anahtar kalimesini kullanarak kendi tiplerimizi oluşturabiliriz

 * Neden ihtiyaç duyarız ?
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde defalarca kullanabiliyoruz her seferinde baştan yazmak yerine kendi tipimizi oluşturup ismiyle çağırmak kod kalabalığını azaltır 
*/

// Örnek - 1
// Kendi özel tipimizi oluşturalım
type metinTipi = string;

// kendi oluşturduğumuz tipi kullanalım
let kullaniciAdi: metinTipi = "Furkan";

// Örnek-2
// Uçuş projesinde sıkça kullandığımız [enlem,boylam] dizisi vardı

// type aliases kullanmadan
const x1: [number, number] = [45.654, 85.234];
const y1: [number, number] = [13.435, 23.876];
const z1: [number, number] = [41.546, 11.324];
const flightRoute1: [number, number][] = [x1, y1, z1, x1, z1];

// type aliases kullanarak
type Coord = [number, number];

const x2: Coord = [45.654, 85.234];
const y2: Coord = [13.435, 23.876];
const z2: Coord = [41.546, 11.324];
const flightRoute2: Coord[] = [x2, y2, z2, x2, z2];

// Örnek-3
// Ayne nesne tipini birden fazla kullanmamız gereken bir seneryo

// type aliases kullanmadan
const user1: { id: number; name: string; surname: string; age: number } = {
  id: 1,
  name: "ali",
  surname: "kaya",
  age: 32,
};

const user2: { id: number; name: string; surname: string; age: number } = {
  id: 2,
  name: "ayşe",
  surname: "yılmaz",
  age: 24,
};

const user3: { id: number; name: string; surname: string; age: number } = {
  id: 3,
  name: "mahmut",
  surname: "uçuş",
  age: 33,
};

const users1: { id: number; name: string; surname: string; age: number }[] = [user1, user2, user3];

// type aliases kullanırsak
type User = { id: number; name: string; surname: string; age: number };

const user4: User = {
  id: 1,
  name: "ali",
  surname: "kaya",
  age: 32,
};

const user5: User = {
  id: 2,
  name: "ayşe",
  surname: "yılmaz",
  age: 24,
};

const user6: User = {
  id: 3,
  name: "mahmut",
  surname: "uçuş",
  age: 33,
};

const users2: User[] = [user5, user5, user6];
