import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenProjects: () => void;
}

export default function Navigation({ onOpenProjects }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <div className="fixed flex z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-nav rounded-full px-2 py-2 flex items-center gap-1"
        >
          <a href="#" className="px-4 py-2 rounded-full hover:bg-white/5 text-foreground font-medium text-sm transition-colors flex items-center gap-1">
            YESAR<span className="text-primary">.</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <div className="w-[1px] h-4 bg-border mx-2" />
            <a href="#services" className="px-4 py-2 rounded-full text-muted-foreground text-xs font-medium hover:text-foreground hover:bg-white/5 transition-all">Services</a>
            <button onClick={onOpenProjects} className="px-4 py-2 rounded-full text-muted-foreground text-xs font-medium hover:text-foreground hover:bg-white/5 transition-all">Projects</button>
            <a href="#testimonials" className="px-4 py-2 rounded-full text-muted-foreground text-xs font-medium hover:text-foreground hover:bg-white/5 transition-all">Testimonials</a>
          </div>

          <div className="hidden md:block pl-2">
            <a href="#contact" className="px-5 py-2 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-primary neon-glow-hover transition-all">Let's Talk</a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2 text-foreground hover:text-primary transition-colors z-50">
            <Menu size={20} />
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button onClick={toggleMobileMenu} className="absolute top-8 right-8 p-2 text-muted-foreground hover:text-foreground">
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              <a href="#services" onClick={toggleMobileMenu} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Services</a>
              <button onClick={() => { onOpenProjects(); toggleMobileMenu(); }} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Projects</button>
              <a href="#testimonials" onClick={toggleMobileMenu} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" onClick={toggleMobileMenu} className="text-2xl font-medium text-primary">Let's Talk</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
