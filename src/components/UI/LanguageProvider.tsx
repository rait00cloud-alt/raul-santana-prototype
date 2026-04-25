import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../languages/index';

interface LanguageContextType {
  language: 'en-us';
  changeLanguage: (lang: 'en-us') => void;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within I18nProvider');
  }
  return context;
};

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [language, setLanguage] = useState<'en-us'>('en-us'); // Always English

  // Initialize i18n to English only
  useEffect(() => {
    const initI18n = async () => {
      try {
        await i18n.init();
        await i18n.changeLanguage('en'); // Force English
        setIsReady(true);
      } catch (error) {
        console.error('Error initializing i18n:', error);
        setIsReady(true);
      }
    };

    initI18n();
  }, []);

  // Prevent any language change
  const changeLanguage = (lang: 'en-us') => {
    if (!isChanging && lang !== language) {
      setIsChanging(true);
      i18n.changeLanguage('en').finally(() => setIsChanging(false));
    }
  };

  const contextValue = useMemo(
    () => ({ language, changeLanguage, isChanging }),
    [language, isChanging]
  );

  if (!isReady) return null;

  return (
    <LanguageContext.Provider value={contextValue}>
      <I18nextProvider i18n={i18n}>
        <div lang={language}>{children}</div>
      </I18nextProvider>
    </LanguageContext.Provider>
  );
}
