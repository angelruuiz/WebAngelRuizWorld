import { locations } from '@/lib/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const location = locations.find(l => l.slug === 'leganes');

export const metadata = {
  title: {
    absolute: location.meta_title || `${location.title} | Ángel Ruiz | Mago e Ilusionista`
  },
  description: location.description,
  alternates: {
    canonical: 'https://angelruiz.world/mago-leganes',
  },
  keywords: location.keywords,
  openGraph: {
    title: location.meta_title || location.title,
    description: location.description,
    url: `https://angelruiz.world/mago-${location.slug}`,
    siteName: 'Ángel Ruiz | Mago e Ilusionista',
    locale: 'es_ES',
    type: 'website',
    images: [{
      url: location.images && location.images[0] ? `https://angelruiz.world${location.images[0]}` : 'https://angelruiz.world/images/foto-bio.webp',
      width: 1200,
      height: 630,
      alt: `${location.title} - Ángel Ruiz Mago e Ilusionista`,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: location.meta_title || location.title,
    description: location.description,
    images: [
      location.images && location.images[0] ? `https://angelruiz.world${location.images[0]}` : 'https://angelruiz.world/images/foto-bio.webp'
    ],
  },
};


export default function Page() {
  return <LocationPageTemplate location={location} allLocations={locations} />;
}
