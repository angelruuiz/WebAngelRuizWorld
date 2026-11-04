import { getSortedPostsData } from '@/lib/blog';
import BlogListingClient from '@/components/BlogListingClient';

export const metadata = {
  title: { absolute: 'Blog | Ángel Ruiz, Mago e Ilusionista' },
  description: 'Blog de magia y eventos en Madrid por Ángel Ruiz. Precios, ideas y consejos de ilusionismo para bodas, fiestas privadas y eventos de empresa.',
  alternates: {
    canonical: 'https://angelruiz.world/blog',
  },
  openGraph: {
    title: 'Blog | Ángel Ruiz, Mago e Ilusionista',
    description: 'Blog de magia y eventos en Madrid por Ángel Ruiz. Precios, ideas y consejos de ilusionismo para bodas, fiestas privadas y eventos de empresa.',
    url: 'https://angelruiz.world/blog',
    siteName: 'Ángel Ruiz | Mago e Ilusionista',
    locale: 'es_ES',
    type: 'website',
    images: [{
      url: 'https://angelruiz.world/images/og-blog.webp',
      width: 1200,
      height: 630,
      alt: 'Blog de Magia y Eventos en Madrid | Ángel Ruiz',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Ángel Ruiz, Mago e Ilusionista',
    description: 'Descubre precios, consejos clave y todo lo que necesitas saber sobre el ilusionismo para eventos en Madrid.',
    images: ['https://angelruiz.world/images/og-blog.webp'],
  },
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://angelruiz.world" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://angelruiz.world/blog" }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": "https://angelruiz.world/#organization",
              "name": "Ángel Ruiz | Mago e Ilusionista",
              "url": "https://angelruiz.world"
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbSchema.itemListElement
            },
            {
              "@type": "Blog",
              "@id": "https://angelruiz.world/blog/#blog",
              "name": "Blog de Magia | Ángel Ruiz",
              "description": "Explora nuestro blog de magia.",
              "publisher": {
                "@id": "https://angelruiz.world/#organization"
              },
              "blogPost": allPostsData.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "url": `https://angelruiz.world/blog/${post.slug}`,
                "datePublished": post.date || "2026-01-01"
              }))
            }
          ]
        }) }} 
      />
      <BlogListingClient posts={allPostsData} />
    </>
  );
}
