import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Angel Ruiz Magia',
  description: 'Preguntas frecuentes y artículos sobre magia para bodas y eventos en Madrid.',
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-5xl mx-auto px-6">
      <header className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-[Playfair_Display] text-slate-950 mb-6 drop-shadow-sm italic">
          Todo lo que necesitas saber
        </h1>
        <p className="text-lg uppercase tracking-[0.4em] font-light text-amber-800">
          Preguntas frecuentes & Artículos de Ilusionismo
        </p>
        <div className="mt-12 h-[1px] w-24 bg-amber-800/30 mx-auto" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {allPostsData.map(({ slug, date, title, category, excerpt, readTime }) => (
          <Link href={`/blog/${slug}`} key={slug} className="group">
            <article className="h-full bg-white border border-slate-200/60 p-10 rounded-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-amber-700 uppercase mb-4 block">
                  {category}
                </span>
                <h2 className="text-3xl font-[Playfair_Display] text-slate-900 mb-4 group-hover:text-amber-800 transition-colors leading-tight">
                  {title}
                </h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8 line-clamp-3">
                  {excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-400 uppercase pt-6 border-t border-slate-100">
                <span>{date}</span>
                <span>{readTime}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
