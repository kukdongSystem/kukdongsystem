'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
  image: string;
  images?: string[];
}

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}

const Icons = {
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
  ),
  Monitor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  ),
  Utensils: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
  ),
  Wind: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>
  ),
  Package: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4 7.5 4.21"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><polyline points="3.29 7 12 12 21.08 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
  Printer: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  ChevronLeft: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  )
};

const staticProjects: Project[] = [
  {
    id: 1,
    title: '자동차 도장 라인 PLC 제어 시스템',
    description: 'Mitsubishi FX5U 및 GT25 HMI를 이용한 완전 자동화 공정 구축',
    tag: '자동차/도장',
    image: '/images/plc.png'
  },
  {
    id: 2,
    title: '반도체 웨이퍼 이송 로봇 핸들링',
    description: '6축 다관절 로봇 및 비전 시스템 통합 정밀 제어 솔루션',
    tag: '반도체/로봇',
    image: '/images/robot.png',
    images: ['/images/robot.png', '/images/plc.png', '/images/hmi.png']
  },
  {
    id: 3,
    title: '스마트 팩토리 SCADA 통합 관제',
    description: '공장 전체 가동 현황 실시간 모니터링 및 데이터 로깅 시스템',
    tag: 'SCADA/스마트팩토리',
    image: '/images/hmi.png'
  }
];
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

// Removed staticProjects out of global scope to compute it per language

