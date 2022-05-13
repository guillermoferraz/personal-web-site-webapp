import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationES from './locales/es.json';
import translationEN from './locales/en.json';
import { changeLanguage } from '../config/changeLanguage';

// the translations
console.log("test:", changeLanguage())

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
		},
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
  i18n.changeLanguage(changeLanguage())


export default i18n