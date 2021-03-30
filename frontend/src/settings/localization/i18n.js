import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
import languageEN from './languages/en/translate.json'
import languageRU from './languages/ru/translate.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: languageEN,
            ru: languageRU
        },
        lookupLocalStorage: 'i18nextLng',
        lng:  window.localStorage.i18nextLng ? window.localStorage.i18nextLng : "ru",
        fallbackLng: "ru",
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: ".",
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    })

export default i18n;
