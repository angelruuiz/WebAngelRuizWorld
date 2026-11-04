import { getSortedPostsData } from '@/lib/blog';
import { locations } from '@/lib/locations';

const pageLastModifiedDates = {
  'https://angelruiz.world': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/mago-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/mago-close-up-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/mago-cartomagia-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/contratar-mago-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/contacto': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/dossier': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/blog/mago-conferenciante-empresas-madrid': new Date('2026-10-26T14:23:51+01:00'),
  'https://angelruiz.world/particulares/bodas': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/particulares/comuniones': new Date('2026-10-26T14:23:51+01:00'),
  'https://angelruiz.world/particulares/eventos': new Date('2026-10-26T14:23:51+01:00'),
  'https://angelruiz.world/particulares/fiestas-cumpleanos-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/empresas': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/empresas/mago-cenas-empresa-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/empresas/mago-ferias-congresos-madrid': new Date('2026-11-02T00:36:53+01:00'),
  'https://angelruiz.world/empresas/mago-team-building-madrid': new Date('2026-11-02T00:36:53+01:00'),
  'https://angelruiz.world/empresas/mago-conferenciante-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/empresas/mago-para-restaurantes-madrid': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/blog': new Date('2026-10-26T14:23:51+01:00'),
  'https://angelruiz.world/valoraciones': new Date('2026-11-04T22:15:48+01:00'),
  'https://angelruiz.world/sobre-mi': new Date('2026-10-26T14:23:51+01:00'),
  'https://angelruiz.world/mago-sierra-madrid': new Date('2026-10-26T14:23:51+01:00'),
  'https://angelruiz.world/galeria': new Date('2026-10-19T19:34:15+02:00'),
  'https://angelruiz.world/mago-alcorcon': new Date('2026-09-03T04:51:55+02:00'),
  'https://angelruiz.world/mago-leganes': new Date('2026-09-03T04:51:55+02:00'),
  'https://angelruiz.world/mago-mostoles': new Date('2026-09-03T04:51:55+02:00'),
  'https://angelruiz.world/mago-getafe': new Date('2026-09-03T04:51:55+02:00'),
  'https://angelruiz.world/mago-alcobendas': new Date('2026-09-03T04:51:55+02:00'),
  'https://angelruiz.world/particulares/despedidas-soltera-madrid': new Date('2026-10-26T14:23:51+01:00'),
  'https://angelruiz.world/privacidad': new Date('2026-09-14T18:33:43+02:00'),
  'https://angelruiz.world/cookies': new Date('2026-09-19T19:50:21+02:00'),
  'https://angelruiz.world/aviso-legal': new Date('2026-09-14T18:33:43+02:00'),
};

