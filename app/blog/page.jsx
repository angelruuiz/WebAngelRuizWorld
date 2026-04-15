import { getSortedPostsData } from '@/lib/blog';
import BlogListingClient from '@/components/BlogListingClient';

export const metadata = {
  title: 'Todo lo que necesitas saber sobre los Magos | Ángel Ruiz',
  description: '¿Tienes dudas sobre cómo contratar un mago? Descubre precios, consejos clave y todo lo que necesitas saber sobre el ilusionismo para eventos en Madrid. Resuelve tus preguntas sobre magia de cerca, mentalismo y espectáculos de escenario con Ángel Ruiz.',
  alternates: {
    canonical: '/blog',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />
      <BlogListingClient posts={allPostsData} />
    </>
  );
}
