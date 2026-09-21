import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct, useProducts } from '../hooks/useData';
import { useCart } from '../context/useCart';
import { Icon } from '../components/ui/Icon';
import { ServingToggle } from '../components/ui/ServingToggle';
import { QuantityStepper } from '../components/ui/QuantityStepper';
import { ProductCard } from '../components/ui/ProductCard';

const getBadgeClassName = (type) => {
  switch (type) {
    case 'popular':
    case 'favorite':
      return 'bg-secondary-fixed text-on-secondary-fixed';
    case 'vegan':
    case 'refreshing':
      return 'bg-tertiary-fixed text-on-tertiary-fixed';
    case 'classic':
    case 'origin':
    default:
      return 'bg-surface-container-highest text-on-surface';
  }
};

function ProductDetailContent({ product, products, onAddToCart }) {
  const [serving, setServing] = useState(product.servingDefault || 'Külah');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      serving,
      quantity,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  // Related products (exclude current)
  const relatedProducts = products.filter((p) => String(p.id) !== String(product.id)).slice(0, 3);
  const subtotal = product.price * quantity;

  return (
    <div className="w-full bg-surface pb-24">
      {/* Breadcrumbs & Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-outline-variant/30">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <Link to="/" className="hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link to="/#dondurmalar" className="hover:text-primary transition-colors">
              Dondurmalar
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          <Link
            to="/#dondurmalar"
            className="inline-flex items-center gap-2 text-label-md font-semibold text-primary hover:text-secondary transition-colors"
          >
            <Icon name="arrow_back" size={18} />
            <span>Tüm Dondurmalara Dön</span>
          </Link>
        </div>
      </div>

      {/* Main Product Showcase (12-col grid) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Visual Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-3xl bg-surface-container-low overflow-hidden shadow-[0_8px_32px_rgba(50,25,23,0.08)] border border-outline-variant/20 aspect-square flex items-center justify-center p-6 group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Badges Overlay */}
              <div className="absolute top-5 left-5 flex flex-col gap-2 items-start">
                {product.badge && (
                  <span className={`px-3.5 py-1.5 rounded-full font-label-md text-label-sm font-bold shadow-md ${getBadgeClassName(product.badgeType)}`}>
                    {product.badge}
                  </span>
                )}
                {product.isVegan && (
                  <span className="px-3.5 py-1.5 rounded-full font-label-md text-label-sm font-bold bg-tertiary text-on-tertiary shadow-md flex items-center gap-1.5">
                    <Icon name="eco" size={16} />
                    <span>%100 Vegan</span>
                  </span>
                )}
              </div>

              {/* Bottom Temperature Guarantee Pill */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-surface-container-highest/90 backdrop-blur-md shadow-lg border border-surface-container-highest">
                <Icon name="ac_unit" size={18} className="text-secondary" />
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  -18°C Termo Korumalı Erimeden Teslimat
                </span>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm">
                <Icon name="verified" size={20} className="text-secondary mb-1" />
                <span className="font-label-sm font-bold text-primary">Artisan Tarif</span>
                <span className="text-[11px] text-on-surface-variant mt-0.5">Katkısız &amp; Saf</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm">
                <Icon name="nest_clock_farsight_analog" size={20} className="text-secondary mb-1" />
                <span className="font-label-sm font-bold text-primary">Günlük Taze</span>
                <span className="text-[11px] text-on-surface-variant mt-0.5">Küçük Partiler</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm">
                <Icon name="local_shipping" size={20} className="text-secondary mb-1" />
                <span className="font-label-sm font-bold text-primary">Hızlı Teslimat</span>
                <span className="text-[11px] text-on-surface-variant mt-0.5">25-35 Dakika</span>
              </div>
            </div>
          </div>

          {/* Right Product Details Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Origin & Character Badges */}
              <div className="flex flex-wrap items-center gap-3">
                {product.origin && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm font-bold">
                    <Icon name="place" size={15} />
                    <span>{product.origin}</span>
                  </span>
                )}
                {product.intensity && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm font-semibold">
                    <Icon name="auto_awesome" size={15} className="text-secondary" />
                    <span>{product.intensity}</span>
                  </span>
                )}
              </div>

              {/* Title & Headline */}
              <h1 className="font-serif font-headline-lg text-4xl sm:text-5xl text-primary font-bold tracking-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex items-center text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size={18} filled />
                  ))}
                </div>
                <span className="font-label-md font-bold text-primary">
                  {product.rating || '5.0'}
                </span>
                <span className="text-body-sm text-on-surface-variant">
                  ({product.reviewCount || 120} Gurme Değerlendirmesi)
                </span>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-primary">
                  ₺{product.price}
                </span>
                <span className="font-body-md text-on-surface-variant">
                  / 2 Top Porsiyon (160g)
                </span>
              </div>

              {/* Description */}
              <p className="font-body-lg text-on-surface leading-relaxed pt-1">
                {product.description}
              </p>
            </div>

            {/* Interactive Ordering Panel */}
            <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-[0_6px_28px_rgba(50,25,23,0.06)] border border-outline-variant/30 space-y-6">
              
              {/* Serving Preference Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/20">
                <div>
                  <label className="font-title-sm font-bold text-primary block">
                    Sunum Tercihi
                  </label>
                  <p className="text-body-xs text-on-surface-variant mt-0.5">
                    Geleneksel çıtır İtalyan külahı veya korumalı şık bardak
                  </p>
                </div>
                <ServingToggle value={serving} onChange={setServing} />
              </div>

              {/* Quantity Stepper & Price Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-title-sm font-bold text-primary">Adet:</span>
                  <QuantityStepper value={quantity} onChange={setQuantity} />
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-body-xs text-on-surface-variant block">Toplam Tutar</span>
                  <span className="font-serif font-headline-md text-2xl font-bold text-primary">
                    ₺{subtotal}
                  </span>
                </div>
              </div>

              {/* Add to Cart CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-4 px-8 rounded-full font-label-lg text-base font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_8px_24px_rgba(50,25,23,0.18)] active:scale-98 ${
                    isAdded
                      ? 'bg-tertiary text-on-tertiary scale-[1.01]'
                      : 'bg-primary hover:bg-primary-container text-on-primary'
                  }`}
                >
                  <Icon
                    name={isAdded ? 'check_circle' : 'add_shopping_cart'}
                    size={22}
                    filled={isAdded}
                  />
                  <span>
                    {isAdded
                      ? 'Sepete Eklendi! ✓'
                      : `Sepete Ekle • ₺${subtotal}`}
                  </span>
                </button>
              </div>

              {/* Quick Delivery Reassurance */}
              <div className="flex items-center justify-center gap-2 pt-1 text-label-sm text-on-surface-variant">
                <Icon name="bolt" size={16} className="text-secondary" />
                <span>Moda &amp; Kadıköy bölgesine <strong>25-35 dakikada</strong> kurye ile ulaştırılır.</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bento Grid: Ustalık Sırları ve İçerik Detayları */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-label-md text-secondary uppercase tracking-widest font-bold">
            ŞEFİN REÇETESİ &amp; KALİTE STANDARDI
          </span>
          <h2 className="font-serif font-headline-lg text-3xl sm:text-4xl text-primary font-bold mt-1">
            Ustalık Sırları ve İçerik Detayları
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Saf & Doğal İçerik */}
          <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(50,25,23,0.05)] border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-4">
                <Icon name="spa" size={24} />
              </div>
              <h3 className="font-serif font-headline-sm text-xl font-bold text-primary mb-2">
                Saf &amp; Doğal İçerik
              </h3>
              <p className="text-body-sm text-on-surface-variant mb-4">
                Yapay renklendirici, koruyucu madde ve mısır şurubu içermez.
              </p>
              {product.ingredients && product.ingredients.length > 0 && (
                <ul className="space-y-2">
                  {product.ingredients.map((ing, index) => (
                    <li key={index} className="flex items-start gap-2 text-body-xs text-on-surface">
                      <Icon name="check" size={15} className="text-tertiary shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-5 pt-3 border-t border-outline-variant/20">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wide">
                %100 Doğal Hammadde
              </span>
            </div>
          </div>

          {/* Card 2: Besin Değerleri */}
          <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(50,25,23,0.05)] border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed/50 flex items-center justify-center text-tertiary mb-4">
                <Icon name="pie_chart" size={24} />
              </div>
              <h3 className="font-serif font-headline-sm text-xl font-bold text-primary mb-2">
                Besin Değerleri
              </h3>
              <p className="text-body-sm text-on-surface-variant mb-4">
                100g porsiyon için ortalama besin ve enerji değerleri.
              </p>
              {product.nutrition && (
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-surface-container-low text-center">
                    <span className="text-[11px] text-on-surface-variant block">Kalori</span>
                    <span className="font-label-md font-bold text-primary">
                      {product.nutrition.calories}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low text-center">
                    <span className="text-[11px] text-on-surface-variant block">Protein</span>
                    <span className="font-label-md font-bold text-primary">
                      {product.nutrition.protein}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low text-center">
                    <span className="text-[11px] text-on-surface-variant block">Yağ</span>
                    <span className="font-label-md font-bold text-primary">
                      {product.nutrition.fat}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low text-center">
                    <span className="text-[11px] text-on-surface-variant block">Karbonhidrat</span>
                    <span className="font-label-md font-bold text-primary">
                      {product.nutrition.carbs}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5 pt-3 border-t border-outline-variant/20">
              <span className="text-[11px] font-bold text-tertiary uppercase tracking-wide">
                Düşük Yağlı İtalyan Formülü
              </span>
            </div>
          </div>

          {/* Card 3: Alerjen & Saklama */}
          <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(50,25,23,0.05)] border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary mb-4">
                <Icon name="info" size={24} />
              </div>
              <h3 className="font-serif font-headline-sm text-xl font-bold text-primary mb-2">
                Alerjen &amp; Saklama
              </h3>
              <p className="text-body-sm text-on-surface-variant mb-4">
                Hassasiyetleriniz ve doğru saklama için önemli bilgiler.
              </p>

              {product.allergens && (
                <div className="space-y-1.5 mb-3">
                  <span className="text-label-xs font-bold text-primary block">Alerjen Uyarısı:</span>
                  {product.allergens.map((all, idx) => (
                    <span
                      key={idx}
                      className="inline-block mr-1.5 mb-1 px-2.5 py-1 rounded-lg bg-surface-container text-label-xs text-on-surface font-medium"
                    >
                      {all}
                    </span>
                  ))}
                </div>
              )}

              {product.storage && (
                <div className="pt-2">
                  <span className="text-label-xs font-bold text-primary block">Saklama Koşulu:</span>
                  <p className="text-body-xs text-on-surface-variant mt-1 leading-relaxed">
                    {product.storage}
                  </p>
                </div>
              )}
            </div>
            <div className="mt-5 pt-3 border-t border-outline-variant/20">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide">
                Hijyenik Termo Ambalaj
              </span>
            </div>
          </div>

          {/* Card 4: Şefin Tadım ve Eşleşme Notu */}
          <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(50,25,23,0.05)] border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-4">
                <Icon name="auto_awesome" size={24} />
              </div>
              <h3 className="font-serif font-headline-sm text-xl font-bold text-primary mb-2">
                Şefin Tadım Notu
              </h3>
              <p className="text-body-sm text-on-surface italic mb-4 leading-relaxed">
                &ldquo;{product.pairing || 'En iyi deneyim için hafif oda sıcaklığında, sıcak bir espresso ile birlikte tadını çıkarın.'}&rdquo;
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wide">
                Maestro Gelatiere Tavsiyesi
              </span>
              <Icon name="coffee" size={18} className="text-secondary" />
            </div>
          </div>

        </div>
      </section>

      {/* Related Flavors: Bunu Sevenler Bunları da Sevdi */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-label-md text-secondary uppercase tracking-widest font-bold">
                KEŞFETMEYE DEVAM EDİN
              </span>
              <h2 className="font-serif font-headline-lg text-3xl sm:text-4xl text-primary font-bold mt-1">
                Bunu Sevenler Bunları da Sevdi
              </h2>
            </div>
            <Link
              to="/#dondurmalar"
              className="inline-flex items-center gap-2 text-label-md font-bold text-primary hover:text-secondary transition-colors"
            >
              <span>Tüm Menüyü İncele</span>
              <Icon name="arrow_forward" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <ProductCard
                key={related.id}
                product={related}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function ProductDetailPage() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { products } = useProducts();
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 space-y-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="font-title-md text-on-surface-variant font-medium">Lezzet detayları yükleniyor...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-6 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-error-container/20 flex items-center justify-center text-primary">
          <Icon name="search_off" size={40} />
        </div>
        <div className="space-y-2 max-w-md">
          <h2 className="font-serif font-headline-lg text-primary">Ürün Bulunamadı</h2>
          <p className="font-body-md text-on-surface-variant">
            Aradığınız dondurma çeşidi menümüzde bulunamadı veya tükenmiş olabilir.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-lg shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all"
        >
          <Icon name="arrow_back" size={20} />
          <span>Tüm Menüye Göz At</span>
        </Link>
      </div>
    );
  }

  return (
    <ProductDetailContent
      key={product.id}
      product={product}
      products={products}
      onAddToCart={addItem}
    />
  );
}

