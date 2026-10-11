import type { ChangeEvent, FC } from "react";
import { useGetPlaces } from "../../service/hooks";
import { SORT_OPTIONS } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // konaklama verisini al
  const { data } = useGetPlaces();

  // şehir isimlerinden bir dizi oluştur
  const cities = [...new Set(data?.map((item) => item.location))];

  // inputa girilen değeri url'e arama parametresi olarak ekle
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    searchParams.set(name, value);

    setSearchParams(searchParams);
  };

  const handleClear = () => {
    setSearchParams({});
  };

  return (
    <form className="flex flex-col gap-5 lg:gap-8 lg:mt-15 lg:sticky lg:top-24 bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
      <h1 className="text-xl font-bold text-zinc-800 pb-3 border-b border-zinc-200">Filtrele</h1>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Nereye gitmek istiyorsunuz?</label>

        <select name="location" className="input" onChange={handleChange}>
          <option>Seçiniz</option>
          {cities.map((city) => (
            <option value={city} key={city} selected={city === searchParams.get("location")}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Konaklama noktası adı?</label>

        <input
          type="text"
          name="title"
          className="input"
          placeholder="Örn: Garden Bungalow"
          onChange={handleChange}
          defaultValue={searchParams.get("title") || ""}
        />
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Sıralama Ölçütü</label>

        <select name="order" className="input" onChange={handleChange}>
          <option>Seçiniz</option>
          {SORT_OPTIONS.map((item, key) => (
            <option
              key={key}
              value={item.value}
              selected={item.value === searchParams.get("order")}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <button type="reset" className="btn-primary" onClick={handleClear}>
        Filtreleri Temizle
      </button>
    </form>
  );
};

export default Filter;
