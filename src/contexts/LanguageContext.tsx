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
    const supportedLangs: Language[] = ['ko', 'en', 'zh', 'ja', 'de'];

    if (savedLang && supportedLangs.includes(savedLang)) {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      // Automatic detection via browser language
      const browserLang = navigator.language.toLowerCase();
      let detected: Language = 'ko';

      if (browserLang.startsWith('ko')) detected = 'ko';
      else if (browserLang.startsWith('en')) detected = 'en';
      else if (browserLang.startsWith('zh')) detected = 'zh';
      else if (browserLang.startsWith('ja')) detected = 'ja';
      else if (browserLang.startsWith('de')) detected = 'de';

      setLanguageState(detected);
      document.documentElement.lang = detected;
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
    document.documentElement.lang = lang;
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
