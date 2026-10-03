import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type store from "./store";

// Store'un tipi
export type RootState = ReturnType<typeof store.getState>;

// Store'a abone olurken her seferinde tip tanımlamak zorunda kalmamak için custom-hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// appDispatch tipini tanımlaii
export type AppDispatch = typeof store.dispatch;

// tipi tanımlanmış custom dispatch hooku
export const useAppDispatch = () => useDispatch<AppDispatch>();
