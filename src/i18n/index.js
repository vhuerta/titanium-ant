import i18n from 'i18next';
import { initReactI18n } from 'react-i18next/hooks';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from 'i18n/es';

i18n
  .use(LanguageDetector)
  .use(initReactI18n)
  .init({
    fallbackLng  : 'es',
    debug        : process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    resources: { es }
  });

export default i18n;
