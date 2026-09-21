import { useProducts, useFeaturedProducts, useReviews, useSiteData } from '../hooks/useData';
import { useCart } from '../context/useCart';
import { HeroSection } from '../components/sections/HeroSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { FeaturedSection } from '../components/sections/FeaturedSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { PromoSection } from '../components/sections/PromoSection';
import { AboutSection } from '../components/sections/AboutSection';
import { DeliverySection } from '../components/sections/DeliverySection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { LocationSection } from '../components/sections/LocationSection';

export function HomePage() {
  const { products, loading: productsLoading } = useProducts();
  const { featuredProducts, loading: featuredLoading } = useFeaturedProducts();
  const { reviews, loading: reviewsLoading } = useReviews();
  const { benefits, categories, deliveryZones, storeInfo, promo, loading: siteLoading } = useSiteData();
  const { quickAdd, addItem } = useCart();

  const handleQuickAdd = (product) => {
    quickAdd(
      product.name,
      product.price,
      product.servingDefault || 'Külah',
      product.image,
      product.id
    );
  };

  const handleAddToCart = (item) => {
    addItem(item);
  };

  const heroImage = storeInfo?.heroImage || '/images/mix.png';
  const aboutImage = storeInfo?.aboutImage || '';

  return (
    <div className="flex flex-col w-full">
      <HeroSection heroImage={heroImage} />

      {!siteLoading && benefits.length > 0 && (
        <BenefitsSection benefits={benefits} />
      )}

      {!featuredLoading && featuredProducts.length > 0 && (
        <FeaturedSection
          featuredProducts={featuredProducts}
          onQuickAdd={handleQuickAdd}
        />
      )}

      {!productsLoading && !siteLoading && (
        <ProductsSection
          products={products}
          categories={categories}
          onAddToCart={handleAddToCart}
        />
      )}

      {!siteLoading && promo && (
        <PromoSection promo={promo} />
      )}

      <AboutSection aboutImage={aboutImage} />

      {!siteLoading && (
        <DeliverySection deliveryZones={deliveryZones} />
      )}

      {!reviewsLoading && reviews.length > 0 && (
        <ReviewsSection reviews={reviews} />
      )}

      {!siteLoading && storeInfo && (
        <LocationSection storeInfo={storeInfo} />
      )}
    </div>
  );
}
