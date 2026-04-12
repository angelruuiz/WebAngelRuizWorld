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

  return (
    <>
    <ReadingProgress />
    <article className="max-w-6xl mx-auto px-6 liquid-glass-card p-10 md:p-14 mt-2">
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
      <div className="flex flex-wrap items-center gap-4 text-[9px] font-black tracking-widest text-amber-500 uppercase mb-10">
        <Link href="/blog" className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">← Volver al Blog</Link>
        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <span>{postData.category}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <span>{postData.date}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl urban-title mb-6 leading-tight text-white">
              {postData.title}
            </h1>
            <div className="h-[2px] w-12 bg-amber-500 rounded-full" />
          </header>

          <div 
            className="blog-content prose prose-invert prose-lg max-w-none 
              font-light leading-relaxed text-slate-300
              prose-headings:font-[Playfair_Display] prose-headings:italic
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
              prose-strong:font-bold
              prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />

          {/* Custom FAQ block styling explained in CSS module or global style */}
          
          <div className="mt-16 p-8 liquid-glass-card relative overflow-hidden text-center !rounded-[2rem] border-amber-500/20">
            <MessageSquare className="w-10 h-10 text-amber-500 mx-auto mb-6" />
            <h3 className="text-2xl urban-title mb-4 leading-tight">¿Buscas magia<br/>para tu evento?</h3>
            <p className="text-slate-400 font-light mb-8 max-w-sm mx-auto text-base leading-relaxed opacity-70">
              Eleva el nivel de tu celebración con ilusionismo diseñado para impactar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/particulares" 
                className="px-8 py-3 bg-white text-black font-black uppercase tracking-tighter text-xs hover:scale-105 transition-all rounded-full"
              >
                Particulares
              </Link>
              <Link 
                href="/empresas" 
                className="px-8 py-3 border-2 border-white text-white font-black uppercase tracking-tighter text-xs hover:bg-white hover:text-black transition-all rounded-full"
              >
                Empresas
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 self-start sticky top-32">
          <div className="liquid-glass-card p-10 !rounded-[2.5rem]">
            <h4 className="text-[11px] font-black tracking-[0.4em] text-white uppercase mb-10 pb-4 border-b border-white/10">
              ARTÍCULOS RELACIONADOS
            </h4>
            <div className="space-y-12">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-4">{post.category}</span>
                  <h5 className="text-2xl urban-title leading-tight group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h5>
                </Link>
              ))}
            </div>
            
            <div className="mt-16 pt-10 border-t border-amber-800/10">
              <p className="text-xs text-slate-400 italic font-light leading-relaxed">
                "La magia es el arte de la sorpresa, compartida a escasos centímetros del espectador."
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
    </>
  );
}
