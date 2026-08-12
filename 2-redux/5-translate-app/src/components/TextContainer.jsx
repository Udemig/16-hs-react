import { ArrowRight, Volume2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translateSlice";
import { translateText } from "../redux/actions";
import { useRef } from "react";

const TextContainer = () => {
  const dispatch = useDispatch();
  const { textToTranslate, translatedText } = useSelector((store) => store.translateReducer);
  const debounceRef = useRef();

  // Debounce
  const handleChange = (e) => {
    const value = e.target.value;

    dispatch(setText(value));

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      dispatch(translateText());
    }, 500);
  };

  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/* Çevrilecek Metin */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="text" className="text-sm text-zinc-300">
            Çevrilecek Metin
          </label>

          <div className="flex items-center gap-3">
            <button className="btn">
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button className="btn">Temizle</button>
          </div>
        </div>

        <div>
          <textarea
            id="text"
            maxLength={500}
            placeholder="Çevirmek istediğiniz metni buraya yazınız"
            onChange={handleChange}
            value={textToTranslate}
          />
        </div>
      </div>

      <div className="grid place-items-center">
        <div className="size-8 lg:size-12 bg-blue-600 rounded-full grid place-items-center">
          <ArrowRight className="size-4 lg:size-5 max-lg:rotate-90" />
        </div>
      </div>

      {/* Çeviri Sonucus */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="text" className="text-sm text-zinc-300">
            Çeviri Sonucu
          </label>

          <div className="flex items-center gap-3">
            <button className="btn">
              <Volume2 className="size-4" /> Seslendir
            </button>
            <button className="btn">Kopyala</button>
          </div>
        </div>

        <div>
          <textarea disabled value={translatedText} />
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
