import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform for business intelligence',
    tech: 'Next.js, Tremor, Postgres',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language understanding',
    tech: 'Python, OpenAI, Pinecone',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Crypto Trading Platform',
    description: 'Automated cryptocurrency trading with real-time data',
    tech: 'React, Node.js, WebSockets',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Real Estate Mapper',
    description: 'Interactive property search with 3D visualization',
    tech: 'Mapbox, Vue.js, Firebase',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'E-Commerce Platform',
    description: 'High-converting online store with AI recommendations',
    tech: 'Shopify, React, TailwindCSS',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Patient management system with analytics',
    tech: 'React, D3.js, Node.js',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  },
];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCaseStudy: (title: string) => void;
}

export default function ProjectsModal({ isOpen, onClose, onOpenCaseStudy }: ProjectsModalProps) {
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
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-medium text-foreground tracking-tight mb-4">All Projects</h2>
                <p className="text-muted-foreground">A collection of my work in development and AI.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => {
                    onOpenCaseStudy(project.title);
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
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-foreground font-medium mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-xs mb-4">{project.tech}</p>
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
