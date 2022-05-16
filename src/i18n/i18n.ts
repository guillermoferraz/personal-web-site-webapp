import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationES from './locales/es.json';
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationBR from './locales/br.json';
import { changeLanguage } from '../config/changeLanguage';

// the translations
i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      fr: {
        translation: translationFR,
      },
      br: {
        translation: translationBR,
      },
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
i18n.changeLanguage(changeLanguage())


export default i18n