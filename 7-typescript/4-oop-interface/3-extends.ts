/*
 ! Interface Extends
 * Interface'ler extends ile bir/birkaç interface'i miras alabilir
 * Class'lardan farklı olarak birden fazla elemanı aynı anda miras almak mümkün
*/

// Örnek - 1

interface IEsya {
  isim: string;
  fiyat: number;
  marka: string;
}

interface IMobilya extends IEsya {
  renk: string;
  boyut: string;
}

const masa: IMobilya = {
  isim: "Bilgisayar Masası",
  fiyat: 2460,
  marka: "IKEA",
  renk: "Ceviz",
  boyut: "120x60",
};

// Örnek - 2

interface IEsya {
  isim: string;
  fiyat: number;
  marka: string;
}

interface IElektronik {
  sarj: boolean;
  garanti?: number;
  bataryaOmru: number;
}

interface IBilgisayar extends IEsya, IElektronik {
  islemci: string;
  ram: number;
}

const laptop: IBilgisayar = {
  isim: "Monster Abra A5",
  fiyat: 43700,
  marka: "Monster",
  sarj: true,
  garanti: 4,
  bataryaOmru: 24,
  islemci: "Inter i7",
  ram: 32,
};

/*
 ! Challange
 * İlk olarak 2 interface oluşturun
 * Ardından 3. bir interface oluşturun ve ilk 2 interface'i miras alın
 * Son olarak en son oluşturduğunuz interface'i bir nesne tipi tanımında kullanın
 * Yasaklı: Kisi, Bilgisayar, Araba
*/

interface ISpor {
  sporadi: string;
  oyuncuSayisi: number;
}
interface IGame {
  oyunAdi: string;
  oyuncuAdi: string;
}
interface IGenel extends ISpor, IGame {
  isim: string;
  minYas: number;
  deneyim: boolean;
}
const person: IGenel = {
  isim: "Mete",
  minYas: 22,
  deneyim: true,
  sporadi: "Veloybol",
  oyuncuSayisi: 10,
  oyunAdi: "Satranç",
  oyuncuAdi: "metex56",
};
