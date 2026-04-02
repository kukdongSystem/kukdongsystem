'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
  image: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}

// Inline SVG components for maximum compatibility
const Icons = {
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
  Trash: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  ),
  LogOut: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
  ),
  Image: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
  ),
  Dashboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  Video: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
  )
};

export default function AdminDashboard() {
  const { language } = useLanguage();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', tag: 'adminPjtTag4', image: '' });
  const [isUploading, setIsUploading] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [showAddVideoForm, setShowAddVideoForm] = useState(false);
  const [newVideo, setNewVideo] = useState({ title: '', description: '', url: '' });

  useEffect(() => {
    setMounted(true);
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      router.push('/admin/login');
      return;
    }

    const savedProjects = localStorage.getItem('portfolio');
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (e) {
        console.error('Failed to parse projects', e);
      }
    }

    const savedVideos = localStorage.getItem('demo_videos');
    if (savedVideos) {
      try {
        setVideos(JSON.parse(savedVideos));
      } catch (e) {
        console.error('Failed to parse videos', e);
      }
    }
  }, [router]);

  if (!mounted) return null;

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/admin/login');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject({ ...newProject, image: reader.result as string });
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.image) return alert(t('adminImgRequired', language));

    const updatedProjects = [
      { id: Date.now(), ...newProject },
      ...projects,
    ];
    setProjects(updatedProjects);
    localStorage.setItem('portfolio', JSON.stringify(updatedProjects));
    setNewProject({ title: '', description: '', tag: 'adminPjtTag4', image: '' });
    setShowAddForm(false);
  };

  const deleteProject = (id: number) => {
    if (confirm(t('adminDeleteConfirm', language))) {
      const updatedProjects = projects.filter(p => p.id !== id);
      setProjects(updatedProjects);
      localStorage.setItem('portfolio', JSON.stringify(updatedProjects));
    }
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedVideos = [
      { id: Date.now(), ...newVideo },
      ...videos,
    ];
    setVideos(updatedVideos);
    localStorage.setItem('demo_videos', JSON.stringify(updatedVideos));
    setNewVideo({ title: '', description: '', url: '' });
    setShowAddVideoForm(false);
  };

  const deleteVideo = (id: number) => {
    if (confirm(t('adminDeleteConfirm', language))) {
      const updatedVideos = videos.filter(v => v.id !== id);
      setVideos(updatedVideos);
      localStorage.setItem('demo_videos', JSON.stringify(updatedVideos));
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', paddingTop: '100px' }}>
      <nav style={{ background: 'var(--bg-accent)', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Icons.Dashboard />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', fontSize: '14px' }}>
                <span style={{ fontWeight: '800' }}>KUKDONG</span>
                <span style={{ fontWeight: '400', fontSize: '11px', color: 'var(--text-muted)' }}>SYSTEM</span>
            </div>
            <span style={{ margin: '0 10px', color: 'var(--glass-border)' }}>|</span>
            <h2 style={{ fontSize: '1rem' }}>{t('adminDashboard', language)}</h2>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '14px' }} onClick={() => router.push('/')}>
              {t('adminGoHome', language)}
            </button>
            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={handleLogout}>
              <Icons.LogOut /> {t('adminLogout', language)}
            </button>
          </div>
        </div>
      </nav>

      <div className="container" style={{ marginTop: '40px' }}>
        {/* Video Demo Management Section */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>{t('adminVideoManage', language)}</h1>
              <p style={{ color: 'var(--text-muted)' }}>{t('adminVideoDesc', language)}</p>
            </div>
            <button className="btn-primary" onClick={() => setShowAddVideoForm(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icons.Plus /> {t('adminAddVideo', language)}
            </button>
          </div>

          <div className="grid-cols-3">
            {videos.map(v => (
              <div key={v.id} className="glass" style={{ padding: '24px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
                  <button onClick={() => deleteVideo(v.id)} style={{ background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer' }}>
                    <Icons.Trash />
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <Icons.Video />
                  <h3 style={{ fontSize: '1.1rem' }}>{v.title}</h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px', minHeight: '40px' }}>{v.description}</p>
                <div style={{ padding: '8px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', fontSize: '10px', overflowX: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--accent-primary)' }}>
                  {v.url}
                </div>
              </div>
            ))}
            {videos.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', border: '1px dashed var(--glass-border)', borderRadius: '16px' }}>
                  <p style={{ color: 'var(--text-muted)' }}>{t('adminNoVideos', language)}</p>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>{t('adminPortfolioManage', language)}</h1>
              <p style={{ color: 'var(--text-muted)' }}>{t('adminPortfolioCount', language).replace('{count}', projects.length.toString())}</p>
            </div>
            <button className="btn-primary" onClick={() => setShowAddForm(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icons.Plus /> {t('adminAddPortfolio', language)}
            </button>
          </div>
        </div>

        {/* Add Form Modal */}
        {showAddForm && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(5, 7, 10, 0.98)', backdropFilter: 'blur(15px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass" style={{ width: '90%', maxWidth: '500px', padding: '40px', position: 'relative', background: '#0f172a', border: '1px solid var(--accent-primary)', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>
              <button 
                onClick={() => setShowAddForm(false)} 
                style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <Icons.X />
              </button>
              <h2 style={{ marginBottom: '24px', color: 'white' }}>{t('adminAddFormTitle', language)}</h2>
              
              <form onSubmit={handleAddProject} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input
                  type="text"
                  placeholder={t('adminPjtTitle', language)}
                  value={newProject.title}
                  onChange={e => setNewProject({...newProject, title: e.target.value})}
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }}
                />
                
                <textarea
                  placeholder={t('adminPjtDesc', language)}
                  rows={4}
                  value={newProject.description}
                  onChange={e => setNewProject({...newProject, description: e.target.value})}
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }}
                />

                <select 
                  value={newProject.tag}
                  onChange={e => setNewProject({...newProject, tag: e.target.value})}
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }}
                >
                  <option value="adminPjtTag1">{t('adminPjtTag1', language)}</option>
                  <option value="adminPjtTag2">{t('adminPjtTag2', language)}</option>
                  <option value="adminPjtTag3">{t('adminPjtTag3', language)}</option>
                  <option value="adminPjtTag4">{t('adminPjtTag4', language)}</option>
                </select>

                <div style={{ position: 'relative', border: '2px dashed var(--glass-border)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                  />
                  {newProject.image ? (
                    <div style={{ textAlign: 'center' }}>
                      <Icons.Check />
                      <p>{t('adminImgSelect', language)}</p>
                    </div>
                  ) : (
                    <>
                      <Icons.Image />
                      <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>{isUploading ? t('adminUploading', language) : t('adminImgClick', language)}</p>
                    </>
                  )}
                </div>

                <button type="submit" className="btn-primary" disabled={isUploading}>
                  {isUploading ? t('adminProcessing', language) : t('adminSubmit', language)}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Project List */}
        <div className="grid-cols-3">
          {projects.map(p => (
            <div key={p.id} className="glass portfolio-item">
              <div className="portfolio-image" style={{ backgroundImage: `url(${p.image})`, opacity: 0.8 }} />
              <div className="portfolio-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="tag">{t(p.tag, language) || p.tag}</span>
                  <button 
                    onClick={() => deleteProject(p.id)}
                    style={{ background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer', padding: '4px' }}
                    title="Delete"
                  >
                    <Icons.Trash />
                  </button>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          ))}

          {projects.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px', border: '1px dashed var(--glass-border)', borderRadius: '16px' }}>
                <p style={{ color: 'var(--text-muted)' }}>{t('adminNoPortfolios', language)}</p>
            </div>
          )}
        </div>

        {/* Add Video Modal */}
        {showAddVideoForm && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(5, 7, 10, 0.98)', backdropFilter: 'blur(15px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass" style={{ width: '90%', maxWidth: '500px', padding: '40px', position: 'relative', background: '#0f172a', border: '1px solid var(--accent-primary)', boxShadow: '0 0 40px rgba(0,0,0,0.8)' }}>
              <button 
                onClick={() => setShowAddVideoForm(false)} 
                style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <Icons.X />
              </button>
              <h2 style={{ marginBottom: '24px', color: 'white' }}>{t('adminAddVideoTitle', language)}</h2>
              
              <form onSubmit={handleAddVideo} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input
                  type="text"
                  placeholder={t('adminVideoTitle', language)}
                  value={newVideo.title}
                  onChange={e => setNewVideo({...newVideo, title: e.target.value})}
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }}
                />
                
                <textarea
                  placeholder={t('adminVideoDescShort', language)}
                  rows={2}
                  value={newVideo.description}
                  onChange={e => setNewVideo({...newVideo, description: e.target.value})}
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }}
                />

                <input
                  type="text"
                  placeholder={t('adminVideoUrl', language)}
                  value={newVideo.url}
                  onChange={e => setNewVideo({...newVideo, url: e.target.value})}
                  required
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }}
                />

                <button type="submit" className="btn-primary">
                  {t('adminVideoSubmit', language)}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
