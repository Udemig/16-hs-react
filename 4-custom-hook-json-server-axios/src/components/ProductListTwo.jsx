import useFetch from "../hooks/useFetch";

const ProductListTwo = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA!: {error.message}</h1>;

  return (
    <div>
      <h1>Ürün Listesi - 1</h1>

      <div>
        {data.products.map((product) => (
          <div>
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListTwo;
