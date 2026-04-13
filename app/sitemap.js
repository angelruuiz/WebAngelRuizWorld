import { getSortedPostsData } from '@/lib/blog';
import { locations } from '@/lib/locations';

export default function sitemap() {
  const posts = getSortedPostsData();
  
  const blogUrls = posts.map((post) => ({
    url: `https://angelruiz.world/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const locationUrls = locations.map((location) => ({
    url: `https://angelruiz.world/mago-${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticUrls = [
    {
      url: 'https://angelruiz.world',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://angelruiz.world/particulares',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angelruiz.world/particulares/bodas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/particulares/eventos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/empresas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angelruiz.world/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angelruiz.world/valoraciones',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://angelruiz.world/sobre-mi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://angelruiz.world/mago-sierra-madrid',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...blogUrls, ...locationUrls];
}
