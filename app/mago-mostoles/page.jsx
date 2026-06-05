import { locations } from '@/lib/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const location = locations.find(l => l.slug === 'mostoles');

export const metadata = {
  title: {
    absolute: location.meta_title || `${location.title} | Ángel Ruiz | Mago e Ilusionista`
  },
  description: location.description,
  alternates: {
    canonical: `/mago-mostoles`,
  },
  keywords: location.keywords,
};

export default function Page() {
  return <LocationPageTemplate location={location} allLocations={locations} />;
}
