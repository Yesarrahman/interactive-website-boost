import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

interface CaseStudyPageProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export default function CaseStudyPage({ isOpen, title, onClose }: CaseStudyPageProps) {
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
              onClick={onClose}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft size={20} /> Back
            </button>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-6xl font-medium text-foreground tracking-tight mb-8">{title}</h1>
                
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600" 
                  className="w-full rounded-2xl border border-border/30 mb-8 opacity-80" 
                  alt="Case Study Hero"
                />
                
                <h3 className="text-2xl text-foreground font-medium mb-4">The Challenge</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The client faced scalability issues with their previous legacy system. Data fragmentation and slow API response times were causing customer churn. We needed a solution that was robust, scalable, and intuitive.
                </p>
                
                <h3 className="text-2xl text-foreground font-medium mb-4">The Solution</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We re-architected the entire platform using a microservices approach. This allowed independent scaling of critical components. The UI was redesigned with a focus on accessibility and speed.
                </p>
                
                <img 
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1600" 
                  className="w-full rounded-2xl border border-border/30 mb-8 opacity-80" 
                  alt="Case Study Detail"
                />
              </div>
              
              <div>
                <div className="glass-panel p-6 rounded-xl border border-border/30 sticky top-24">
                  <div className="mb-6">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-1">Client</span>
                    <span className="text-foreground font-medium">Confidential Tech Corp</span>
                  </div>
                  <div className="mb-6">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-foreground font-medium">8 Weeks</span>
                  </div>
                  <div className="mb-6">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-1">Services</span>
                    <span className="text-foreground font-medium">Full Stack, AI Integration</span>
                  </div>
                  <div className="mb-8">
                    <span className="block text-muted-foreground text-xs uppercase tracking-widest mb-2">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 rounded bg-white/5 border border-border/30 text-xs text-muted-foreground">React</span>
                      <span className="px-2 py-1 rounded bg-white/5 border border-border/30 text-xs text-muted-foreground">Node.js</span>
                      <span className="px-2 py-1 rounded bg-white/5 border border-border/30 text-xs text-muted-foreground">Python</span>
                    </div>
                  </div>
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
