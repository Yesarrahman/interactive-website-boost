import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects, categoryLabels, type ProjectCategory } from '@/data/projects';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (id: string) => void;
}

const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'development', label: 'Development' },
  { id: 'seo', label: 'SEO' }
];

export default function FeaturedProjects({ onOpenCaseStudy }: FeaturedProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-8">Featured Work</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground border border-border/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
              onClick={() => onOpenCaseStudy(project.id)}
              className={`glass-panel rounded-2xl overflow-hidden border border-border/30 group cursor-pointer card-hover ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-video bg-card relative overflow-hidden">
                <img 
                  src={project.image} 
                  className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  alt={project.title}
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
                <span className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-full border border-border/30">
                  {categoryLabels[project.category]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 rounded bg-white/5 border border-border/30 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 rounded bg-white/5 border border-border/30 text-xs text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Case Study <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
