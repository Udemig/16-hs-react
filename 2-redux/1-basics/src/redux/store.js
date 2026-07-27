import themeReducer from "./reducers/theme-reducer";
import todoReducer from "./reducers/todo-reducer";
import { combineReducers, createStore } from "redux";

// reducerları birleştir
const rootReducer = combineReducers({ todoReducer, themeReducer });

// store'u oluştur
const store = createStore(rootReducer);

// projeye tanıtmak için export et
export default store;
