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
      }, 2500); // Increased duration for better "feel"
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!shouldRender) return null;

  const lines = Array.from({ length: 32 });
  const particles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 bg-slate-950/40 backdrop-blur-[4px]"
            style={{ background: 'radial-gradient(circle, rgba(15, 23, 42, 0.4) 0%, rgba(2, 6, 23, 0.9) 100%)' }}
          >
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-0 h-0 scale-[2.5] md:scale-[3.5]">
        {/* Magic Dust / Stars */}
        {particles.map((_, i) => (
          <motion.div
            key={`p-${i}`}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{ 
              x: [0, (Math.random() - 0.5) * 500],
              y: [0, (Math.random() - 0.5) * 500],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, Math.random() * 360]
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeOut",
              delay: Math.random() * 0.5
            }}
            className="absolute w-1 h-1 bg-amber-200 rounded-full"
            style={{ 
              boxShadow: '0 0 8px #fbbf24',
              filter: 'blur(0.5px)'
            }}
          />
        ))}

        {/* Spiral Lines */}
        {lines.map((_, i) => (
          <motion.div
            key={`l-${i}`}
            initial={{ scale: 0, rotate: i * (360 / lines.length), opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 6], 
              rotate: [i * (360 / lines.length), i * (360 / lines.length) + 540], // More spins
              opacity: [0, 1, 0.8, 0]
            }}
            transition={{ 
              duration: 2.8, 
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.04
            }}
            className="absolute top-1/2 left-0 w-[80vw] h-[1px] origin-left bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            style={{ 
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.7), 0 0 50px rgba(245, 158, 11, 0.4)',
              borderRadius: '100px',
              opacity: 0.8
            }}
          />
        ))}
        
        {/* Glow center */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 4, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-400 blur-[80px] rounded-full"
        />
      </div>
    </div>
  );
};

export default MagicSpiral;
