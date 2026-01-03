import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    quote: "Yesar transformed our manual onboarding process into a fully automated flow using AI. We saved 20+ hours a week.",
    author: "David Smith",
    role: "CEO, TechFlow",
    initials: "DS",
  },
  {
    quote: "The web application Yesar built for us is blazing fast. His attention to detail in UI/UX is unmatched.",
    author: "Sarah Jenkins",
    role: "Product Manager, Nexus",
    initials: "SJ",
  },
  {
    quote: "Professional, timely, and extremely knowledgeable about the latest AI tech stack. A true partner.",
    author: "Michael Ross",
    role: "Founder, StartScale",
    initials: "MR",
  },
  {
    quote: "Our e-commerce conversion rate increased by 40% after the redesign. Highly recommended.",
    author: "Emily Lau",
    role: "Director, StyleCo",
    initials: "EL",
  },
  {
    quote: "Yesar's understanding of both frontend and backend technologies made our complex project feel simple.",
    author: "James Wong",
    role: "CTO, DataSync",
    initials: "JW",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-primary mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 relative border-t border-border/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-4"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight mb-4">Client Feedback</h2>
            <p className="text-muted-foreground text-sm">Swipe or drag to explore testimonials</p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-3 rounded-full bg-white/5 border border-border/50 text-foreground hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-3 rounded-full bg-white/5 border border-border/50 text-foreground hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Swipeable Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="overflow-hidden cursor-grab active:cursor-grabbing" 
        ref={emblaRef}
      >
        <div className="flex gap-6 pl-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-card border border-border/50 shrink-0 select-none"
            >
              <StarRating />
              <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs text-foreground font-medium">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-foreground text-sm font-semibold">{testimonial.author}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile swipe indicator */}
      <div className="md:hidden flex justify-center mt-6 gap-1">
        {testimonials.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        ))}
      </div>
    </section>
  );
}
