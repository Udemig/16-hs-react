interface IAdres {
  ulke: string;
  sehir: string;
  sokak: string;
}

interface IEgitim {
  okulAdi: string;
  mezuniyetYili: number;
  derece: "Lisans" | "Ön Lisans";
}

interface IIs {
  sirkatAdi: string;
  pozisyon: string;
  baslangicYili: number;
  bitisYili: number;
}

interface IKisi {
  id: string;
  isim: string;
  soyisim: string;
  yas: number;
  adres: IAdres;
  egitim: IEgitim;
  is: IIs[];
}







// API'dan gelen verinin tipini tanımlayalım
const kisi: IKisi = {
  id: "12345",
  isim: "Ali",
  soyisim: "Solak",
  yas: 30,
  adres: {
    ulke: "Türkiye",
    sehir: "İstanbul",
    sokak: "Atatürk Caddesi No:10",
  },
  egitim: {
    okulAdi: "Boğaziçi Üniversitesi",
    mezuniyetYili: 2016,
    derece: "Lisans",
  },
  is: [
    {
      sirkatAdi: "Tech Solutions",
      pozisyon: "Yazılım Mühendisi",
      baslangicYili: 2016,
      bitisYili: 2019,
    },
  ],
};

const adresGuncelle = (yeniAdres: IAdres) => {
  kisi.adres = yeniAdres;
};
