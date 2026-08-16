import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[38.901701, 35.387776]}
      zoom={6}
      scrollWheelZoom={true}
      className="h-[calc(100vh-71.5px)]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[38.901701, 35.387776]}>
        <Popup>Merkez</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
