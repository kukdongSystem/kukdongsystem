'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User } from 'lucide-react';

export default function LoginPage() {
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
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>관리자 로그인</h2>
          <p style={{ color: 'var(--text-muted)' }}>포트폴리오 관리를 위해 로그인하세요.</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ position: 'relative' }}>
            <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="아이디"
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
              placeholder="비밀번호"
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
            로그인
          </button>
        </form>

        <a href="/" style={{ display: 'block', textAlign: 'center', marginTop: '24px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          홈페이지로 돌아가기
        </a>
      </div>
    </div>
  );
}
