import Link from 'next/link';
import { getPostData, getSortedPostsData } from '@/lib/blog';
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
    <article className="max-w-7xl mx-auto px-6">
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

      {/* Breadcrumb */}
      <nav className="mb-12 text-[10px] font-bold tracking-[0.2em] text-amber-800/60 uppercase">
        <Link href="/" className="hover:text-amber-800 transition-colors">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-400">{postData.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <header className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] text-amber-700 uppercase mb-6 block">
              {postData.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-slate-950 mb-8 leading-tight italic">
              {postData.title}
            </h1>
            <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              <span>{postData.date}</span>
              <span className="w-1 h-1 bg-amber-500 rounded-full" />
              <span>{postData.readTime}</span>
            </div>
            <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-amber-800/20 via-amber-800/10 to-transparent" />
          </header>

          <div 
            className="blog-content prose prose-slate prose-lg max-w-none 
              font-light leading-relaxed text-slate-700
              prose-headings:font-[Playfair_Display] prose-headings:text-slate-950 prose-headings:italic
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
              prose-strong:text-slate-950 prose-strong:font-bold
              prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />

          {/* Custom FAQ block styling explained in CSS module or global style */}
          
          <div className="mt-24 p-12 bg-white border border-amber-800/10 rounded-sm relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/30" />
            <MessageSquare className="w-10 h-10 text-amber-500/20 mx-auto mb-6" />
            <h3 className="text-3xl font-[Playfair_Display] text-slate-950 mb-4 italic">¿Buscas magia para tu evento?</h3>
            <p className="text-slate-600 font-light mb-8 max-w-md mx-auto">
              Descubre cómo puedo elevar el nivel de tu celebración con las especialidades de ilusionismo más exclusivas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/particulares/bodas" 
                className="px-8 py-3 bg-amber-700 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-amber-800 transition-all rounded-full"
              >
                Mago para Bodas
              </Link>
              <Link 
                href="/empresas" 
                className="px-8 py-3 border border-amber-700 text-amber-800 font-bold uppercase tracking-widest text-[10px] hover:bg-amber-50 transition-all rounded-full"
              >
                Magia para Empresas
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 self-start sticky top-32">
          <div className="bg-white/40 p-10 border border-slate-200/50">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-amber-800 uppercase mb-8 pb-4 border-b border-amber-800/10">
              Otros artículos
            </h4>
            <div className="space-y-10">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-2">{post.category}</span>
                  <h5 className="text-xl font-[Playfair_Display] text-slate-900 leading-tight group-hover:text-amber-800 transition-colors italic">
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
  );
}
