import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'TR' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'TR',
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('yb_fintech_lang');
    if (saved === 'EN' || saved === 'TR') {
      return saved;
    }
    return 'TR'; // Default to Turkish as requested
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('yb_fintech_lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
