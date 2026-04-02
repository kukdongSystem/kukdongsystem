'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export default function LoginPage() {
  const { language } = useLanguage();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 초기 설정용 임시 계정 (나중에 서버 연동 시 변경)
    if (userId === 'admin' && password === 'admin1234') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/dashboard');
    } else {
      setError(t('adminLoginError', language));
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>{t('adminLoginTitle', language)}</h2>
          <p style={{ color: 'var(--text-muted)' }}>{t('adminLoginDesc', language)}</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder={t('adminId', language)}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 14px 14px 48px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                color: 'white',
                outline: 'none'
              }}
              required
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="password"
              placeholder={t('adminPw', language)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 14px 14px 48px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                color: 'white',
                outline: 'none'
              }}
              required
            />
          </div>

          {error && <p style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem' }}>{error}</p>}

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            {t('adminLoginBtn', language)}
          </button>
        </form>

        <Link href="/" style={{ display: 'block', textAlign: 'center', marginTop: '24px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          {t('adminBackHome', language)}
        </Link>
      </div>
    </div>
  );
}
