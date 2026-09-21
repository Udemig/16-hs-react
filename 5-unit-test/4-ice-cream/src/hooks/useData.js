import { useState, useEffect } from 'react';
import { fetchData } from '../api/client';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchData('products')
      .then((data) => {
        if (!cancelled) {
          setProducts(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, error };
}

export function useProduct(id) {
  const [state, setState] = useState({ product: null, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;

    fetchData(`products/${id}`)
      .then((data) => {
        if (!cancelled) {
          setState({ product: data, loading: false, error: null });
        }
      })
      .catch(() => {
        // Fallback: fetch all and find by id / slug
        return fetchData('products')
          .then((all) => {
            if (!cancelled) {
              const found = all.find((p) => String(p.id) === String(id) || p.slug === id);
              if (found) {
                setState({ product: found, loading: false, error: null });
              } else {
                setState({ product: null, loading: false, error: 'Ürün bulunamadı' });
              }
            }
          });
      })
      .catch((err) => {
        if (!cancelled) setState({ product: null, loading: false, error: err.message });
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return state;
}

export function useFeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchData('featuredProducts')
      .then((data) => {
        if (!cancelled) {
          setFeaturedProducts(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { featuredProducts, loading, error };
}

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchData('reviews')
      .then((data) => {
        if (!cancelled) {
          setReviews(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { reviews, loading, error };
}

export function useSiteData() {
  const [benefits, setBenefits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [deliveryZones, setDeliveryZones] = useState([]);
  const [storeInfo, setStoreInfo] = useState(null);
  const [promo, setPromo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetchData('benefits'),
      fetchData('categories'),
      fetchData('deliveryZones'),
      fetchData('storeInfo'),
      fetchData('promo'),
    ])
      .then(([benefitsData, categoriesData, zonesData, storeData, promoData]) => {
        if (!cancelled) {
          setBenefits(benefitsData);
          setCategories(categoriesData);
          setDeliveryZones(zonesData);
          setStoreInfo(storeData);
          setPromo(promoData);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { benefits, categories, deliveryZones, storeInfo, promo, loading, error };
}
