import { getSortedPostsData } from '@/lib/blog';
import BlogListingClient from '@/components/BlogListingClient';

export const metadata = {
  title: 'Todo lo que necesitas saber sobre los Magos | Ángel Ruiz',
  description: 'Descubre los secretos, consejos y guías definitivas para contratar un mago en Madrid. Todo sobre el ilusionismo para eventos, bodas y empresas con Ángel Ruiz.',
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
