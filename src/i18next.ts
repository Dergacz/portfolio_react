import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { englishLanguage } from './languages/en/en';
import { polishLanguage } from './languages/pl/pl';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: englishLanguage,
    },
    pl: {
      translation: polishLanguage,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;