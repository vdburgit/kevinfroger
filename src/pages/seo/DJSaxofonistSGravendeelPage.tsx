import React from 'react';
import { Music, MapPin, Calendar, Users, Award, CheckCircle, ArrowRight, Star, Heart, Building, TreePine, Mic } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJSaxofonistSGravendeelPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ + Saxofonist 's-Gravendeel – Live accenten met sax";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ + saxofonist \'s-Gravendeel? Live-accenten met sax. Complete show, eerlijk & transparant. App voor beschikbaarheid.');
    }
    
    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kevinfroger.nl/dj-saxofonist-s-gravendeel/');
    if (!document.head.contains(canonical)) document.head.appendChild(canonical);
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "serviceType": "DJ + Saxofonist",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "'s-Gravendeel",
          "description": "DJ met live saxofonist services in 's-Gravendeel"
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
              "name": "DJ + Saxofonist 's-Gravendeel",
              "item": "https://kevinfroger.nl/dj-saxofonist-s-gravendeel/"
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

  const saxMoments = [
    {
      title: "Ceremonie Accenten",
      description: "Live saxofoon tijdens belangrijke momenten",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Diner Begeleiding",
      description: "Sfeervolle live muziek tijdens het diner",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Eerste Dans",
      description: "Live saxofoon bij jullie eerste dans",
      icon: <Music className="w-8 h-8" />
    },
    {
      title: "Feest Highlights",
      description: "Live accenten tijdens de feestavond",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const faq = [
    {
      question: "Wanneer zet je de saxofonist in tijdens een event?",
      answer: "De saxofonist speelt live accenten tijdens belangrijke momenten zoals ceremonie, eerste dans en hoogtepunten van de feestavond."
    },
    {
      question: "Hoe combineer je DJ en saxofoon?",
      answer: "De saxofonist speelt live mee met de DJ tracks voor unieke live accenten en extra sfeer."
    },
    {
      question: "Wat kost DJ + saxofonist in 's-Gravendeel?",
      answer: "Transparante prijzen op aanvraag. De exacte prijs hangt af van duur en gewenste inzet van de saxofonist."
    }
  ];

  return (
    <div className="bg-white">
      {/* NoScript Fallback */}
      <noscript>
        <div className="bg-purple-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold mb-2">DJ + Saxofonist 's-Gravendeel - Kevin Froger</h1>
          <p className="mb-4">DJ met live saxofoon in 's-Gravendeel, hart van de Hoeksche Waard.</p>
          <a href="https://wa.me/31645251333" className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold">
            WhatsApp Contact
          </a>
        </div>
      </noscript>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Music className="w-10 h-10 text-purple-400" />
              <span className="text-purple-400 font-black text-xl tracking-wide">DJ + SAXOFONIST 'S-GRAVENDEEL</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ + SAXOFONIST
              <span className="block text-purple-400">'S-GRAVENDEEL</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-purple-100 leading-relaxed max-w-4xl mx-auto">
              DJ + saxofonist 's-gravendeel? Live-accenten met sax. Complete show, eerlijk & transparant. 
              App voor beschikbaarheid in het hart van de Hoeksche Waard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/31645251333"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 min-h-[48px] min-w-[48px]"
                aria-label="WhatsApp contact DJ + saxofonist 's-Gravendeel"
                title="App voor beschikbaarheid"
              >
                <Music className="w-6 h-6 inline-block mr-3" />
                APP VOOR BESCHIKBAARHEID
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+31645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-purple-900 transition-all duration-300 min-h-[48px] min-w-[48px]"
                aria-label="Bel DJ + saxofonist Kevin Froger"
                title="Direct bellen"
              >
                06 45 25 13 33
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sax Momenten Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              LIVE SAX
              <span className="block text-purple-500">MOMENTEN</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saxMoments.map((moment, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {moment.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{moment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              SAX FAQ
              <span className="block text-purple-500">'S-GRAVENDEEL</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
                    {index + 1}
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">{item.answer}</p>
              </div>
            ))}
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
      <section className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ +
              <span className="block text-purple-500">SAXOFONIST</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Live muziek combinatie voor jouw evenement in 's-Gravendeel
            </p>
          </div>
          <ContactForm eventType="DJ + Saxofonist 's-Gravendeel" />
        </div>
      </section>
    </div>
  );
};

export default DJSaxofonistSGravendeelPage;