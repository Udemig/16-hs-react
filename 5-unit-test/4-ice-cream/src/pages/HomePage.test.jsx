import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { HomePage } from "./HomePage";
import { useProducts, useFeaturedProducts, useReviews, useSiteData } from "../hooks/useData";
import { useCart } from "../context/useCart";

/**
 * Veri Çekme Hook'larının Mocklanması (vi.mock)
 *
 * HomePage doğrudan API'ye istek atmak yerine custom hook'ları kullanır.
 * Birim testlerinde gerçek ağ istekleri yapmamak ve farklı durumları
 * (yükleniyor, yüklendi, boş liste vb.) simüle etmek için bu hook'ları taklit (mock) ediyoruz.
 */
vi.mock("../hooks/useData", () => ({
  useProducts: vi.fn(),
  useFeaturedProducts: vi.fn(),
  useReviews: vi.fn(),
  useSiteData: vi.fn(),
}));

/**
 * Sepet Context Hook'unun Mocklanması (vi.mock)
 *
 * Sepete ürün ekleme fonksiyonlarının (quickAdd, addItem) doğru parametrelerle
 * çağrılıp çağrılmadığını takip edebilmek için useCart hook'unu taklit ediyoruz.
 */
vi.mock("../context/useCart", () => ({
  useCart: vi.fn(),
}));

