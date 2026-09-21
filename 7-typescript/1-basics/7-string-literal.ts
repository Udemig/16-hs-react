/*
 ! String Literal
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabileceği değer sayısı çok fazla değilse doğruda değerleri yazarak, tip değil değer kısıtlaması yaparız

 * Örn: Bir kullanıcı nesnesin tipini tanımlamak istiyoruz kullanıcının rolüne string yazmak yerine string olarak alabileceği 3-4 farklı değer üzerinden kısıtlama yaparız
*/

// Örnek-1
let user: {
  id: number;
  isim: string;
  rol: "admin" | "kullanıcı" | "ziyaretçi";
  cinsiyet: "erkek" | "kadın";
};

user = {
  id: 123,
  isim: "Ahmet",
  rol: "admin",
  cinsiyet: "erkek",
};

// Örnek - 2
let araba: {
  marka: string;
  model: string;
  yil: number;
  renk: string;
  yakit: "benzin" | "dizel" | "elektrik" | "hybrid" | "benzin+lpg";
  vites: "otomatik" | "manuel";
  aktarmaTuru: "arkadan itiş" | "önden çeker" | "4x4";
  km: number;
  agirHasar: boolean;
  yayinTarihi: Date;
  owner: any;
};

araba = {
  marka: "BMW",
  model: "320",
  yil: 2015,
  renk: "mavi",
  yakit: "dizel",
  vites: "otomatik",
  aktarmaTuru: "arkadan itiş",
  km: 89000,
  agirHasar: false,
  yayinTarihi: new Date("05-06-2026"),
  owner: { id: 1, name: "Ahmet" },
};
