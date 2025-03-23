import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Function to dynamically load translation files
const loadTranslations = async (lang) => {
  try {
    const module = await import(`https://metanoia.community/assets/locales/${lang}.js`);
    return module[lang]; // Return the exported object
  } catch (error) {
    console.error(`Failed to load ${lang} translations:`, error);
    return {};
  }
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {}, // Start with empty resources
    lng: localStorage.getItem("language") || "en", // Default language
    fallbackLng: "en", // Fallback language
    supportedLngs: ["en", "it", "es", "fr", "cs", "ar"], // Supported languages
    debug: process.env.NODE_ENV === "development", // Debug mode
    interpolation: {
      escapeValue: false, // React already escapes HTML
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Language detection order
      caches: ["localStorage", "cookie"], // Cache the selected language
      lookupLocalStorage: "i18nextLng", // Key for localStorage
      lookupCookie: "i18nextLng", // Key for cookie
      checkWhitelist: true, // Ensure detected language is supported
    },
  });

// Load translations dynamically
const initializeTranslations = async () => {
  const languages = ["en", "it", "es", "fr", "cs", "ar"];
  for (const lang of languages) {
    const translations = await loadTranslations(lang);
    i18n.addResourceBundle(lang, "translation", translations.translation);
  }

  // Initialize the default language
  i18n.changeLanguage(localStorage.getItem("language") || "en");
};

initializeTranslations();

export default i18n;