import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ restaurant: restaurantReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