export default function sitemap() {
  const posts = getSortedPostsData();
  const defaultHistoricalDate = new Date('2026-09-03T04:51:55+02:00');
  
  const blogUrls = posts.map((post) => ({
    url: `https://angelruiz.world/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : defaultHistoricalDate,
    changeFrequency: 'weekly',
    priority: 0.8,
    images: [
      post.image 
        ? (post.image.startsWith('http') ? post.image : `https://angelruiz.world${post.image}`)
        : 'https://angelruiz.world/images/foto-bio.webp'
    ],
  }));

  const locationUrls = locations.map((location) => {
    const locUrl = `https://angelruiz.world/mago-${location.slug}`;
    return {
      url: locUrl,
      lastModified: pageLastModifiedDates[locUrl] || defaultHistoricalDate,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    };
  });

  const staticUrls = [
    {
      url: 'https://angelruiz.world',
      lastModified: pageLastModifiedDates['https://angelruiz.world'],
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://angelruiz.world/images/foto-bio.webp',
        'https://angelruiz.world/images/hero-angel-ruiz-2026.webp'
      ],
    },
    {
      url: 'https://angelruiz.world/mago-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-madrid'],
      changeFrequency: 'weekly',
      priority: 1.0,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-close-up-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-close-up-madrid'],
      changeFrequency: 'weekly',
      priority: 0.95,
      images: ['https://angelruiz.world/images/ilusionista-madrid-closeup.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-cartomagia-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-cartomagia-madrid'],
      changeFrequency: 'weekly',
      priority: 0.95,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/contratar-mago-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/contratar-mago-madrid'],
      changeFrequency: 'weekly',
      priority: 1.0,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/contacto',
      lastModified: pageLastModifiedDates['https://angelruiz.world/contacto'],
      changeFrequency: 'monthly',
      priority: 0.75,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/dossier',
      lastModified: pageLastModifiedDates['https://angelruiz.world/dossier'],
      changeFrequency: 'monthly',
      priority: 0.6,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/blog/mago-conferenciante-empresas-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/blog/mago-conferenciante-empresas-madrid'],
      changeFrequency: 'monthly',
      priority: 0.8,
      images: ['https://angelruiz.world/images/angel-ruiz-mago-corporativo.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/bodas',
      lastModified: pageLastModifiedDates['https://angelruiz.world/particulares/bodas'],
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://angelruiz.world/images/boda-magia-madrid.webp',
        'https://angelruiz.world/images/mago-bodas-cocktail-exterior-madrid.webp'
      ],
    },
    {
      url: 'https://angelruiz.world/particulares/comuniones',
      lastModified: pageLastModifiedDates['https://angelruiz.world/particulares/comuniones'],
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/magia-comuniones-madrid.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/eventos',
      lastModified: pageLastModifiedDates['https://angelruiz.world/particulares/eventos'],
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/fiesta-eventos-madrid.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/fiestas-cumpleanos-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/particulares/fiestas-cumpleanos-madrid'],
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/mago-madrid-evento-privado.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas',
      lastModified: pageLastModifiedDates['https://angelruiz.world/empresas'],
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://angelruiz.world/images/evento-angel-ruiz-magia.webp',
        'https://angelruiz.world/images/magia-corporativa-angel-ruiz.webp'
      ],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-cenas-empresa-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/empresas/mago-cenas-empresa-madrid'],
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/evento-angel-ruiz-magia.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-ferias-congresos-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/empresas/mago-ferias-congresos-madrid'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/evento-empresa-mago-angel-ruiz.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-team-building-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/empresas/mago-team-building-madrid'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/magia-corporativa-angel-ruiz.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-conferenciante-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/empresas/mago-conferenciante-madrid'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/angel-ruiz-mago-corporativo.webp'],
    },
    {
      url: 'https://angelruiz.world/empresas/mago-para-restaurantes-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/empresas/mago-para-restaurantes-madrid'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/ilusionista-madrid-closeup.webp'],
    },
    {
      url: 'https://angelruiz.world/blog',
      lastModified: pageLastModifiedDates['https://angelruiz.world/blog'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/valoraciones',
      lastModified: pageLastModifiedDates['https://angelruiz.world/valoraciones'],
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/sobre-mi',
      lastModified: pageLastModifiedDates['https://angelruiz.world/sobre-mi'],
      changeFrequency: 'monthly',
      priority: 0.7,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-sierra-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-sierra-madrid'],
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/galeria',
      lastModified: pageLastModifiedDates['https://angelruiz.world/galeria'],
      changeFrequency: 'monthly',
      priority: 0.8,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-alcorcon',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-alcorcon'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-leganes',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-leganes'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-mostoles',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-mostoles'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-getafe',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-getafe'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/mago-alcobendas',
      lastModified: pageLastModifiedDates['https://angelruiz.world/mago-alcobendas'],
      changeFrequency: 'weekly',
      priority: 0.85,
      images: ['https://angelruiz.world/images/og-blog.webp'],
    },
    {
      url: 'https://angelruiz.world/particulares/despedidas-soltera-madrid',
      lastModified: pageLastModifiedDates['https://angelruiz.world/particulares/despedidas-soltera-madrid'],
      changeFrequency: 'weekly',
      priority: 0.9,
      images: ['https://angelruiz.world/images/fiesta-eventos-madrid.webp'],
    },
    {
      url: 'https://angelruiz.world/privacidad',
      lastModified: pageLastModifiedDates['https://angelruiz.world/privacidad'],
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://angelruiz.world/cookies',
      lastModified: pageLastModifiedDates['https://angelruiz.world/cookies'],
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://angelruiz.world/aviso-legal',
      lastModified: pageLastModifiedDates['https://angelruiz.world/aviso-legal'],
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Avoid duplicates between locationUrls and staticUrls
  const staticUrlStrings = staticUrls.map(u => u.url);
  const filteredLocationUrls = locationUrls.filter(u => !staticUrlStrings.includes(u.url));

  return [...staticUrls, ...blogUrls, ...filteredLocationUrls];
}
