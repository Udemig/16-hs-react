import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const translateSlice = createSlice({
  name: "translate",
  initialState: {
    loading: true,
    error: null,
    sourceLang: { label: "Dili Algıla", value: undefined },
    targetLang: { label: "English", value: "en" },
    textToTranslate: "",
    translatedText: "",
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
    });
  },
});

export const { setSourceLang, setTargetLang, setText } = translateSlice.actions;

export default translateSlice.reducer;
