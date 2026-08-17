import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../actions";

const initialState = {
  loading: true,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.info = action.payload;
      state.route = action.payload.trail;
    });
  },
});

export default detailSlice.reducer;
