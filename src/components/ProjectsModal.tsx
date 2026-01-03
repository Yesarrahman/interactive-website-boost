import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { projects, categoryLabels, type ProjectCategory } from '@/data/projects';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy: (id: string) => void;
}

const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'development', label: 'Development' },
  { id: 'seo', label: 'SEO' }
];

export default function ProjectsModal({ isOpen, onClose, onOpenCaseStudy }: ProjectsModalProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-medium text-foreground tracking-tight mb-4">All Projects</h2>
                <p className="text-muted-foreground mb-6">A collection of my work in design, development, and SEO.</p>
                
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
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => {
                    onOpenCaseStudy(project.id);
                    onClose();
                  }}
                  className="glass-panel rounded-xl overflow-hidden border border-border/30 group cursor-pointer card-hover"
                >
                  <div className="aspect-video bg-card relative overflow-hidden">
                    <img 
                      src={project.image} 
                      className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                      alt={project.title}
                    />
                    <span className="absolute top-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-full border border-border/30">
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-foreground font-medium mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span key={tech} className="text-muted-foreground text-xs">{tech}</span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="text-muted-foreground text-xs">+{project.tech.length - 2} more</span>
                      )}
                    </div>
                    <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Case Study <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
