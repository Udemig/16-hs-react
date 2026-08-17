import { divIcon } from "leaflet";

// imleçlerin iconu'unu oluşturan fonksiyon
export const getIcon = (flight, detailId) => {
  return divIcon({
    html: `<img src="/plane.png" alt="plane" style="width:30px;height:30px;transform:rotate(${flight.track}deg)"/>`,
    iconSize: [30, 30],
    className: `${detailId && "passive-marker"} ${detailId === flight.id && "active-marker"}`,
  });
};

// tarihi formatla
export const formatDate = (time) => {
  if (!time || time === 0) return null;

  const formatted = new Date(time * 1000);

  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
