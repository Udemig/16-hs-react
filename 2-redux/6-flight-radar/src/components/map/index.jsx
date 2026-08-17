import { MapContainer, Marker, TileLayer, useMap, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import PlaneMarker from "./PlaneMarker";
import { useState } from "react";
import Modal from "../modal";
import AirportMarker from "./AirportMarker";

const Map = () => {
  const { flights, searchTerm } = useSelector((store) => store.flightReducer);
  const { loading, info, route } = useSelector((store) => store.detailReducer);

  // detay'ı gösterilecek uçuşun id'si
  const [detailId, setDetailId] = useState(null);

  // aratılan kelimeye göre filtrele
  const filtredFlights = searchTerm
    ? flights.filter((i) => i.callsign.toLowerCase().includes(searchTerm.toLowerCase()))
    : flights;

  return (
    <>
      <MapContainer
        center={[38.901701, 35.387776]}
        zoom={6}
        scrollWheelZoom={true}
        className="h-[calc(100vh-71.5px)]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {filtredFlights.map((flight) => (
          <PlaneMarker
            key={flight.id}
            flight={flight}
            detailId={detailId}
            setDetailId={setDetailId}
          />
        ))}

        {/* Kalkış Noktası */}
        {!loading && detailId && info && info?.airport?.origin && (
          <AirportMarker title="Kalkış" info={info.airport.origin} />
        )}

        {/* İniş Noktası */}
        {!loading && detailId && info && info?.airport?.destination && (
          <AirportMarker title="İniş" info={info.airport.destination} />
        )}

        {/* Uçcağın Rotası */}
        {!loading && detailId && route && (
          <Polyline positions={route} pathOptions={{ color: "#4f39f6" }} />
        )}
      </MapContainer>

      <Modal detailId={detailId} close={() => setDetailId(null)} />
    </>
  );
};

export default Map;
