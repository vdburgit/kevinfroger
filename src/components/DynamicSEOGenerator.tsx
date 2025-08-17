import React from 'react';
import { dutchCities, eventTypes, serviceTypes } from '../data/dutchCities';
import { MapPin, Heart, Building, Gift, Zap, Award, TreePine, Sparkles, Crown, Star } from 'lucide-react';

interface DynamicSEOPageProps {
  city: string;
  eventType?: string;
  serviceType?: string;
}

const DynamicSEOGenerator: React.FC<DynamicSEOPageProps> = ({ city, eventType, serviceType }) => {
  const cityData = dutchCities.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === city.toLowerCase());
  const eventData = eventTypes.find(e => e.name === eventType);
  
  if (!cityData) {
    return <div>Stad niet gevonden</div>;
  }

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Heart: <Heart className="w-8 h-8" />,
      Building: <Building className="w-8 h-8" />,
      Gift: <Gift className="w-8 h-8" />,
      Zap: <Zap className="w-8 h-8" />,
      Award: <Award className="w-8 h-8" />,
      TreePine: <TreePine className="w-8 h-8" />,
      Sparkles: <Sparkles className="w-8 h-8" />,
      Crown: <Crown className="w-8 h-8" />,
      Star: <Star className="w-8 h-8" />
    };
    return icons[iconName] || <MapPin className="w-8 h-8" />;
  };

  const generateTitle = () => {
    if (eventType && serviceType) {
      return `${serviceType} ${eventType} ${cityData.name}`;
    } else if (eventType) {
      return `DJ ${eventType} ${cityData.name}`;
    } else if (serviceType) {
      return `${serviceType} ${cityData.name}`;
    }
    return `DJ ${cityData.name}`;
  };

  const generateDescription = () => {
    const baseDesc = `Professionele DJ services in ${cityData.name}, ${cityData.province}`;
    if (eventType) {
      return `${baseDesc}. Specialist in ${eventType} DJ services voor ${cityData.name}.`;
    }
    return `${baseDesc}. Van bruiloften tot bedrijfsfeesten - altijd de perfecte sfeer.`;
  };

  const generateKeywords = () => {
    const base = [`DJ ${cityData.name}`, `${cityData.name} DJ`, `DJ ${cityData.province}`];
    if (eventType) {
      base.push(`${eventType} DJ ${cityData.name}`, `DJ ${eventType} ${cityData.name}`);
    }
    return base.join(', ');
  };

  return (
    <div className="bg-white">
      {/* Dynamic SEO Head */}
      <head>
        <title>{generateTitle()} - DJ Kevin Froger</title>
        <meta name="description" content={generateDescription()} />
        <meta name="keywords" content={generateKeywords()} />
      </head>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <MapPin className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">{cityData.name.toUpperCase()}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">{cityData.name.toUpperCase()}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in {cityData.name}. {eventType ? `Specialist in ${eventType} evenementen` : 'Van bruiloften tot bedrijfsfeesten'} - 
              altijd de perfecte sfeer in {cityData.type === 'grote stad' ? 'de' : 'het'} {cityData.type} van {cityData.province}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                BOEK NU IN {cityData.name.toUpperCase()}
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ SERVICES
              <span className="block text-blue-700">{cityData.name.toUpperCase()}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.slice(0, 4).map((event, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {getIcon(event.icon)}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">
                  {event.name.charAt(0).toUpperCase() + event.name.slice(1)} {cityData.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{event.description} in {cityData.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>DJ {cityData.name} - Professionele DJ Services {cityData.province}</h2>
            <p>
              Zoek je een DJ in {cityData.name}? DJ Kevin Froger verzorgt professionele DJ services in {cityData.name}, {cityData.province}. 
              Van bruiloften tot bedrijfsfeesten, van festivals tot privé feesten - altijd de perfecte sfeer in {cityData.name}.
            </p>
            
            <h3>DJ {cityData.name} - Alle Evenementen</h3>
            <p>
              Kevin is actief in heel {cityData.name} en omgeving. {eventType ? `Specialist in ${eventType} evenementen` : 'Van intieme bruiloften tot grote festivals'} - 
              Kevin zorgt voor de perfecte muzikale begeleiding in {cityData.name}.
            </p>
            
            <h3>Bruiloft DJ {cityData.name}</h3>
            <p>
              Voor bruiloften in {cityData.name} biedt Kevin complete muzikale begeleiding. Van ceremonie tot feestavond - 
              Kevin maakt jullie bruiloft onvergetelijk in {cityData.name}.
            </p>
            
            <h3>Bedrijfsfeest DJ {cityData.name}</h3>
            <p>
              Voor bedrijfsfeesten in {cityData.name} verzorgt Kevin professionele DJ services. 
              Van netwerkborrels tot personeelsfeesten - altijd representatief en stijlvol in {cityData.name}.
            </p>
            
            <h3>DJ Boeken {cityData.name}</h3>
            <p>
              Wil je een DJ boeken in {cityData.name}? Kevin Froger is beschikbaar voor alle evenementen in {cityData.name} en omgeving. 
              Neem contact op voor een vrijblijvende offerte.
            </p>
            
            <h3>Populaire DJ Services {cityData.name}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {serviceTypes.map((service, index) => (
                <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                  {service} {cityData.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-blue-700">IN {cityData.name.toUpperCase()}</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in {cityData.name} onvergetelijk te maken?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicSEOGenerator;