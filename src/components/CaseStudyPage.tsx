import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import { getProjectById, categoryLabels } from '@/data/projects';

interface CaseStudyPageProps {
  isOpen: boolean;
  projectId: string;
  onClose: () => void;
  onBackToProjects: () => void;
}

export default function CaseStudyPage({ isOpen, projectId, onClose, onBackToProjects }: CaseStudyPageProps) {
  const project = getProjectById(projectId);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[110] bg-background overflow-y-auto"
        >
          <div className="max-w-6xl mx-auto px-6 py-12">
            <button 
              onClick={onBackToProjects}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={20} /> Back to Projects
            </button>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Header */}
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
                    {categoryLabels[project.category]}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight mb-4">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground text-lg">{project.description}</p>
                </div>
                
                {/* Hero Image */}
                <img 
                  src={project.image} 
                  className="w-full rounded-2xl border border-border/30 mb-12 aspect-video object-cover" 
                  alt={project.title}
                />
                
                {/* Challenge Section */}
                <div className="mb-12">
                  <h3 className="text-2xl text-foreground font-medium mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm">1</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {project.challenge}
                  </p>
                </div>
                
                {/* Solution Section */}
                <div className="mb-12">
                  <h3 className="text-2xl text-foreground font-medium mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">2</span>
                    The Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {project.solution}
                  </p>
                </div>

                {/* Results Section */}
                <div className="mb-12">
                  <h3 className="text-2xl text-foreground font-medium mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm">3</span>
                    The Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/30"
                      >
                        <Check className="text-primary mt-0.5 shrink-0" size={18} />
                        <span className="text-foreground text-sm">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="glass-panel p-6 rounded-xl border border-border/30 sticky top-24">
                  <div className="mb-6">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-1">Client</span>
                    <span className="text-foreground font-medium">{project.client}</span>
                  </div>
                  <div className="mb-6">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-foreground font-medium">{project.timeline}</span>
                  </div>
                  <div className="mb-6">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-1">Services</span>
                    <span className="text-foreground font-medium">{project.services}</span>
                  </div>
                  <div className="mb-8">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-3">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-border/30 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full text-center bg-white/5 border border-border/30 text-foreground font-medium py-3 rounded-lg hover:bg-white/10 transition-all mb-3 items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} /> View Live Site
                    </a>
                  )}
                  
                  <a 
                    href="#contact" 
                    onClick={onClose}
                    className="block w-full text-center bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:brightness-110 transition-all"
                  >
                    Start Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
