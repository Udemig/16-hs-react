import themeReducer from "./reducers/theme-reducer";
import todoReducer from "./reducers/todo-reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// reducerları birleştir
const rootReducer = combineReducers({ todoReducer, themeReducer });

// store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

// projeye tanıtmak için export et
export default store;
