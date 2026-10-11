import type { FC } from "react";
import { useGetPlaces } from "../../service/hooks";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "./../../types";

const List: FC = () => {
  // urlden arama parametrelerini al
  const [searchParams] = useSearchParams();
  const params: FilterParams = Object.fromEntries(searchParams.entries());

  // api'dan verileri al
  const { isLoading, error, data, refetch } = useGetPlaces(params);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl md:text-3xl mb-6 text-zinc-800">
        Yakınınızdaki Lokasyonlar
      </h1>

      <div className="grid gap-5 mt-5">
        {!data || data.length === 0 ? (
          <div className="my-20 text-center bg-white rounded-xl p-12 shadow-sm border border-zinc-100">
            <div className="text-6xl mb-4">🔎</div>
            <p className="text-xl text-zinc-600 font-semibold">Aradığınız lokasyon bulunamadı</p>
            <p className="text-zinc-500">Lütfen farklı filtreler ile deneyiniz</p>
          </div>
        ) : (
          data.map((place) => <Card place={place} key={place.id} />)
        )}
      </div>
    </div>
  );
};

export default List;
