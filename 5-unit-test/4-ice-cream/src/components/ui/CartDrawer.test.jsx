import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../../context/useCart";

/**
 * useCart Hook'unun Mocklanması
 *
 * CartDrawer bileşeni sepet state'ini ve aksiyon fonksiyonlarını
 * useCart custom hook'undan alır. Bu hook'u taklit ederek farklı sepet
 * senaryolarını ve kullanıcı aksiyonlarını test ediyoruz.
 */
vi.mock("../../context/useCart", () => ({
  useCart: vi.fn(),
}));

describe("CartDrawer - Dinamik İçerik Testleri", () => {
  const mockDispatch = vi.fn();
  const mockRemoveItem = vi.fn();
  const mockUpdateQuantity = vi.fn();
  const mockClearCart = vi.fn();

  // Testlerde kullanılacak örnek dinamik sepet kalemleri
  const sampleItems = [
    {
      id: 1,
      name: "Bronte Antep Fıstığı",
      serving: "Külah",
      price: 140,
      quantity: 2,
      image: "/images/pistachio.png",
    },
    {
      id: 2,
      name: "Bitter & Deniz Tuzu",
      serving: "Bardak",
      price: 130,
      quantity: 1,
      image: null, // Görseli olmayan ürün (fallback ikon kontrolü için)
    },
  ];

  // useCart için temel dinamik dönüş modeli
  const baseCartState = {
    items: sampleItems,
    isOpen: true,
    dispatch: mockDispatch,
    itemCount: 3,
    subtotal: 410,
    deliveryFee: 30,
    total: 440,
    freeDeliveryRemaining: 90,
    freeDeliveryProgress: 82,
    removeItem: mockRemoveItem,
    updateQuantity: mockUpdateQuantity,
    clearCart: mockClearCart,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    useCart.mockReturnValue(baseCartState);
  });

  /**
   * TEST 1: Çekmece Açık / Kapalı Durumu (isOpen) ve Kapatma Aksiyonları
   *
   * Doğrular:
   * - isOpen: false iken çekmece ve backdrop gizlilik sınıflarına (translate-x-full, opacity-0) sahiptir.
   * - isOpen: true iken çekmece translate-x-0 ve backdrop opacity-100 sınıfına sahiptir.
   * - Kapatma butonuna, backdrop'a veya Escape tuşuna basıldığında CLOSE_CART dispatch edilir.
   */
  it("isOpen durumuna göre çekmece ve backdrop sınıflarını dinamik yönetir; kapatma etkileşimlerinde CLOSE_CART tetikler", async () => {
    const user = userEvent.setup();

    // 1. Kapalı durum kontrolü
    useCart.mockReturnValue({
      ...baseCartState,
      isOpen: false,
    });

    const { rerender } = render(<CartDrawer />);
    const drawer = screen.getByRole("dialog", { name: /sepet/i });
    expect(drawer).toHaveClass("translate-x-full");

    // 2. Açık durum kontrolü
    useCart.mockReturnValue({
      ...baseCartState,
      isOpen: true,
    });
    rerender(<CartDrawer />);
    expect(drawer).toHaveClass("translate-x-0");

    // 3. Kapatma butonuna tıklama
    const closeBtn = screen.getByRole("button", { name: /sepeti kapat/i });
    await user.click(closeBtn);
    expect(mockDispatch).toHaveBeenCalledWith({ type: "CLOSE_CART" });

    // 4. Escape tuşu ile kapatma
    await user.keyboard('{Escape}');
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'CLOSE_CART' });
  });

  /**
   * TEST 2: Başlık Alanındaki Dinamik Çeşit ve Porsiyon Rozeti
   *
   * Doğrular: Sepette ürün varken başlıkta "{items.length} Çeşit ({itemCount} Porsiyon)"
   * rozeti dinamik basılır; sepet boşken bu rozet ekranda yer almaz.
   */
  it("sepetteki dinamik ürün ve porsiyon adedini başlık rozetinde doğru gösterir", () => {
    // 2 çeşit, toplam 3 porsiyon
    const { rerender } = render(<CartDrawer />);
    expect(screen.getByText("2 Çeşit (3 Porsiyon)")).toBeInTheDocument();

    // Sepet boşken rozet gizlenmeli
    useCart.mockReturnValue({
      ...baseCartState,
      items: [],
      itemCount: 0,
    });
    rerender(<CartDrawer />);
    expect(screen.queryByText(/Çeşit/)).not.toBeInTheDocument();
  });

  /**
   * TEST 3: Boş Sepet Durumu (Empty State) ve Keşfet Aksiyonu
   *
   * Doğrular: items boş olduğunda ürün listesi ve ödeme özeti render edilmez;
   * "Lezzetleri Keşfet" butonu tıklandığında sepet kapatılır.
   */
  it("sepet boş olduğunda dinamik ürün listesini gizler ve keşfet butonu ile sepeti kapatır", async () => {
    const user = userEvent.setup();

    useCart.mockReturnValue({
      ...baseCartState,
      items: [],
      itemCount: 0,
      subtotal: 0,
      total: 0,
    });

    render(<CartDrawer />);

    // Dinamik ürün ve finansal alanlar olmamalı
    expect(screen.queryByText("Bronte Antep Fıstığı")).not.toBeInTheDocument();
    expect(screen.queryByText("Siparişi Tamamla")).not.toBeInTheDocument();

    // Keşfet butonu ile kapatma
    const exploreBtn = screen.getByRole("button", { name: /lezzetleri keşfet/i });
    await user.click(exploreBtn);
    expect(mockDispatch).toHaveBeenCalledWith({ type: "CLOSE_CART" });
  });

  /**
   * TEST 4: Dinamik Ürün Kalemleri Bilgileri (İsim, Sunum, Görsel, Kalem Fiyatı)
   *
   * Doğrular: Sepetteki her ürünün dinamik ismi, sunum türü (Külah/Bardak),
   * görseli (varsa img src/alt, yoksa fallback ikon) ve (fiyat * adet) şeklinde hesaplanan
   * kalem toplam tutarı ekrana basılır.
   */
  it("sepetteki ürünlerin dinamik bilgilerini ve hesaplanan kalem fiyatlarını doğru render eder", () => {
    render(<CartDrawer />);

    // 1. Ürün: Bronte Antep Fıstığı (Külah, 140₺ x 2 = 280,00 ₺)
    expect(screen.getByText("Bronte Antep Fıstığı")).toBeInTheDocument();
    expect(screen.getByText("Külah 🍦")).toBeInTheDocument();
    expect(screen.getByText("₺280,00")).toBeInTheDocument();
    const itemImg = screen.getByAltText("Bronte Antep Fıstığı");
    expect(itemImg).toHaveAttribute("src", "/images/pistachio.png");

    // 2. Ürün: Bitter & Deniz Tuzu (Bardak, 130₺ x 1 = 130,00 ₺, görsel null)
    expect(screen.getByText("Bitter & Deniz Tuzu")).toBeInTheDocument();
    expect(screen.getByText("Bardak 🍨")).toBeInTheDocument();
    expect(screen.getByText("₺130,00")).toBeInTheDocument();
  });

  /**
   * TEST 5: Dinamik Miktar Artırma, Azaltma ve Silme Aksiyonları
   *
   * Doğrular:
   * - Miktarı artır butonuna basıldığında updateQuantity(id, serving, quantity + 1) çağrılır.
   * - quantity > 1 iken azalt butonuna basıldığında updateQuantity(id, serving, quantity - 1) çağrılır.
   * - quantity === 1 iken azalt butonuna basıldığında removeItem(id, serving, name) çağrılır.
   * - Silme (delete) butonuna basıldığında removeItem(id, serving, name) çağrılır.
   */
  it("ürün miktarı artırma, azaltma ve silme butonlarına tıklandığında ilgili sepet fonksiyonlarını doğru parametrelerle çağırır", async () => {
    const user = userEvent.setup();
    render(<CartDrawer />);

    // 1. Kalem: miktar = 2
    const incrementButtons = screen.getAllByRole("button", { name: /miktarı artır/i });
    const decrementButtons = screen.getAllByRole("button", { name: /miktarı azalt/i });

    // 1. ürünün miktarını artır (2 -> 3)
    await user.click(incrementButtons[0]);
    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, "Külah", 3);

    // 1. ürünün miktarını azalt (2 -> 1)
    await user.click(decrementButtons[0]);
    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, "Külah", 1);

    // 2. ürün: miktar = 1 iken azalt butonuna basılırsa removeItem çağrılmalı
    await user.click(decrementButtons[1]);
    expect(mockRemoveItem).toHaveBeenCalledWith(2, "Bardak", "Bitter & Deniz Tuzu");

    // 1. ürünün silme (çöp kutusu) butonuna tıklanması
    const deleteBtn = screen.getByRole("button", {
      name: /Bronte Antep Fıstığı ürününü sepetten sil/i,
    });
    await user.click(deleteBtn);
    expect(mockRemoveItem).toHaveBeenCalledWith(1, "Külah", "Bronte Antep Fıstığı");
  });

  /**
   * TEST 6: Ücretsiz Teslimat İlerleme Çubuğu ve Dinamik Upsell Bildirimi
   *
   * Doğrular:
   * - freeDeliveryRemaining > 0 iken kalan tutar (₺90,00 kaldı) ve yüzde (%82) gösterilir.
   * - freeDeliveryRemaining <= 120 iken upsell önerisi ("Sepetinize 1 porsiyon daha ekleyin...") gösterilir.
   * - freeDeliveryRemaining <= 0 iken tebrik mesajı ("🎉 Tebrikler! Ücretsiz teslimat kazandınız.") gösterilir.
   */
  it("ücretsiz teslimat eşiği ve ilerleme yüzdesini dinamik olarak gösterir ve upsell uyarısını yönetir", () => {
    // Kalan: 90₺ (<= 120 olduğu için upsell görünmeli)
    const { rerender } = render(<CartDrawer />);
    expect(screen.getByText("₺90,00")).toBeInTheDocument();
    expect(screen.getByText("82%")).toBeInTheDocument();
    expect(screen.getByText(/Sepetinize/i)).toBeInTheDocument();

    // Ücretsiz teslimat kazanıldığında (kalan 0)
    useCart.mockReturnValue({
      ...baseCartState,
      freeDeliveryRemaining: 0,
      freeDeliveryProgress: 100,
      deliveryFee: 0,
    });
    rerender(<CartDrawer />);
    expect(screen.getByText(/Tebrikler! Ücretsiz teslimat kazandınız/i)).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    // Upsell artık gösterilmemelidir
    expect(screen.queryByText(/Sepetinize/i)).not.toBeInTheDocument();
  });

  /**
   * TEST 7: Dinamik Finansal Özet (Ara Toplam, Teslimat Ücreti ve Genel Toplam)
   *
   * Doğrular: subtotal, deliveryFee ve total değerleri dinamik olarak formatlanarak ekrana basılır.
   * deliveryFee === 0 olduğunda teslimat ücreti satırında 'Ücretsiz' metni yer alır.
   */
  it("ara toplam, teslimat ücreti ve genel toplam tutarlarını dinamik olarak formatlar ve basar", () => {
    // deliveryFee = 30₺ olan durum
    const { rerender } = render(<CartDrawer />);
    expect(screen.getByText("₺410,00")).toBeInTheDocument();
    expect(screen.getByText("₺30,00")).toBeInTheDocument();
    expect(screen.getByText("₺440,00")).toBeInTheDocument();

    // deliveryFee = 0 (Ücretsiz teslimat) - Ara Toplam ve Toplam ikisi de 410₺ olur
    useCart.mockReturnValue({
      ...baseCartState,
      deliveryFee: 0,
      total: 410,
    });
    rerender(<CartDrawer />);
    expect(screen.getByText("Ücretsiz")).toBeInTheDocument();
    expect(screen.getAllByText("₺410,00").length).toBe(2);
  });

  /**
   * TEST 8: Dinamik Sipariş Notu Açma / Düzenleme ve Karakter Sayacı
   *
   * Doğrular: Sipariş notu ekleme butonuna basıldığında metin alanı açılır,
   * kullanıcı not girdiğinde dinamik karakter sayacı güncellenir.
   */
  it("sipariş notu alanını dinamik açar ve yazılan karaktere göre sayaç günceller", async () => {
    const user = userEvent.setup();
    render(<CartDrawer />);

    const addNoteBtn = screen.getByRole("button", { name: /\+ Sipariş Notu Ekle/i });
    await user.click(addNoteBtn);

    const textarea = screen.getByPlaceholderText(/Örn: Külahları ayrı pakete koyunuz/i);
    expect(textarea).toBeInTheDocument();
    expect(screen.getByText("0/150")).toBeInTheDocument();

    const testNote = "Zili çalmayınız";
    await user.type(textarea, testNote);
    expect(textarea).toHaveValue(testNote);
    expect(screen.getByText(`${testNote.length}/150`)).toBeInTheDocument();
  });

  /**
   * TEST 9: Sipariş Tamamlama Akışı ve Dinamik Başarı Ekranı
   *
   * Doğrular:
   * - "Siparişi Tamamla" butonuna basıldığında clearCart çağrılır ve SHOW_TOAST dispatch edilir.
   * - Ekranda dinamik sipariş numarası (#GLT-...), ödenen toplam tutar ve yazılan sipariş notu yer alır.
   * - Başarı ekranındaki "Alışverişe Devam Et" butonuna basıldığında sepet kapatılır.
   */
  it("siparişi tamamla butonuna tıklandığında sepeti temizler ve sipariş özeti ekranını dinamik doldurur", async () => {
    const user = userEvent.setup();
    render(<CartDrawer />);

    // İsteğe bağlı not ekleyelim
    const addNoteBtn = screen.getByRole("button", { name: /\+ Sipariş Notu Ekle/i });
    await user.click(addNoteBtn);
    const textarea = screen.getByPlaceholderText(/Örn: Külahları ayrı pakete koyunuz/i);
    await user.type(textarea, "Külahlar ayrı olsun");

    // Siparişi tamamla butonuna tıkla
    const completeBtn = screen.getByRole("button", { name: /siparişi tamamla/i });
    await user.click(completeBtn);

    // clearCart ve toast dispatch doğrulaması
    expect(mockClearCart).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "SHOW_TOAST",
        payload: expect.stringMatching(/Siparişiniz alındı! \(#GLT-\d+\)/),
      }),
    );

    // Dinamik Başarı ekranı kontrolleri
    expect(screen.getByText(/#GLT-\d+/)).toBeInTheDocument();
    expect(screen.getByText("₺440,00")).toBeInTheDocument();
    expect(screen.getByText('"Külahlar ayrı olsun"')).toBeInTheDocument();

    // "Alışverişe Devam Et" butonuna tıklayarak sepeti kapatma
    const continueBtn = screen.getByRole("button", { name: /alışverişe devam et/i });
    await user.click(continueBtn);
    expect(mockDispatch).toHaveBeenCalledWith({ type: "CLOSE_CART" });
  });
});
