'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path d="M20 20 L45 50 L20 80 L35 80 L60 50 L35 20 Z" fill="url(#logo-gradient)" />
            <path d="M50 20 L75 50 L50 80 L65 80 L90 50 L65 20 Z" fill="url(#logo-gradient)" opacity="0.6" />
          </svg>
          <div className="logo-text">
            <span>KUKDONG</span>
            <span>SYSTEM</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#about">{t('navAbout', language)}</Link></li>
          <li><Link href="/#services">{t('navServices', language)}</Link></li>
          <li><Link href="/#portfolio">{t('navPortfolio', language)}</Link></li>
          <li><Link href="/#contact">{t('navContact', language)}</Link></li>
        </ul>
        <div className="nav-lang-wrapper">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="lang-select"
          >
            <option value="ko" style={{ color: '#000' }}>🌐 한국어</option>
            <option value="en" style={{ color: '#000' }}>🌐 English</option>
            <option value="zh" style={{ color: '#000' }}>🌐 中文</option>
            <option value="ja" style={{ color: '#000' }}>🌐 日本語</option>
            <option value="de" style={{ color: '#000' }}>🌐 Deutsch</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
