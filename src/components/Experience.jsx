import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../timeline.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 0. Title animation (match Portfolio/Services scale: 0.5 to 1)
      gsap.fromTo(
        '.exp-title-anim',
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.exp-title-anim',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // 1. Text elements fading in
      gsap.fromTo(
        '.timeline-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // 2. The vertical line scrubbing down
      gsap.to('.timeline-line-active', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      // 3. Dots popping in
      gsap.utils.toArray('.timeline-dot').forEach((dot) => {
        gsap.fromTo(dot, 
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: dot,
              start: 'top center',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="timeline-section section" id="experience" ref={sectionRef}>
      <div className="wrap">
      <div style={{ position: 'relative', width: '100%', marginBottom: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="ghost-label" style={{ top: '50%', transform: 'translateY(-50%)', margin: 0 }}>EXPERIENCE</div>
        <h2 
          className="section-title exp-title-anim" 
          style={{ margin: 0, opacity: 0, transform: 'scale(0.5)' }}
        >
          WHERE I'VE BUILT IT BEFORE
        </h2>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-line-bg"></div>
        <div className="timeline-line-active"></div>
        
        {/* Item 0 */}
        <div className="timeline-item timeline-anim">
          <div className="timeline-dot"></div>
          <div className="timeline-header">
            <div className="timeline-role">
              Tech Manager <span className="timeline-company">· Vortexcubes</span>
            </div>
            <div className="timeline-period">Recent — Present</div>
          </div>
          <ul className="timeline-bullets">
            <li>Leading the technical team and managing web application architecture and project deliveries.</li>
          </ul>
          <div className="timeline-highlight">
            Indore, Madhya Pradesh, India · On-site
          </div>
          <div className="timeline-techs">
            <span className="timeline-tech-badge">Team Leadership</span>
            <span className="timeline-tech-badge">Project Management</span>
            <span className="timeline-tech-badge">System Architecture</span>
          </div>
        </div>

        {/* Item 1 */}
        <div className="timeline-item timeline-anim">
          <div className="timeline-dot"></div>
          <div className="timeline-header">
            <div className="timeline-role">
              Full Stack Developer <span className="timeline-company">· Vortexcubes</span>
            </div>
            <div className="timeline-period">Apr 2024 — Recent</div>
          </div>
          <ul className="timeline-bullets">
            <li>Building and maintaining web applications using React.js, Node.js, Express.js, and MongoDB</li>
          </ul>
          <div className="timeline-highlight">
            Indore, Madhya Pradesh, India · On-site
          </div>
          <div className="timeline-techs">
            <span className="timeline-tech-badge">React.js</span>
            <span className="timeline-tech-badge">Node.js</span>
            <span className="timeline-tech-badge">Express.js</span>
            <span className="timeline-tech-badge">MongoDB</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="timeline-item timeline-anim">
          <div className="timeline-dot"></div>
          <div className="timeline-header">
            <div className="timeline-role">
              MERN-Stack Intern <span className="timeline-company">· Vortexcubes</span>
            </div>
            <div className="timeline-period">Jan 2024 — Mar 2024 (3 mos)</div>
          </div>
          <ul className="timeline-bullets">
            <li>Gained hands-on experience building foundational web features and assisting the core development team</li>
          </ul>
          <div className="timeline-highlight">
            Indore, Madhya Pradesh, India · On-site
          </div>
        </div>

        {/* Item 3 */}
        <div className="timeline-item timeline-anim">
          <div className="timeline-dot"></div>
          <div className="timeline-header">
            <div className="timeline-role">
              Professional Freelancer <span className="timeline-company">· Freelance</span>
            </div>
            <div className="timeline-period">Jan 2024 — Present (2 yrs 9 mos)</div>
          </div>
          <ul className="timeline-bullets">
            <li>Handling end-to-end development, from client requirements to delivering scalable solutions</li>
          </ul>
          <div className="timeline-highlight">
            Indore, Madhya Pradesh, India · Remote
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
