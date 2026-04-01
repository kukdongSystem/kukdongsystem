import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100" fill="none">
              <path d="M20 20 L45 50 L20 80 L35 80 L60 50 L35 20 Z" fill="#3B82F6" />
              <path d="M50 20 L75 50 L50 80 L65 80 L90 50 L65 20 Z" fill="#8B5CF6" opacity="0.8" />
            </svg>
            <h3 className="logo" style={{ marginBottom: '0', fontSize: '1.2rem' }}>KUKDONG SYSTEM</h3>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '4px' }}>
            <p>{t('footerRights', language)}</p>
            <a href="/admin/login" style={{ color: 'rgba(255,255,255,0.1)', fontSize: '11px', textDecoration: 'none' }}>{t('footerAdmin', language)}</a>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p>{t('footerAddress', language)}</p>
          <p>☎️ 031) 492-0895 | 📠 031) 495-3686 | ✉️ soons28@naver.com</p>
        </div>
      </div>
    </footer>
  );
}
