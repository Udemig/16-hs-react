import { createSlice } from "@reduxjs/toolkit";
import { MOCK_TASKS } from "../../utils/constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: MOCK_TASKS },
  reducers: {
    createTask: (state, action) => {
      // kaydedilecek task'e id ekle
      action.payload.id = new Date().getTime();

      // task'i diziye ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // silinecek elemanın dizideki sırasını bul
      const index = state.tasks.findIndex((task) => task.id === action.payload);

      // taski'i diziden kaldır
      state.tasks.splice(index, 1);
    },

    updateTask: (state, action) => {
      // güncellenicek elemanın dizideki sırasını bul
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);

      // task'i dizide güncelle
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

export const { createTask, updateTask, deleteTask } = crudSlice.actions;

export default crudSlice.reducer;
