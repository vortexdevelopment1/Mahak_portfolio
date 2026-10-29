import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MORE_PROJECTS } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';

const THUMB_GRADIENTS = {
  'art-bloom':  'radial-gradient(circle at 50% 40%, #ff2fb0 0%, #4a0a3a 45%, #0c0212 100%)',
  'art-frag':   'linear-gradient(160deg, #2b2b2b 0%, #0e0e0e 60%)',
  'art-crypto': 'linear-gradient(160deg, #151515 0%, #060606 100%)',
  'art-spenso': 'linear-gradient(160deg, #0e2620 0%, #061412 100%)',
};

function CenterPreview({ project, onClose }) {
  const gradient = THUMB_GRADIENTS[project.thumbClass] || '#111';
  return (
    <motion.div
      className="pw-preview-card"
      key={project.id}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{    opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {onClose && (
        <button
          className="pw-preview-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close Preview"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
      <div className="pw-preview-thumb">
        {project.image && (
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '14px' }} />
        )}
      </div>

      <div className="pw-preview-info">
        <p className="pw-preview-title">{project.title}</p>
        <p className="pw-preview-desc">{project.description}</p>
        <div className="pw-preview-tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pw-preview-cta"
        >
          Live Project ↗
        </a>
      </div>
    </motion.div>
  );
}

export default function MoreProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="section" style={{ minHeight: '80vh', paddingTop: '2rem' }}>
        <div className="wrap">
          <div className="ghost-label" style={{ top: '-2rem' }}>MORE WORK</div>
          <div className="section-title pw-title" style={{ marginBottom: '1rem' }}>
            MORE PROJECTS
          </div>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Link to="/" className="view-all">
              ← Back to Home
            </Link>
          </div>

          <div className="pw-grid-wrapper">
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  className="pw-blur-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onClick={() => setHoveredProject(null)}
                />
              )}
            </AnimatePresence>

            <div className="work-list projects-grid pw-grid">
              {MORE_PROJECTS.map((project, index) => (
                <div
                  key={project.id}
                  className="work-row project-card pw-card"
                  onClick={() => setHoveredProject(hoveredProject && hoveredProject.id === project.id ? null : { ...project, _index: index })}
                  style={{ opacity: 1, transform: 'none' }} 
                >
                  <div className="pw-glass-layer" />
                  <div className={`work-thumb ${project.thumbClass}`}>
                    {project.image && (
                      <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                  <div className="work-body">
                    <h3>{project.title}</h3>
                    <p className="pw-card-desc">
                      {project.description}
                    </p>
                    <div className="tag-row">
                      {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pw-preview-positioner">
              <AnimatePresence>
                {hoveredProject && (
                  <CenterPreview key={hoveredProject.id} project={hoveredProject} onClose={() => setHoveredProject(null)} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <div className="portfolio-card" style={{ paddingTop: '0' }}>
        <Footer />
      </div>
    </div>
  );
}
