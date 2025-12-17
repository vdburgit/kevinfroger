import React from 'react';
import { Euro, Clock, Users, CheckCircle, ArrowRight, Calendar, Music, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PricingSection from '../components/PricingSection';

const PricingPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Prijzen Nederland | DJ Kevin Froger | Transparant";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Prijzen Nederland - DJ Kevin Froger allround DJ. Transparante tarieven vanaf €350, geen verborgen kosten. Gratis offerte binnen 24u!');
    }
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Prijzen Nederland | DJ Kevin Froger');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Prijzen Nederland. DJ Kevin Froger allround DJ transparante tarieven vanaf €350, geen verborgen kosten.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/prijzen');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    // Add structured data for pricing page
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
          "@type": "OfferCatalog",
          "name": "DJ Prijzen",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Show S",
              "priceCurrency": "EUR",
              "price": "350"
            },
            {
              "@type": "Offer",
              "name": "Show M",
              "priceCurrency": "EUR",
              "price": "500"
            },
            {
              "@type": "Offer",
              "name": "Show L",
              "priceCurrency": "EUR",
              "price": "750"
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

  const addOns = [
    {
      name: "Extra Verlichting",
      price: "Op aanvraag",
      description: "Uitgebreide sfeerverlichting en spots"
    },
    {
      name: "Rookmachine",
      price: "Op aanvraag",
      description: "Professionele rookeffecten"
    },
    {
      name: "Extra Speakers",
      price: "Op aanvraag",
      description: "Voor grote locaties is extra professionele audio beschikbaar voor groepen vanaf 300 personen."
    },
    {
      name: "Video Integratie",
      price: "Op aanvraag",
      description: "Beamer en scherm voor presentaties"
    },
    {
      name: "Live Streaming",
      price: "Op aanvraag",
      description: "Professionele live stream setup"
    },
    {
      name: "Extra MC Uur",
      price: "Op aanvraag",
      description: "Uitbreiding MC services per uur"
    }
  ];

  const factors = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Duur & Tijdstip",
      description: "Van 4 uur tot complete dagbegeleiding"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Aantal Gasten",
      description: "Bepaalt welk licht- en geluidpakket nodig is"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Type Evenement",
      description: "Bruiloft, verjaardag of zakelijk feest"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Extra Wensen",
      description: "MC, speciale effecten of uitgebreide lichtshow"
    }
  ];

  const benefits = [
    "Prijsindicatie binnen 24 uur na aanvraag",
    "Geen verborgen kosten – alles inclusief",
    "Flexibel maatwerk voor elk evenement",
    "Professionele apparatuur altijd inbegrepen",
    "Direct contact met de DJ",
    "Backup-apparatuur standaard aanwezig",
    "Persoonlijke voorbereiding en afstemming",
    "15+ jaar ervaring, 1000+ events"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              PRIJZEN DJ BOEKEN –
              <span className="block text-orange-400">DUIDELIJK EN EERLIJK</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Prijs op maat, afgestemd op je evenement en wensen. Binnen 24 uur een prijsindicatie of offerte – geen verrassingen, geen verborgen kosten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#prijzen"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Euro className="w-6 h-6 inline-block mr-3" />
                BEKIJK PRIJZEN
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <Phone className="w-6 h-6 inline-block mr-3" />
                VRAAG EEN OFFERTE AAN
              </a>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {factors.map((factor, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="font-black text-lg mb-2">{factor.title}</h3>
                  <p className="text-blue-200 text-sm">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eventplan-scan Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            GRATIS INTAKEGESPREK
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Eventplan-scan: weet binnen 24 uur wat je nodig hebt
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nog niet zeker welk pakket bij je past? Stuur ons je event-details en ontvang binnen 24 uur een persoonlijk advies:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-black text-sm mb-2">Locatie-check</h3>
              <p className="text-xs text-gray-600">Techniek passend bij jouw venue</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="font-black text-sm mb-2">Muziekadvies</h3>
              <p className="text-xs text-gray-600">Genres & flow voor jouw publiek</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-black text-sm mb-2">Risico-scan</h3>
              <p className="text-xs text-gray-600">Geluidslimieten, opbouwtijd, stroomvoorziening</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-black text-sm mb-2">Pakketadvies</h3>
              <p className="text-xs text-gray-600">Welk pakket + opties passen?</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://api.whatsapp.com/send/?phone=31645251333&text=Ik wil graag een gratis Eventplan-scan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
            >
              Via WhatsApp aanvragen
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Via formulier aanvragen
            </a>
          </div>

          <p className="text-xs text-gray-500">
            ⏱️ Reactie binnen 24 uur | 📞 Direct daarna optioneel belafspraak | 🚫 Geen verplichtingen
          </p>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <div id="prijzen">
        <PricingSection />
      </div>

      {/* Add-ons Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              EXTRA
              <span className="block text-orange-500">OPTIES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Maak uw evenement nog specialer met onze extra services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-gray-900">{addon.name}</h3>
                  <span className="text-xl font-black text-orange-500">{addon.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-12 text-shadow">
                WAAROM KIEZEN
                <span className="block text-blue-700">VOOR ONS?</span>
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
                >
                  VRAAG GRATIS OFFERTE
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
            
            <div>
              <img 
                src="/images/kevin-portrait.png" 
                alt="DJ Kevin Froger"
                className="w-full rounded-3xl shadow-2xl"
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VRAAG UW
              <span className="block text-blue-700">OFFERTE AAN</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Ontvang binnen 24 uur een persoonlijke offerte op maat voor uw evenement
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;