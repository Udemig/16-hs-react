import { ArrowLeftRight } from "lucide-react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { SELECT_STYLES } from "../utils/constants";
import { setSourceLang, setTargetLang } from "../redux/slices/translateSlice";

const LanguageSelector = () => {
  const { loading, error, languages } = useSelector((store) => store.languageReducer);
  const { sourceLang, targetLang } = useSelector((store) => store.translateReducer);
  const dispatch = useDispatch();

  // storedaki languages dizisindeki nesnelerin keylerini güncelle
  // api'dan gelen: { "language": "it", "name": "Italian"}
  // react-select : { "value": "it",  "label": "Italian"}
  const formattedOptions = useMemo(
    () =>
      languages
        .map((item) => ({
          label: item.name,
          value: item.language,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    [languages],
  );

  // dili algıla seçeneği
  const detect = { label: "Dili Algıla", value: undefined };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-col lg:flex-row">
        {/* Kaynak Dil */}
        <div className="flex-1 w-full">
          <label className="text-sm text-zinc-300 mb-2 block">Kaynak Dil</label>

          <ReactSelect
            options={[detect, ...formattedOptions]}
            isLoading={loading}
            isDisabled={loading}
            styles={SELECT_STYLES}
            value={sourceLang}
            className="text-black"
            onChange={(selected) => {
              dispatch(setSourceLang(selected));
            }}
          />
        </div>

        {/* Değiştirme Butonu */}
        <div className="grid place-items-center">
          <button className="size-10 lg:size-12 bg-zinc-700 rounded-full grid place-items-center disabled:opacity-50">
            <ArrowLeftRight className="size-4 lg:size-5 max-lg:rotate-90" />
          </button>
        </div>

        {/* Hedef Dil */}
        <div className="flex-1 w-full">
          <label className="text-sm text-zinc-300 mb-2 block">Hedef Dil</label>

          <ReactSelect
            options={formattedOptions}
            isLoading={loading}
            isDisabled={loading}
            styles={SELECT_STYLES}
            value={targetLang}
            className="text-black"
            onChange={(selected) => {
              dispatch(setTargetLang(selected));
            }}
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-zinc-500">{languages.length} dil destekleniyor</p>
      </div>
    </div>
  );
};

export default LanguageSelector;
