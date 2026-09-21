/*
 ! Typescript
 * Typescript, javascript'in tip tanımlanabilir bir üst versiyonu olarak microsoft tarafından geliştirilmiş bir programalama dilidir

 * TypeScript VS JavaScript ?
 * * JS'de koddaki hataları runtime'da görürüz
 * * TS'de koddaki hataları kod editöründeyken daha projeyi çalıştırmadan görürüz  
 
 * * JS'de tanımladığımız değişkene daha sonra farklı tipte değer ataması YAPILABİLİR
 * * TS'de tanımladığımız değişkene daha sonra farklı tipte değer ataması YAPILAMAZ
  
 * * JS'de çok kısıtlı bir otomatik tamamalama desteği bulunur
 * * TS'de çok daha geniş kapsamlı bir otomatik tamamlama desteği bulunur  
*/

let firstname: string = "Furkan";

firstname = "Ahmet";

// firstname = 78;

console.log(firstname);

const user = {
  name: "Ali",
  age: 45,
};

user.name;

// console.log(user.height);
