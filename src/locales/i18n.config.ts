import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './en/common.json';
import homeEn from './en/home.json';
import commonKo from './ko/common.json';
import homeKo from './ko/home.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
        home: homeEn,
      },
      ko: {
        common: commonKo,
        home: homeKo,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
