import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const ctx = gsap.context(() => {
      // ZoomIn entrance animation on the title
      gsap.fromTo(
        title,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      gsap.fromTo(
        '.service-item',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.25,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleService = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="section" id="service" ref={sectionRef}>
      <div className="wrap">
        <div className="ghost-label">SERVICE</div>
        <div 
          className="section-title" 
          ref={titleRef}
          style={{ opacity: 0, transform: 'scale(0.5)' }}
        >
          Our Services and capabilities
        </div>
        <div className="service-list">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.id}
                className={`service-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleService(index)}
              >
              <div className="service-head">
                  <h3>{service.title}</h3>
                  <span className="service-icon">
                    {isOpen ? (
                      /* X close icon when open */
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <path
                          d="M1 1l12 12M13 1L1 13"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      /* Arrow icon when closed */
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    )}
                  </span>
                </div>
                <div className="service-body">
                  <p>{service.description}</p>
                </div>
                {/* Floating showcase image — positioned absolutely over the card */}
                {service.image && (
                  <div className="service-showcase">
                    <img src={service.image} alt={`${service.title} showcase`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
