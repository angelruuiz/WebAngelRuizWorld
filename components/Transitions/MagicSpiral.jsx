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
      }, 1500); // Duration match
      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
    }
  }, [isVisible, onComplete]);

  if (!shouldRender) return null;

  const lines = Array.from({ length: 24 });

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"
          >
            {/* Darkening background slightly */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-0 h-0 scale-150">
        {lines.map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: i * (360 / lines.length), opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 5], 
              rotate: [i * (360 / lines.length), i * (360 / lines.length) + 360],
              opacity: [0, 1, 0.8, 0]
            }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.03
            }}
            className="absolute top-1/2 left-0 w-[60vw] h-[1px] origin-left bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            style={{ 
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.3)',
              borderRadius: '100px' 
            }}
          />
        ))}
        
        {/* Glow center */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 2, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-400 blur-3xl rounded-full"
        />
      </div>
    </div>
  );
};

export default MagicSpiral;
