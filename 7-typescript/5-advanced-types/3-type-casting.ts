/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılacağı yer özel bir tipte algılanması için type casting kullanılır
 * "as" operatörü ile kullanıldığı kod satırına özel değişkenin tipini belirleyebiliyoruz
*/

// Örnek - 1
type Product = {
  name: string;
  price: string | number;
};

let product: Product = {
  name: "Laptop",
  price: 50000,
};

/*
 * Normalde price string veya number olabilceğinden numberlara özel olan toFixed() methodunu kullanamayız
 * Product değişkeninde fiyatın sayı olduğunu bildiğimizden dolayı toFixed()'ı normalde kullanmamazın önüne bir engel yok ama ts izin vermiyor
 * Bu hatanın önüne geçmek için as kullanarak ts'e bu değişkenin şuan number tipinde olduğunu söyleriz
 */
(product.price as number).toFixed(2);

// Örnek
let kisi: unknown = {
  name: "John",
  age: 30,
  address: "123 ana sokak",
};

// kişi nesnesinin tipi unknown olduğu için name özelliğine erişemiyoruz
// kisi.name //! hata

// nesne için bir tip oluştururuz
interface IPerson {
  name: string;
  age: number;
  address: string;
}

// kişi nesnenin özelliklerine erişirken hata vermemesi için tür dönüşümü yapalım
const typedKisi = kisi as IPerson;

typedKisi.name;
typedKisi.address;
