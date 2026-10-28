import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../data/portfolioData';

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav>
      <div className="nav-inner">



        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={'/' + link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
            >
              {link.label} {link.badge && <sup>{link.badge}</sup>}
            </a>
          ))}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Sliding Theme Toggle Button */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`theme-toggle-switch ${isDark ? 'dark' : ''}`}
            aria-label="Toggle Dark Mode"
            title="Toggle Dark Mode"
          >
            <div className="switch-knob">
              {isDark ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </div>
          </button>

          <a
            href="/#contact"
            className="btn-dark hide-on-mobile"
            onClick={(e) => handleScrollTo(e, '#contact')}
          >
            Let's Talk
          </a>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={'/' + link.href}
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleScrollTo(e, link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => {
                setIsMenuOpen(false);
                handleScrollTo(e, '#contact');
              }}
              style={{ fontWeight: 700, color: 'var(--accent-green)' }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
