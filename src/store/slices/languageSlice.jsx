import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n";

// Retrieve the saved language from localStorage or default to "en"
const savedLanguage = localStorage.getItem("language") || "en";

const initialState = {
    lang: savedLanguage, // Use the saved language or default to "en"
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: { // Fix: Use "reducers" (plural)
        setLanguage: (state, action) => {
            const newLanguage = action.payload;
            state.lang = newLanguage; // Update the language in the Redux state
            localStorage.setItem("language", newLanguage); // Save the language to localStorage
            i18n.changeLanguage(newLanguage); // Update i18n language
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;