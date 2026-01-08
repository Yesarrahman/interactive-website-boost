import { motion } from 'framer-motion';
import { ArrowRight, Mouse } from 'lucide-react';

interface HeroSectionProps {
  onOpenProjects: () => void;
}

export default function HeroSection({ onOpenProjects }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 md:pt-20 pb-16">
      <motion.div 
        className="relative z-20 container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge - Added mt-8 for top margin */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-border/50 text-xs font-medium text-primary mb-8 mt-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for New Projects
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-foreground tracking-tight mb-6 leading-[1.1]"
        >
          Yesar <span className="text-muted-foreground">Rahman</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          I build fast, scalable websites and AI automation systems that help businesses grow, automate workflows, and save time.
        </motion.p>

        {/* CTA */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full overflow-hidden transition-all neon-glow-hover"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <button 
            onClick={onOpenProjects}
            className="px-8 py-3.5 text-sm font-medium text-foreground border border-border/50 rounded-full hover:bg-white/5 transition-all"
          >
            View Portfolio
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
      >
        <Mouse size={24} className="text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}
