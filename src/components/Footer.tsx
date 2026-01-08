import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Yesar Rahman</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Crafting digital experiences that drive results through modern web development and AI automation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:yesarrahman@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={14} />
                yesarrahman@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                Available Worldwide
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Yesarrahman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yesar-rahman-04463643/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/YesarMiki" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {currentYear} Yesar Rahman. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
