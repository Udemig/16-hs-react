/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın interface'in içerisindeki bazı tipleri dinamik olarak aldığı parametreye göre değişmesini sağlar.
 * Generic özelliğini kullanarak fonksiyonu veya tipi kullanıcağımız zaman parametre olarak tip gönderebiliyoruz
 * Generic, kullandığımız yapının yeniden kullanılabilirliğini arttırır 
*/

/*
 ? Yazmak istediğim fonksiyon
 * 1) parametre olarak number dizisi gelirse rastgele sayı döndürsün
 * 2) parametre olarak string dizisi gelirse rastgele string döndürsün
*/
const getRandomElement = (array: number[] | string[]): number | string => {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
};

console.log(getRandomElement([5, 3, 7, 21, 68, 86, 32]));
console.log(getRandomElement(["a", "b", "c", "d", "e"]));

const getRandomNumber = (array: number[]): number => {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
};

const getRandomString = (array: string[]): string => {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
};

// generic yardımıyla fonksiyonu tekrar yazalım
// dinamik olmasını istediğimiz tipi generic parametre olarak alıcaz
const getRandomItem = <X>(array: X[]): X => {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
};

getRandomItem<string>(["a", "b", "c"]);
getRandomItem<number>([1, 2, 3]);

/* 
 ? Nerelerde karşımıza çıkıcak?
 * useState<number>(0)
 * useRef<HTMLInputElement>(input)
 * axios.get<UserType>("/api/users")
*/
