import { useState, useMemo } from "react";
import { CategoryFilter } from "../ui/CategoryFilter";
import { ProductCard } from "../ui/ProductCard";

export function ProductsSection({ products = [], categories = [], onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoriesWithCounts = useMemo(() => {
    return categories.map((category) => {
      const count =
        category.id === "all"
          ? products.length
          : products.filter((p) => p.categories?.includes(category.id)).length;
      return {
        ...category,
        count,
      };
    });
  }, [categories, products]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.categories?.includes(activeCategory));

  return (
    <section
      id="dondurmalar"
      tabIndex={-1}
      className="relative w-full py-16 bg-surface-container-low/50 scroll-mt-20 outline-none"
    >
      <span id="urunler" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-secondary font-label-lg uppercase tracking-wider block mb-2">
            Tüm Dondurma Çeşitleri
          </span>
          <h2 className="text-primary font-display-sm md:font-display-md mb-4">
            Külahını veya Bardağını Seç
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Özenle hazırladığımız, taze malzemelerle üretilen artisan dondurma çeşitlerimizi
            keşfedin. Her damak zevkine uygun bir lezzet sizi bekliyor.
          </p>
        </header>

        <CategoryFilter
          categories={categoriesWithCounts}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div
          id="products-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
