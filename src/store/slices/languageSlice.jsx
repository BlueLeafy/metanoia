import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n";

const initialState = {
    lang: localStorage.getItem("language") || "en", // Use localStorage or default to "en"
};

const languageSlice = createSlice({
    name: "language",
    initialState,  // Default en if not detected any other lang
    reducer: {
        setLanguage: (state, action) => {
            state.lang = action.payload;
            i18n.changeLanguage(action.payload); // Update i18n language
            localStorage.setItem("language", action.payload) // SAve the language to localStorage
        }
    }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;