export default function Home() {
  const { language } = useLanguage();

  const staticProjects: Project[] = [
    {
      id: 1,
      title: language === 'en' ? 'Automotive Painting Line PLC Control System' : '자동차 도장 라인 PLC 제어 시스템',
      description: language === 'en' ? 'Built fully automated process using Mitsubishi FX5U and GT25 HMI' : 'Mitsubishi FX5U 및 GT25 HMI를 이용한 완전 자동화 공정 구축',
      tag: language === 'en' ? 'Automotive/Painting' : '자동차/도장',
      image: '/images/plc.png'
    },
    {
      id: 2,
      title: language === 'en' ? 'Semiconductor Wafer Transfer Robot Handling' : '반도체 웨이퍼 이송 로봇 핸들링',
      description: language === 'en' ? '6-axis articulated robot and vision system integrated precision control solution' : '6축 다관절 로봇 및 비전 시스템 통합 정밀 제어 솔루션',
      tag: language === 'en' ? 'Semiconductor/Robot' : '반도체/로봇',
      image: '/images/robot.png',
      images: ['/images/robot.png', '/images/plc.png', '/images/hmi.png']
    },
    {
      id: 3,
      title: language === 'en' ? 'Smart Factory SCADA Integrated Control' : '스마트 팩토리 SCADA 통합 관제',
      description: language === 'en' ? 'Real-time monitoring and data logging system for overall factory operation status' : '공장 전체 가동 현황 실시간 모니터링 및 데이터 로깅 시스템',
      tag: language === 'en' ? 'SCADA/Smart Factory' : 'SCADA/스마트팩토리',
      image: '/images/hmi.png'
    }
  ];

  const [allProjects, setAllProjects] = useState<Project[]>(staticProjects);
  const [currentHero, setCurrentHero] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [allVideos, setAllVideos] = useState<Video[]>([]);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  // Update static projects in state when language changes
  useEffect(() => {
    setAllProjects(prev => {
      const dynamicProjects = prev.filter(p => !staticProjects.find(sp => sp.id === p.id));
      return [...dynamicProjects, ...staticProjects];
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const heroSlides = [
    {
      title: t('heroTitle1', language),
      subtitle: t('heroSubtitle1', language),
      desc: t('heroDesc1', language),
      image: '/images/hero1.png'
    },
    {
      title: t('heroTitle2', language),
      subtitle: t('heroSubtitle2', language),
      desc: t('heroDesc2', language),
      image: '/images/hero2.png'
    },
    {
      title: t('heroTitle3', language),
      subtitle: t('heroSubtitle3', language),
      desc: t('heroDesc3', language),
      image: '/images/hero3.png'
    }
  ];

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio');
    if (savedProjects) {
      try {
        const dynamicProjects = JSON.parse(savedProjects);
        setAllProjects([...dynamicProjects, ...staticProjects]);
      } catch (e) {
        console.error('Failed to parse portfolio items', e);
      }
    }

    const savedVideos = localStorage.getItem('demo_videos');
    if (savedVideos) {
      try {
        const vids = JSON.parse(savedVideos);
        setAllVideos(vids);
        if (vids.length > 0) {
          setActiveVideo(vids[0]);
        }
      } catch (e) {
        console.error('Failed to parse videos', e);
      }
    }

    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="electricity" />
        <div className="scanner" />
        
        {/* Background Image Slider */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(5,7,10,0.7)', zIndex: 1 }} />
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%', 
                height: '100%', 
                backgroundImage: `url(${slide.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                opacity: currentHero === index ? 0.4 : 0,
                transition: 'opacity 2s ease-in-out',
                transform: currentHero === index ? 'scale(1.05)' : 'scale(1)',
                zIndex: 0
              }}
            />
          ))}
        </div>

        <div className="container" style={{ position: 'relative', height: '85vh', minHeight: '600px', width: '100%' }}>
          <div style={{ position: 'relative', height: '100%', width: '100%' }}>
            {heroSlides.map((slide, index) => (
              <div 
                key={index}
                className={`hero-content ${currentHero === index ? 'active' : ''}`}
                style={{ 
                  position: 'absolute',
                  top: '50%',
                  left: '24px',
                  right: '24px',
                  opacity: currentHero === index ? 1 : 0,
                  visibility: currentHero === index ? 'visible' : 'hidden',
                  transition: 'opacity 0.8s ease, transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: currentHero === index ? 'translateY(-50%)' : 'translateY(-45%)',
                  width: 'auto',
                  maxWidth: '850px',
                  zIndex: currentHero === index ? 10 : 1,
                  textAlign: 'left'
                }}
              >
                <div className="hero-text-wrapper">
                  <span className="hero-subtitle">
                    {slide.subtitle}
                  </span>
                </div>
                
                <div className="hero-text-wrapper">
                  <h1 className="hero-title">
                    {slide.title.split('\n').map((line, i) => (
                      <div key={i} className="hero-title-line">
                        <span className="hero-title-text text-gradient">{line}</span>
                      </div>
                    ))}
                  </h1>
                </div>

                <div className="hero-text-wrapper">
                  <p className="hero-description">
                    {slide.desc}
                  </p>
                </div>

                {/* Buttons moved inside for better flow especially on mobile */}
                <div className="hero-btns" style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                  <a href="#portfolio" className="btn-primary" style={{ padding: '14px 28px' }}>{t('heroBtnPortfolio', language)}</a>
                  <a href="#contact" className="btn-secondary" style={{ padding: '14px 28px' }}>{t('heroBtnContact', language)}</a>
                </div>
              </div>
            ))}
            
          </div>

          {/* Slide Indicators */}
          <div className="hero-indicators">
            <div className="indicator-bars">
              {heroSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentHero(index)}
                  className={`indicator-bar ${currentHero === index ? 'active' : ''}`}
                />
              ))}
            </div>
            <span className="slide-counter">
              0{currentHero + 1} / 0{heroSlides.length}
            </span>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.6 }}>Explore</span>
          <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)', marginTop: '10px' }} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ background: 'var(--bg-accent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('fieldsTitle', language)}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{t('fieldsSubTitle', language)}</p>
          </div>
          
          <div className="grid-cols-3">
            <div className="glass service-card glass-hover">
              <div className="service-icon"><Icons.Settings /></div>
              <h3>{t('field1', language)}</h3>
              <p>{t('field1Desc', language)}</p>
            </div>
            <div className="glass service-card glass-hover">
              <div className="service-icon"><Icons.Monitor /></div>
              <h3>{t('field2', language)}</h3>
              <p>{t('field2Desc', language)}</p>
            </div>
            <div className="glass service-card glass-hover">
              <div className="service-icon"><Icons.Zap /></div>
              <h3>{t('field4', language)}</h3>
              <p>{t('field4Desc', language)}</p>
            </div>
            <div className="glass service-card glass-hover">
              <div className="service-icon"><Icons.Utensils /></div>
              <h3>{t('fieldFood', language)}</h3>
              <p>{t('fieldFoodDesc', language)}</p>
            </div>
            <div className="glass service-card glass-hover">
              <div className="service-icon"><Icons.Wind /></div>
              <h3>{t('fieldTextile', language)}</h3>
              <p>{t('fieldTextileDesc', language)}</p>
            </div>
            <div className="glass service-card glass-hover">
              <div className="service-icon"><Icons.Package /></div>
              <h3>{t('fieldLogistics', language)}</h3>
              <p>{t('fieldLogisticsDesc', language)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section style={{ background: 'var(--bg-color)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('demoTitle', language)}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{t('demoSubTitle', language)}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: allVideos.length > 1 ? '1fr 350px' : '1fr', gap: '30px', maxWidth: '1400px', margin: '0 auto' }}>
            {/* Video Player */}
            <div className="glass" style={{ position: 'relative', width: '100%', height: '560px', overflow: 'hidden', padding: '10px' }}>
              {activeVideo ? (
                <div style={{ width: '100%', height: '100%', background: '#000', borderRadius: '12px', overflow: 'hidden' }}>
                  {activeVideo.url.includes('youtube.com') || activeVideo.url.includes('youtu.be') ? (
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={activeVideo.url.replace('watch?v=', 'embed/').split('&')[0]} 
                      title={activeVideo.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video 
                      src={activeVideo.url} 
                      controls 
                      autoPlay 
                      muted 
                      loop 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    ></video>
                  )}
                </div>
              ) : (
                <div 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    backgroundImage: 'url(/images/automation_video.png)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <p style={{ color: 'var(--text-muted)' }}>{t('demoNoVideo', language)}</p>
                </div>
              )}
              
              {/* Technical Overlay for Video */}
              {activeVideo && (
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', textAlign: 'left', pointerEvents: 'none', zIndex: 10 }}>
                  <p style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>Now Playing</p>
                  <h4 style={{ fontSize: '1.25rem' }}>{activeVideo.title}</h4>
                </div>
              )}
            </div>

            {/* Video List Sidebar */}
            {allVideos.length > 1 && (
              <div className="glass" style={{ padding: '20px', overflowY: 'auto', maxHeight: '560px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>{t('demoListTitle', language)}</h3>
                {allVideos.map(v => (
                  <div 
                    key={v.id} 
                    onClick={() => setActiveVideo(v)}
                    style={{ 
                      padding: '16px', 
                      borderRadius: '12px', 
                      background: activeVideo?.id === v.id ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255,255,255,0.02)',
                      border: activeVideo?.id === v.id ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '6px', color: activeVideo?.id === v.id ? 'var(--accent-primary)' : 'white' }}>{v.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{v.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('portfolioTitle', language)}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{t('portfolioSubTitle', language)}</p>
          </div>

          <div className="grid-cols-3 portfolio-grid">
            {allProjects.map((project) => (
              <div 
                key={project.id} 
                className="glass portfolio-item glass-hover"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImgIndex(0);
                }}
              >
                <div 
                  className="portfolio-image" 
                  style={{ backgroundImage: `url(${project.image.startsWith('data:') ? project.image : project.image})` }} 
                />
                <div className="portfolio-info">
                  <span className="tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="about" style={{ background: 'linear-gradient(to bottom, var(--bg-color), var(--bg-accent))' }}>
        <div className="container">
          <div className="section-header">
            <span className="trust-badge">Unrivaled Expertise</span>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '8px' }}>{t('contactWhyTitle', language)}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t('trustSubTitle', language)}</p>
            <div className="title-underline" />
          </div>
          <div className="glass" style={{ padding: '80px', textAlign: 'center' }}>
            <div className="grid-cols-3" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Icons.Check />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{t('trust1Title', language)}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('trust1Desc', language)}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Icons.Check />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{t('trust2Title', language)}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('trust2Desc', language)}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Icons.Check />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{t('trust3Title', language)}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('trust3Desc', language)}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Icons.Check />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{t('trust4Title', language)}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('trust4Desc', language)}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Icons.Check />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{t('trust5Title', language)}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('trust5Desc', language)}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Icons.Check />
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{t('trust6Title', language)}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('trust6Desc', language)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('contactTitle', language)}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{t('contactDesc', language)}</p>
          </div>

          <div className="grid-cols-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            {/* Left: Contact Info */}
            <div className="glass" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <h3 style={{ marginBottom: '32px' }}>{t('contactProjectConsultTitle', language)}</h3>
                
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px' }}>
                  <div className="service-icon" style={{ marginBottom: 0 }}><Icons.Phone /></div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{t('contactTechConsult', language)}</p>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>031) 492-0895</h3>
                  </div>
                </div>

                {/* FAX */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px' }}>
                  <div className="service-icon" style={{ marginBottom: 0 }}><Icons.Printer /></div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{t('contactDirectFax', language)}</p>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: '700' }}>031) 495-3686</h3>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
                  <div className="service-icon" style={{ marginBottom: 0 }}><Icons.Mail /></div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{t('contactOfficialEmail', language)}</p>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '600' }}>soons28@naver.com</h3>
                  </div>
                </div>
              </div>
              <button className="btn-primary" style={{ width: '100%' }}>{t('contactLiveConsultBtn', language)}</button>
            </div>

            {/* Right: Map & Location */}
            <div className="glass" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '24px' }}>{t('contactDirectionsTitle', language)}</h3>
              <div 
                style={{ 
                  width: '100%', 
                  height: '240px', 
                  backgroundImage: 'url(/images/map.png)', 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  border: '1px solid var(--glass-border)'
                }}
              />
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '1rem', marginBottom: '20px', fontWeight: 'bold', lineHeight: '1.5' }}>
                  {t('mapAddress', language)}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a 
                    href="https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%82%B0%EB%8B%A8%EB%A1%9C%20326%20%EC%95%88%EC%82%B0%EC%9C%A0%ED%86%B5%EC%83%81%EA%B0%80%2019%EB%8F%99%20104%ED%98%B8%20(%EA%B7%B9%EB%8F%99%EA%B3%84%EC%A0%84)" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-secondary" 
                    style={{ padding: '8px 12px', fontSize: '0.85rem', textDecoration: 'none' }}
                  >
                    {t('mapNaver', language)}
                  </a>
                  <a 
                    href="https://map.kakao.com/?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%82%B0%EB%8B%A8%EB%A1%9C%20326%20%EC%95%88%EC%82%B0%EC%9C%A0%ED%86%B5%EC%83%81%EA%B0%80%2019%EB%8F%99%20104%ED%98%B8%20(%EA%B7%B9%EB%8F%99%EA%B3%84%EC%A0%84)" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-secondary" 
                    style={{ padding: '8px 12px', fontSize: '0.85rem', textDecoration: 'none' }}
                  >
                    {t('mapKakao', language)}
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%95%88%EC%82%B0%EC%8B%9C+%EC%82%B0%EB%8B%A8%EB%A1%9C+326+%EC%95%88%EC%82%B0%EC%9C%A0%ED%86%B5%EC%83%81%EA%B0%80+19%EB%8F%99+104%ED%98%B8+(%EA%B7%B9%EB%8F%99%EA%B3%84%EC%A0%84)" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-secondary" 
                    style={{ padding: '8px 12px', fontSize: '0.85rem', textDecoration: 'none' }}
                  >
                    {t('mapGoogle', language)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Portfolio Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="glass modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Left: Image Gallery */}
            <div className="modal-left">
              {/* Navigation Buttons */}
              {(selectedProject.images && selectedProject.images.length > 1) && (
                <>
                  <button 
                    className="modal-slider-btn prev" 
                    onClick={() => setCurrentImgIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images!.length - 1))}
                  >
                    <Icons.ChevronLeft />
                  </button>
                  <button 
                    className="modal-slider-btn next" 
                    onClick={() => setCurrentImgIndex((prev) => (prev < selectedProject.images!.length - 1 ? prev + 1 : 0))}
                  >
                    <Icons.ChevronRight />
                  </button>
                  <div className="image-counter">
                    {currentImgIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
              
              <div 
                className="modal-img-display" 
                style={{ 
                  backgroundImage: `url(${selectedProject.images ? selectedProject.images[currentImgIndex] : selectedProject.image})` 
                }}
              />
            </div>

            {/* Right: Project Info */}
            <div className="modal-right">
              <button 
                className="modal-close" 
                onClick={() => setSelectedProject(null)}
                style={{ top: '20px', right: '20px' }}
              >
                <Icons.X />
              </button>
              
              <div style={{ flex: 1 }}>
                <span className="tag" style={{ marginBottom: '20px' }}>{selectedProject.tag}</span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{selectedProject.title}</h2>
                <div style={{ width: '40px', height: '4px', background: 'var(--accent-primary)', marginBottom: '30px' }} />
                
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '40px' }}>
                  {selectedProject.description}
                </p>

                <div style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h3 style={{ marginBottom: '16px' }}>{t('modalTechStack', language)}</h3>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>{t('modalTech1', language)}</li>
                    <li>{t('modalTech2', language)}</li>
                    <li>{t('modalTech3', language)}</li>
                    <li>{t('modalTech4', language)}</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
                <button className="btn-primary" style={{ flex: 1 }} onClick={() => setSelectedProject(null)}>{t('modalCloseBtn', language)}</button>
                <a href="#contact" className="btn-secondary" style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }} onClick={() => setSelectedProject(null)}>{t('modalConsultBtn', language)}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
