export type ProjectCategory = 'web-design' | 'development' | 'seo';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: ProjectCategory;
  tech: string[];
  image: string;
  client: string;
  timeline: string;
  services: string;
  challenge: string;
  solution: string;
  results: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  // Web Design Projects
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Platform Redesign',
    shortDescription: 'Complete UI/UX overhaul for a fashion e-commerce brand',
    description: 'A complete redesign of an e-commerce platform focusing on user experience, conversion optimization, and modern aesthetics.',
    category: 'web-design',
    tech: ['Figma', 'React', 'TailwindCSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    client: 'StyleCo Fashion',
    timeline: '6 Weeks',
    services: 'UI/UX Design, Frontend Development',
    challenge: 'The existing platform had a high bounce rate (68%) and low conversion rate (1.2%). The design was outdated and not mobile-friendly, leading to significant revenue loss.',
    solution: 'Conducted extensive user research and A/B testing. Redesigned the entire customer journey with a mobile-first approach, implemented micro-interactions for better engagement, and optimized the checkout flow.',
    results: [
      '45% increase in conversion rate',
      '60% reduction in cart abandonment',
      '3.2x improvement in mobile sales',
      '25% increase in average order value'
    ],
    featured: true
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription: 'Modern dashboard design for business intelligence',
    description: 'Designed and built a comprehensive analytics dashboard for a B2B SaaS platform.',
    category: 'web-design',
    tech: ['Figma', 'React', 'D3.js', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    client: 'DataFlow Inc',
    timeline: '8 Weeks',
    services: 'Product Design, Data Visualization',
    challenge: 'Users struggled to interpret complex data sets. The existing dashboard was cluttered and lacked actionable insights.',
    solution: 'Created a clean, intuitive interface with customizable widgets, real-time data visualization, and AI-powered insights. Implemented dark mode and accessibility features.',
    results: [
      '85% user satisfaction score',
      '40% reduction in support tickets',
      '2x increase in daily active users',
      'Featured in design publications'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Creative Agency Portfolio',
    shortDescription: 'Award-winning portfolio for a creative agency',
    description: 'Built an immersive, interactive portfolio website showcasing creative work.',
    category: 'web-design',
    tech: ['Next.js', 'Three.js', 'GSAP', 'Prismic CMS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    client: 'Pixel Perfect Agency',
    timeline: '10 Weeks',
    services: 'Web Design, 3D Development',
    challenge: 'The agency needed a portfolio that would stand out and showcase their creative capabilities while maintaining excellent performance.',
    solution: 'Developed an award-winning website with 3D elements, smooth animations, and interactive case studies. Optimized for performance despite heavy visual elements.',
    results: [
      'Awwwards Site of the Day',
      '95+ Lighthouse performance score',
      '300% increase in inquiries',
      'Featured in CSS Design Awards'
    ]
  },

  // Development Projects
  {
    id: 'ai-integration-suite',
    title: 'AI Integration Suite',
    shortDescription: 'Enterprise AI platform for workflow automation',
    description: 'A comprehensive AI-powered platform that streamlines business workflows with automated data processing and predictive analytics.',
    category: 'development',
    tech: ['React', 'Node.js', 'Python', 'OpenAI', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    client: 'TechCorp Enterprise',
    timeline: '12 Weeks',
    services: 'Full Stack Development, AI Integration',
    challenge: 'Manual data processing was taking 40+ hours per week. The client needed intelligent automation to scale their operations.',
    solution: 'Built a custom AI platform with GPT-4 integration for document processing, automated customer support chatbot, and predictive analytics dashboard.',
    results: [
      '85% reduction in manual processing time',
      '$200K annual cost savings',
      '99.2% accuracy in data extraction',
      '24/7 automated customer support'
    ],
    featured: true
  },
  {
    id: 'algo-trading-bot',
    title: 'Algorithmic Trading Platform',
    shortDescription: 'Automated cryptocurrency trading with ML',
    description: 'A sophisticated trading bot using machine learning for cryptocurrency markets.',
    category: 'development',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    client: 'CryptoVentures Fund',
    timeline: '16 Weeks',
    services: 'Backend Development, ML Engineering',
    challenge: 'The fund needed automated trading capabilities with risk management and real-time market analysis.',
    solution: 'Developed a multi-strategy trading bot with backtesting capabilities, real-time risk assessment, and automated position management.',
    results: [
      '23% annual return (vs 12% benchmark)',
      'Sub-millisecond execution time',
      '99.99% uptime achieved',
      'Processing 10K+ trades daily'
    ]
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Mapping Platform',
    shortDescription: 'Interactive property search with 3D visualization',
    description: 'A comprehensive real estate platform with advanced mapping and lead generation.',
    category: 'development',
    tech: ['React', 'Mapbox', 'Node.js', 'Three.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    client: 'PropTech Solutions',
    timeline: '14 Weeks',
    services: 'Full Stack Development, 3D Integration',
    challenge: 'Traditional property listings were static and uninspiring. Users needed an immersive way to explore properties.',
    solution: 'Built an interactive map-based platform with 3D property tours, neighborhood insights, and AI-powered property recommendations.',
    results: [
      '5x increase in user engagement',
      '180% increase in qualified leads',
      '45% reduction in time-to-sale',
      'Featured in TechCrunch'
    ]
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    shortDescription: 'HIPAA-compliant patient management system',
    description: 'A secure, modern healthcare portal for patient management and telemedicine.',
    category: 'development',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    client: 'MedCare Clinics',
    timeline: '20 Weeks',
    services: 'Full Stack Development, Security',
    challenge: 'The clinic needed a HIPAA-compliant solution for patient records, appointment scheduling, and video consultations.',
    solution: 'Developed a secure patient portal with end-to-end encryption, integrated video calls, automated appointment reminders, and analytics dashboard.',
    results: [
      '100% HIPAA compliance',
      '60% reduction in no-shows',
      '4.8/5 patient satisfaction',
      '50% increase in telehealth visits'
    ]
  },

  // SEO Case Studies
  {
    id: 'seo-ecommerce',
    title: 'E-Commerce SEO Transformation',
    shortDescription: 'From page 5 to #1 rankings in 6 months',
    description: 'Complete SEO overhaul for a mid-size e-commerce store resulting in dramatic organic traffic growth.',
    category: 'seo',
    tech: ['Technical SEO', 'Content Strategy', 'Link Building', 'Schema Markup'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    client: 'HomeDecor Plus',
    timeline: '6 Months',
    services: 'SEO Strategy, Content Marketing',
    challenge: 'The client had minimal organic visibility despite having quality products. They were heavily dependent on paid advertising with diminishing returns.',
    solution: 'Conducted comprehensive technical audit, fixed crawlability issues, implemented schema markup for products, created pillar content strategy, and built high-quality backlinks through digital PR.',
    results: [
      '450% increase in organic traffic',
      '#1 rankings for 15+ target keywords',
      '280% increase in organic revenue',
      '65% reduction in customer acquisition cost'
    ],
    featured: true
  },
  {
    id: 'seo-local-business',
    title: 'Local Business SEO Domination',
    shortDescription: 'Multi-location local SEO strategy',
    description: 'Helped a multi-location service business dominate local search results across 12 cities.',
    category: 'seo',
    tech: ['Local SEO', 'Google Business Profile', 'Citation Building', 'Review Management'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
    client: 'CleanPro Services',
    timeline: '4 Months',
    services: 'Local SEO, Reputation Management',
    challenge: 'The client had 12 locations but was invisible in local search. Competitors were capturing all the local search traffic.',
    solution: 'Optimized all Google Business Profiles, built consistent NAP citations, implemented review generation system, and created location-specific landing pages with local content.',
    results: [
      '12 locations in Local 3-Pack',
      '340% increase in phone calls',
      '4.8 average star rating (up from 3.2)',
      '200+ new reviews generated monthly'
    ]
  },
  {
    id: 'seo-saas',
    title: 'B2B SaaS Content Strategy',
    shortDescription: 'Content-led growth for enterprise software',
    description: 'Developed and executed a comprehensive content strategy that positioned the client as an industry thought leader.',
    category: 'seo',
    tech: ['Content Strategy', 'Topic Clusters', 'Technical SEO', 'Conversion Optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    client: 'CloudSync Technologies',
    timeline: '8 Months',
    services: 'SEO, Content Marketing, CRO',
    challenge: 'The SaaS company struggled to compete with established players. Their content was scattered with no cohesive strategy.',
    solution: 'Created topic cluster strategy around key pain points, produced 50+ in-depth guides, optimized conversion paths, and built authority through guest posting and podcast appearances.',
    results: [
      '520% increase in organic traffic',
      '180% increase in demo requests',
      'Domain Authority increased from 32 to 58',
      'Featured snippets for 25+ queries'
    ]
  },
  {
    id: 'seo-recovery',
    title: 'Penalty Recovery & Rebuild',
    shortDescription: 'Recovered from Google penalty to new heights',
    description: 'Helped a news publication recover from a Google algorithm penalty and rebuild their organic presence.',
    category: 'seo',
    tech: ['Penalty Recovery', 'Link Audit', 'Content Audit', 'Technical SEO'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    client: 'TechNews Daily',
    timeline: '5 Months',
    services: 'Penalty Recovery, Technical SEO',
    challenge: 'The site experienced a 70% traffic drop after a core update. Revenue plummeted and the business was at risk.',
    solution: 'Conducted thorough link audit and disavowed toxic backlinks, removed thin/duplicate content, improved E-E-A-T signals, and rebuilt content quality standards.',
    results: [
      'Full traffic recovery in 5 months',
      '120% above pre-penalty levels',
      'Zero manual actions or penalties since',
      'Sustainable growth framework established'
    ]
  }
];

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(p => p.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const categoryLabels: Record<ProjectCategory, string> = {
  'web-design': 'Web Design',
  'development': 'Development',
  'seo': 'SEO'
};
