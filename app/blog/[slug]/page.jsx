import Link from 'next/link';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import { ReadingProgress } from '@/components/VisualEffects';
import { Sparkles, MessageSquare } from '@/components/Icons';

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);
  return {
    title: postData.title,
    description: postData.excerpt,
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: 'article',
      url: `https://angelruiz.world/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({ params }) {
  const postData = await getPostData(params.slug);
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(p => p.slug !== params.slug).slice(0, 3);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "description": postData.excerpt,
    "image": postData.image ? `https://angelruiz.world${postData.image}` : `https://angelruiz.world/images/logo-grande.jpg`,
    "datePublished": postData.date,
    "author": {
      "@type": "Person",
      "name": "Angel Ruiz",
      "url": "https://angelruiz.world"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Angel Ruiz Magia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://angelruiz.world/images/logo-grande.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://angelruiz.world/blog/${params.slug}`
    }
  };

  const faqSchema = postData.faq && postData.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
            prose-headings:font-[Playfair_Display] prose-headings:italic
            prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
            prose-strong:font-bold
            prose-p:mb-8 prose-p:text-justify"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />

        {/* Brand Sign-off for SEO & Trust */}
        <div className="mt-16 py-10 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-5">
             <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-transform hover:scale-110 duration-500">
                <img 
                    src="/images/logo-pequeno.jpg" 
                    alt="Logo Ángel Ruiz García" 
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

        {/* CTA Block */}
        <div className="mt-20 p-10 liquid-glass-card relative overflow-hidden text-center !rounded-[2.5rem] border-amber-500/20">
          <MessageSquare className="w-10 h-10 text-amber-500 mx-auto mb-6" />
          <h3 className="text-3xl urban-title mb-4 leading-tight">¿Buscas magia<br/>para tu evento?</h3>
          <p className="text-slate-400 font-light mb-8 max-w-lg mx-auto text-lg leading-relaxed opacity-70">
            Eleva el nivel de tu celebración con ilusionismo diseñado para impactar.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/particulares" 
              className="px-10 py-4 bg-white text-black font-black uppercase tracking-tighter text-sm hover:scale-105 transition-all rounded-full"
            >
              Particulares
            </Link>
            <Link 
              href="/empresas" 
              className="px-10 py-4 border-2 border-white text-white font-black uppercase tracking-tighter text-sm hover:bg-white hover:text-black transition-all rounded-full"
            >
              Empresas
            </Link>
          </div>
        </div>

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
