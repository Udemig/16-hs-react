export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  // api'dan ürün bilgisini all...

  return {
    title: `Ürün - ${id}`,
  };
};

const ProductDetail = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-red-500">id: {id}</h1>
      <h1>Ürün Detay Sayfası</h1>
    </div>
  );
};

export default ProductDetail;
