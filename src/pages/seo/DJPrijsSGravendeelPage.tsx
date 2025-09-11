import React from 'react';
import { Euro, MapPin, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, TreePine, Clock } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJPrijsSGravendeelPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Prijs 's-Gravendeel – Transparante tarieven vanaf €350";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ prijs \'s-Gravendeel? Transparante tarieven vanaf €350. Eerlijk & waar voor je geld. App voor prijsindicatie.');
    }
    
    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kevinfroger.nl/dj-prijs-s-gravendeel/');
    if (!document.head.contains(canonical)) document.head.appendChild(canonical);
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "serviceType": "DJ Prijs",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "'s-Gravendeel",
          "description": "Transparante DJ prijzen en tarieven in 's-Gravendeel"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://kevinfroger.nl/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "DJ 's-Gravendeel",
              "item": "https://kevinfroger.nl/dj-s-gravendeel/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "DJ Prijs 's-Gravendeel",
              "item": "https://kevinfroger.nl/dj-prijs-s-gravendeel/"
            }
          ]
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const priceFactors = [
    {
      title: "Duur Event",
      description: "Van 4 uur tot complete dagbegeleiding",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Locatie",
      description: "Afstand en toegankelijkheid van de venue",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: "Techniek",
      description: "Gewenste geluids- en lichtapparatuur",
      icon: <Music className="w-8 h-8" />
    },
    {
      title: "Extra Services",
      description: "MC services, speciale effecten, etc.",
      icon: <Star className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-white">
      {/* NoScript Fallback */}
      <noscript>
        <div className="bg-green-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold mb-2">DJ Prijs 's-Gravendeel - Kevin Froger</h1>
          <p className="mb-4">Transparante DJ prijzen in 's-Gravendeel, hart van de Hoeksche Waard.</p>
          <a href="https://wa.me/31645251333" className="bg-white text-green-600 px-6 py-3 rounded-full font-bold">
            WhatsApp Contact
          </a>
        </div>
      </noscript>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-blue-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Euro className="w-10 h-10 text-green-400" />
              <span className="text-green-400 font-black text-xl tracking-wide">DJ PRIJS 'S-GRAVENDEEL</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ PRIJS
              <span className="block text-green-400">'S-GRAVENDEEL</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-green-100 leading-relaxed max-w-4xl mx-auto">
              DJ prijs 's-gravendeel? Transparante tarieven vanaf €350. Eerlijk & waar voor je geld. 
              App voor prijsindicatie in het hart van de Hoeksche Waard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/31645251333"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 min-h-[48px] min-w-[48px]"
                aria-label="WhatsApp contact DJ prijs 's-Gravendeel"
                title="App voor prijsindicatie"
              >
                <Euro className="w-6 h-6 inline-block mr-3" />
                APP VOOR PRIJSINDICATIE
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+31645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-green-900 transition-all duration-300 min-h-[48px] min-w-[48px]"
                aria-label="Bel DJ Kevin Froger voor prijzen"
                title="Direct bellen"
              >
                06 45 25 13 33
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prijsfactoren Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PRIJS
              <span className="block text-green-500">FACTOREN</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priceFactors.map((factor, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {factor.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{factor.title}</h3>
                <p className="text-gray-600 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparantie Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              TRANSPARANT &
              <span className="block text-green-500">WAAR VOOR JE GELD</span>
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              Geen verborgen kosten, geen verrassingen. Transparante prijzen vanaf €350 
              voor complete DJ services in 's-Gravendeel. Je krijgt waar je voor betaalt.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Main & Related Links */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
              ALLE DJ SERVICES 'S-GRAVENDEEL
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/dj-s-gravendeel/" className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <TreePine className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-600 transition-colors">
                DJ 's-Gravendeel
              </h3>
              <p className="text-sm text-gray-600 mt-2">Alle services</p>
            </a>
            <a href="/dj-bruiloft-s-gravendeel/" className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-black text-gray-900 group-hover:text-pink-600 transition-colors">
                Bruiloft DJ
              </h3>
              <p className="text-sm text-gray-600 mt-2">Bruiloften</p>
            </a>
            <a href="/dj-verjaardag-s-gravendeel/" className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-black text-gray-900 group-hover:text-green-600 transition-colors">
                Verjaardag DJ
              </h3>
              <p className="text-sm text-gray-600 mt-2">Verjaardagsfeesten</p>
            </a>
            <a href="/dj-bedrijfsfeest-s-gravendeel/" className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Building className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                Bedrijfsfeest DJ
              </h3>
              <p className="text-sm text-gray-600 mt-2">Corporate events</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VRAAG JOUW
              <span className="block text-green-500">PRIJSINDICATIE</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Transparante prijzen voor DJ services in 's-Gravendeel
            </p>
          </div>
          <ContactForm eventType="DJ Prijs 's-Gravendeel" />
        </div>
      </section>
    </div>
  );
};

export default DJPrijsSGravendeelPage;