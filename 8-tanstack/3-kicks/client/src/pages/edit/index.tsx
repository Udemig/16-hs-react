import { ArrowLeft } from "lucide-react";
import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import ProductForm from "../../components/form/ProductForm";
import { useGetOneProduct, useUpdateProduct } from "../../service/product";
import Loader from "../../components/loader";
import Error from "../../components/error";
import type { ProductValues } from "../../types";

const Edit: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data, refetch } = useGetOneProduct(id!);
  const { isPending, mutate } = useUpdateProduct();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="max-w-3-xl mx-auto">
      <Link
        to="/admin/dashboard"
        className="flex items-center gap-2 w-fit text-main-gray hover:text-blue"
      >
        <ArrowLeft className="size-4" /> Panele Dön
      </Link>
      <h1 className="text-3xl font-bold my-6">Ürün Düzenle</h1>

      <ProductForm
        isPending={isPending}
        mutate={(formData: ProductValues) => mutate({ id, formData })}
        data={data}
      />
    </div>
  );
};

export default Edit;
