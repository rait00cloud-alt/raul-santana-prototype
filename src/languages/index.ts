// src/languages/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en-us.json'
import pt from './pt-br.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    lng: 'en', // Default to English
    fallbackLng: 'en',
    
    // Prevent any automatic language detection
    detection: {
      order: [], // Empty array = no detection
      caches: [], // Don't cache language preference
    },
    
    interpolation: {
      escapeValue: false
    },
  })

export default i18n
