import React from 'react';
import { Calendar, Users, Music, Star, CheckCircle, Play, Quote, ArrowRight, Volume2, Mic, Radio, Headphones, Speaker, Disc, Phone, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const EvenementenDJPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Evenementen DJ – bedrijfsfeest, dorpsfeest, publiek event";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Representatieve DJ‑show met betrouwbare techniek en voorbereiding. Beschikbaar in ZH, NB, GE, UT en OV. Bel of app voor beschikbaarheid.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "serviceType": "DJ voor evenementen",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": ["Zuid-Holland", "Noord-Brabant", "Gelderland", "Utrecht", "Overijssel"]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Werk je met een draaiboek?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, ik houd rekening met het programma en stem af met organisatoren voor perfecte timing."
              }
            },
            {
              "@type": "Question",
              "name": "Hoe zit het met geluidsnormen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ik houd rekening met lokale geluidsnormen en stem het volume af op de locatie en omgeving."
              }
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
      icon: <Calendar className="w-8 h-8" />,
      title: "Bedrijfsfeesten",
      description: "Representatieve DJ voor corporate events"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dorpsfeesten",
      description: "Lokale evenementen en gemeenschapsfeesten"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Publieke evenementen",
      description: "Festivals en grote openbare events"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Speciale gelegenheden",
      description: "Jubilea, openingen en officiële events"
    }
  ];

  const usps = [
    "Rider in orde en professionele voorbereiding",
    "Coördinatie met techniek en organisatie",
    "Heldere afspraken en betrouwbare uitvoering",
    "Rekening houden met draaiboek en geluidsnormen"
  ];

  const faq = [
    {
      question: "Werk je met een draaiboek?",
      answer: "Ja, ik houd rekening met het programma en stem af met organisatoren voor perfecte timing."
    },
    {
      question: "Hoe zit het met geluidsnormen?",
      answer: "Ik houd rekening met lokale geluidsnormen en stem het volume af op de locatie en omgeving."
    },
    {
      question: "Regel je de technische afstemming?",
      answer: "Ja, ik coördineer vooraf met de locatie en andere technici voor vlotte opbouw en uitvoering."
    }
  ];

  const regions = [
    { name: "Rotterdam", href: "/regio/zuid-holland/rotterdam" },
    { name: "Den Haag", href: "/regio/zuid-holland/den-haag" },
    { name: "Utrecht", href: "/regio/utrecht" },
    { name: "Eindhoven", href: "/regio/noord-brabant" },
    { name: "Nijmegen", href: "/regio/gelderland" },
    { name: "Enschede", href: "/regio/overijssel" },
    { name: "Delft", href: "/regio/zuid-holland/delft" },
    { name: "Leiden", href: "/regio/zuid-holland/leiden" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Evenementen DJ – representatief en betrouwbaar
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Geschikt voor bedrijfsfeesten, dorpsfeesten en publieks­evenementen. Ik lever een nette show, 
            werk stil en efficiënt en houd rekening met draaiboek en geluidsnormen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR BESCHIKBAARHEID
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              VRAAG OFFERTE AAN
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              EVENEMENTEN
              <span className="block text-blue-700">SPECIALITEITEN</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Wat je krijgt:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VEELGESTELDE
              <span className="block text-blue-700">VRAGEN</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
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

      {/* Region Navigator */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              BOEK EEN EVENEMENTEN DJ IN JOUW REGIO
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {regions.map((region, index) => (
              <a
                key={index}
                href={region.href}
                className="group bg-gray-50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
                aria-label={`DJ ${region.name}`}
                title={`DJ ${region.name}`}
              >
                <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  DJ {region.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN UW
              <span className="block text-blue-700">EVENEMENT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om uw evenement onvergetelijk te maken? Neem contact op voor een vrijblijvende offerte.
            </p>
          </div>
          <ContactForm eventType="evenement" />
        </div>
      </section>
    </div>
  );
};

export default EvenementenDJPage;