import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const SKILLS_DATA = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Interactive, modern & high-performance user interfaces',
    icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    skills: [
      'React.js', 'Redux.js', 'JavaScript', 'Tailwind CSS',
      'Bootstrap', 'HTML5 & CSS3', 'Embedded JavaScript (EJS)',
      'User Experience (UX)', 'Front-End Architecture'
    ]
  },
  {
    id: 'backend',
    title: 'Backend & AI Engineering',
    subtitle: 'Scalable web applications, APIs & AI-driven systems',
    icon: <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    skills: [
      'Node.js', 'Express.js', 'Python', 'FastAPI', 'Django',
      'LangChain', 'Retrieval-Augmented Generation (RAG)',
      'REST APIs', 'WebSockets', 'Server-Side Development'
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Data Systems',
    subtitle: 'Document, relational & vector databases',
    icon: <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m-12 5c0 2.21 3.582 4 8 4s8-1.79 8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    skills: [
      'MongoDB', 'SQL', 'Firebase', 'Vector Databases'
    ]
  },
  {
    id: 'tools',
    title: 'Tools, DevOps & Languages',
    subtitle: 'Deployment pipelines, version control & core programming',
    icon: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.121 2.121 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    skills: [
      'Git & GitHub', 'Docker', 'AWS & GCP', 'Postman',
      'Jest', 'Dart', 'Flutter', 'TypeScript'
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.skills-title-anim',
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-title-anim',
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );

      gsap.fromTo('.skill-card-anim', 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section section" ref={sectionRef}>
      <div style={{ position: 'relative', width: '100%', marginBottom: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="ghost-label" style={{ top: '50%', transform: 'translateY(-50%)', margin: 0 }}>SKILLS</div>
        <h2 
          className="section-title skills-title-anim" 
          style={{ margin: 0, opacity: 0, transform: 'scale(0.5)' }}
        >
          SKILLS & EXPERTISE
        </h2>
      </div>
      
      <div className="skills-accordion-grid">
        {SKILLS_DATA.map((group) => {
          const isOpen = openCardId === group.id;
          return (
            <div 
              key={group.id} 
              className={`skill-acc-card skill-card-anim ${isOpen ? 'active' : ''}`}
              onClick={() => toggleCard(group.id)}
            >
              <div className="skill-acc-header">
                <div className="skill-acc-icon">
                  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                    {group.icon}
                  </svg>
                </div>
                <div className="skill-acc-titles">
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                </div>
                <div className={`skill-acc-chevron ${isOpen ? 'open' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="skill-acc-content" style={{ maxHeight: isOpen ? '500px' : '0px' }}>
                <div className="skill-acc-pills">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="skill-pill">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
