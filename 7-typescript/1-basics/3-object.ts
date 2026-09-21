/*
 ! Object
 * Normal şartlarda TS'de bir object type'ı mevcut ama object type'ının ucu çok açık olduğundan kullanmayı terchih etmiyoruz
 * Onun yerine nesne içerisinde özelliklerin tiplerini ayrı ayrı tanımlamayı tercih ederiz
*/

// nesne tipi tanımlamanın yanlış yolu
let data: object;

data = {};
data = [];
data = () => {};
data = new Date();

// nesne tipi tanımlamanın doğru yolu
let ogrenci: {
  id: number;
  ad: string;
  soyad: string;
  mezunMu: boolean;
};

// belirlediğimiz tipe göre değer ataması yapalım
ogrenci = {
  id: 890,
  ad: "Ali",
  soyad: "Yılmaz",
  mezunMu: true,
};

/*
  ! Görev
  * urun isminde bir değişken oluşturun (nesne)
  * nesne içerisinde ürünün string / number / boolean tiplerinde keyleri olsun
  * nesneninn önce tipini ardından değerini tanımla
*/
