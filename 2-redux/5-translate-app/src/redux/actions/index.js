import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../utils/api";

// dil verileri için api isteği atıp yanıta göre reducer'a oto. haber veren thunk aksiyonu
export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  const res = await api.get("/languages");

  return res.data.languages;
});

// çeviri sonucu için api isteği atıp yanıta göre reducer'a haber veren thunk aksiyonu
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (_, { getState }) => {
    // getState: aksiyon içerisinde store'daki veriye abone olmaya yarar
    // bileşen içerisinde olsaydık useSelector kullanırdık aksiyon içinde getState
    // store'da tutulan verilere eriş
    const state = getState().translateReducer;

    // api'a çeviri için istek at
    const res = await api.post("", {
      q: state.textToTranslate,
      source: state.sourceLang.value,
      target: state.targetLang.value,
    });

    // aksiyonun payload'ını return et
    return res.data.data.translations.translatedText[0];
  },
);
