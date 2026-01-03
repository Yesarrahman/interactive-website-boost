import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-panel max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-border/50"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-4">Start Your Project</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm"
              />
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm"
              />
            </div>
            <select 
              name="service" 
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
            >
              <option value="" disabled>Interested in...</option>
              <option value="Web Development">Web Development</option>
              <option value="AI Automation">AI Automation</option>
              <option value="E-Commerce">E-Commerce</option>
            </select>
            <textarea 
              name="message" 
              rows={4} 
              required 
              placeholder="Project details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm resize-none"
            />
            
            <button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 neon-glow-hover"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border/30 flex justify-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Github">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
