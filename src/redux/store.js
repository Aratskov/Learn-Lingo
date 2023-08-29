import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader/loaderSlice";
import teachersReducer from "./teachers/teachersSlice";
import authReducer from "./auth/authSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfigs = {
  key: "token",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

const persistedCatalogReducer = persistReducer(authPersistConfigs, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedCatalogReducer,
    teachers: teachersReducer,
    isLoading: loaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
