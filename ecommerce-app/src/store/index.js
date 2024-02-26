// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartApi } from "../services/cartApi";
import { productsApi } from "../services/productsApi";

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware, productsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
