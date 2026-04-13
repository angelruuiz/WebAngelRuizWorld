"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';

export default function BlogLayout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200 relative">
      {/* Background Animated Blobs for Liquid Feel */}
      <div className="fixed top-[-5%] left-[-5%] w-[25%] h-[25%] bg-amber-600/10 bg-blob pointer-events-none" />
      <div className="fixed bottom-[-5%] right-[-5%] w-[25%] h-[25%] bg-purple-600/5 bg-blob pointer-events-none animation-delay-4000" />
      
      <MagicCursor isLight={false} />
      <Navbar onOpenContact={() => setIsContactOpen(true)} isLight={false} />
      
      <main className="pt-24 pb-20 relative z-10">
        {children}
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} isLight={false} />
      <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
