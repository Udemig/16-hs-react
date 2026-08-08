import { createSlice } from "@reduxjs/toolkit";

/*
 ! Slice
 * Hem reducer hem aksiyon tipleri hem de aksiyon oluşturan fonksiyonları tek noktada tanımlar

 * createSlice() parametreleri
 * 1) name: slice'ın ismi
 * 2) intialState: başlangıç state'i
 * 3) reducers: aksiyon'ları ve görevlerini tanımlarız
  
 ! Not: Reducers fonksiyonlarında state'i doğrudan güncelleyebiliyoruz (mutable)
 */

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, theme: "dark" },
  reducers: {
    increase: (state, action) => {
      state.count++;
    },

    decrease: (state, action) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increase, decrease, setCount } = counterSlice.actions;

export default counterSlice.reducer;
