import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import it from "./locales/it.json";

i18n
    .use(initReactI18next) // Initialize for React
    .init({
        resources: {
            en: { translation: en },
            it: { translation: it },
        },
        lng: "en", // Default language if nothing is detected
        fallbackLng: "en", // Fallback language if the selected one is not available
        supportedLngs: ["en", "it"], // Supported languages
        debug: process.env.NODE_ENV === 'development', // Enable debug only in development mode
        interpolation: {
            escapeValue: false, // React already escapes HTML
        },
        detection: {
            order: ["localStorage", "cookie", "navigator"], // Language detection order
            caches: ["localStorage", "cookie"], // Cache the selected language
            lookupLocalStorage: "i18nextLng", // This should match the key where the language is stored in localStorage
            lookupCookie: "i18nextLng", // Same for cookie if used
            checkWhitelist: true, // Ensure that the detected language is from the list of supported languages
        },
    });

export default i18n;
