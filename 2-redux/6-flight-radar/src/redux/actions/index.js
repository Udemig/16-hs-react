import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

const params = {
  bl_lat: "34.590473",
  bl_lng: "24.699893",
  tr_lat: "43.236433",
  tr_lng: "45.450236",
  limit: "300",
  speed: "10,99999",
  altitude: "10,99999",
};

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // api'dan türkiye üzeirndeki uçuş verilerini al
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen dizi içerisinde dizilerden oluşan veriyi nesnelerden oluşan diziye çevir
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    callsign: item[1],
    lat: item[2],
    lon: item[3],
    track: item[4],
    alt: item[5],
    speed: item[6],
  }));

  // aksiyonun payload'ını return et
  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  // api isteği at
  const res = await api.get("/flights/detail", { params: { flight: id } });

  // payload return
  return res.data;
});
