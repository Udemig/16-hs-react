import { Languages } from "lucide-react";
import { useDispatch } from "react-redux";
import { translateText } from "../redux/actions";

const Button = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => dispatch(translateText())}
        className="relative px-6 py-2 rounded-xl font-semibold text-lg bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:from-zinc-700"
      >
        <div className="flex items-center gap-3">
          <Languages className="size-4 lg:size-5" />
          <span>Çevir</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
