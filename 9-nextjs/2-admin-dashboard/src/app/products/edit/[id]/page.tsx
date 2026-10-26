import ProductForm from "@/components/form/ProductForm";
import { getProduct } from "@/utils/service";
import { FC } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const EditPage: FC<Props> = async ({ params }) => {
  // düzenlenicek ürünün id'sini al
  const { id } = await params;

  // düzenlencek ürünün bilgilerini al
  const product = await getProduct(id!);

  // ürün bulunamadıysa
  if (!product) return <h1>Ürün bulunamadı</h1>;

  return (
    <div className="page max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="title">Ürün Düzenle</h1>
        <p className="text-zinc-500 mt-1">{id} id'li ürünün bilgilerini güncelleyin</p>
      </div>

      <div className="card p-6 md:p-8">
        <ProductForm product={product} />
      </div>
    </div>
  );
};

export default EditPage;
