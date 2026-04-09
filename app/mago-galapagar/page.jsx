import { locations } from '@/lib/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const location = locations.find(l => l.slug === 'galapagar');

export const metadata = {
  title: `${location.title} | Angel Ruiz Ilusionista`,
  description: location.description,
  alternates: {
    canonical: `/mago-galapagar`,
  },
  keywords: location.keywords,
};

export default function Page() {
  return <LocationPageTemplate location={location} allLocations={locations} />;
}
