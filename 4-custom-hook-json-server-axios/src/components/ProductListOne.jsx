import { useEffect, useState } from "react";

const ProductListOne = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA!: {error.message}</h1>;

  return (
    <div>
      <h1>Ürün Listesi - 1</h1>

      <div>
        {data.map((product) => (
          <div>
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListOne;
