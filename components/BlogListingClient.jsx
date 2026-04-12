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
        <div className="min-h-screen text-slate-200 relative overflow-hidden">
            {/* Background Animated Blobs for Liquid Feel */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-600 bg-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 bg-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-400 bg-blob animation-delay-4000" />

            <main className="max-w-6xl mx-auto px-6 pt-8 pb-16 relative z-10">
                <header className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-[9px] font-bold tracking-[0.5em] text-amber-500 uppercase mb-4 opacity-70">
                            Consejos para contratar un mago en Madrid
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black urban-title mb-6 leading-none text-white">
                            BLOG DE MAGIA<br/><span className="text-amber-500">PARA EVENTOS</span>
                        </h1>
                        <div className="h-[2px] w-12 bg-white/20 mx-auto rounded-full" />
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
                                <article className="liquid-glass-card h-full p-8 md:p-10 flex flex-col justify-between transition-all duration-700 hover:bg-white/10 !rounded-[2.5rem]">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="w-6 h-[1px] bg-amber-500/50" />
                                            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500/80 uppercase">
                                                {post.category || 'Ilusionismo'}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black urban-title mb-4 group-hover:text-amber-400 transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-400 font-light leading-relaxed mb-8 text-sm line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    
                                    <div className="relative z-10 flex justify-between items-center text-[9px] font-black tracking-[0.1em] text-slate-500 uppercase pt-8 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                <span className="text-amber-500 text-xs">+</span>
                                            </div>
                                            {post.date}
                                        </div>
                                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                            {post.readTime || '5 min'}
                                        </span>
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
