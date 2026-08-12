import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./slices/crudSlice";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

/*
 * configureStore vs createStore
 * reducer'ları otomatik olarak birleştirir
 * redux-thunk kurulu gelir
 * redux-devtools kurulu gelir
 */

const store = configureStore({ reducer: { counterReducer, crudReducer, userReducer } });

export default store;
