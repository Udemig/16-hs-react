import c from "../../utils/nullCheck";

const Airport = ({ airportData }) => {
  return (
    <div className="relative grid grid-cols-2 p-5 bg-white/3 rounded-2xl border border-white/8">
      {/* Kalkış */}
      <div className="flex flex-col items-center text-center gap-3 border-r border-white/10 pr-4">
        <h2>{c(airportData?.origin?.code?.iata)}</h2>
        <h3 className="font-bold text-xl">{c(airportData?.origin?.position?.region?.city)}</h3>
        <span className="text-sm text-white/60 font-semibold">
          {c(airportData?.origin?.timezone?.abbr)}
        </span>
        <span className="text-sm text-white/60 font-semibold">
          {c(airportData?.origin?.timezone?.name)}
        </span>
      </div>

      {/* İkon */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="bg-linear-to-r from-indigo-400 to-indigo-500 shadow-xl border border-white/20 rounded-full p-1 ps-1.5">
          <img src="/plane.png" alt="plane" className="size-7 rotate-90" />
        </div>
      </div>

      {/* İniş */}
      <div className="flex flex-col items-center text-center gap-3 border-l border-white/10 pl-4">
        <h2>{c(airportData?.destination?.code?.iata)}</h2>
        <h3 className="font-bold text-xl">{c(airportData?.destination?.position?.region?.city)}</h3>
        <span className="text-sm text-white/60 font-semibold">
          {c(airportData?.destination?.timezone?.abbr)}
        </span>
        <span className="text-sm text-white/60 font-semibold">
          {c(airportData?.destination?.timezone?.name)}
        </span>
      </div>
    </div>
  );
};

export default Airport;
