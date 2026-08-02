import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../../components/loader";
import { Flame } from "lucide-react";
import ProductCard from "./ProductCard";

const RestaurantProducts = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  if (error) return null;

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
        <Flame className="text-red-500 size-7" />
        Popüler
      </h2>

      <p className="muted mt-1">Restoranın en çok tercih edilen ürünleri</p>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantProducts;
