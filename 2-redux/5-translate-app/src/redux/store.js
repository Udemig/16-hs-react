import translateReducer from "./slices/translateSlice";
import languageReducer from "./slices/languageSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { languageReducer, translateReducer } });

export default store;
