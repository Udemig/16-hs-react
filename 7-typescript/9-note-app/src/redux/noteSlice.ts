import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note, NoteValues } from "../utils/types";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = { notes: [] };

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteValues>) => {
      // note'a dizi ekle
      const newNote: Note = {
        id: v4(),
        ...action.payload,
      };

      // notu diziye ekle
      state.notes.unshift(newNote);
    },
    deleteNote: (state, action) => {},
    updateNote: (state, action) => {},
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
