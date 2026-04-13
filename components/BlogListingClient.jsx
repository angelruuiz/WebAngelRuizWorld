"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagicCursor, ParticleBackground } from '@/components/VisualEffects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDoubleDown, UserIcon } from '@/components/Icons';

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
        <div className="min-h-screen text-slate-200 relative overflow-hidden">
            {/* Background Animated Blobs for Liquid Feel */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-600 bg-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 bg-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-400 bg-blob animation-delay-4000" />

            <main className="max-w-[1440px] mx-auto px-6 pt-2 pb-12 relative z-10">
                <header className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-[11px] md:text-[14px] font-black tracking-[0.4em] text-amber-500 uppercase mb-5 opacity-80">
                            Consejos para contratar un mago en Madrid
                        </p>
                        <h1 className="text-5xl md:text-8xl font-black urban-title mb-8 leading-none text-white italic tracking-tighter">
                            BLOG DE MAGIA<br/><span className="text-amber-500">PARA EVENTOS</span>
                        </h1>
                        <div className="h-[2px] w-20 bg-white/20 mx-auto rounded-full" />

                        {/* Animated Scroll Indicator Icon */}
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 0.5, y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="mt-12 text-amber-500 flex justify-center"
                        >
                            <ChevronDoubleDown className="w-8 h-8 md:w-10 md:h-10" />
                        </motion.div>
                    </motion.div>
                </header>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {posts.map((post) => (
                        <motion.div key={post.slug} variants={item}>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <article className="liquid-glass-card h-full p-6 flex flex-col justify-between transition-all duration-700 hover:bg-white/10 !rounded-[1.5rem]">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-5 h-[1px] bg-amber-500/50" />
                                            <span className="text-[8px] font-bold tracking-[0.2em] text-amber-500/80 uppercase">
                                                {post.category || 'Ilusionismo'}
                                            </span>
                                        </div>
                                        <h2 className="text-lg md:text-xl font-black urban-title mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-400 font-light leading-relaxed mb-6 text-xs line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    
                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-all duration-500">
                                                <img 
                                                    src="/images/logo-pequeno.jpg" 
                                                    alt="Logo Ángel Ruiz" 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-slate-400 mb-0.5 uppercase tracking-wider">{post.date}</span>
                                                <span className="text-amber-500 font-black tracking-tighter text-[11px] uppercase">Ángel Ruiz García</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-[8px] group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-all">
                                                LECTURA: {post.readTime || '5 MIN'}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
}
