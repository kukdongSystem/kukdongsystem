'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ko' | 'en' | 'zh' | 'ja' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check local storage for saved language
    const savedLang = localStorage.getItem('app-language') as Language;
    if (['ko', 'en', 'zh', 'ja', 'de'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {!mounted ? <div style={{ visibility: 'hidden' }}>{children}</div> : children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
