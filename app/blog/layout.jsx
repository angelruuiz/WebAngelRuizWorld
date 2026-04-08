"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MagicCursor } from '@/components/VisualEffects';
import { ContactFormModal } from '@/components/Modals';

export default function BlogLayout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-slate-900 overflow-x-hidden selection:bg-amber-500/20 selection:text-amber-900">
      <MagicCursor />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main className="pt-32 pb-20">
        {children}
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
