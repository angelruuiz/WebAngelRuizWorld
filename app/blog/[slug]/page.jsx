import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import NewsletterForm from '@/components/NewsletterForm';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import { ReadingProgress } from '@/components/VisualEffects';
import { Sparkles, MessageSquare, WhatsApp } from '@/components/Icons';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);
  if (!postData) {
    return {
      title: { absolute: 'Artículo no encontrado | Ángel Ruiz' },
      description: 'El artículo solicitado no existe.',
    };
  }
  const baseTitle = postData.meta_title || postData.title;
  const resolvedTitle = baseTitle.includes('Ángel Ruiz')
    ? baseTitle
    : (baseTitle.length <= 48 ? `${baseTitle} | Ángel Ruiz` : baseTitle);

  return {
    title: { absolute: resolvedTitle },
    description: postData.excerpt,
    keywords: postData.tags,
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: 'article',
      url: `https://angelruiz.world/blog/${params.slug}`,
      images: postData.image ? [{ url: postData.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.excerpt,
      images: postData.image ? [postData.image] : [],
    },
    alternates: {
      canonical: `https://angelruiz.world/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }) {
  const postData = await getPostData(params.slug);
  if (!postData) {
    notFound();
  }
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(p => p.slug !== params.slug).slice(0, 3);

  const plainText = (postData.contentHtml || '').replace(/<[^>]+>/g, ' ');
  const words = plainText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const blogArticle = {
    "@type": "BlogPosting",
    "@id": `https://angelruiz.world/blog/${params.slug}/#article`,
    "headline": postData.title,
    "description": postData.excerpt,
    "image": postData.image ? `https://angelruiz.world${postData.image}` : `https://angelruiz.world/images/logo-grande.webp`,
    "datePublished": postData.date,
    "dateModified": postData.dateModified || postData.date,
    "inLanguage": "es-ES",
    "wordCount": wordCount,
    "articleSection": postData.category || "Magia y Eventos",
    ...(postData.tags && postData.tags.length > 0 ? { "keywords": postData.tags.join(', ') } : {}),
    "author": {
      "@type": "Person",
      "@id": "https://angelruiz.world/#person",
      "name": "Ángel Ruiz",
      "jobTitle": "Mago e Ilusionista Profesional",
      "url": "https://angelruiz.world"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://angelruiz.world/#organization",
      "name": "Ángel Ruiz | Mago e Ilusionista",
      "url": "https://angelruiz.world",
      "logo": {
        "@type": "ImageObject",
        "url": "https://angelruiz.world/images/logo-grande.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://angelruiz.world/blog/${params.slug}`
    }
  };

  const faqSchema = postData.faq && postData.faq.length > 0 ? {
    "@type": "FAQPage",
    "@id": `https://angelruiz.world/blog/${params.slug}/#faq`,
    "mainEntity": postData.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `https://angelruiz.world/blog/${params.slug}/#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://angelruiz.world/blog" },
      { "@type": "ListItem", "position": 3, "name": postData.title, "item": `https://angelruiz.world/blog/${params.slug}` }
    ]
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day} / ${month} / ${year}`;
  };

  return (
    <>
    <ReadingProgress />
    <article className="max-w-[1440px] mx-auto px-6 liquid-glass-card p-6 md:p-10 mt-0">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": "https://angelruiz.world/#organization",
              "name": "Ángel Ruiz | Mago e Ilusionista",
              "url": "https://angelruiz.world",
              "logo": "https://angelruiz.world/images/logo-grande.webp",
              "image": "https://angelruiz.world/images/foto-bio.webp",
              "telephone": "+34648055636",
              "priceRange": "€€€"
            },
            blogArticle,
            breadcrumbSchema,
            ...(faqSchema ? [faqSchema] : [])
          ]
        }) }} 
      />

      {/* Floating Meta */}
      <div className="flex flex-wrap items-center gap-3 text-[8px] font-black tracking-widest text-amber-500 uppercase mb-8">
        <Link href="/blog" className="px-2.5 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">← Volver al Blog</Link>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>{postData.category}</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>{formatDate(postData.date)}</span>
      </div>

      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-5xl urban-title mb-6 leading-tight text-white uppercase italic tracking-tighter">
            {postData.title}
          </h1>
          <div className="h-[2px] w-20 bg-amber-500 mx-auto rounded-full" />
        </header>

        <div 
          className="blog-content prose prose-invert prose-lg max-w-none 
            font-light leading-relaxed text-slate-300
            prose-headings:font-[var(--font-cormorant)] prose-headings:italic
            prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
            prose-strong:font-bold
            prose-p:mb-8 prose-p:text-justify"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />

        {/* In-Article Conversion Callout */}
        <div className="my-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 border border-amber-500/30 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponibilidad Q4 2026 & Temporada 2027
              </span>
              <h3 className="text-xl md:text-2xl font-[Cinzel] font-bold text-white mb-2">
                ¿Organizas un evento o celebración en Madrid?
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-light max-w-xl">
                Tarifas oficiales sin agencias: <strong className="text-amber-400">Particulares 300€</strong> · <strong className="text-amber-400">Bodas 450€ - 650€</strong> · <strong className="text-amber-400">Empresas 500€ - 750€</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a 
                href={`https://wa.me/34648055636?text=${encodeURIComponent(`Hola Ángel, he leído tu artículo sobre "${postData.title}" y quisiera consultar disponibilidad y presupuesto para mi fecha.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:scale-105 transition-all"
              >
                <WhatsApp className="w-4 h-4" />
                WhatsApp Directo
              </a>
              <Link 
                href="/contratar-mago-madrid"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all text-center"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Ver Tarifas y Reserva
              </Link>
            </div>
          </div>
        </div>

        {/* Visual FAQ to avoid Phantom Schema Penalty */}
        {postData.faq && postData.faq.length > 0 && (
          <div className="mt-16 pt-16 border-t border-white/5">
            <h2 className="text-2xl font-[Cinzel] text-white mb-8 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {postData.faq.map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-amber-400 font-bold mb-3 text-sm">{item.question}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Brand Sign-off for SEO & Trust */}
        <div className="mt-16 py-10 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-5">
             <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-transform hover:scale-110 duration-500">
                <Image 
                    src="/images/logo-pequeno.webp" 
                    alt="Ángel Ruiz mago ilusionista profesional Madrid - logo autor corporativo" 
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                />
             </div>
             <div>
                <p className="text-sm font-black tracking-widest text-amber-500 uppercase mb-1">Escrito por Ángel Ruiz García</p>
                <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Ilusionista Profesional | Experto en Eventos Corporativos</p>
             </div>
          </div>
          <div className="px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic mx-auto md:mx-0">
             <span>Contenido Original de Magia</span>
          </div>
        </div>

        {/* High-Converting Main CTA Block (Prioridad Máxima sobre Newsletter) */}
        <div className="mt-16 p-8 md:p-12 liquid-glass-card relative overflow-hidden text-center !rounded-[2.5rem] border-amber-500/30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reserva Directa con Ángel Ruiz</span>
          </div>
          <h3 className="text-3xl md:text-4xl urban-title mb-3 leading-tight text-white">
            ¿Buscas una experiencia inolvidable para tu evento?
          </h3>
          <p className="text-slate-300 font-light mb-8 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Asombra a tus invitados con magia de cerca y mentalismo de élite. Selecciona tu tipo de evento o contacta directamente para recibir propuesta en menos de 2 horas:
          </p>

          {/* Tarjetas de Tarifas Transparentes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 text-left">
            <Link href="/particulares/eventos" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all block group">
              <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block mb-1">Particulares & Fiestas</span>
              <span className="text-2xl font-[Cinzel] font-bold text-white block mb-1">300€</span>
              <span className="text-slate-400 text-xs block group-hover:text-slate-300">Cumpleaños de adultos, cenas privadas y aniversarios (tarifa cerrada).</span>
            </Link>
            <Link href="/particulares/bodas" className="p-4 rounded-2xl bg-white/5 border border-amber-400/40 hover:border-amber-400 transition-all block group">
              <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block mb-1">Bodas & Cócteles</span>
              <span className="text-2xl font-[Cinzel] font-bold text-white block mb-1">450€ - 650€</span>
              <span className="text-slate-400 text-xs block group-hover:text-slate-300">Magia en el cóctel, banquete y efecto cumbre para los novios.</span>
            </Link>
            <Link href="/empresas/mago-cenas-empresa-madrid" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all block group">
              <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block mb-1">Empresas & Cenas</span>
              <span className="text-2xl font-[Cinzel] font-bold text-white block mb-1">500€ - 750€</span>
              <span className="text-slate-400 text-xs block group-hover:text-slate-300">Cenas de Navidad, eventos corporativos y dinamización de equipos.</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`https://wa.me/34648055636?text=${encodeURIComponent(`Hola Ángel, he leído tu artículo sobre "${postData.title}" y quisiera consultar disponibilidad y tarifas para mi fecha.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black uppercase tracking-wider text-xs md:text-sm hover:scale-105 transition-all rounded-full flex items-center gap-2 shadow-xl shadow-green-500/25"
            >
              <WhatsApp className="w-5 h-5" />
              WhatsApp Directo (Respuesta &lt;2h)
            </a>
            <Link 
              href="/contratar-mago-madrid" 
              className="px-8 py-4 bg-white text-black font-black uppercase tracking-wider text-xs md:text-sm hover:scale-105 transition-all rounded-full flex items-center gap-2 shadow-xl"
            >
              Ver Formatos y Reservar
            </Link>
          </div>
          <p className="text-slate-500 text-[11px] mt-4 italic">
            Trato directo sin agencias intermediarias · Facturación oficial y seguro de responsabilidad civil
          </p>
        </div>

        {/* Newsletter Form al final */}
        <NewsletterForm />

        {/* Bottom Related Articles Section */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <h4 className="text-[12px] font-black tracking-[0.5em] text-white uppercase mb-12 text-center opacity-50">
            ARTÍCULOS RELACIONADOS
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="h-full p-6 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all group-hover:border-amber-500/30">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-4">{post.category}</span>
                  <h5 className="text-xl urban-title leading-tight group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h5>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
