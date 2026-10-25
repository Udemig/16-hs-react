import { Pencil, Plus, Trash2 } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { useDeleteProduct, useGetAllProducts } from "../../service/product";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Dashboard: FC = () => {
  const { isLoading, error, data, refetch } = useGetAllProducts();
  const { isPending, mutate } = useDeleteProduct();

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Ürünler <span className="text-main-gray text-lg">({data?.length})</span>
        </h1>
        <Link to="/admin/create" className="btn flex items-center gap-2">
          <Plus className="size-5" /> Ürün Ekle
        </Link>
      </div>

      <div className="bg-white rounded-3xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="text-xs uppercase text-main-gray border-b border-gray">
            <tr className="[&>th]:p-4">
              <th>Ürün</th>
              <th>Fiyat</th>
              <th>İndirim</th>
              <th className="text-right">Eylemler</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray last:border-0 hover:bg-fa-white [&>td]:p-4"
              >
                <td className="flex items-center gap-4 font-semibold">
                  <img
                    src={product.picture[0]}
                    alt={product.name}
                    className="size-14 rounded-xl object-cover"
                  />
                  <span className="max-w-60 truncate">{product.name}</span>
                </td>

                <td>${product.price}</td>

                <td>{product.discount ? `%${product.discount}` : "—"}</td>

                <td className="text-right space-x-1">
                  <Link
                    to={`/admin/edit/${product.id}`}
                    className="inline-flex p-2 rounded-lg text-blue hover:bg-blue/10"
                  >
                    <Pencil className="size-5" />
                  </Link>

                  <button
                    disabled={isPending}
                    onClick={() => mutate(product.id)}
                    className="p-2 rounded-lg text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
