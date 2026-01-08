export type ProjectCategory = 'web-design' | 'development' | 'seo' | 'shopify' | 'wordpress';

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
  liveUrl?: string;
}

export const projects: Project[] = [
  // Shopify Projects
  {
    id: 'labgrownlove',
    title: 'Lab Grown Love',
    shortDescription: 'Premium lab-grown diamond jewelry e-commerce store',
    description: 'A sophisticated Shopify store for lab-grown diamond jewelry with elegant design and seamless shopping experience.',
    category: 'shopify',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Custom Theme'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    client: 'Lab Grown Love',
    timeline: '8 Weeks',
    services: 'Shopify Development, Custom Theme, UX Design',
    challenge: 'The client needed a premium e-commerce experience that conveyed luxury and trust for high-value jewelry purchases.',
    solution: 'Developed a custom Shopify theme with elegant animations, high-quality product galleries, and optimized checkout flow for conversion.',
    results: [
      '150% increase in conversion rate',
      '45% reduction in cart abandonment',
      'Premium brand positioning achieved',
      'Seamless mobile shopping experience'
    ],
    featured: true,
    liveUrl: 'https://labgrownlove.de/'
  },
  {
    id: 'colourpop',
    title: 'ColourPop Cosmetics',
    shortDescription: 'High-traffic beauty e-commerce platform',
    description: 'Contributed to the development of ColourPop\'s high-performance Shopify store handling millions of visitors.',
    category: 'shopify',
    tech: ['Shopify Plus', 'Liquid', 'JavaScript', 'Performance Optimization'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800',
    client: 'ColourPop Cosmetics',
    timeline: '12 Weeks',
    services: 'Shopify Plus Development, Performance Optimization',
    challenge: 'Handle massive traffic spikes during product launches while maintaining fast load times and smooth checkout.',
    solution: 'Implemented advanced caching strategies, optimized Liquid templates, and created scalable architecture for flash sales.',
    results: [
      '99.9% uptime during flash sales',
      '2.5s average page load time',
      'Handles 100K+ concurrent users',
      'Seamless checkout experience'
    ],
    featured: true,
    liveUrl: 'https://colourpop.com/'
  },
  {
    id: 'spigen',
    title: 'Spigen Cases',
    shortDescription: 'Global phone accessories e-commerce store',
    description: 'Development work on Spigen\'s international Shopify store for premium phone cases and accessories.',
    category: 'shopify',
    tech: ['Shopify', 'Liquid', 'Multi-currency', 'International SEO'],
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=800',
    client: 'Spigen Inc.',
    timeline: '10 Weeks',
    services: 'Shopify Development, International Expansion',
    challenge: 'Create a seamless shopping experience across multiple countries with localized content and currencies.',
    solution: 'Implemented multi-currency support, geo-targeting, and optimized product pages for international markets.',
    results: [
      '35% increase in international sales',
      'Localized for 15+ markets',
      'Improved site speed globally',
      'Enhanced product discovery'
    ],
    liveUrl: 'https://www.spigen.com/'
  },
  {
    id: 'creativebooster',
    title: 'Creative Booster',
    shortDescription: 'Digital products and creative tools marketplace',
    description: 'A Shopify store for digital creative assets and tools for designers and content creators.',
    category: 'shopify',
    tech: ['Shopify', 'Digital Downloads', 'Custom Theme', 'Automation'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800',
    client: 'Creative Booster',
    timeline: '6 Weeks',
    services: 'Shopify Development, Digital Product Setup',
    challenge: 'Sell digital products with instant delivery while providing a premium shopping experience.',
    solution: 'Built custom digital download system with automated delivery, membership features, and intuitive product browsing.',
    results: [
      'Automated digital delivery',
      '90% customer satisfaction',
      'Recurring revenue model',
      'Streamlined operations'
    ],
    liveUrl: 'https://creativebooster.net/'
  },

  // WordPress Projects
  {
    id: 'digitalcardiocare',
    title: 'Digital Cardio Care',
    shortDescription: 'Healthcare technology platform for cardiac monitoring',
    description: 'A professional WordPress website for a digital healthcare company specializing in cardiac care solutions.',
    category: 'wordpress',
    tech: ['WordPress', 'Elementor', 'Custom PHP', 'Healthcare UI'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    client: 'Digital Cardio Care',
    timeline: '8 Weeks',
    services: 'WordPress Development, Healthcare UX',
    challenge: 'Create a trustworthy healthcare platform that explains complex medical technology in an accessible way.',
    solution: 'Designed a clean, professional website with clear service explanations, trust signals, and HIPAA-compliant contact forms.',
    results: [
      '200% increase in inquiries',
      'Improved brand credibility',
      'Mobile-optimized experience',
      'Clear service communication'
    ],
    featured: true,
    liveUrl: 'https://digitalcardiocare.com/'
  },
  {
    id: 'ascentdispatch',
    title: 'Ascent Dispatch',
    shortDescription: 'Logistics and dispatch management platform',
    description: 'A WordPress website for a dispatch and logistics company with service showcasing and lead generation.',
    category: 'wordpress',
    tech: ['WordPress', 'Custom Theme', 'Lead Generation', 'SEO'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    client: 'Ascent Dispatch',
    timeline: '6 Weeks',
    services: 'WordPress Development, SEO, Lead Generation',
    challenge: 'Stand out in the competitive dispatch industry with a professional online presence that generates leads.',
    solution: 'Built a conversion-focused website with clear CTAs, service pages optimized for SEO, and integrated lead capture.',
    results: [
      '180% increase in leads',
      'Page 1 Google rankings',
      'Professional brand image',
      'Automated lead notifications'
    ],
    liveUrl: 'https://ascentdispatch.com/'
  },
  {
    id: 'salzasecurity',
    title: 'Salza Security',
    shortDescription: 'Professional security services company website',
    description: 'A WordPress website for a security services company showcasing their expertise and building trust.',
    category: 'wordpress',
    tech: ['WordPress', 'Elementor Pro', 'Contact Forms', 'Trust Elements'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    client: 'Salza Security',
    timeline: '5 Weeks',
    services: 'WordPress Development, Brand Design',
    challenge: 'Create a professional website that conveys trust and reliability for a security services company.',
    solution: 'Designed a professional website with strong trust signals, clear service offerings, and easy contact options.',
    results: [
      'Professional brand presence',
      'Increased client inquiries',
      'Mobile-responsive design',
      'Easy content management'
    ],
    liveUrl: 'https://salzasecurity.com/'
  },
  {
    id: 'gaotek-uae',
    title: 'GAOTek UAE',
    shortDescription: 'B2B technology products e-commerce for UAE market',
    description: 'A WordPress e-commerce website for GAOTek\'s UAE division selling industrial technology products.',
    category: 'wordpress',
    tech: ['WordPress', 'WooCommerce', 'B2B Features', 'Multi-currency'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    client: 'GAOTek',
    timeline: '10 Weeks',
    services: 'WooCommerce Development, B2B Setup',
    challenge: 'Create a B2B e-commerce platform for industrial products with quote requests and bulk ordering.',
    solution: 'Built a WooCommerce store with B2B features, quote system, product catalogs, and regional pricing.',
    results: [
      'Streamlined B2B ordering',
      'Automated quote system',
      'Regional market penetration',
      'Improved product discovery'
    ],
    liveUrl: 'https://uae.gaotek.com/'
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
  'seo': 'SEO',
  'shopify': 'Shopify',
  'wordpress': 'WordPress'
};
