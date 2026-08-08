import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./slices/crudSlice";
import counterReducer from "./slices/counterSlice";

/*
 * configureStore vs createStore
 * reducer'ları otomatik olarak birleştirir
 * redux-thunk kurulu gelir
 * redux-devtools kurulu gelir
 */

const store = configureStore({ reducer: { counterReducer, crudReducer } });

export default store;
