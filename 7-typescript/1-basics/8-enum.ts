/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
*/

// Örnek - 1
// Trafik ışığının aşamalarının verisini tut

// 1) klasik js yöntemi
const renkler = {
  kirmizi: 0,
  sari: 1,
  yesil: 2,
};

const yananIsik1: number = renkler.kirmizi;

// 2) typescript enum yöntemi
enum Renk {
  kirmizi,
  sari,
  yesil,
}

const yananIsik2: Renk = Renk.kirmizi;

// Örnek - 2
enum Gun {
  pazartesi = 1,
  sali,
  carsamba,
  persembe,
  cuma,
  cumartesi,
  pazar,
}

const gun1: Gun = Gun.pazartesi;
const gun6: string = Gun[6];

console.log("Gün-1", gun1);
console.log("Gün-6", gun6);

// Örnek-3
// Bir kargo takip sitesi yazıyoruz ve kullanıcılara sıklıkla kargo durumunu bildirmek gerekiyor. Bu durumda kargo aşamalarını js'de bir nesneye atar ve ordan çağırırdık ts'de ise daha kullanışlı olması için enum'ı tercih ederiz
enum Status {
  pending = "Beklemede",
  on_the_way = "Yolda",
  delivered = "Teslim edildi",
  canceled = "İptal edildi",
}

let kullanici_kargo_durumu: Status = Status.on_the_way;
