import React from 'react';
import { Gift, Users, CheckCircle, PartyPopper, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const VerjaardagDJPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Verjaardag DJ – dansgarantie voor elk feest | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Allround DJ met eigen show. Verzoekjes welkom en strak geregeld met de locatie. App voor een snelle prijsindicatie.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "serviceType": "DJ voor verjaardag",
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
              "name": "Welke muziek draai je op verjaardagen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Allround muziek aangepast aan de leeftijd en wensen. Van actuele hits tot nostalgische classics."
              }
            },
            {
              "@type": "Question",
              "name": "Kunnen gasten verzoekjes doen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absoluut! Verzoekjes zijn altijd welkom en ik speel graag in op de wensen van de gasten."
              }
            },
            {
              "@type": "Question",
              "name": "Hoe lang van tevoren opbouwen?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Meestal 1-2 uur voor aanvang. Dit stem ik vooraf af met de locatie en jullie planning."
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
      icon: <Gift className="w-8 h-8" />,
      title: "18+, 21+ en 30+ feesten",
      description: "Muziek die aansluit bij jonge volwassenen"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "40+, 50+ en 60+ verjaardagen",
      description: "Van gezellig tot uitbundig – afgestemd op het publiek"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Jubilea en mijlpalen",
      description: "25, 40 of 50 jaar getrouwd – feestelijk vieren"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Familiefeesten",
      description: "Reünies en familiebijeenkomsten met alle generaties"
    }
  ];

  const usps = [
    "Muziek op maat voor elke leeftijd en elk publiek",
    "Van gezellig tot feestelijk – flexibel inspelen",
    "Eigen licht- en geluidapparatuur inclusief",
    "Direct contact met de DJ – snelle afstemming"
  ];

  const faq = [
    {
      question: "Welke muziek draai je op verjaardagen?",
      answer: "Allround muziek aangepast aan de leeftijd en het publiek. Van actuele hits voor jonge feesten tot nostalgische classics voor 50+ verjaardagen. Vooraf stemmen we muziekwensen af."
    },
    {
      question: "Kunnen gasten verzoekjes doen?",
      answer: "Zeker! Verzoekjes zijn welkom en ik werk ze graag in als ze passen bij de sfeer. Ook kunnen gasten vooraf via een online tool nummers doorgeven."
    },
    {
      question: "Hoe lang van tevoren ben je er voor opbouw?",
      answer: "Meestal 1-2 uur voor aanvang, afhankelijk van de locatie en opstelling. Ik stem dit vooraf met je af zodat alles klaar is zonder stress."
    }
  ];

  const regions = [
    { name: "Rotterdam", href: "/regio/zuid-holland/rotterdam" },
    { name: "Den Haag", href: "/regio/zuid-holland/den-haag" },
    { name: "Delft", href: "/regio/zuid-holland/delft" },
    { name: "Leiden", href: "/regio/zuid-holland/leiden" },
    { name: "Zoetermeer", href: "/regio/zuid-holland/zoetermeer" },
    { name: "Utrecht", href: "/regio/utrecht" },
    { name: "Eindhoven", href: "/regio/noord-brabant" },
    { name: "Nijmegen", href: "/regio/gelderland" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-500 to-blue-600 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Verjaardag DJ – dansgarantie zonder gedoe
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jarig? Ik neem een complete DJ‑show mee en zorg dat alle leeftijden zich vermaken. 
            Verzoekjes zijn welkom en de techniek stem ik netjes af met de locatie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR SNELLE PRIJSINDICATIE
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-green-900 transition-all duration-300"
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
              ALLE SOORTEN
              <span className="block text-green-600">VERJAARDAGEN</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Wat je krijgt:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <span className="block text-green-600">VRAGEN</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
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
              BOEK EEN VERJAARDAG DJ IN JOUW REGIO
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {regions.map((region, index) => (
              <a
                key={index}
                href={region.href}
                className="group bg-gray-50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <MapPin className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900 group-hover:text-green-600 transition-colors">
                  DJ {region.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN JOUW
              <span className="block text-green-600">PERFECT FEEST</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Laten we samen jouw droomfeest realiseren. Vertel ons over jouw plannen!
            </p>
          </div>
          <ContactForm eventType="verjaardag" />
        </div>
      </section>
    </div>
  );
};

export default VerjaardagDJPage;