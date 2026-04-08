"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const MagicSpiral = ({ isVisible, onComplete }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2500); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!shouldRender) return null;

  // Reduced counts for optimization
  const lines = Array.from({ length: 18 }); 
  const particles = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 bg-slate-950/80" // Removed expensive backdrop-blur
          >
            <div 
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-0 h-0 scale-[2] md:scale-[3] will-change-transform">
        {/* Magic Dust / Stars - Optimized */}
        {particles.map((_, i) => (
          <motion.div
            key={`p-${i}`}
            initial={{ translate: '-50% -50%', scale: 0, opacity: 0 }}
            animate={{ 
              x: (Math.random() - 0.5) * 600,
              y: (Math.random() - 0.5) * 600,
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.2, 
              ease: "easeOut",
              delay: Math.random() * 0.4
            }}
            className="absolute w-1 h-1 bg-amber-300 rounded-full shadow-[0_0_5px_#fbbf24] will-change-transform" // Simpler shadow
          />
        ))}

        {/* Spiral Lines - Optimized */}
        {lines.map((_, i) => (
          <motion.div
            key={`l-${i}`}
            initial={{ scale: 0, rotate: i * (360 / lines.length), opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 6], 
              rotate: [i * (360 / lines.length), i * (360 / lines.length) + 480],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.5, 
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.05
            }}
            className="absolute top-1/2 left-0 w-[80vw] h-[1px] origin-left bg-amber-400 will-change-transform"
            style={{ 
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)', // Single simple shadow
              borderRadius: '100px',
              opacity: 0.7
            }}
          />
        ))}
        
        {/* Glow center - Optimized */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 3, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/30 blur-[60px] rounded-full"
        />
      </div>
    </div>
  );
};

export default MagicSpiral;
