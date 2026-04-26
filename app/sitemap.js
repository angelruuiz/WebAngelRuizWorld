import { getSortedPostsData } from '@/lib/blog';
import { locations } from '@/lib/locations';

export default function sitemap() {
  const posts = getSortedPostsData();
  
  const lastMod = new Date('2026-04-15');
  
  const blogUrls = posts.map((post) => ({
    url: `https://angelruiz.world/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastMod,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const locationUrls = locations.map((location) => ({
    url: `https://angelruiz.world/mago-${location.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticUrls = [
    {
      url: 'https://angelruiz.world',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://angelruiz.world/particulares',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angelruiz.world/particulares/bodas',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/particulares/eventos',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/empresas',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angelruiz.world/blog',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angelruiz.world/valoraciones',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/sobre-mi',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://angelruiz.world/galeria',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...blogUrls, ...locationUrls];
}
