import React from 'react';

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Service', href: '#service' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: React.createElement('svg', {
      width: 17,
      height: 17,
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      style: { display: 'inline-block', verticalAlign: 'middle' }
    }, React.createElement('path', {
      d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
    })),
    url: 'https://github.com/i-am-mahak'
  },
  { name: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/mahak-sarla-0605bb250/' },
  {
    name: 'Email',
    icon: React.createElement('svg', {
      width: 17,
      height: 17,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: { display: 'inline-block', verticalAlign: 'middle' }
    }, [
      React.createElement('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', key: 'box' }),
      React.createElement('polyline', { points: '22,6 12,13 2,6', key: 'line' })
    ]),
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mahaksarla@gmail.com'
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 5,
    title: 'ERP System Platform',
    category: 'Real Project',
    tagBadge: 'REAL PROJECT',
    thumbClass: 'art-erp',
    image: '/images/erp-system.png',
    tags: ['Web App', 'Dashboard'],
    description: 'A comprehensive Enterprise Resource Planning platform for managing business operations effectively.',
    liveUrl: 'https://sys-build-erp.vercel.app/',
  },
  {
    id: 6,
    title: 'Warehouse Management System',
    category: 'Real Project',
    tagBadge: 'REAL PROJECT',
    thumbClass: 'art-warehouse',
    image: '/images/warehouse-system.png',
    tags: ['Dashboard', 'Logistics'],
    description: 'A robust system designed to track inventory, streamline logistics, and manage warehouse operations.',
    liveUrl: 'https://warehouse-management-system-demo.vercel.app/login',
  },
  {
    id: 7,
    title: 'ACTIV — Sports & Wellbeing App',
    category: 'Real Project',
    tagBadge: 'REAL PROJECT',
    thumbClass: 'art-activ',
    image: '/images/activ-banner.png',
    tags: ['Mobile App'],
    description: "India's sports and wellbeing platform for booking live turfs, courts, gyms, and wellness venues with instant pay-per-session access.",

  },
  {
    id: 8,
    title: 'Fioner — Vehicle Intelligence App',
    category: 'Real Project',
    tagBadge: 'REAL PROJECT',
    thumbClass: 'art-fioner',
    image: '/images/fioner-banner.png',
    tags: ['Mobile App'],
    description: 'A connected vehicle platform with real-time GPS tracking, QR vehicle safety, voice trip planning, and emergency SOS services.',

  },
];

export const SERVICES_DATA = [
  {
    id: 'uiux',
    title: 'UIUX Design',
    description: 'Designing clear and scalable interfaces for dashboards, mobile apps, and websites.',
    image: '/images/uiux.png',
  },
  {
    id: 'web-design',
    title: 'Web Design & Dev',
    description: 'Building fast, responsive websites from concept to a polished, working build.',
    image: '/images/web-design.jpg',
  },
  {
    id: 'application',
    title: 'Application Development',
    description: 'Building robust, scalable, and intuitive mobile and web applications tailored to your business needs.',
    image: '/images/app-development.jpg',
  },
  {
    id: 'motion',
    title: 'Motions & Animations',
    description: 'Micro-interactions and motion design that make products feel alive.',
    image: '/images/motion.jpg',
  },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: 'Vortexcubes',
    logo: '/images/vortex-logo.png',
    role: 'Assistant Manager',
    period: 'Sep 2026 - Present',
    location: 'Indore, India',
    description: 'Leading technical initiatives, overseeing project delivery, and managing team deliverables to ensure high-quality software solutions.',
    highlights: [
      { title: 'Leadership', desc: 'Managing project lifecycles and guiding development teams.' },
      { title: 'Project Planning', desc: 'Overseeing requirements analysis and execution strategies.' }
    ],
    technologies: ['Team Management', 'Agile', 'MERN Stack']
  },
  {
    id: 2,
    company: 'Vortexcubes',
    logo: '/images/vortex-logo.png',
    role: 'Full Stack Developer',
    period: 'Mar 2025 - Sep 2026',
    location: 'Indore, India',
    description: 'Developed robust and scalable web applications using the MERN stack. Collaborated with cross-functional teams to deliver end-to-end application features.',
    highlights: [
      { title: 'Full Stack Development', desc: 'Built and maintained end-to-end features and APIs.' },
      { title: 'Optimization', desc: 'Improved application performance and code scalability.' }
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  {
    id: 3,
    company: 'Vortexcubes',
    logo: '/images/vortex-logo.png',
    role: 'MERN-Stack Intern',
    period: 'Dec 2024 - Feb 2025',
    location: 'Indore, India',
    description: 'Gained hands-on experience building foundational web features and assisting the core development team in building real-world applications.',
    highlights: [
      { title: 'Skill Development', desc: 'Rapidly mastered MERN stack fundamentals.' },
      { title: 'Collaboration', desc: 'Worked closely with senior developers on production code.' }
    ],
    technologies: ['React', 'JavaScript', 'HTML/CSS']
  },
  {
    id: 4,
    company: 'Freelance',
    logo: '/images/freelance-logo.png',
    role: 'Professional Freelancer',
    period: 'Feb 2024 - Present',
    location: 'Remote',
    description: 'Currently working as a full-time freelancer professional, managing diverse projects across multiple domains. Handling end-to-end development, from client requirements to delivering scalable solutions.',
    highlights: [
      { title: 'Client Communication', desc: 'Direct client interactions, project planning, and execution.' },
      { title: 'Timely Delivery', desc: 'Ensuring on-time delivery while maintaining strong technical standards.' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind', 'Node.js']
  },
];

export const MORE_PROJECTS = [
  {
    id: 9,
    title: 'Tourism Experience Platform',
    category: 'Real Project',
    thumbClass: 'art-bloom',
    image: '/images/visitdubai.png',
    tags: ['Travel', 'React', 'API'],
    description: 'Official smart city guide with interactive maps and personalized trip planning.',
    liveUrl: 'https://www.visitdubai.com/en/',
  },
  {
    id: 100,
    title: 'Music Gear Showcase',
    category: 'Real Project',
    thumbClass: 'art-crypto',
    image: '/images/tinypod.png',
    tags: ['Ecommerce', 'WebGL', 'Framer'],
    description: 'Crafted a cinematic product experience with custom WebGL and motion kinetics.',
    liveUrl: 'https://thetinypod.com/',
  },
  {
    id: 101,
    title: 'Service Commerce Hub',
    category: 'Real Project',
    thumbClass: 'art-frag',
    image: '/images/trider.png',
    tags: ['Logistics', 'React', 'Chakra UI'],
    description: 'Built localized service discovery engine with real-time tracking for gig workers.',
    liveUrl: 'https://triderapp.com/',
  },
  {
    id: 102,
    title: 'AI Trade Analyzer',
    category: 'Real Project',
    thumbClass: 'art-crypto',
    image: '/images/ai-trade-analyzer.png',
    tags: ['AI Trading', 'FinTech', 'Dashboard'],
    description: 'Personalized trading dashboard with real-time terminal tools, charting widgets, and market analytics.',
    liveUrl: '#',
  },
  {
    id: 103,
    title: 'Vortex Cubes CRM',
    category: 'Real Project',
    thumbClass: 'art-spenso',
    image: '/images/vortex-crm.jpeg',
    tags: ['CRM', 'Enterprise', 'Full Stack'],
    description: 'Comprehensive enterprise CRM system for customer relationship management, sales pipeline, and business automation.',
    liveUrl: '#',
  },
];
