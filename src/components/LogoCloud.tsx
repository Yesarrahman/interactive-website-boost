import { Box, Triangle, Hexagon, Circle, Layers, Cloud } from 'lucide-react';

const logos = [
  { icon: Box, name: 'ACME Corp' },
  { icon: Triangle, name: 'VORTEX' },
  { icon: Hexagon, name: 'HYPERION' },
  { icon: Circle, name: 'ORBITAL' },
  { icon: Layers, name: 'STACK' },
  { icon: Cloud, name: 'NEBULA' },
];

export default function LogoCloud() {
  return (
    <section className="border-y border-border/30 bg-background/50 backdrop-blur-sm overflow-hidden py-8">
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 min-w-full px-8 text-muted-foreground opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className="text-xl font-bold flex items-center gap-2">
              <logo.icon size={20} />
              {logo.name}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 min-w-full px-8 text-muted-foreground opacity-50 grayscale hover:grayscale-0 transition-all duration-500" aria-hidden>
          {[...logos, ...logos].map((logo, index) => (
            <span key={index} className="text-xl font-bold flex items-center gap-2">
              <logo.icon size={20} />
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
