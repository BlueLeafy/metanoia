import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { datasApi } from "./apis/datasApi";
import languageReducer from "./slices/languageSlice"; // Ensure languageSlice is imported correctly

const store = configureStore({
    reducer: {
        [datasApi.reducerPath]: datasApi.reducer,  // API reducer for fetching data
        language: languageReducer  // Reducer for handling language state
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(datasApi.middleware); // Add middleware for API calls
    }
});

// This ensures that Redux Query listeners are correctly set up for cache management
setupListeners(store.dispatch);

export { store };
export { useFetchMediaQuery, useFetchColorsQuery } from "./apis/datasApi";  // Export the query hook for your API

