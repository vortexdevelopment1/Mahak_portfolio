import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

/* Gradient map mirrors CSS art-* classes — used in preview thumbnail */
const THUMB_GRADIENTS = {
  'art-bloom':  'radial-gradient(circle at 50% 40%, #ff2fb0 0%, #4a0a3a 45%, #0c0212 100%)',
  'art-frag':   'linear-gradient(160deg, #2b2b2b 0%, #0e0e0e 60%)',
  'art-crypto': 'linear-gradient(160deg, #151515 0%, #060606 100%)',
  'art-spenso': 'linear-gradient(160deg, #0e2620 0%, #061412 100%)',
  'art-erp':    'linear-gradient(160deg, #1f3b4d 0%, #0b1a26 100%)',
  'art-warehouse': 'linear-gradient(160deg, #4d3a1f 0%, #261b0b 100%)',
  'art-salon':  'linear-gradient(160deg, #3d1f4d 0%, #1e0b26 100%)',
  'art-chartmind': 'linear-gradient(160deg, #1d334a 0%, #0d1822 100%)',
  'art-activ':     'linear-gradient(160deg, #142410 0%, #060a04 100%)',
  'art-fioner':    'linear-gradient(160deg, #0b1f3a 0%, #06101e 100%)',
};

/* ─────────────────────────────────────────────────────────────
   HOVER PREVIEW (Framer Motion only — no GSAP)
   Rendered ONCE in the center of the grid; updates per hovered card.
───────────────────────────────────────────────────────────── */
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
      {/* Left: large project thumbnail */}
      <div className="pw-preview-thumb">
        {project.image && (
          <div className="pw-preview-img-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="pw-preview-img"
            />
          </div>
        )}
      </div>

      {/* Right: info */}
      <div className="pw-preview-info">
        <p className="pw-preview-title">{project.title}</p>
        <p className="pw-preview-desc">{project.description}</p>
        <div className="pw-preview-tags">
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pw-preview-cta"
        >
          Live Project ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PORTFOLIO SECTION
───────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  /* refs for GSAP */
  const sectionRef  = useRef(null);
  const titleRef    = useRef(null);
  const gridRef     = useRef(null);
  const gsapCtxRef  = useRef(null);

  const filteredProjects = PORTFOLIO_PROJECTS;

  /* ── GSAP scroll animations ── */
  useEffect(() => {
    const section = sectionRef.current;
    const title   = titleRef.current;
    const grid    = gridRef.current;
    if (!section || !title || !grid) return;

    if (gsapCtxRef.current) gsapCtxRef.current.revert();

    const ctx = gsap.context(() => {
      /* ── 1. HEADING: zoomIn entrance ── */
      gsap.fromTo(
        title,
        { scale: 0.5, opacity: 0 },
        {
          scale:     1,
          opacity:   1,
          ease:      'power3.out',
          duration:  1.6,
          scrollTrigger: {
            trigger: title,
            start:   'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      /* ── 2. CARDS: physical entrance L/R ── */
      const cards = grid.querySelectorAll('.pw-card');
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -180 : 180;
        gsap.fromTo(
          card,
          { x: fromX, opacity: 0 },
          {
            x:        0,
            opacity:  1,
            ease:     'power3.out',
            duration: 1.2,
            scrollTrigger: {
              trigger: card,
              start:   'top 90%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, section);

    gsapCtxRef.current = ctx;
    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section className="section" id="work" ref={sectionRef}>
      <div className="wrap">
        <div className="ghost-label">PORTFOLIO</div>

        {/* Heading */}
        <div
          className="section-title pw-title"
          ref={titleRef}
          style={{ opacity: 0, transform: 'scale(0.5)' }}
        >
          SELECTED WORK
        </div>

        {/* Tabs */}
        <div className="work-tabs">
          <div className="tabs">
            <span className="active" style={{ cursor: 'default' }}>Projects</span>
          </div>
          <Link to="/more-projects" className="view-all" style={{ textDecoration: 'none' }}>
            View All Work
          </Link>
        </div>

        {/* Grid wrapper */}
        <div className="pw-grid-wrapper">

          {/* ── FULL-SCREEN BLUR BACKDROP ──
              Appears behind the preview card when any card is hovered.
              Fixed positioning covers the entire viewport. */}
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                className="pw-blur-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{    opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => setHoveredProject(null)}
              />
            )}
          </AnimatePresence>

          {/* 4-card grid */}
          <div className="work-list projects-grid pw-grid" ref={gridRef}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="work-row project-card pw-card"
                onClick={() => setHoveredProject(hoveredProject && hoveredProject.id === project.id ? null : { ...project, _index: index })}
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

          {/* ── CENTER OVERLAY PREVIEW ── */}
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
  );
}
