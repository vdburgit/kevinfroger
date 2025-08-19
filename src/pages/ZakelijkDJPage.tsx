import React from 'react';
import { Building, Users, Briefcase, Calendar, CheckCircle, Trophy, Star, Quote, ArrowRight, Award, Target, Zap, Clock, Globe, Shield, Phone, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ZakelijkDJPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ voor bedrijfsfeest & relaties – professioneel & verzorgd";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nette uitstraling, heldere afspraken en vlotte op‑ en afbouw. Compleet met licht & geluid. Snel schakelen via WhatsApp.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "serviceType": "DJ voor bedrijfsfeest",
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
              "name": "Hoe zorg je voor nette uitstraling?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Professionele kleding, discrete opstelling en representatieve communicatie tijdens het event."
              }
            },
            {
              "@type": "Question",
              "name": "Kun je facturen leveren?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, ik lever altijd nette facturen voor zakelijke boekingen met alle benodigde gegevens."
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
      icon: <Building className="w-8 h-8" />,
      title: "Bedrijfsfeesten & jubilea",
      description: "Professionele entertainment voor bedrijfsevenementen"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Productlanceringen",
      description: "Muzikale ondersteuning bij product presentaties"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Netwerkevenenementen", 
      description: "Sfeervolle achtergrondmuziek voor networking"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Personeelsfeesten",
      description: "Van rustig tot uitbundig voor alle medewerkers"
    }
  ];

  const usps = [
    "Briefing en professionele voorbereiding",
    "Dresscode en representatieve uitstraling",
    "Volume en zone-afstemming",
    "Microfoon en aankondigingen op verzoek"
  ];

  const faq = [
    {
      question: "Hoe zorg je voor nette uitstraling?",
      answer: "Professionele kleding, discrete opstelling en representatieve communicatie tijdens het event."
    },
    {
      question: "Kun je facturen leveren?",
      answer: "Ja, ik lever altijd nette facturen voor zakelijke boekingen met alle benodigde gegevens."
    },
    {
      question: "Hoe stem je af met de locatie?",
      answer: "Vooraf bezoek ik de locatie om techniek, opbouw en draaiboek door te nemen met de organisatie."
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            DJ voor bedrijfsfeest & relaties – verzorgd tot in de puntjes
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Representatieve presentatie met muziek die past bij jullie organisatie en publiek. 
            Heldere afspraken vooraf; op de avond zelf geen verrassingen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              SNEL SCHAKELEN VIA WHATSAPP
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
              ZAKELIJKE
              <span className="block text-blue-700">EVENEMENTEN</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl p-12">
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
              BOEK EEN ZAKELIJKE DJ IN JOUW REGIO
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {regions.map((region, index) => (
              <a
                key={index}
                href={region.href}
                className="group bg-gray-50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                APP VOOR EEN PRIJSINDICATIE
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
                VRAAG EEN OFFERTE AAN
      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN UW
              <span className="block text-blue-700">ZAKELIJK EVENT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Vraag een vrijblijvende offerte aan en laten we uw evenement tot een succes maken.
            </p>
          </div>
          <ContactForm eventType="bedrijfsfeest" />
        </div>
      </section>
    </div>
  );
};

export default ZakelijkDJPage;