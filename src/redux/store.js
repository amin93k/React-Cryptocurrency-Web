
import { configureStore } from "@reduxjs/toolkit";
import { cryptoApiSlice } from "../services/cryptoApi"
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer: {
        // Add the cryptoApiSlice reducer to the store
        [cryptoApiSlice.reducerPath]: cryptoApiSlice.reducer,
        theme : themeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApiSlice.middleware),
})

export default store;
