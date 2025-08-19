import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Euro, Music, Users, Calendar, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "FAQ DJ Kevin Froger | Veelgestelde Vragen DJ Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'FAQ DJ Kevin Froger ✨ Alle antwoorden op veelgestelde vragen over DJ services. Van prijzen tot planning. DJ Kevin Froger beantwoordt alles!');
    }
    
    // Add FAQPage structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "FAQ DJ Kevin Froger",
      "description": "Veelgestelde vragen over DJ services van Kevin Froger",
      "url": "https://kevinfroger.nl/faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Hoe ver van tevoren moet ik boeken?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Voor bruiloften adviseren we 6-12 maanden van tevoren te boeken, vooral voor populaire trouwdata in het voorjaar en de zomer. Voor bedrijfsfeesten en privé evenementen is 2-3 maanden meestal voldoende."
          }
        },
        {
          "@type": "Question",
          "name": "Kunnen we onze eigen muziekwensen doorgeven?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absoluut! We bespreken vooraf uitgebreid jullie muziekvoorkeuren, no-go songs en speciale verzoeken. Jullie kunnen een playlist aanleveren die we vakkundig verwerken in de set."
          }
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Algemene Vragen",
      icon: <HelpCircle className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          question: "Hoe ver van tevoren moet ik boeken?",
          answer: "Voor bruiloften adviseren we 6-12 maanden van tevoren te boeken, vooral voor populaire trouwdata in het voorjaar en de zomer. Voor bedrijfsfeesten en privé evenementen is 2-3 maanden meestal voldoende. We proberen echter altijd mee te denken, ook bij kortere termijnen."
        },
        {
          question: "In welke regio's zijn jullie actief?",
          answer: "Wij zijn landelijk werkzaam in heel Nederland. Voor evenementen in België en Duitsland bespreken we graag de mogelijkheden. Reiskosten worden transparant berekend op basis van de afstand."
        },
        {
          question: "Wat gebeurt er bij ziekte of noodgevallen?",
          answer: "We hebben altijd een backup plan en een netwerk van professionele DJ's die kunnen invallen. Uw evenement gaat altijd door met dezelfde kwaliteit. Dit is onderdeel van onze professionele service."
        },
        {
          question: "Hebben jullie een vergunning en verzekering?",
          answer: "Ja, wij beschikken over alle benodigde vergunningen en een uitgebreide aansprakelijkheidsverzekering. Onze apparatuur is gekeurd en voldoet aan alle veiligheidseisen."
        }
      ]
    },
    {
      title: "Muziek & Entertainment",
      icon: <Music className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      faqs: [
        {
          question: "Kunnen we onze eigen muziekwensen doorgeven?",
          answer: "Absoluut! We bespreken vooraf uitgebreid jullie muziekvoorkeuren, no-go songs en speciale verzoeken. Jullie kunnen een playlist aanleveren die we vakkundig verwerken in de set. We zorgen voor een perfecte mix van jullie wensen en onze expertise."
        },
        {
          question: "Welke muziekstijlen kunnen jullie draaien?",
          answer: "Wij draaien alle muziekstijlen: van klassiek en jazz tot house en hardcore. Onze uitgebreide muziekbibliotheek bevat meer dan 50.000 tracks in alle genres. We passen ons altijd aan het publiek en de gelegenheid aan."
        },
        {
          question: "Bieden jullie ook MC services?",
          answer: "Ja, MC services zijn onderdeel van onze expertise. We kunnen presenteren, ceremonies begeleiden, spelletjes leiden en zorgen voor de juiste aankondigingen. Dit doen we altijd in overleg en passend bij de sfeer van jullie evenement."
        },
        {
          question: "Kunnen jullie live muziek combineren met DJ sets?",
          answer: "Zeker! We werken regelmatig samen met live muzikanten en bands. We zorgen voor de technische integratie en naadloze overgangen tussen live optredens en DJ sets."
        }
      ]
    },
    {
      title: "Techniek & Apparatuur",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      faqs: [
        {
          question: "Hoe zit het met de technische setup?",
          answer: "Wij verzorgen de complete technische setup en breakdown. We komen van tevoren de locatie bekijken, zorgen voor de juiste aansluitingen en testen alles vooraf. Jullie hoeven nergens aan te denken - wij regelen alles van A tot Z."
        },
        {
          question: "Wat gebeurt er bij slecht weer (outdoor events)?",
          answer: "We hebben ervaring met outdoor evenementen en beschikken over weerbestendige apparatuur. Bij outdoor ceremonies hebben we altijd een backup plan en zorgen we voor de juiste bescherming van de apparatuur tegen regen en wind."
        },
        {
          question: "Hebben jullie backup apparatuur?",
          answer: "Ja, we hebben altijd backup apparatuur bij ons. Van reserve mixers tot extra speakers - we zijn voorbereid op alle scenario's. Uw evenement gaat altijd door, ongeacht technische problemen."
        },
        {
          question: "Kunnen jullie meerdere ruimtes van geluid voorzien?",
          answer: "Zeker! We kunnen meerdere ruimtes van geluid voorzien met draadloze systemen. Denk aan ceremonie buiten, borrel in de foyer en feest in de grote zaal. We zorgen voor naadloze overgangen."
        }
      ]
    },
    {
      title: "Prijzen & Betaling",
      icon: <Euro className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      faqs: [
        {
          question: "Wat is inbegrepen in de prijs?",
          answer: "Standaard inbegrepen: DJ services, complete geluidsapparatuur, draadloze microfoons, basisverlichting, voor- en nabereiding, en reiskosten binnen 50km. Uitgebreide lichtshows en extra apparatuur kunnen worden toegevoegd."
        },
        {
          question: "Hoe werkt de betaling?",
          answer: "We werken met een aanbetaling van 50% bij het tekenen van het contract en 50% uiterlijk 2 weken voor het evenement. Betaling kan via bank, iDEAL of contant. We sturen altijd een duidelijke factuur."
        },
        {
          question: "Zijn er extra kosten?",
          answer: "Onze prijzen zijn transparant en all-in binnen 50km van onze basis. Voor grotere afstanden berekenen we €0,30 per km. Extra services zoals uitgebreide verlichting of video worden vooraf duidelijk gecommuniceerd."
        },
        {
          question: "Kunnen we het contract nog wijzigen?",
          answer: "Kleine wijzigingen zijn meestal geen probleem. Grote wijzigingen bespreken we graag persoonlijk. We denken altijd mee om jullie evenement perfect te laten verlopen, ook als plannen veranderen."
        }
      ]
    },
    {
      title: "Planning & Voorbereiding",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
      faqs: [
        {
          question: "Hoe verloopt de voorbereiding?",
          answer: "Na boeking plannen we een uitgebreid gesprek (persoonlijk of online) om alle details door te nemen. We bespreken tijdschema, muziekwensen, speciale momenten en technische zaken. Dichter bij de datum hebben we nog een check-in gesprek."
        },
        {
          question: "Kunnen we een proefdraaien?",
          answer: "Voor bruiloften organiseren we regelmatig 'meet & greet' sessies waar jullie ons kunnen ontmoeten en onze stijl kunnen ervaren. Voor andere evenementen kunnen we altijd een kennismakingsgesprek inplannen."
        },
        {
          question: "Hoe lang van tevoren zijn jullie aanwezig?",
          answer: "We zijn standaard 1-2 uur voor aanvang aanwezig voor de setup. Voor grote evenementen of complexe opstellingen kunnen we eerder komen. De breakdown gebeurt na afloop, zodat jullie kunnen genieten tot het einde."
        },
        {
          question: "Kunnen we tijdens het evenement nog wijzigingen maken?",
          answer: "Natuurlijk! We spelen altijd in op de sfeer en het publiek. Jullie kunnen altijd verzoekjes doen of aanpassingen vragen. Flexibiliteit en het lezen van het publiek is onderdeel van onze expertise."
        }
      ]
    }
  ];

  const quickContact = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Bel Direct",
      info: "06 45 25 13 33",
      action: "tel:0645251333"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Ons",
      info: "booking@kevinfroger.nl",
      action: "mailto:booking@kevinfroger.nl"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Plan Gesprek",
      info: "Gratis kennismaking",
      action: "/contact"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden" role="banner" aria-labelledby="faq-hero-title">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 id="faq-hero-title" className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              VEELGESTELDE
              <span className="block text-orange-400">VRAGEN</span>
              <span className="block text-orange-400">& ANTWOORDEN</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Alle informatie die je nodig hebt over onze DJ services. Van prijzen tot planning - 
              hier vind je antwoorden op de meest gestelde vragen.
            </p>
            
            <div className="md:hidden mobile-btn-container mb-16 px-4">
              <a
                href="#faq"
                className="mobile-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold text-lg"
              >
                <HelpCircle className="w-5 h-5 mr-3" />
                BEKIJK FAQ
              </a>
              <a
                href="/contact"
                className="mobile-btn border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg font-bold text-lg"
              >
                STEL VRAAG
              </a>
              <a
                href="/contact"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <Phone className="w-6 h-6 inline-block mr-3" />
                BEL DIRECT
              </a>
            </div>

            {/* Quick Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {quickContact.map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="font-black text-lg mb-2">{contact.title}</h3>
                  <p className="text-blue-200">{contact.info}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALLE ANTWOORDEN
              <span className="block text-blue-700">OP EEN RIJ</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Uitgebreide informatie over onze services, prijzen en werkwijze
            </p>
          </div>

          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="bg-gray-50 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                      >
                        <h4 className="text-xl font-black text-gray-900 pr-4">{faq.question}</h4>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-600" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-8 pb-6">
                          <div className="border-t border-gray-200 pt-6">
                            <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 text-shadow">
            NOG VRAGEN?
            <span className="block text-orange-500">WE HELPEN GRAAG!</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Staat jouw vraag er niet bij? Neem gerust contact op voor persoonlijk advies. 
            We beantwoorden alle vragen graag en denken mee over jouw evenement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">DIRECT BELLEN</h3>
              <p className="text-gray-600 mb-4">Voor snelle vragen en spoedboekingen</p>
              <a href="tel:0645251333" className="text-blue-600 font-black text-lg hover:text-orange-500 transition-colors">
                06 45 25 13 33
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Mail className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">EMAIL STUREN</h3>
              <p className="text-gray-600 mb-4">Voor uitgebreide vragen en informatie</p>
              <a href="mailto:booking@kevinfroger.nl" className="text-purple-600 font-black text-lg hover:text-orange-500 transition-colors">
                booking@kevinfroger.nl
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">GESPREK PLANNEN</h3>
              <p className="text-gray-600 mb-4">Voor persoonlijk advies en offerte</p>
              <a href="/contact" className="text-green-600 font-black text-lg hover:text-orange-500 transition-colors">
                Plan Kennismaking
              </a>
            </div>
          </div>
          
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
          >
            STEL JOUW VRAAG
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;