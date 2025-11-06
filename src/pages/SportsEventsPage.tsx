import React from 'react';
import { Trophy, Users, Target, CheckCircle, Medal, Zap, Flag } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const SportsEventsPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Sportfeesten DJ | DJ Kevin Froger | Allround DJ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sportfeesten DJ - DJ Kevin Froger allround DJ. Energieke muziek voor sportevenementen, sportgalas en teambuilding. Boek nu!');
    }
    
    // Add structured data for sports events page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Sportfeesten DJ - DJ Kevin Froger",
      "description": "DJ services voor sportevenementen, teambuilding en sportgala's",
      "url": "https://kevinfroger.nl/sportfeesten",
      "telephone": "+31645251333",
      "areaServed": "Nederland",
      "sameAs": [
        "https://www.instagram.com/djkevinfroger/",
        "https://www.linkedin.com/in/kevin-froger-b23aa263/",
        "https://www.facebook.com/KevinFroger.nl",
        "https://wa.me/31645251333"
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const services = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sportgala's & Awards",
      description: "Professionele begeleiding van prijsuitreikingen"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Teambuilding Events",
      description: "Energieke muziek voor teamactiviteiten"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Kampioenschappen",
      description: "Muzikale ondersteuning bij sportevenementen"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sportverenigingsfeesten",
      description: "Van jeugd tot senioren - voor alle leden"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Opening & Closing ceremonies",
      description: "Spectaculaire start en afsluiting"
    },
    {
      icon: <Flag className="w-8 h-8" />,
      title: "Sponsorevents",
      description: "Professionele uitstraling voor sponsors"
    }
  ];

  const packages = [
    {
      name: "SPORT BASIS",
      price: "Op aanvraag",
      duration: "4 uur",
      features: [
        "DJ services voor 4 uur",
        "Basis geluidsapparatuur",
        "Draadloze microfoon",
        "Sportieve muziek selectie",
        "Presentatie ondersteuning"
      ],
      popular: false
    },
    {
      name: "SPORT COMPLEET",
      price: "Op aanvraag",
      duration: "6 uur",
      features: [
        "DJ services voor 6 uur",
        "Professionele geluidsapparatuur",
        "MC services",
        "Ceremonie begeleiding",
        "Sfeerverlichting",
        "Draadloze microfoons",
        "Muziek op maat",
        "Technische ondersteuning"
      ],
      popular: true
    },
    {
      name: "SPORT PREMIUM",
      price: "Op aanvraag",
      duration: "8 uur",
      features: [
        "Alles van compleet pakket",
        "Uitgebreide verlichting",
        "Video/audio integratie",
        "Extra geluidspunten",
        "Persoonlijke voorbereiding",
        "Backup apparatuur",
        "Live streaming ondersteuning",
        "Onbeperkte overleg"
      ],
      popular: false
    }
  ];

  const sportTypes = [
    {
      title: "Voetbalverenigingen",
      description: "Van jeugdfeesten tot kampioenschappen",
      image: "/images/IMG_9532.png",
      features: ["Teamliedjes", "Victory songs", "Sfeervolle intro's"]
    },
    {
      title: "Fitness & Gym Events",
      description: "Energieke muziek voor sportieve evenementen",
      image: "/images/IMG_0230.png",
      features: ["High-energy tracks", "Motivatie muziek", "Workout beats"]
    },
    {
      title: "Tennis & Racket Sports",
      description: "Stijlvolle begeleiding van toernooien",
      image: "/images/IMG_2341.png",
      features: ["Elegante achtergrond", "Award ceremonies", "Networking muziek"]
    }
  ];

  const features = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "SPORT EXPERTISE",
      description: "Jarenlange ervaring met sportevenementen en begrip van sportcultuur",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "ENERGIEKE PERFORMANCE",
      description: "Muziek die motiveert, inspireert en de sportieve sfeer versterkt",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "ALLE LEEFTIJDEN",
      description: "Van jeugdteams tot veteranen - muziek die iedereen aanspreekt",
      color: "from-blue-500 to-blue-600"
    }
  ];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-500 to-blue-600 text-white" role="banner" aria-labelledby="sports-hero-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h1 id="sports-hero-title" className="text-4xl lg:text-6xl font-black mb-6">
            SPORTFEESTEN
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Muziek die motiveert en inspireert
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              SPORT EVENT
              <span className="block text-green-600">SERVICES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele muzikale begeleiding voor alle soorten sportevenementen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl hover:from-green-100 hover:to-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sport Types Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              SPORT
              <span className="block text-green-600">SPECIALISATIES</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sportTypes.map((type, index) => (
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
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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
              SPORT EVENT
              <span className="block text-green-600">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Professionele pakketten voor elk sportevenement
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-green-500 ring-opacity-50' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg">
                      <span className="text-sm font-black tracking-wide">MEEST POPULAIR</span>
                    </div>
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-green-500">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className={`block w-full text-center py-4 rounded-full font-black text-lg transition-all duration-200 mobile-btn ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
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
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM KIEZEN
              <span className="block text-green-600">VOOR ONS?</span>
            </h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-green-50 to-blue-50 mobile-bottom-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN JOUW
              <span className="block text-green-600">SPORTEVENT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Laten we samen jouw sportevenement tot een succes maken met de perfecte muziek!
            </p>
          </div>
          <ContactForm eventType="sportfeest" />
        </div>
      </section>
    </div>
  );
};

export default SportsEventsPage;