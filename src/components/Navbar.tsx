'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  return (
    <nav>
      <div className="container">
        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path d="M20 20 L45 50 L20 80 L35 80 L60 50 L35 20 Z" fill="url(#logo-gradient)" />
            <path d="M50 20 L75 50 L50 80 L65 80 L90 50 L65 20 Z" fill="url(#logo-gradient)" opacity="0.6" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2', fontSize: '1.1rem' }}>
            <span style={{ fontWeight: '900', letterSpacing: '0.08em', color: '#fff' }}>KUKDONG</span>
            <span style={{ fontWeight: '500', fontSize: '0.75rem', color: 'var(--accent-primary)', letterSpacing: '0.2em' }}>SYSTEM</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="/#about">{t('navAbout', language)}</a></li>
          <li><a href="/#services">{t('navServices', language)}</a></li>
          <li><a href="/#portfolio">{t('navPortfolio', language)}</a></li>
          <li><a href="/#contact">{t('navContact', language)}</a></li>
        </ul>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            style={{ 
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
              color: '#fff', borderRadius: '20px', padding: '6px 14px', fontSize: '13px', 
              cursor: 'pointer', outline: 'none', appearance: 'none', WebkitAppearance: 'none',
            }}
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
