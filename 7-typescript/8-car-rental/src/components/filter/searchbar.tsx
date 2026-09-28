import { useEffect, useState, type FC, type SubmitEvent } from "react";
import Select from "react-select";
import { SELECT_STYLES, MAKES } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Searchbar: FC = () => {
  const [make, setMake] = useState<string | undefined>("");
  const [model, setModel] = useState<string | undefined>("");
  const [searchParams, setSearchParams] = useSearchParams();

  // markaları nesne dizisi formatına çevir
  const arr = MAKES.map((make) => ({ label: make, value: make }));

  // form gönderilme
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  // uel'de parametre varsa inputlara aktar
  useEffect(() => {
    setMake(searchParams.get("make") || "");
    setModel(searchParams.get("model") || "");
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      {/* Marka */}
      <div className="searchbar-item items-end">
        <div className="w-full flex- flex-col z-2">
          <label className="font-semibold mb-2 text-sm">Marka</label>

          <Select
            options={arr}
            styles={SELECT_STYLES}
            isClearable
            placeholder="Marka..."
            onChange={(option) => setMake((option as { label: string; value: string }).value)}
            value={make ? { label: make, value: make } : undefined}
          />
        </div>

        <button type="submit" className="mb-1 search-btn sm:hidden">
          <img src="/search.svg" alt="size-6" />
        </button>
      </div>

      {/* Model */}
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col">
          <label className="font-semibold mb-2 text-sm">Model</label>

          <div className="w-full flex items-center">
            <div className="relative flex-1">
              <img
                src="/model-icon.png"
                className="size-6 absolute left-6 top-1/2 -translate-y-1/2 z-1"
              />

              <input
                type="text"
                placeholder="Model..."
                className="searchbar-input pt-4"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="mb-1 search-btn">
          <img src="/search.svg" alt="size-6" />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
