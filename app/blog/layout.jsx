"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';

export default function BlogLayout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      <MagicCursor isLight={false} />
      <Navbar onOpenContact={() => setIsContactOpen(true)} isLight={false} />
      
      <main className="pt-32 pb-20 relative z-10">
        {children}
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} isLight={false} />
      <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
