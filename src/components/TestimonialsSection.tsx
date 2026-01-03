import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    quote: "Yesar transformed our manual onboarding process into a fully automated flow using AI. We saved 20+ hours a week and our team couldn't be happier.",
    author: "David Smith",
    role: "CEO, TechFlow",
    initials: "DS",
    company: "TechFlow"
  },
  {
    quote: "The web application Yesar built for us is blazing fast. His attention to detail in UI/UX is unmatched. Our users love the new interface.",
    author: "Sarah Jenkins",
    role: "Product Manager, Nexus",
    initials: "SJ",
    company: "Nexus"
  },
  {
    quote: "Professional, timely, and extremely knowledgeable about the latest AI tech stack. A true partner who delivers beyond expectations.",
    author: "Michael Ross",
    role: "Founder, StartScale",
    initials: "MR",
    company: "StartScale"
  },
  {
    quote: "Our e-commerce conversion rate increased by 40% after the redesign. Highly recommended for anyone looking to boost their online sales.",
    author: "Emily Lau",
    role: "Director, StyleCo",
    initials: "EL",
    company: "StyleCo"
  },
  {
    quote: "Yesar's understanding of both frontend and backend technologies made our complex healthcare project feel manageable and well-organized.",
    author: "James Wong",
    role: "CTO, DataSync",
    initials: "JW",
    company: "DataSync"
  },
  {
    quote: "The SEO work was phenomenal. We went from page 5 to #1 in just 6 months. Our organic traffic increased by over 400%.",
    author: "Amanda Chen",
    role: "Marketing Director, HomeDecor Plus",
    initials: "AC",
    company: "HomeDecor Plus"
  },
  {
    quote: "Outstanding work on our trading platform. The system handles thousands of trades daily with zero downtime. Couldn't ask for more.",
    author: "Robert Kim",
    role: "Managing Partner, CryptoVentures",
    initials: "RK",
    company: "CryptoVentures"
  },
  {
    quote: "The 3D visualization features Yesar added to our real estate platform completely changed how our users explore properties. Game changer!",
    author: "Lisa Thompson",
    role: "VP Product, PropTech Solutions",
    initials: "LT",
    company: "PropTech Solutions"
  },
  {
    quote: "We were skeptical about AI integration at first, but Yesar showed us the possibilities. Now we can't imagine running our business without it.",
    author: "Daniel Park",
    role: "Operations Manager, LogiFlow",
    initials: "DP",
    company: "LogiFlow"
  },
  {
    quote: "The local SEO strategy worked wonders. All 12 of our locations now appear in the top 3 local results. Our phone hasn't stopped ringing!",
    author: "Maria Garcia",
    role: "Owner, CleanPro Services",
    initials: "MG",
    company: "CleanPro Services"
  }
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1
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
    setSelectedIndex(emblaApi.selectedScrollSnap());
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
              className="p-3 rounded-full bg-white/5 border border-border/50 text-foreground hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/5 border border-border/50 text-foreground hover:bg-white/10 transition-colors"
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
              transition={{ duration: 0.8, delay: 0.05 * index }}
              className="w-[320px] md:w-[400px] p-8 rounded-2xl bg-card border border-border/50 shrink-0 select-none hover:border-primary/30 transition-colors"
            >
              <StarRating />
              <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">
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

      {/* Dot indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              selectedIndex === index 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
