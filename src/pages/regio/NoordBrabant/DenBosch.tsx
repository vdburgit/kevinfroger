import React from 'react';
import { MapPin, Calendar, Users, Award, ArrowRight, Heart, Building, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';

const DenBosch = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Den Bosch | DJ Kevin Froger Hoofdstad Brabant | 80+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Den Bosch ✨ 80+ events in de hoofdstad van Brabant. DJ Kevin Froger van centrum tot buitenwijken. Professionele DJ services Den Bosch. Boek nu!');
    }
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Den Bosch | DJ Kevin Froger Hoofdstad Brabant');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Den Bosch ✨ 80+ events in de hoofdstad van Brabant. DJ Kevin Froger van centrum tot buitenwijken. Professionele DJ services Den Bosch.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/noord-brabant/den-bosch');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'DJ Kevin Froger');
    if (!document.head.contains(ogSiteName)) document.head.appendChild(ogSiteName);
    
    // Add structured data for Den Bosch page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://kevinfroger.nl/"},
            {"@type": "ListItem", "position": 2, "name": "Regio", "item": "https://kevinfroger.nl/regio"},
            {"@type": "ListItem", "position": 3, "name": "Noord-Brabant", "item": "https://kevinfroger.nl/regio/noord-brabant"},
            {"@type": "ListItem", "position": 4, "name": "Den Bosch", "item": "https://kevinfroger.nl/regio/noord-brabant/den-bosch"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Den Bosch - DJ Kevin Froger",
          "description": "Professionele DJ services in Den Bosch en alle wijken van de hoofdstad van Brabant",
          "url": "https://kevinfroger.nl/regio/noord-brabant/den-bosch",
          "telephone": "+31645251333",
          "areaServed": "Den Bosch",
          "sameAs": [
            "https://www.instagram.com/djkevinfroger/",
            "https://www.linkedin.com/in/kevin-froger-b23aa263/",
            "https://www.facebook.com/KevinFroger.nl",
            "https://wa.me/31645251333"
          ]
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      title: "Bruiloften Den Bosch",
      description: "Romantische bruiloft DJ in de hoofdstad van Brabant",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in provinciale hoofdstad",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Festival DJ Den Bosch",
      description: "Grote evenementen in de Bossche stad",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    },
    {
      title: "Privé DJ Den Bosch",
      description: "Privé feesten in alle wijken",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const districts = [
    "Den Bosch Centrum", "Maaspoort", "Rosmalen", "Engelen", "Empel",
    "Nuland", "Vinkel", "Geffen", "Hintham", "Kruisstraat"
  ];

  const venues = [
    "Sint-Janskathedraal", "Noordbrabants Museum", "Theater aan de Parade", "Jeroen Bosch Ziekenhuis",
    "Autotron", "Design Museum", "Stedelijk Gymnasium", "Avans Hogeschool",
    "Bossche Broek", "Zuiderpark", "Paleiskwartier", "De Vliert"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Den Bosch", icon: <Award className="w-8 h-8" /> },
    { number: "80+", label: "Events in Den Bosch", icon: <Calendar className="w-8 h-8" /> },
    { number: "50+", label: "Bossche Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "30+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/regio" className="text-gray-500 hover:text-gray-700">Regio</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/regio/noord-brabant" className="text-gray-500 hover:text-gray-700">Noord-Brabant</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Den Bosch</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Crown className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">DEN BOSCH</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">DEN BOSCH</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Den Bosch. Van het centrum tot buitenwijken, 
              van bruiloften in de hoofdstad van Brabant tot bedrijfsfeesten - altijd de perfecte sfeer in de Bossche stad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN DEN BOSCH
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-semibold">{stat.label}</div>
                </div>
              ))}
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
              <span className="block text-blue-700">DEN BOSCH</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de hoofdstad van Brabant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts & Venues Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content - Hidden but accessible to search engines */}
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Den Bosch - Professionele DJ Services Hoofdstad Brabant</h2>
            <p>Zoek je een DJ in Den Bosch? DJ Kevin Froger verzorgt professionele DJ services in de hoofdstad van Noord-Brabant. Van bruiloften in de Sint-Janskathedraal tot bedrijfsfeesten - altijd de perfecte sfeer in de Bossche stad.</p>
            
            <h3>DJ Den Bosch - Alle Wijken</h3>
            <p>Kevin is actief in heel Den Bosch: DJ Den Bosch Centrum, DJ Maaspoort, DJ Rosmalen, DJ Engelen, DJ Empel, DJ Nuland, DJ Vinkel, DJ Geffen, DJ Hintham, DJ Kruisstraat.</p>
            
            <h3>Bruiloft DJ Den Bosch</h3>
            <p>Voor bruiloften in Den Bosch heeft Kevin meer dan 50 succesvolle events begeleid. Van Sint-Janskathedraal tot Noordbrabants Museum, van Theater aan de Parade tot moderne venues - Kevin maakt jullie bruiloft onvergetelijk in de hoofdstad van Brabant.</p>
            
            <h3>Bedrijfsfeest DJ Den Bosch</h3>
            <p>Den Bosch is de hoofdstad van Noord-Brabant. Kevin verzorgt bedrijfsfeesten voor provinciale instellingen, lokale ondernemingen en heeft ervaring met corporate events in de Bossche stad.</p>
            
            <h3>Festival DJ Den Bosch</h3>
            <p>Van Jazz in Duketown tot lokale festivals - Kevin heeft ervaring met alle soorten festivals in Den Bosch. Altijd aangepast aan het Brabantse publiek.</p>
            
            <h3>DJ Sint-Janskathedraal</h3>
            <p>De Sint-Janskathedraal is een iconische locatie in Den Bosch. Kevin heeft ervaring met events in deze historische setting en andere religieuze locaties.</p>
            
            <h3>DJ Boeken Den Bosch</h3>
            <p>Wil je een DJ boeken in Den Bosch? Kevin Froger kent alle locaties van het centrum tot Rosmalen. Professionele DJ services voor de hoofdstad van Brabant.</p>
            
            <h3>Populaire DJ Services Den Bosch</h3>
            <p>DJ Den Bosch centrum, DJ Rosmalen, bruiloft DJ Den Bosch, bedrijfsfeest DJ Den Bosch, festival DJ Den Bosch, kathedraal DJ, Bossche DJ, professionele DJ Den Bosch.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE WIJKEN
                <span className="block text-orange-500">DEN BOSCH</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {districts.map((district, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <h3 className="text-sm font-black text-gray-900">{district}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                BRABANTSE
                <span className="block text-blue-700">LOCATIES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <Crown className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <h3 className="text-sm font-black text-gray-900">{venue}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-blue-700">IN DEN BOSCH</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Den Bosch onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Den Bosch evenement" />
        </div>
      </section>
    </div>
  );
};

export default DenBosch;