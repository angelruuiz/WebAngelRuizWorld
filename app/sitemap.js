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
    images: [
      post.image 
        ? (post.image.startsWith('http') ? post.image : `https://angelruiz.world${post.image}`)
        : 'https://angelruiz.world/images/foto-bio.webp'
    ],
  }));

  const locationUrls = locations.map((location) => ({
    url: `https://angelruiz.world/mago-${location.slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.85,
    images: ['https://angelruiz.world/images/foto-bio.webp'],
  }));

  const staticUrls = [
    {
      url: 'https://angelruiz.world',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://angelruiz.world/images/foto-bio.webp',
        'https://angelruiz.world/images/hero-angel-ruiz-2026.webp'
      ],
    },
    {
      url: 'https://angelruiz.world/mago-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-close-up-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: ['https://angelruiz.world/images/ilusionista-madrid-closeup.webp'],
    },
    {
      url: 'https://angelruiz.world/contratar-mago-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/mago-madrid-evento-privado.webp'],
    },
    {
      url: 'https://angelruiz.world/dossier',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/blog/mago-conferenciante-empresas-madrid',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: ['https://angelruiz.world/images/angel-ruiz-mago-corporativo.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/bodas',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://angelruiz.world/images/boda-magia-madrid.webp',
        'https://angelruiz.world/images/mago-bodas-cocktail-exterior-madrid.webp'
      ],
    },
    {
      url: 'https://angelruiz.world/particulares/comuniones',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/magia-comuniones-madrid.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/eventos',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/fiesta-eventos-madrid.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/fiestas-cumpleanos-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/mago-madrid-evento-privado.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://angelruiz.world/images/evento-angel-ruiz-magia.webp',
        'https://angelruiz.world/images/magia-corporativa-angel-ruiz.webp'
      ],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/evento-angel-ruiz-magia.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-ferias-congresos-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/evento-empresa-mago-angel-ruiz.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-team-building-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/magia-corporativa-angel-ruiz.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-conferenciante-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/angel-ruiz-mago-corporativo.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-para-restaurantes-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/ilusionista-madrid-closeup.webp'],
    },
    {
      url: 'https://angelruiz.world/blog',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/valoraciones',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/sobre-mi',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-sierra-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/galeria',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-alcorcon',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-leganes',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-mostoles',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-getafe',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-alcobendas',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/foto-bio.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/despedidas-soltera-madrid',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/fiesta-eventos-madrid.webp'],
    },
  ];

  // Avoid duplicates between locationUrls and staticUrls
  const staticUrlStrings = staticUrls.map(u => u.url);
  const filteredLocationUrls = locationUrls.filter(u => !staticUrlStrings.includes(u.url));

  return [...staticUrls, ...blogUrls, ...filteredLocationUrls];
}
