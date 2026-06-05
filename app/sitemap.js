import { getSortedPostsData } from '@/lib/blog';
import { locations } from '@/lib/locations';

export default function sitemap() {
  const posts = getSortedPostsData();
  
  const lastMod = new Date();
  
  const blogUrls = posts.map((post) => ({
    url: `https://angelruiz.world/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastMod,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const locationUrls = locations.map((location) => ({
    url: `https://angelruiz.world/mago-${location.slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const staticUrls = [
    {
      url: 'https://angelruiz.world',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://angelruiz.world/mago-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://angelruiz.world/mago-close-up-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://angelruiz.world/contratar-mago-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://angelruiz.world/particulares/bodas',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://angelruiz.world/particulares/comuniones',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/particulares/eventos',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/particulares/fiestas-cumpleanos-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/empresas',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/empresas/mago-ferias-congresos-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/empresas/mago-team-building-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/empresas/mago-conferenciante-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/empresas/mago-para-restaurantes-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/blog',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/valoraciones',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/sobre-mi',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://angelruiz.world/mago-sierra-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://angelruiz.world/galeria',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://angelruiz.world/mago-alcorcon',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/mago-leganes',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/mago-mostoles',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/mago-getafe',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/mago-alcobendas',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://angelruiz.world/particulares/despedidas-soltera-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...blogUrls, ...locationUrls];
}
