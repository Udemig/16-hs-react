import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/es/storage";

// persist için ayar nesnesi
const persistConfig = {
  key: "store-state",
  storage,
};

// persist reducer'ı oluştur
const persistedReducer = persistReducer(persistConfig, noteReducer);

// store'u oluştur
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // bu aksiyonları görmezden gel
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// persist store'u export et
export const persistor = persistStore(store);

// store'u export et
export default store;
