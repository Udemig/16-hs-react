import { formatDate } from "../../utils/helpers";
import c from "../../utils/nullCheck";

const Time = ({ timeData }) => {
  return (
    <div className="grid grid-cols-2 rounded-2xl bg-white/1 border border-white/8 font-semibold">
      <div className="flex justify-between p-3 border-white/10 border-b border-r">
        <span className="text-sm text-white/80">Planlanan</span>
        <span>{c(formatDate(timeData?.scheduled?.departure))}</span>
      </div>
      <div className="flex justify-between p-3 border-white/10 border-b">
        <span className="text-sm text-white/80">Planlanan</span>
        <span>{c(formatDate(timeData?.scheduled?.arrival))}</span>
      </div>
      <div className="flex justify-between p-3 border-white/10 border-r">
        <span className="text-sm text-white/80">Gerçek</span>
        <span>{c(formatDate(timeData?.real?.departure))}</span>
      </div>
      <div className="flex justify-between p-3 border-white/10">
        <span className="text-sm text-white/80">Tahmini</span>
        <span>{c(formatDate(timeData?.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
