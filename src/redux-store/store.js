
import { configureStore } from "@reduxjs/toolkit";
import { cryptoApiSlice } from "../services/cryptoApi"

const store = configureStore({
    reducer: {
        // Add the cryptoApiSlice reducer to the store
        [cryptoApiSlice.reducerPath]: cryptoApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApiSlice.middleware),
})

export default store;
