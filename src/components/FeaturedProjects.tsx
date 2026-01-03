import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, BarChart2, Map } from 'lucide-react';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (title: string) => void;
}

export default function FeaturedProjects({ onOpenCaseStudy }: FeaturedProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight">Featured Work</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => onOpenCaseStudy('AI Integration Suite')}
            className="lg:row-span-2 glass-panel rounded-2xl overflow-hidden border border-border/30 group cursor-pointer card-hover"
          >
            <div className="p-8">
              <span className="text-primary text-xs font-medium uppercase tracking-widest">Featured</span>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mt-2 mb-4">AI Integration Suite</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A comprehensive AI-powered platform that streamlines business workflows, featuring automated data processing, intelligent chatbots, and predictive analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'OpenAI', 'Python'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-border/30 text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View Case Study <ArrowRight size={14} />
              </span>
            </div>
            <div className="relative bg-gradient-to-br from-muted to-background min-h-[300px] flex items-center justify-center p-8">
              <div className="w-full h-full max-h-[300px] glass-panel rounded-xl border border-border/30 shadow-2xl translate-y-8 group-hover:translate-y-4 transition-transform duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-card/50" />
                <div className="p-6 space-y-4 opacity-50">
                  <div className="h-4 w-1/3 bg-white/20 rounded" />
                  <div className="h-24 w-full bg-white/10 rounded" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => onOpenCaseStudy('Algo Trading Bot')}
            className="glass-panel rounded-2xl overflow-hidden border border-border/30 group cursor-pointer card-hover"
          >
            <div className="p-8">
              <div className="h-48 rounded-xl bg-card/50 mb-6 flex items-center justify-center border border-border/30 group-hover:border-primary/20 transition-colors">
                <BarChart2 size={48} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Algo-Trading Bot</h3>
              <p className="text-muted-foreground text-sm">Automated cryptocurrency trading bot utilizing Python and technical analysis.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => onOpenCaseStudy('Real Estate Mapper')}
            className="glass-panel rounded-2xl overflow-hidden border border-border/30 group cursor-pointer card-hover"
          >
            <div className="p-8">
              <div className="h-48 rounded-xl bg-card/50 mb-6 flex items-center justify-center border border-border/30 group-hover:border-primary/20 transition-colors">
                <Map size={48} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Real Estate Mapper</h3>
              <p className="text-muted-foreground text-sm">Interactive property mapping with 3D viewing and lead generation.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
