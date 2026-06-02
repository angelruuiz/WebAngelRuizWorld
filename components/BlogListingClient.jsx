"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';

export default function BlogListingClient({ posts }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todos');

    const categories = useMemo(() => {
        const cats = posts.map(p => p.category || 'General');
        return ['Todos', ...new Set(cats)];
    }, [posts]);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = (post.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
                                  (post.excerpt?.toLowerCase() || '').includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'Todos' || (post.category || 'General') === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [posts, searchQuery, activeCategory]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const [year, month, day] = dateStr.split('-');
        return `${day} / ${month} / ${year}`;
    };

    return (
        <div className="min-h-screen text-slate-200 relative overflow-hidden">
            {/* Background Animated Blobs for Liquid Feel */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-600 bg-blob opacity-50" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 bg-blob animation-delay-2000 opacity-50" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-400 bg-blob animation-delay-4000 opacity-50" />

            <main className="max-w-[1440px] mx-auto px-6 pt-2 pb-16 relative z-10">
                <header className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-[10px] md:text-[12px] font-black tracking-[0.4em] text-amber-500 uppercase mb-4 opacity-80 mt-10">
                            Consejos para contratar un mago en Madrid
                        </p>
                        <h1 className="text-4xl md:text-7xl font-black urban-title mb-6 leading-none text-white italic tracking-tighter">
                            BLOG DE MAGIA<br/><span className="text-amber-500">PARA EVENTOS</span>
                        </h1>
                        <div className="h-[2px] w-16 bg-white/20 mx-auto rounded-full" />
                    </motion.div>
                </header>

                <div className="max-w-4xl mx-auto -mt-4 mb-12">
                    <NewsletterForm isCompact={true} />
                </div>

                {/* --- Search & Filters --- */}
                <div className="max-w-6xl mx-auto mb-10 flex flex-col items-center gap-6">
                    {/* Search Bar */}
                    <div className="relative w-full max-w-md">
                        <input 
                            type="text" 
                            placeholder="Buscar artículos por título o contenido..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 pl-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors shadow-xl"
                        />
                        <svg className="w-4 h-4 text-slate-400 absolute left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                                    activeCategory === cat 
                                    ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                                    : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Grid --- */}
                {filteredPosts.length === 0 ? (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 max-w-2xl mx-auto shadow-2xl"
                    >
                        <svg className="w-12 h-12 text-slate-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-bold text-white mb-2">No hay resultados</h3>
                        <p className="text-sm text-slate-400 mb-6">No encontramos artículos para "{searchQuery}" en la categoría "{activeCategory}".</p>
                        <button 
                            onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }}
                            className="px-6 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-xs font-bold hover:bg-amber-500 hover:text-black transition-colors uppercase tracking-widest"
                        >
                            Limpiar Filtros
                        </button>
                    </motion.div>
                ) : (
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post) => (
                                <motion.div key={post.slug} layout variants={item} initial="hidden" animate="show" exit="exit">
                                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                                        <article className="bg-[#111111]/80 backdrop-blur-xl h-full p-5 flex flex-col justify-between transition-all duration-500 hover:bg-white/10 border border-white/5 group-hover:border-amber-500/30 rounded-[1.5rem] shadow-xl">
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="w-3 h-[1px] bg-amber-500/50" />
                                                    <span className="text-[9px] font-bold tracking-[0.2em] text-amber-500/80 uppercase">
                                                        {post.category || 'General'}
                                                    </span>
                                                </div>
                                                <h2 className="text-base md:text-lg font-black urban-title mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                                                    {post.title}
                                                </h2>
                                                <p className="text-slate-400 font-light leading-relaxed mb-4 text-xs line-clamp-3 opacity-70 group-hover:opacity-100 transition-opacity">
                                                    {post.excerpt}
                                                </p>
                                            </div>
                                            
                                            <div className="relative z-10 flex items-center justify-between gap-3 text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] pt-4 border-t border-white/5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-full overflow-hidden bg-white/5 flex-shrink-0">
                                                        <Image src="/images/logo-pequeno.webp" alt="Ángel Ruiz mago ilusionista profesional Madrid - logo autor" width={28} height={28} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-slate-400 mb-0.5">{formatDate(post.date)}</span>
                                                        <span className="text-amber-500 text-[9px]">Ángel Ruiz</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="px-2 py-1 bg-white/5 rounded border border-white/10 group-hover:bg-amber-500/10 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-all text-[8px]">
                                                        {post.readTime || '5 MIN'}
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </main>
        </div>
    );
}
