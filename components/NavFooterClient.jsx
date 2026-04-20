"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
const ContactFormModal = dynamic(() => import('@/components/Modals').then(mod => mod.ContactFormModal), { ssr: false });

export default function NavFooterClient({ children }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200">
            <Navbar onOpenContact={() => setIsContactOpen(true)} />
            {children}
            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactFormModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </div>
    );
}
