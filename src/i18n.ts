import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Translation from "../public/translation.json"; // Assuming this contains both Arabic and English translations

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: Translation.en, // Assuming you have an 'en' key inside the translation JSON for English translations
    },
    ar: {
      translation: Translation.ar, // Assuming you have an 'ar' key inside the translation JSON for Arabic translations
    },
  },
  lng: "ar", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
