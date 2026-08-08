import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: { todos: [] },
  reducers: {
    x: (state, action) => {},

    y: (state, action) => {},

    z: (state, action) => {},
  },
});

export const { x, y, z } = crudSlice.actions;

export default crudSlice.reducer;
