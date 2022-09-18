import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import translationTR from 'i18n/tr.json';
import translationEN from 'i18n/en.json';

const resources = {
    en: {
        translation: translationEN,
    },
    tr: {
        translation: translationTR
    }
}

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        resources,
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    });
