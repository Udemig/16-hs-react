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

    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    updateNote: (state, action: PayloadAction<{ id: string; data: NoteValues }>) => {
      const index = state.notes.findIndex((note) => note.id === action.payload.id);

      state.notes.splice(index, 1, { id: action.payload.id, ...action.payload.data });
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
