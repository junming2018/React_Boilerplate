import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./json/en.json";
import ms from "./json/ms.json";

const resources = {
    en: {
        translation: en,
    },
    ms: {
        translation: ms,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
