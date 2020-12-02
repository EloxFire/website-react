import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from './langs/en/translation.json';
import translationFR from './langs/fr/translation.json';

// the translations
const resources = {
  interpolation: {escapeValue: false},
  lng: 'fr',
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
