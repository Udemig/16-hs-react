import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const translateSlice = createSlice({
  name: "translate",
  initialState: {
    loading: false,
    error: null,
    sourceLang: { label: "Dili Algıla", value: undefined },
    targetLang: { label: "English", value: "en" },
    textToTranslate: "",
    translatedText: "",
    history: [],
  },
  reducers: {
    setSourceLang: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTargetLang: (state, action) => {
      state.targetLang = action.payload;
    },
    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },
    swap: (state) => {
      const tempSource = state.sourceLang;
      const tempTarget = state.targetLang;
      const tempText = state.textToTranslate;
      const tempTranslated = state.translatedText;

      state.sourceLang = tempTarget;
      state.targetLang = tempSource;
      state.textToTranslate = tempTranslated;
      state.translatedText = tempText;
    },
    clear: (state) => {
      state.textToTranslate = "";
      state.translatedText = "";
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.loading = true;
      // state.translatedText = "";
    });

    builder.addCase(translateText.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(translateText.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.translatedText = action.payload;

      // çeviri sonucu geldiyse çeviriyi geçmişe kaydet
      if (state.textToTranslate && action.payload) {
        const last = state.history[0];
        const now = new Date().getTime();

        // Eğer son geçmiş öğesi ile aynı diller seçiliyse ve son işlem üzerinden 10 saniyede az geçmişse
        // yeni bir geçmiş öğesi eklemek yerine sonuncuyu güncelle
        if (
          last &&
          last.sourceLang === state.sourceLang.label &&
          last.targetLang === state.targetLang.label &&
          now - last.timestamp < 10000
        ) {
          last.textToTranslate = state.textToTranslate;
          last.translatedText = action.payload;
          last.timestamp = now;
        } else {
          state.history.unshift({
            id: Date.now(),
            textToTranslate: state.textToTranslate,
            translatedText: action.payload,
            sourceLang: state.sourceLang.label,
            targetLang: state.targetLang.label,
            timestamp: now,
          });
        }
      }
    });
  },
});

export const { setSourceLang, setTargetLang, setText, swap, clear, clearHistory } =
  translateSlice.actions;

export default translateSlice.reducer;
