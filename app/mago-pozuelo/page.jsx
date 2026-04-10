import { locations } from '@/lib/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const location = locations.find(l => l.slug === 'pozuelo');

export const metadata = {
  title: {
    absolute: location.meta_title || `${location.title} | Ángel Ruiz | Mago e Ilusionista`
  },
  description: location.description,
  alternates: {
    canonical: `/mago-pozuelo`,
  },
  keywords: location.keywords,
};

export default function Page() {
  return <LocationPageTemplate location={location} allLocations={locations} />;
}
