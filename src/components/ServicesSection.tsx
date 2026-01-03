import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Bot, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Full-Stack Dev',
    description: 'End-to-end web application development using React, Next.js, and Node.js.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline operations with n8n, OpenAI, and custom chatbots.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description: 'High-converting Shopify and WordPress stores designed for sales.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight">Services & Solutions</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-border/30 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-medium text-foreground mb-3">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
