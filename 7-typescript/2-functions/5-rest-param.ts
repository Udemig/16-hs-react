/*
 ! Rest Params
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.

 * Özellikleri
 * Bir parametreyi res param yapmak için "..." operatörünü kullanırız.
 * Bir res parametrenin ardından normal bir parametre gelemez
 * Sebebi rest parametrenin kaç değer alıcağının belli olmaması
 * Rest parametrenin aldığı değerler en son dizi haline gelir
*/

const yoklama = (ogretmen: string, ...ogrenciler: string[]) => {
  console.log(ogretmen + " yoklama alıyor");
  console.log("----------------------");
  ogrenciler.forEach((ogrenci) => console.log(ogrenci + " burdaaaaaaa!"));
};

yoklama("Ayşe Öğretmen", "Ali", "Ahment", "Fatma", "Faruk", "Ayşe");

/*
 * Örnek
 * İstenildiği kadar sayıyı parametre olarak alan bir fonksiyon yazınız
 * Parametre olarak aldığınız ilk 2 sayıyı çarpın ve console'a yazın
 * İlk 2 sayı dışında geri kalan bütün sayıları toplayın ve console'a yazın

 * hesapla(2,3,4,5,6,7)
 * log("Çarpım: 6")
 * log("Toplam: 22")
*/

const hesapla = (sayi1: number, sayi2: number, ...sayilar: number[]) => {
  console.log("Çarpım: ", sayi1 * sayi2);

  console.log(
    "Toplam:",
    sayilar.reduce((a, b) => a + b, 0),
  );
};

hesapla(2, 3, 4, 5, 6, 7);
