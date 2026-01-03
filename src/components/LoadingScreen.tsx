import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-4xl font-medium tracking-tighter animate-pulse"
        >
          YR
        </motion.span>
        <div className="h-[1px] w-24 bg-border overflow-hidden relative">
          <div className="absolute inset-0 bg-primary w-full h-full origin-left animate-shimmer" />
        </div>
      </div>
    </motion.div>
  );
}
