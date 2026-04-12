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
        <div className="bg-[#020617] min-h-screen text-slate-200 relative overflow-hidden">
            {/* Background Animated Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-600 bg-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 bg-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-400 bg-blob animation-delay-4000" />

            <ParticleBackground />
            <MagicCursor isLight={false} />
            <Navbar isLight={false} onOpenContact={() => {}} />

            <main className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                <header className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <p className="text-[10px] md:text-[12px] font-bold tracking-[0.5em] text-amber-500 uppercase mb-6">
                            Urban Magic & High-End Content
                        </p>
                        <h1 className="text-6xl md:text-9xl font-black urban-title mb-8 leading-[0.9] text-white">
                            INSIGHTS<br/><span className="text-amber-500">MÁGICOS</span>
                        </h1>
                        <div className="h-[4px] w-24 bg-white mx-auto rounded-full" />
                    </motion.div>
                </header>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {posts.map((post) => (
                        <motion.div key={post.slug} variants={item}>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <article className="liquid-glass-card h-full p-10 md:p-16 flex flex-col justify-between transition-all duration-1000 group-hover:bg-white/10 group-hover:-rotate-1">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-8">
                                            <span className="w-8 h-[1px] bg-amber-500" />
                                            <span className="text-[11px] font-bold tracking-[0.3em] text-amber-500 uppercase">
                                                {post.category || 'Ilusionismo'}
                                            </span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black urban-title mb-8 group-hover:text-amber-400 transition-colors leading-[1.1]">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-400 font-light leading-relaxed mb-10 text-lg line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    
                                    <div className="relative z-10 flex justify-between items-center text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase pt-10 border-t border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                <span className="text-amber-500">+</span>
                                            </div>
                                            {post.date}
                                        </div>
                                        <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                            {post.readTime || '5 min'}
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            <Footer isLight={false} onOpenContact={() => {}} />
        </div>
    );
}
