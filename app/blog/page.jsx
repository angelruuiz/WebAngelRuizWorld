import { getSortedPostsData } from '@/lib/blog';
import BlogListingClient from '@/components/BlogListingClient';

export const metadata = {
  title: 'Blog de Magia en Madrid | Consejos y Contratación para Eventos',
  description: 'Descubre todo lo que necesitas saber antes de contratar un mago en Madrid: consejos para bodas, eventos de empresa y los secretos mejor guardados del ilusionismo.',
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
