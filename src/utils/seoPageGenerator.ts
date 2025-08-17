import { dutchCities, eventTypes, serviceTypes } from '../data/dutchCities';

export const generateSEORoutes = () => {
  const routes: Array<{ path: string; component: string; city: string; eventType?: string; serviceType?: string }> = [];

  // Generate routes for all cities
  dutchCities.forEach(city => {
    const citySlug = city.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
    
    // Basic city DJ page
    routes.push({
      path: `/dj-${citySlug}`,
      component: 'DynamicSEOGenerator',
      city: citySlug
    });

    // City + event type combinations
    eventTypes.forEach(event => {
      routes.push({
        path: `/dj-${event.name}-${citySlug}`,
        component: 'DynamicSEOGenerator',
        city: citySlug,
        eventType: event.name
      });
      
      routes.push({
        path: `/${event.name}-dj-${citySlug}`,
        component: 'DynamicSEOGenerator',
        city: citySlug,
        eventType: event.name
      });
    });

    // City + service type combinations
    serviceTypes.forEach(service => {
      const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
      routes.push({
        path: `/${serviceSlug}-${citySlug}`,
        component: 'DynamicSEOGenerator',
        city: citySlug,
        serviceType: service
      });
    });
  });

  return routes;
};

export const generateSEOContent = (city: string, eventType?: string, serviceType?: string) => {
  const cityData = dutchCities.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === city.toLowerCase());
  
  if (!cityData) return null;

  const title = eventType 
    ? `DJ ${eventType} ${cityData.name} - Kevin Froger | ${eventType.charAt(0).toUpperCase() + eventType.slice(1)} DJ`
    : `DJ ${cityData.name} - Kevin Froger | Professionele DJ Services`;

  const description = eventType
    ? `Professionele ${eventType} DJ in ${cityData.name}. DJ Kevin Froger verzorgt ${eventType} evenementen in ${cityData.name}, ${cityData.province}. Boek nu!`
    : `Professionele DJ services in ${cityData.name}, ${cityData.province}. DJ Kevin Froger voor bruiloften, bedrijfsfeesten en festivals. 15+ jaar ervaring.`;

  const keywords = [
    `DJ ${cityData.name}`,
    `${cityData.name} DJ`,
    `DJ ${cityData.province}`,
    eventType ? `${eventType} DJ ${cityData.name}` : `bruiloft DJ ${cityData.name}`,
    eventType ? `DJ ${eventType} ${cityData.name}` : `bedrijfsfeest DJ ${cityData.name}`,
    `professionele DJ ${cityData.name}`,
    `DJ boeken ${cityData.name}`,
    `DJ huren ${cityData.name}`
  ].join(', ');

  return { title, description, keywords };
};