describe("HomePage - Dinamik İçerik Testleri", () => {
  // Sepet aksiyonlarını takip edecek taklit fonksiyonlar (spies)
  const mockQuickAdd = vi.fn();
  const mockAddItem = vi.fn();

  // Testlerde kullanılacak örnek dinamik veri setleri
  const sampleFeatured = [
    {
      id: 1,
      name: "Pistacchio Puro",
      description: "Sicilya fıstığı ziyafeti",
      price: 140,
      image: "/images/pistachio.png",
      badge: "Şefin İmzası",
      originLabel: "Sicilya, Bronte",
      certLabel: "DOP Sertifikalı",
      labelColor: "tertiary",
      servingDefault: "Külah",
    },
  ];

  const sampleProducts = [
    {
      id: 10,
      name: "Limon & Fesleğen Sorbe",
      description: "Bodrum limonlu ferahlatıcı sorbe",
      price: 120,
      image: "/images/lemon.png",
      badge: "Ferahlatıcı",
      badgeType: "refreshing",
      categories: ["fruit"],
      servingDefault: "Bardak",
    },
  ];

  const sampleCategories = [
    { id: "all", label: "Tümü" },
    { id: "fruit", label: "Meyveli" },
  ];

  const sampleBenefits = [
    {
      icon: "eco",
      title: "Doğal & Katkısız",
      description: "Hiçbir yapay renklendirici içermez",
    },
  ];

  const sampleDeliveryZones = [{ id: 1, name: "kadıköy" }];

  const sampleReviews = [
    {
      id: 1,
      name: "Ayşe K.",
      initials: "AK",
      location: "Moda",
      text: "Yediğim en lezzetli gelato!",
      rating: 5,
    },
  ];

  const samplePromo = {
    badge: "Özel Fırsat",
    title: "Hafta Ortası Tatlısı",
    description: "3 top alana 1 top hediye!",
    ctaText: "Fırsatı Yakala",
    ctaLink: "#urunler",
  };

  const sampleStoreInfo = {
    address: "Caferağa Mah. Moda Cad. No:42",
    phone: "0216 555 0123",
    heroImage: "/images/custom-hero.png",
    aboutImage: "/images/custom-about.png",
  };

  beforeEach(() => {
    // Her test öncesi mock geçmişlerini temizliyoruz
    vi.clearAllMocks();

    // useCart varsayılan dönüş değeri
    useCart.mockReturnValue({
      quickAdd: mockQuickAdd,
      addItem: mockAddItem,
    });
  });

  /**
   * TEST 1: Yüklenme Durumu Kontrolü
   *
   * Ne yapar: API'den veriler henüz yüklenirken (loading: true), dinamik bölümlerin
   * (avantajlar, öne çıkanlar, ürün listesi, kampanya, yorumlar, mağaza bilgisi)
   * ekranda boş veya yarım yamalak gözükmediğini (render edilmediğini) doğrular.
   */
  it("veriler yüklenirken (loading: true) dinamik bölümleri ekrana basmaz", () => {
    useProducts.mockReturnValue({ products: [], loading: true });
    useFeaturedProducts.mockReturnValue({ featuredProducts: [], loading: true });
    useReviews.mockReturnValue({ reviews: [], loading: true });
    useSiteData.mockReturnValue({
      benefits: [],
      categories: [],
      deliveryZones: [],
      storeInfo: null,
      promo: null,
      loading: true,
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    // Dinamik içerik öğeleri yüklenme esnasında DOM'da bulunmamalıdır
    expect(screen.queryByText("Doğal & Katkısız")).not.toBeInTheDocument();
    expect(screen.queryByText("Pistacchio Puro")).not.toBeInTheDocument();
    expect(screen.queryByText("Limon & Fesleğen Sorbe")).not.toBeInTheDocument();
    expect(screen.queryByText("Hafta Ortası Tatlısı")).not.toBeInTheDocument();
    expect(screen.queryByText("Ayşe K.")).not.toBeInTheDocument();
    expect(screen.queryByText(/Caferağa Mah/)).not.toBeInTheDocument();
  });

  /**
   * TEST 2: Dinamik Verilerin Render Edilmesi
   *
   * Ne yapar: Hook'lardan veriler başarıyla döndüğünde; avantaj başlıkları,
   * öne çıkan ürün detayları, ürün kartları, kategori filtreleri, kampanya panosu,
   * müşteri yorumları ve mağaza adresinin sayfaya basıldığını teyit eder.
   */
  it("veriler yüklendiğinde dinamik içerikleri doğru şekilde ekrana basar", () => {
    useProducts.mockReturnValue({ products: sampleProducts, loading: false });
    useFeaturedProducts.mockReturnValue({ featuredProducts: sampleFeatured, loading: false });
    useReviews.mockReturnValue({ reviews: sampleReviews, loading: false });
    useSiteData.mockReturnValue({
      benefits: sampleBenefits,
      categories: sampleCategories,
      deliveryZones: sampleDeliveryZones,
      storeInfo: sampleStoreInfo,
      promo: samplePromo,
      loading: false,
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    // 1. Avantajlar (Benefits) kontrolü
    expect(screen.getByText("Doğal & Katkısız")).toBeInTheDocument();

    // 2. Öne çıkan ürünler kontrolü
    expect(screen.getByText("Pistacchio Puro")).toBeInTheDocument();
    expect(screen.getByText("140 ₺")).toBeInTheDocument();

    // 3. Ürünler ve dinamik kategori filtresi kontrolü
    expect(screen.getByText("Limon & Fesleğen Sorbe")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Meyveli/i })).toBeInTheDocument();

    // 4. Kampanya panosu (Promo) kontrolü
    expect(screen.getByText("Hafta Ortası Tatlısı")).toBeInTheDocument();
    expect(screen.getByText("Fırsatı Yakala")).toBeInTheDocument();

    // 5. Müşteri yorumları (Reviews) kontrolü
    expect(screen.getByText("Ayşe K.")).toBeInTheDocument();
    expect(screen.getByText('"Yediğim en lezzetli gelato!"')).toBeInTheDocument();

    // 6. Mağaza iletişim ve adres bilgisi kontrolü
    expect(screen.getByText(/Caferağa Mah. Moda Cad. No:42/)).toBeInTheDocument();
  });

  /**
   * TEST 3: Dinamik Hero Görseli ve Yedek (Fallback) Mekanizması
   *
   * Ne yapar:
   * - Mağaza bilgisinde özel bir heroImage varsa (`/images/custom-hero.png`), ana görselin bu adresi kullandığını,
   * - Mağaza bilgisi boş/tanımsız ise varsayılan yedek görselin (`/images/mix.png`) kullanıldığını doğrular.
   */
  it("hero görselini storeInfo üzerinden dinamik alır, yoksa varsayılan görsele döner", () => {
    useProducts.mockReturnValue({ products: [], loading: false });
    useFeaturedProducts.mockReturnValue({ featuredProducts: [], loading: false });
    useReviews.mockReturnValue({ reviews: [], loading: false });

    // Durum 1: storeInfo içinde özel heroImage tanımlı
    useSiteData.mockReturnValue({
      benefits: [],
      categories: [],
      deliveryZones: [],
      storeInfo: { heroImage: "/images/custom-hero.png" },
      promo: null,
      loading: false,
    });

    const { rerender } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const heroImgWithCustom = screen.getByAltText(/artisan gelato scoops/i);
    expect(heroImgWithCustom).toHaveAttribute("src", "/images/custom-hero.png");

    // Durum 2: storeInfo null (Yedek görsel devreye girmeli)
    useSiteData.mockReturnValue({
      benefits: [],
      categories: [],
      deliveryZones: [],
      storeInfo: null,
      promo: null,
      loading: false,
    });

    rerender(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const heroImgWithDefault = screen.getByAltText(/artisan gelato scoops/i);
    expect(heroImgWithDefault).toHaveAttribute("src", "/images/mix.png");
  });

  /**
   * TEST 4: Öne Çıkan Ürünü Hızlı Ekleme (handleQuickAdd Etkileşimi)
   *
   * Ne yapar: Öne çıkan kartta yer alan 'Hemen Ekle' butonuna tıklandığında,
   * useCart'tan gelen quickAdd fonksiyonunun o ürünün dinamik verileriyle
   * (isim, fiyat, varsayılan sunum türü, görsel ve id) tam olarak bir kez tetiklendiğini doğrular.
   */
  it("öne çıkan karttaki hemen ekle butonuna tıklandığında quickAdd fonksiyonunu doğru parametrelerle çağırır", async () => {
    const user = userEvent.setup();

    useProducts.mockReturnValue({ products: [], loading: false });
    useFeaturedProducts.mockReturnValue({ featuredProducts: sampleFeatured, loading: false });
    useReviews.mockReturnValue({ reviews: [], loading: false });
    useSiteData.mockReturnValue({
      benefits: [],
      categories: [],
      deliveryZones: [],
      storeInfo: null,
      promo: null,
      loading: false,
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const quickAddButton = screen.getByRole("button", { name: /hemen ekle/i });

    await user.click(quickAddButton);

    // quickAdd fonksiyonunun ürünün dinamik alanlarıyla çağrıldığını doğrular
    expect(mockQuickAdd).toHaveBeenCalledTimes(1);
    expect(mockQuickAdd).toHaveBeenCalledWith(
      "Pistacchio Puro",
      140,
      "Külah",
      "/images/pistachio.png",
      1,
    );
  });

  /**
   * TEST 5: Ürün Kartından Sepete Ekleme (handleAddToCart Etkileşimi)
   *
   * Ne yapar: Genel ürünler listesindeki bir dondurma kartında 'Sepete Ekle'
   * tıklandığında, useCart'tan gelen addItem fonksiyonunun seçilen konfigürasyon
   * (id, isim, fiyat, sunum tercihi, miktar ve görsel) ile çağrıldığını doğrular.
   */
  it("ürün kartındaki sepete ekle butonuna tıklandığında addItem fonksiyonunu seçili ürün bilgileriyle çağırır", async () => {
    const user = userEvent.setup();

    useProducts.mockReturnValue({ products: sampleProducts, loading: false });
    useFeaturedProducts.mockReturnValue({ featuredProducts: [], loading: false });
    useReviews.mockReturnValue({ reviews: [], loading: false });
    useSiteData.mockReturnValue({
      benefits: [],
      categories: sampleCategories,
      deliveryZones: [],
      storeInfo: null,
      promo: null,
      loading: false,
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const addToCartButton = screen.getByRole("button", { name: /sepete ekle/i });
    await user.click(addToCartButton);

    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith({
      id: 10,
      name: "Limon & Fesleğen Sorbe",
      price: 120,
      serving: "Bardak",
      quantity: 1,
      image: "/images/lemon.png",
    });
  });

  /**
   * TEST 6: Dinamik Teslimat Bölgesi Kontrolü
   *
   * Ne yapar: Kullanıcı teslimat kutusuna semt adı girdiğinde (örn. 'Kadıköy'),
   * bu girdinin dinamik deliveryZones listesiyle karşılaştırılıp eşleşme durumunda
   * kullanıcıya teslimat süresi ve olumlu teyit mesajının sunulduğunu doğrular.
   */
  it("girilen semti dinamik deliveryZones verisine göre kontrol eder ve başarı mesajı gösterir", async () => {
    const user = userEvent.setup();

    useProducts.mockReturnValue({ products: [], loading: false });
    useFeaturedProducts.mockReturnValue({ featuredProducts: [], loading: false });
    useReviews.mockReturnValue({ reviews: [], loading: false });
    useSiteData.mockReturnValue({
      benefits: [],
      categories: [],
      deliveryZones: [{ id: 1, name: "kadıköy" }],
      storeInfo: null,
      promo: null,
      loading: false,
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText(/Semt veya Mahalle yazın/i);
    const checkBtn = screen.getByRole("button", { name: /Kontrol Et/i });

    // Geçerli bir bölge yazıp butona tıklanması
    await user.type(input, "Kadıköy");
    await user.click(checkBtn);

    // Ekranda dinamik başarı mesajının yer alması
    expect(
      screen.getByText(/termo-çanta ile ortalama 25-35 dakikada teslimat yapılmaktadır/i),
    ).toBeInTheDocument();
  });

  /**
   * TEST 7: Boş veya Null Veri Setlerinin Yönetimi
   *
   * Ne yapar: Öne çıkanlar dizisi veya müşteri yorumları dizisi boş geldiğinde,
   * ya da kampanya verisi null olduğunda; ilgili bölümlerin başlıklarının ekrana basılmadığını,
   * uygulamanın hata vermeden sadece verisi olan bölümleri (ürün listesi) göstermeye devam ettiğini doğrular.
   */
  it("isteğe bağlı bölümlerin verisi boş dizi veya null geldiğinde o bölümleri gizler", () => {
    useProducts.mockReturnValue({ products: sampleProducts, loading: false });
    useFeaturedProducts.mockReturnValue({ featuredProducts: [], loading: false });
    useReviews.mockReturnValue({ reviews: [], loading: false });
    useSiteData.mockReturnValue({
      benefits: [],
      categories: sampleCategories,
      deliveryZones: [],
      storeInfo: null,
      promo: null,
      loading: false,
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    // Boş veri nedeniyle başlıklar ekrana basılmamalı
    expect(screen.queryByText("En Sevilen Tatlarımız")).not.toBeInTheDocument();
    expect(screen.queryByText("Müşteri Değerlendirmeleri")).not.toBeInTheDocument();

    // Verisi dolu olan ürünler bölümü sorunsuz görüntülenmeye devam etmeli
    expect(screen.getByText("Limon & Fesleğen Sorbe")).toBeInTheDocument();
  });
});
