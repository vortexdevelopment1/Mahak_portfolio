import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="wrap">
        <div className="contact-grid">
          
          {/* Left Column */}
          <div className="contact-left">
            <h2 className="display contact-anim">Let's Work<br/>Together <span style={{color: 'var(--accent-green)'}}>✦</span></h2>
            <p className="contact-anim">
              I'm always open to discussing new opportunities, exciting projects, or just having a friendly conversation about technology and ideas.
            </p>

            <div className="contact-info-cards contact-anim">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div className="info-text">
                  <h4>Name</h4>
                  <p>Mahak Sarla</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>mahaksarla@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>7974994741</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right contact-anim">
            <div className="start-conv-card">
              <div className="card-sub">HAVE A PROJECT IN MIND?</div>
              <h3>Start a<br/>Conversation</h3>
              <p>I'd love to hear about your ideas, answer your questions, or explore how we can work together. Feel free to reach out!</p>
              
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mahaksarla@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-full btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Start a Conversation
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-full btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"></path></svg>
                Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
