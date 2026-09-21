import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi, beforeEach, beforeAll } from "vitest";
import { ProductDetailPage } from "./ProductDetailPage";
import { useProduct, useProducts } from "../hooks/useData";
import { useCart } from "../context/useCart";

/**
 * Veri Çekme ve Context Hook'larının Mocklanması (vi.mock)
 *
 * ProductDetailPage bileşeni verileri useProduct ve useProducts custom hook'larından,
 * sepet işlemlerini ise useCart hook'undan alır.
 * Birim testlerinde gerçek ağ isteklerini ve sepet state'ini izole etmek için bu hook'ları taklit ediyoruz.
 */
vi.mock("../hooks/useData", () => ({
  useProduct: vi.fn(),
  useProducts: vi.fn(),
}));

vi.mock("../context/useCart", () => ({
  useCart: vi.fn(),
}));

describe("ProductDetailPage - Dinamik İçerik Testleri", () => {
  const mockAddItem = vi.fn();

  // Testlerde kullanılacak örnek dinamik ürün verisi
  const sampleProduct = {
    id: 1,
    name: "Bronte Antep Fıstığı",
    slug: "bronte-antep-fistigi",
    description: "Sicilya Bronte'den getirilen kavrulmuş fıstık parçaları ve saf fıstık ezmesi.",
    price: 140,
    image: "/images/pistachio.png",
    badge: "⭐ Çok Satan",
    badgeType: "popular",
    categories: ["nut", "special"],
    servingDefault: "Külah",
    origin: "Bronte, Sicilya / İtalya",
    rating: 4.8,
    reviewCount: 148,
    intensity: "Yoğun & Kremamsı",
    isVegan: true,
    ingredients: [
      "Taze Günlük Çiftlik Sütü",
      "DOP Bronte Antep Fıstığı Ezmesi (%22)",
      "Pancar Şekeri",
    ],
    nutrition: {
      calories: "245 kcal",
      protein: "7.2 g",
      fat: "14.5 g",
      carbs: "22.0 g",
    },
    allergens: ["Süt ve süt ürünleri (Laktoz)", "Antep Fıstığı (Ağaç yemişi)"],
    storage: "-18°C özel termo korumalı kutuda saklayınız.",
    pairing: "Sıcak bir İtalyan espresso ve taze brioche ile harika gider.",
  };

  // İlgili/önerilen ürünlerin test edilmesi için liste (mevcut ürün + 4 diğer ürün)
  const sampleProductsList = [
    sampleProduct,
    {
      id: 2,
      name: "Bitter & Deniz Tuzu",
      price: 130,
      image: "/images/chocolate.png",
      description: "Belçika çikolatası ve Maldon tuzu",
      servingDefault: "Külah",
    },
    {
      id: 3,
      name: "Bodrum Mandalinası",
      price: 110,
      image: "/images/tangerine.png",
      description: "Ferahlatıcı Ege mandalinası",
      servingDefault: "Bardak",
    },
    {
      id: 4,
      name: "Madagaskar Vanilya",
      price: 125,
      image: "/images/vanilla.png",
      description: "Doğal vanilya çubukları",
      servingDefault: "Külah",
    },
    {
      id: 5,
      name: "Orman Meyveli Sorbe",
      price: 135,
      image: "/images/berries.png",
      description: "Böğürtlen ve ahududu harmanı",
      servingDefault: "Bardak",
    },
  ];

  // Helper render fonksiyonu: React Router parametrelerini (/urun/:id) simüle eder
  const renderProductDetailPage = (productId = "1") => {
    return render(
      <MemoryRouter initialEntries={[`/urun/${productId}`]}>
        <Routes>
          <Route path="/urun/:id" element={<ProductDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );
  };

  beforeAll(() => {
    // jsdom ortamında window.scrollTo metodunu mockluyoruz
    window.scrollTo = vi.fn();
  });

  beforeEach(() => {
    vi.clearAllMocks();

    useCart.mockReturnValue({
      addItem: mockAddItem,
    });

    useProducts.mockReturnValue({
      products: sampleProductsList,
      loading: false,
      error: null,
    });
  });

  /**
   * TEST 1: Yüklenme Durumu Kontrolü (Loading State)
   *
   * Doğrular: useProduct loading durumundayken dinamik ürün detayları (isim, fiyat, görsel vb.)
   * ekranda yer almamalı; yüklenme göstergesi görüntülenmelidir.
   */
  it("ürün verisi yüklenirken (loading: true) dinamik detayları ekrana basmaz ve yükleniyor durumu gösterir", () => {
    useProduct.mockReturnValue({
      product: null,
      loading: true,
      error: null,
    });

    renderProductDetailPage("1");

    expect(screen.getByText("Lezzet detayları yükleniyor...")).toBeInTheDocument();
    expect(screen.queryByText("Bronte Antep Fıstığı")).not.toBeInTheDocument();
    expect(screen.queryByText("₺140")).not.toBeInTheDocument();
  });

  /**
   * TEST 2: Hata veya Bulunamayan Ürün Durumu (Error / Not Found State)
   *
   * Doğrular: Hook'tan hata döndüğünde ya da ürün bulunamadığında (product: null),
   * ürün detayları yerine "Ürün Bulunamadı" durumunu gösterir.
   */
  it("ürün bulunamadığında veya hata oluştuğunda hata mesajını gösterir ve detayları render etmez", () => {
    useProduct.mockReturnValue({
      product: null,
      loading: false,
      error: "Ürün bulunamadı",
    });

    renderProductDetailPage("999");

    expect(screen.getByText("Ürün Bulunamadı")).toBeInTheDocument();
    expect(screen.queryByText("Bronte Antep Fıstığı")).not.toBeInTheDocument();
  });

  /**
   * TEST 3: Temel Dinamik Ürün Bilgilerinin Render Edilmesi
   *
   * Doğrular: Ürünün adı, açıklaması, birim fiyatı, görseli (src & alt),
   * menşe (origin), yoğunluk (intensity), rozet (badge) ve veganlık durumu doğru basılır.
   */
  it("ürün verisi başarıyla geldiğinde temel dinamik alanları doğru şekilde render eder", () => {
    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    // Dinamik isim (Başlıkta ve breadcrumb içinde aranır)
    const nameHeadings = screen.getAllByText("Bronte Antep Fıstığı");
    expect(nameHeadings.length).toBeGreaterThanOrEqual(1);

    // Dinamik açıklama ve birim fiyat (hem birim fiyat hem subtotal '₺140' içerir)
    expect(screen.getByText(sampleProduct.description)).toBeInTheDocument();
    expect(screen.getAllByText("₺140").length).toBeGreaterThanOrEqual(1);

    // Dinamik görsel src ve alt öznitelikleri
    const mainImg = screen.getByAltText("Bronte Antep Fıstığı");
    expect(mainImg).toHaveAttribute("src", "/images/pistachio.png");

    // Dinamik rozetler ve etiketler
    expect(screen.getByText("⭐ Çok Satan")).toBeInTheDocument();
    expect(screen.getByText("%100 Vegan")).toBeInTheDocument();
    expect(screen.getByText("Bronte, Sicilya / İtalya")).toBeInTheDocument();
    expect(screen.getByText("Yoğun & Kremamsı")).toBeInTheDocument();

    // Dinamik değerlendirme puanı ve değerlendirme sayısı
    expect(screen.getByText("4.8")).toBeInTheDocument();
    expect(screen.getByText("(148 Gurme Değerlendirmesi)")).toBeInTheDocument();
  });

  /**
   * TEST 4: İsteğe Bağlı (Optional) Dinamik Alanlar ve Varsayılan (Fallback) Değerler
   *
   * Doğrular: origin, intensity, badge, isVegan gibi alanlar undefined/false olduğunda
   * bu rozetler render edilmez; rating, reviewCount ve pairing için varsayılan fallback metinleri kullanılır.
   */
  it("opsiyonel alanlar boş geldiğinde rozetleri gizler ve varsayılan fallback değerleri kullanır", () => {
    const minimalProduct = {
      id: 99,
      name: "Sade Sütlü",
      description: "Klasik taze sütlü dondurma",
      price: 100,
      image: "/images/plain.png",
      badge: null,
      isVegan: false,
      origin: null,
      intensity: null,
      rating: undefined,
      reviewCount: undefined,
      ingredients: [],
      nutrition: null,
      allergens: null,
      storage: null,
      pairing: null,
    };

    useProduct.mockReturnValue({
      product: minimalProduct,
      loading: false,
      error: null,
    });

    useProducts.mockReturnValue({
      products: [],
      loading: false,
      error: null,
    });

    renderProductDetailPage("99");

    // Olmayan rozetler ekranda yer almamalıdır
    expect(screen.queryByText("%100 Vegan")).not.toBeInTheDocument();
    expect(screen.queryByText("Bronte, Sicilya / İtalya")).not.toBeInTheDocument();
    expect(screen.queryByText("⭐ Çok Satan")).not.toBeInTheDocument();

    // Varsayılan rating ve reviewCount fallback kontrolü
    expect(screen.getByText("5.0")).toBeInTheDocument();
    expect(screen.getByText("(120 Gurme Değerlendirmesi)")).toBeInTheDocument();

    // Varsayılan pairing notu fallback kontrolü
    expect(
      screen.getByText(
        /En iyi deneyim için hafif oda sıcaklığında, sıcak bir espresso ile birlikte tadını çıkarın/i,
      ),
    ).toBeInTheDocument();
  });

  /**
   * TEST 5: Dinamik İçerik, Besin Değerleri, Alerjenler ve Saklama Bilgileri
   *
   * Doğrular: Ürünün API'den gelen dinamik içerik listesi (ingredients),
   * besin değerleri (nutrition), alerjen listesi (allergens), saklama talimatı (storage)
   * ve şef eşleşme notu (pairing) eksiksiz basılır.
   */
  it("ürünün dinamik içerik, besin tablosu, alerjen, saklama ve şef notunu ekrana basar", () => {
    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    // İçindekiler listesi (ingredients)
    sampleProduct.ingredients.forEach((ing) => {
      expect(screen.getByText(ing)).toBeInTheDocument();
    });

    // Besin değerleri (nutrition)
    expect(screen.getByText("245 kcal")).toBeInTheDocument();
    expect(screen.getByText("7.2 g")).toBeInTheDocument();
    expect(screen.getByText("14.5 g")).toBeInTheDocument();
    expect(screen.getByText("22.0 g")).toBeInTheDocument();

    // Alerjenler (allergens)
    sampleProduct.allergens.forEach((allergen) => {
      expect(screen.getByText(allergen)).toBeInTheDocument();
    });

    // Saklama bilgisi (storage) ve özel tadım notu (pairing)
    expect(screen.getByText(sampleProduct.storage)).toBeInTheDocument();
    expect(screen.getByText(`“${sampleProduct.pairing}”`)).toBeInTheDocument();
  });

  /**
   * TEST 6: Dinamik Sunum Tercihi Değişimi (ServingToggle Etkileşimi)
   *
   * Doğrular: Başlangıçta product.servingDefault ('Külah') seçilidir.
   * Kullanıcı 'Bardak' butonuna tıkladığında sunum tercihi 'Bardak' olarak güncellenir ve
   * sepete eklerken bu dinamik seçim aktarılır.
   */
  it("kullanıcı sunum tercihini değiştirdiğinde güncellenen tercihi sepete aktarır", async () => {
    const user = userEvent.setup();

    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    // Ana ürün sipariş panelindeki 'Bardak 🍨' butonuna tıklıyoruz (ilk ServingToggle)
    const [mainCupButton] = screen.getAllByRole("button", { name: /bardak/i });
    await user.click(mainCupButton);

    // Ana ürünün 'Sepete Ekle • ₺...' butonuna basıyoruz
    const addToCartButton = screen.getByRole("button", { name: /sepete ekle •/i });
    await user.click(addToCartButton);

    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith(
      expect.objectContaining({
        serving: "Bardak",
      }),
    );
  });

  /**
   * TEST 7: Miktar Değişimi ve Ara Toplamın (Subtotal) Dinamik Hesaplanması
   *
   * Doğrular: Adet 1 iken subtotal = fiyat (140₺).
   * Miktar artırıldığında (2 adet), ekrandaki toplam tutar ve buton üzerindeki tutar
   * dinamik olarak 280₺ (140 * 2) şeklinde yeniden hesaplanır.
   */
  it("miktar artırıldığında ara toplamı (subtotal) ve buton etiketini dinamik olarak yeniden hesaplar", async () => {
    const user = userEvent.setup();

    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    // Başlangıç: 1 adet -> ₺140
    expect(screen.getAllByText("₺140").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("button", { name: /Sepete Ekle • ₺140/i })).toBeInTheDocument();

    // Ana ürün panelindeki 'Miktarı artır' butonuna tıklıyoruz (ilk QuantityStepper)
    const [mainIncrementButton] = screen.getAllByRole("button", { name: /miktarı artır/i });
    await user.click(mainIncrementButton);

    // 2 adet için ara toplam = 280₺
    expect(screen.getByText("₺280")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Sepete Ekle • ₺280/i })).toBeInTheDocument();
  });

  /**
   * TEST 8: Sepete Ekleme Aksiyonu (handleAddToCart) ve Dinamik Başarı Geri Bildirimi
   *
   * Doğrular: 'Sepete Ekle' butonuna tıklandığında useCart'tan gelen addItem fonksiyonu
   * seçili dinamik verilerle (id, name, price, serving, quantity, image) çağrılır
   * ve buton dinamik olarak 'Sepete Eklendi! ✓' durumuna geçer.
   */
  it("sepete ekle butonuna tıklandığında addItem fonksiyonunu doğru parametrelerle çağırır ve durumunu günceller", async () => {
    const user = userEvent.setup();

    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    // Ana ürün miktarını 2 yapalım
    const [mainIncrementButton] = screen.getAllByRole("button", { name: /miktarı artır/i });
    await user.click(mainIncrementButton);

    // Ana ürünün Sepete Ekle butonuna tıklıyoruz
    const addToCartButton = screen.getByRole("button", { name: /Sepete Ekle • ₺280/i });
    await user.click(addToCartButton);

    // addItem parametrelerinin dinamik alanlarla uyumu
    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith({
      id: 1,
      name: "Bronte Antep Fıstığı",
      price: 140,
      serving: "Külah",
      quantity: 2,
      image: "/images/pistachio.png",
    });

    // Butonun dinamik başarı durumu metni
    expect(screen.getByText("Sepete Eklendi! ✓")).toBeInTheDocument();
  });

  /**
   * TEST 9: İlgili/Benzer Ürünlerin (Related Products) Dinamik Filtrelenmesi ve Gösterimi
   *
   * Doğrular:
   * - İlgili ürünler listesinde mevcut ürün (id: 1) hariç tutulur (exclude current).
   * - En fazla ilk 3 farklı ürün (id: 2, 3, 4) listelenir; 4. ürün (id: 5) gösterilmez.
   * - Başka ürün yoksa ilgili ürünler bölümü ekranda yer almaz.
   */
  it("ilgili ürünler listesinde mevcut ürünü hariç tutarak en fazla 3 dinamik öneri kartı listeler", () => {
    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    // Önerilen ürünler listesinde id: 2, id: 3 ve id: 4 kartları bulunmalıdır
    expect(screen.getByText("Bitter & Deniz Tuzu")).toBeInTheDocument();
    expect(screen.getByText("Bodrum Mandalinası")).toBeInTheDocument();
    expect(screen.getByText("Madagaskar Vanilya")).toBeInTheDocument();

    // Slice(0, 3) sınırından dolayı 4. farklı ürün (id: 5) render edilmemelidir
    expect(screen.queryByText("Orman Meyveli Sorbe")).not.toBeInTheDocument();
  });

  /**
   * TEST 10: Başka Ürün Olmadığında İlgili Ürünler Bölümünün Gizlenmesi
   *
   * Doğrular: useProducts sadece mevcut ürünü döndürdüğünde veya boş olduğunda,
   * relatedProducts uzunluğu 0 olacağı için ilgili ürünler bölümü DOM'a eklenmez.
   */
  it("başka ürün bulunmadığında ilgili ürünler bölümünü render etmez", () => {
    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    // Sadece mevcut ürün var, başka ürün yok
    useProducts.mockReturnValue({
      products: [sampleProduct],
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    // Başka ürün olmadığı için öneri bölümü başlığı basılmamalıdır
    expect(screen.queryByText("Bunu Sevenler Bunları da Sevdi")).not.toBeInTheDocument();
  });

  /**
   * TEST 11: Sayfa Yüklendiğinde Başa Kaydırma (window.scrollTo)
   *
   * Doğrular: Sayfa yüklendiğinde useEffect içindeki window.scrollTo({ top: 0, behavior: 'smooth' })
   * çağrısının tetiklendiğini doğrular.
   */
  it("sayfa render edildiğinde pencereyi en başa kaydırır", () => {
    useProduct.mockReturnValue({
      product: sampleProduct,
      loading: false,
      error: null,
    });

    renderProductDetailPage("1");

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
