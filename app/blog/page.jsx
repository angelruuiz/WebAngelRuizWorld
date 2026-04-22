import { getSortedPostsData } from '@/lib/blog';
import BlogListingClient from '@/components/BlogListingClient';

export const metadata = {
  title: 'Todo lo que necesitas saber sobre los Magos | Ángel Ruiz',
  description: '¿Tienes dudas sobre cómo contratar un mago? Descubre precios, consejos clave y todo lo que necesitas saber sobre el ilusionismo para eventos en Madrid. Resuelve tus preguntas sobre magia de cerca, mentalismo y espectáculos de escenario con Ángel Ruiz.',
  alternates: {
    canonical: 'https://angelruiz.world/blog',
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
            }
          ]
        }) }} 
      />
      <BlogListingClient posts={allPostsData} />
    </>
  );
}
