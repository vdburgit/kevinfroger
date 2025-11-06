import React from 'react';
import { Zap, Users, Music, Clock, CheckCircle, Play, Volume2, Mic, Radio, Speaker, Disc } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const FestivalPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Festival DJ Nederland | DJ Kevin Froger | Feest DJ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Festival DJ Nederland - DJ Kevin Froger feest DJ. 50+ festivals, high-energy power sets. Crowd control specialist. Boek festival DJ nu!');
    }
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Festival DJ Nederland | DJ Kevin Froger');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Festival DJ Nederland. DJ Kevin Froger feest DJ 50+ festivals, high-energy power sets 60-90 min. Crowd control specialist.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/festivals');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    // Add structured data for festival page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": "DJ Kevin Froger",
          "url": "https://kevinfroger.nl",
          "telephone": "+31645251333",
          "areaServed": ["Zuid-Holland", "Noord-Brabant", "Gelderland", "Utrecht", "Overijssel"],
          "sameAs": [
            "https://www.instagram.com/djkevinfroger/",
            "https://www.linkedin.com/in/kevin-froger-b23aa263/",
            "https://www.facebook.com/KevinFroger.nl",
            "https://wa.me/31645251333"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NL"
          }
        },
        {
          "@type": "Service",
          "serviceType": "Festival DJ",
          "provider": {
            "@type": "LocalBusiness",
            "name": "DJ Kevin Froger"
          },
          "areaServed": "NL",
          "keywords": ["allround dj", "exclusieve dj", "feest dj"]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://kevinfroger.nl"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Festival DJ",
              "item": "https://kevinfroger.nl/festivals"
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

  const services = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "60-minute power sets",
      description: "Intensieve, non-stop entertainment sets"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High-energy festival muziek",
      description: "Speciaal geselecteerde tracks voor festivals"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Crowd management", 
      description: "Ervaring met grote publieksevenementen"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Professionele MC services",
      description: "Crowd interaction en presentatie"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Flexibele tijdslots",
      description: "Van 30 tot 90 minuten sets mogelijk"
    },
    {
      icon: <Speaker className="w-8 h-8" />,
      title: "Complete technische setup",
      description: "Professionele festival apparatuur"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "HIGH-ENERGY PERFORMANCE",
      description: "Non-stop entertainment dat het publiek op de dansvloer houdt en de energie hoog houdt",
      color: "from-orange-500 to-pink-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "FLEXIBELE SETS",
      description: "Van 30 tot 90 minuten, volledig aangepast aan uw festival programma en tijdschema",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "CROWD CONTROL",
      description: "Ervaring met grote publieksevenementen en massa entertainment voor optimale sfeer",
      color: "from-blue-500 to-purple-600"
    }
  ];

  const setHighlights = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Energieke intro die het publiek direct pakt",
      description: "Perfecte opening om de menigte meteen mee te krijgen"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Perfecte build-ups & drops voor maximum impact", 
      description: "Vakkundige opbouw naar climax momenten"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "MC skills om de massa te besturen",
      description: "Interactie met publiek voor extra energie"
    },
    {
      icon: <Disc className="w-6 h-6" />,
      title: "Genre mixing: house, techno, hardcore naadloos gemixed",
      description: "Diverse stijlen perfect op elkaar afgestemd"
    }
  ];

  const packages = [
    {
      name: "FESTIVAL BASIC",
      price: "Op aanvraag",
      duration: "60 min",
      features: [
        "60 minuten power set",
        "High-energy festival tracks",
        "Basis MC services",
        "Professionele mixing",
        "Crowd interaction"
      ],
      popular: false
    },
    {
      name: "FESTIVAL PRO",
      price: "Op aanvraag",
      duration: "90 min",
      features: [
        "90 minuten extended set",
        "Uitgebreide MC services",
        "Custom intro/outro",
        "Speciale effecten",
        "Crowd management",
        "Backup apparatuur",
        "Persoonlijke voorbereiding"
      ],
      popular: true
    },
    {
      name: "FESTIVAL PREMIUM",
      price: "Op aanvraag",
      duration: "120 min",
      features: [
        "2 uur festival experience",
        "Multiple sets mogelijk",
        "Volledige MC begeleiding",
        "Custom light show",
        "Speciale effecten",
        "Video integratie",
        "Onbeperkte voorbereiding",
        "Complete technische ondersteuning"
      ],
      popular: false
    }
  ];

  const musicGenres = [
    "House", "Techno", "Hardcore", "Trance", "Progressive", "Electro", "Bass", "Future House"
  ];

  const festivalTypes = [
    "Stadsfeesten",
    "Muziekfestivals", 
    "Dance Events",
    "Outdoor Festivals",
    "Electronic Events",
    "Multi-day Festivals"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-pink-600 text-white" role="banner" aria-labelledby="festival-hero-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-orange-200" />
          <h1 id="festival-hero-title" className="text-4xl lg:text-6xl font-black mb-6">
            FESTIVALS
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            High-energy festival sets voor elk publiek
          </p>
        </div>
      </section>

      {/* Power Set Section */}
      <section className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              POWER SET
              <span className="block text-orange-500">60 MINUTEN NON-STOP</span>
              <span className="block text-orange-500">ENTERTAINMENT</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Een zorgvuldig samengestelde set die het publiek van begin tot eind in beweging houdt
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-10">WAT JE KUNT VERWACHTEN:</h3>
              <div className="space-y-6">
                {setHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 mb-2">{highlight.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/images/IMG_1605.png" 
                alt="Festival Crowd"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl hover:from-orange-100 hover:to-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              FESTIVAL
              <span className="block text-orange-500">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Kies het pakket dat perfect past bij uw festival
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-orange-500 ring-opacity-50' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 rounded-full shadow-lg">
                      <span className="text-sm font-black tracking-wide">MEEST POPULAIR</span>
                    </div>
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-orange-500">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className={`block w-full text-center py-4 rounded-full font-black text-lg transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700'
                        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    KIES DIT PAKKET
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM DJ KEVIN
              <span className="block text-orange-500">FROGER VOOR</span>
              <span className="block text-orange-500">FESTIVALS?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Specialistische festival ervaring voor onvergetelijke performances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 right-0 opacity-10">
          <Music className="w-80 h-80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-shadow-lg">
              FESTIVAL EXPERIENCE
              <span className="block text-orange-400">SINDS 2008</span>
            </h2>
            <p className="text-2xl text-purple-100 mb-12 leading-relaxed">
              Van kleine local festivals tot grote main stage performances - DJ Kevin Froger heeft bewezen 
              dat hij weet hoe je een festival publiek laat exploderen. Met meer dan 50 festival optredens 
              op zijn naam, brengt hij de ervaring en energie die jouw event tot een succes maakt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black text-orange-400 mb-3">50+</div>
                <div className="text-purple-200 font-semibold text-lg">Festival Optredens</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-orange-400 mb-3">15+</div>
                <div className="text-purple-200 font-semibold text-lg">Jaar Ervaring</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-orange-400 mb-3">100k+</div>
                <div className="text-purple-200 font-semibold text-lg">Happy Dancers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Types Section */}
      <section className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              FESTIVAL
              <span className="block text-orange-500">TYPES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Ervaring met alle soorten festivals en events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivalTypes.map((type, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-gray-900">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-orange-50 to-pink-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-orange-500">FROGER VOOR</span>
              <span className="block text-orange-500">JOUW FESTIVAL</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw festival bezoekers een onvergetelijke experience te geven? 
              Laten we jouw event tot een succes maken.
            </p>
          </div>
          <ContactForm eventType="festival" />
        </div>
      </section>
    </div>
  );
};

export default FestivalPage;