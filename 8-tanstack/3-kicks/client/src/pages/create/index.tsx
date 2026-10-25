import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import ProductForm from "../../components/form/ProductForm";
import { useCreateProduct } from "../../service/product";
import type { ProductValues } from "../../types";

const Create: FC = () => {
  const { isPending, mutate } = useCreateProduct();

  return (
    <div className="max-w-3-xl mx-auto">
      <Link
        to="/admin/dashboard"
        className="flex items-center gap-2 w-fit text-main-gray hover:text-blue"
      >
        <ArrowLeft className="size-4" /> Panele Dön
      </Link>
      <h1 className="text-3xl font-bold my-6">Ürün Ekle</h1>

      <ProductForm isPending={isPending} mutate={(data: ProductValues) => mutate(data)} />
    </div>
  );
};

export default Create;
