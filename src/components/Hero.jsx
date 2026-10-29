import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { SOCIAL_LINKS } from '../data/portfolioData';
import heroImg from '../../main.png';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    title: "Software Engineer",
    description: "Software Engineer with experience building scalable, high-performance applications and delivering reliable solutions to real-world problems."
  },
  {
    title: "Web Developer",
    description: "Developing responsive and user-friendly web applications using modern frontend and backend technologies, with a focus on clean UI, functionality, and performance."
  },
  {
    title: "Mobile App Developer",
    description: "Developing modern, user-friendly mobile applications with responsive interfaces, smooth performance, and reliable functionality. Focused on creating seamless and engaging mobile experiences."
  }
];

export default function Hero() {
  const heroRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  // Flashlight Effect State
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const updatePosition = (clientX, clientY, target) => {
    const rect = target.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y });
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX, e.clientY, e.currentTarget);
  };

  const handleTouchStart = (e) => {
    setIsHovered(true);
    if (e.touches && e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    // Initial states
    gsap.set('.headline',   { y: -80, opacity: 0 });
    gsap.set('.avatar-base, .avatar-reveal', { y:  80, opacity: 0 });
    gsap.set('.hero-left',  { x: -80, opacity: 0 });
    gsap.set('.hero-right', { x:  80, opacity: 0 });

    // Timeline that plays on enter, reverses on leave, plays on re-enter
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom', // Triggers as soon as it enters viewport (which is immediately on load)
        end: 'bottom 20%',   // Reverses when the bottom of the hero is near the top of the viewport
        toggleActions: 'play reverse play reverse'
      }
    });

    tl.to('.headline',   { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0)
      .to('.avatar-base, .avatar-reveal', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.1)
      .to('.hero-left',  { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.2)
      .to('.hero-right', { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.2);

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if(st.vars.trigger === section) st.kill();
      });
      tl.kill();
    };
  }, []);

  return (
    <header className="hero-section" ref={heroRef}>
      <div className="headline">
        <span className="outline headline-mahak">MAHAK</span>
        <span className="solid headline-sarla">SARLA</span>
      </div>

      <div className="hero-grid">
        {/* Left: Software Engineer content */}
        <div className="hero-left">
          <div className="hero-left-content">
            <div style={{ minHeight: '40px', position: 'relative', marginBottom: '8px' }}>
              <h2 style={{ margin: 0, whiteSpace: 'nowrap' }}>
                <Typewriter
                  key={roleIndex}
                  options={{
                    strings: [roles[roleIndex].title],
                    autoStart: true,
                    loop: false,
                    cursor: '|',
                    delay: 60,
                  }}
                />
              </h2>
            </div>
            
            <div style={{ display: 'grid', marginBottom: '16px' }}>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  style={{ gridArea: '1 / 1', margin: 0 }}
                >
                  {roles[roleIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
            <a href="#contact" className="pill-outline hero-cta" onClick={handleScrollToContact}>
              <span>Let's collaborate</span>
              <svg
                className="cta-arrow"
                width="14" height="14"
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center: Person photo with Flashlight Effect */}
        <div className="hero-center">
          <div 
            className="avatar"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsHovered(false)}
            onTouchCancel={() => setIsHovered(false)}
          >
            <img src={heroImg} alt="Mahak Sarla Base" className="avatar-base" draggable="false" />
            <img 
              src={heroImg} 
              alt="Mahak Sarla Color Reveal" 
              className="avatar-reveal"
              draggable="false"
              style={{
                WebkitMaskImage: isHovered 
                  ? `radial-gradient(circle var(--spotlight-radius, 150px) at ${mousePos.x}% ${mousePos.y}%, black 25%, transparent 75%)`
                  : 'radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)',
                maskImage: isHovered 
                  ? `radial-gradient(circle var(--spotlight-radius, 150px) at ${mousePos.x}% ${mousePos.y}%, black 25%, transparent 75%)`
                  : 'radial-gradient(circle 0px at 50% 50%, black 0%, transparent 0%)',
                transition: isHovered ? 'none' : 'mask-image 0.4s ease, -webkit-mask-image 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Right: Social links */}
        <div className="hero-right">
          <div className="social-col">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="social-pill"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { if (item.url === '#') e.preventDefault(); }}
              >
                <span className="social-pill-icon">{item.icon}</span>
                <span className="social-pill-name">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
