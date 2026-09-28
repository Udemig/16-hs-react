// Eğer nesnenin keyleri sabit ise klasik tip tanımlama yöntemi kullanırız
interface Yetki {
  rol: string;
  yazmaYetkisi: boolean;
  kullaniciBanladi: number;
}

const admin: Yetki = {
  rol: "admin",
  yazmaYetkisi: true,
  kullaniciBanladi: 20,
};

// Eğer nesnenin keyleri sabit değilde değişkense bu durumda Record tipi kullanırız
type TabloType = Record<string, number>;

const puanTablosu: TabloType = {
  ahmet: 94,
  ali: 67,
  murat: 34,
  fatma: 58,
  esra: 98,
};
