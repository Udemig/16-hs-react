const { getData } = require("../utils/getData");
const { setData } = require("../utils/setData");
const crypto = require("crypto");

// json sosyasından verileri alıyoruz
let data = getData();

// Yüksek kaliteli otel/resort/konaklama görselleri havuzu (Unsplash)
const HOTEL_IMAGE_POOL = [
  // Lüks oteller ve lobiler
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  // Otel odaları
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
  // Havuz ve dış mekan
  "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
  "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=800&q=80",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
  "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80",
  // Villalar ve bungalovlar
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
  // Doğa ve manzara
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
  // Spa ve wellness
  "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=800&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
  "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80",
  // Resort ve sahil
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
  "https://images.unsplash.com/photo-1520483601560-389dff434fdf?w=800&q=80",
  "https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  // Modern iç mekan
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
  // Restoran ve yemek alanları
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  // Ek görseller
  "https://images.unsplash.com/photo-1700588528641-04cb45c7de11?w=800&q=80",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
  "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=800&q=80",
  "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&q=80",
];

// Havuzdan rastgele n adet benzersiz görsel seçer (Fisher-Yates)
function getRandomImages(count = 5) {
  const pool = [...HOTEL_IMAGE_POOL];
  const selected = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    selected.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return selected;
}

exports.getAllRecipes = (req, res) => {
  // tariflerin bir kopyasını oluşturyoruz
  let places = [...data];

  // aratılan terime eriş
  const searchTerm = req.query?.title?.trim()?.toLowerCase();
  const location = req.query?.location?.trim()?.toLowerCase();

  // sırlama parametresine eriş
  const order = req.query.order;

  console.log("param", req.query);

  // eğerki artılan terim varsa filtrele
  if (searchTerm) {
    places = data.filter((recipe) => recipe.name.toLowerCase().includes(searchTerm));
  }

  if (location) {
    places = places.filter((recipe) => recipe.location.toLowerCase().includes(location));
  }

  // eğerki order varsa sırala
  if (order) {
    places.sort((a, b) =>
      order === "rating-asc"
        ? a.rating - b.rating
        : order === "rating-desc"
        ? b.rating - a.rating
        : order === "price-asc"
        ? a.price_per_night - b.price_per_night
        : b.price_per_night - a.price_per_night
    );
  }

  // cevap gönder
  res.status(200).json({
    message: "Konaklama Noktaları başarıyla gönderildi",
    results: places.length,
    places: places,
  });
};

exports.createRecipe = (req, res) => {
  //1) isteğin body'si ile gelen veriye eriş
  const newRecipe = req.body;

  //2) verinin bütün değerleri tanımlanmışmı kontrol et
  if (
    !newRecipe.name ||
    !newRecipe.location ||
    !newRecipe.address ||
    !newRecipe.description ||
    !newRecipe.amenities ||
    !newRecipe.rating ||
    !newRecipe.price_per_night
  ) {
    return res.status(400).json({ message: "Lütfen bütün değerli tanımlayın" });
  }

  //! string olarak gelen özellikleri diziye çevir
  newRecipe.amenities = newRecipe.amenities.split(",");

  //3) veriye id ekle
  newRecipe.id = crypto.randomUUID();

  // Rastgele 5 güzel otel görseli seç
  newRecipe.images = getRandomImages(5);

  //4) yeni tarifi diziyi ekle
  data.push(newRecipe);

  //5) yeni diziyi json dosyasına yaz
  setData(data);

  //6) cevap gönder
  res.status(200).json({
    message: "Yeni konaklama noktası oluşturuldu",
    place: newRecipe,
  });
};

exports.getRecipe = (req, res) => {
  // cevap gönderdik
  res.status(200).json({
    message: "Aradığınız veri bulundu",
    place: req.recipe,
  });
};

exports.deleteRecipe = (req, res) => {
  // silinecek elemanın sırasını bul
  const index = data.findIndex((i) => i.id == req.params.id);

  // sırası bilenen elemanı diziden kaldır
  data.splice(index, 1);

  // json dosyasını güncelle
  setData(data);

  // cevap gönder
  res.status(204).json({ message: "Başarıyla Silindi" });
};
