import { locations } from '@/lib/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const location = locations.find(l => l.slug === 'alcorcon');

export const metadata = {
  title: {
    absolute: location.meta_title || `${location.title} | Ángel Ruiz | Mago e Ilusionista`
  },
  description: location.description,
  alternates: {
    canonical: 'https://angelruiz.world/mago-alcorcon',
  },
  keywords: location.keywords,
  openGraph: {
    title: location.meta_title || location.title,
    description: location.description,
    url: `https://angelruiz.world/mago-${location.slug}`,
    siteName: 'Ángel Ruiz | Mago e Ilusionista',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: location.meta_title || location.title,
    description: location.description,
  },
};


export default function Page() {
  return <LocationPageTemplate location={location} allLocations={locations} />;
}
