import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";

const languageSlice = createSlice({
  name: "language",
  initialState: { loading: true, error: null, languages: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getLanguages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.languages = action.payload;
    });
  },
});

export default languageSlice.reducer;
