"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogListingClient({ posts }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-white min-h-screen text-slate-900 border-t border-slate-100">
            <MagicCursor isLight={true} />
            <Navbar isLight={true} onOpenContact={() => {}} />

            <main className="max-w-6xl mx-auto px-6 py-24">
                <header className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-amber-700 uppercase mb-4">
                            Secretos, Consejos & Artículos de Ilusionismo
                        </p>
                        <h1 className="text-6xl md:text-8xl font-[Playfair_Display] text-slate-950 mb-8 italic leading-tight">
                            Todo lo que necesitas saber
                        </h1>
                        <div className="h-[2px] w-24 bg-amber-500/30 mx-auto" />
                    </motion.div>
                </header>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
                >
                    {posts.map((post) => (
                        <motion.div key={post.slug} variants={item}>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <article className="relative h-full bg-white border border-slate-100 p-10 md:p-14 rounded-sm transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden">
                                    {/* Hover Glow Effect */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[60px] translate-x-16 -translate-y-16 group-hover:bg-amber-500/10 transition-colors" />
                                    
                                    <div className="relative z-10">
                                        <span className="text-[10px] font-bold tracking-[0.3em] text-amber-700 uppercase mb-6 block">
                                            {post.category || 'Ilusionismo'}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-slate-900 mb-6 group-hover:text-amber-800 transition-colors leading-tight italic">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-500 font-light leading-relaxed mb-10 text-lg line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    
                                    <div className="relative z-10 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase pt-8 border-t border-slate-50">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            {post.date}
                                        </div>
                                        <span>{post.readTime || '5 min lectura'}</span>
                                    </div>

                                    {/* Subtle line reveal on hover */}
                                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-amber-600 group-hover:w-full transition-all duration-700" />
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            <Footer isLight={true} onOpenContact={() => {}} />
        </div>
    );
}
