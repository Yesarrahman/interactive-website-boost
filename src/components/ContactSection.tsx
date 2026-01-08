import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const WEB3FORMS_ACCESS_KEY = '0e5bfb8e-54f9-4802-86f9-4a36f57e7b66';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        
        // Auto-reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      
      // Auto-reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear field error on change
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
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
          
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Message sent successfully!</h3>
              <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm ${errors.name ? 'border-red-500' : 'border-border/50'}`}
                    disabled={status === 'loading'}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm ${errors.email ? 'border-red-500' : 'border-border/50'}`}
                    disabled={status === 'loading'}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <select 
                  name="service" 
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className={`w-full bg-background border rounded-lg px-4 py-3 text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm ${errors.service ? 'border-red-500' : 'border-border/50'}`}
                  disabled={status === 'loading'}
                >
                  <option value="" disabled>Interested in...</option>
                  <option value="Web Development">Web Development</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="E-Commerce">E-Commerce</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>
              <div>
                <textarea 
                  name="message" 
                  rows={4} 
                  placeholder="Project details..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 text-sm resize-none ${errors.message ? 'border-red-500' : 'border-border/50'}`}
                  disabled={status === 'loading'}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg"
                >
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 neon-glow-hover disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}

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
