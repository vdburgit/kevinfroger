import React from 'react';
import { Gift, Users, Music, CheckCircle, Cake, PartyPopper, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const PrivatePartiesPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Privé Feesten DJ | DJ Kevin Froger | Feest DJ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privé Feesten DJ - DJ Kevin Froger feest DJ. Verjaardagen, jubilea en familiefeesten. Jouw feest, jouw muziek, jouw stijl!');
    }
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Privé Feesten DJ | DJ Kevin Froger');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Privé Feesten DJ. DJ Kevin Froger feest DJ verjaardagen, jubilea en familiefeesten. Jouw feest, jouw muziek, jouw stijl.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/prive-feesten');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    // Add structured data for private parties page
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
          "serviceType": "Privé Feesten DJ",
          "provider": {
            "@type": "LocalBusiness",
            "name": "DJ Kevin Froger"
          },
          "areaServed": "NL",
          "keywords": ["allround dj", "exclusieve dj", "feest dj"]
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
      icon: <Gift className="w-8 h-8" />,
      title: "Verjaardagsfeesten",
      description: "Van 18e verjaardag tot 50+ jubileum"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Jubilea & Anniversaries",
      description: "Speciale mijlpalen vieren met stijl"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Themafeesten",
      description: "Van jaren '80 tot tropical party"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Familiebijeenkomsten",
      description: "Reünies en familiefeesten"
    },
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Sweet 16 & 18e verjaardagen",
      description: "Onvergetelijke coming-of-age feesten"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Huisfeesten & Garden parties",
      description: "Intieme feesten in eigen omgeving"
    }
  ];

  const packages = [
    {
      name: "INTIEM PAKKET",
      price: "Op aanvraag",
      duration: "4 uur",
      features: [
        "DJ services voor 4 uur",
        "Basis geluidsapparatuur",
        "Draadloze microfoon",
        "Muziekwensen vooraf",
        "Persoonlijke playlist"
      ],
      popular: false
    },
    {
      name: "FEEST PAKKET",
      price: "Op aanvraag",
      duration: "6 uur",
      features: [
        "DJ services voor 6 uur",
        "Professionele geluidsapparatuur",
        "Sfeerverlichting",
        "Draadloze microfoons",
        "MC services",
        "Onbeperkte muziekwensen",
        "Speciale effecten"
      ],
      popular: true
    },
    {
      name: "PREMIUM FEEST",
      price: "Op aanvraag",
      duration: "8 uur",
      features: [
        "Alles van feest pakket",
        "Uitgebreide verlichting",
        "Rookmachine effecten",
        "Extra geluidspunten",
        "Persoonlijke voorbereiding",
        "Backup apparatuur",
        "Onbeperkte overleg",
        "Speciale intro/outro"
      ],
      popular: false
    }
  ];

  const partyTypes = [
    {
      title: "Sweet 16 & 18e Verjaardagen",
      description: "De perfecte overgang naar volwassenheid vieren",
      image: "/images/IMG_1605.png",
      features: ["Trendy muziek", "Social media moments", "Interactieve games"]
    },
    {
      title: "Volwassen Verjaardagsfeesten",
      description: "Van 30+ tot 70+ - elke leeftijd zijn eigen stijl",
      image: "/images/IMG_9532.png",
      features: ["Muziek op maat", "Nostalgische hits", "Dansbare classics"]
    },
    {
      title: "Themafeesten",
      description: "Van jaren '80 disco tot tropical paradise",
      image: "/images/dj-kevin-froger-apreskifeest.png",
      features: ["Thema muziek", "Passende effecten", "Kostuum party support"]
    }
  ];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white" role="banner" aria-labelledby="private-hero-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-16 h-16 mx-auto mb-6 text-pink-200" />
          <h1 id="private-hero-title" className="text-4xl lg:text-6xl font-black mb-6">
            PRIVÉ FEESTEN
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Jouw feest, jouw muziek, jouw stijl
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALLE SOORTEN
              <span className="block text-pink-500">PRIVÉ FEESTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van intieme verjaardagen tot grote familiefeesten - wij maken elk feest onvergetelijk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl hover:from-pink-100 hover:to-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Types Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              POPULAIRE
              <span className="block text-pink-500">FEEST TYPES</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-64 object-cover"
                  width="400"
                  height="256"
                  loading="lazy"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              FEEST
              <span className="block text-pink-500">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Kies het pakket dat perfect past bij jouw feest
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-pink-500 ring-opacity-50' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg">
                      <span className="text-sm font-black tracking-wide">MEEST GEKOZEN</span>
                    </div>
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-pink-500">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className={`block w-full text-center py-4 rounded-full font-black text-lg transition-all duration-200 mobile-btn ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-pink-50 to-purple-50 mobile-bottom-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN JOUW
              <span className="block text-pink-500">PERFECT FEEST</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Laten we samen jouw droomfeest realiseren. Vertel ons over jouw plannen!
            </p>
          </div>
          <ContactForm eventType="prive" />
        </div>
      </section>
    </div>
  );
};

export default PrivatePartiesPage;