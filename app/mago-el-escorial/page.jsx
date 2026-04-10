import { locations } from '@/lib/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const location = locations.find(l => l.slug === 'el-escorial');

export const metadata = {
  title: {
    absolute: location.meta_title || `${location.title} | Angel Ruiz Ilusionista`
  },
  description: location.description,
  alternates: {
    canonical: `/mago-el-escorial`,
  },
  keywords: location.keywords,
};

export default function Page() {
  return <LocationPageTemplate location={location} allLocations={locations} />;
}
