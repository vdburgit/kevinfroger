import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Euro, Music, Users, Calendar, Phone, Mail, BookOpen, CheckCircle, AlertCircle, Clock, Volume2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "FAQ DJ Kevin Froger | Veelgestelde Vragen | Allround DJ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'FAQ DJ Kevin Froger - allround DJ Nederland. Alle antwoorden op veelgestelde vragen over DJ services. Van prijzen tot planning!');
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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden" role="banner" aria-labelledby="faq-hero-title">
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
                BEKIJK VEELGESTELDE VRAGEN
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

      {/* Table of Contents - Sticky Nav */}
      <nav className="bg-gray-50 border-y border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-sm font-semibold text-gray-600 mb-3">INHOUD</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a href="#veelgestelde-vragen" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                Veelgestelde vragen
              </a>
            </li>
            <li>
              <a href="#gids-muziekkeuze" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                📖 Gids: Muziekkeuze
              </a>
            </li>
            <li>
              <a href="#gids-draaiboek" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                📖 Gids: Draaiboek
              </a>
            </li>
            <li>
              <a href="#gids-opbouw" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                📖 Gids: Opbouw & tijden
              </a>
            </li>
            <li>
              <a href="#gids-geluidslimieten" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                📖 Gids: Geluidslimieten
              </a>
            </li>
            <li>
              <a href="#gids-venue-checklist" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                📖 Gids: Venue-checklist
              </a>
            </li>
            <li>
              <a href="#gids-microfoon-mc" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                📖 Gids: Microfoon & MC
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* FAQ Section */}
      <section id="veelgestelde-vragen" className="py-32 bg-white">
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

      {/* Guide Sections - Knowledge Base */}

      {/* Guide 1: Muziekkeuze */}
      <section id="gids-muziekkeuze" className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">📖 Gids: Muziekkeuze voor jouw feest</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            De juiste muziek maakt of breekt je feest. Hier is hoe je dat aanpakt, gebaseerd op 15+ jaar ervaring met meer dan 1000 events.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Ken je publiek</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Voor een bruiloft met gasten van 20-70 jaar kies je een mix van klassiekers, moderne hits en everything in between. De sleutel is het bouwen van "muzikale bruggen" die álle leeftijdsgroepen aanspreken.
              </p>
              <Link to="/bruiloft-dj" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Lees meer over bruiloft-muziek
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Bepaal de flow van je avond</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Ontvangst (17:00-19:00):</strong> Lounge, jazz, acoustic covers (70-90 BPM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Diner (19:00-21:30):</strong> Uptempo achtergrond, geen vocals tijdens speeches (90-110 BPM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Feest (21:30-02:00):</strong> Build-up van 110 naar 128 BPM, dynamische pieken en dalen</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Wensenlijst én "not to play"</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stuur vooraf 10-20 nummers die je zeker wilt horen + 5 die absoluut niet gedraaid mogen worden. Dit geeft ons een perfect beeld van je smaak zonder je te beperken in flexibiliteit.
              </p>
              <Link to="/werkwijze" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Onze muziekvoorbereiding in detail
              </Link>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mt-6">
              <h4 className="font-black text-gray-900 mb-2">💡 Pro-tip van Kevin</h4>
              <p className="text-gray-700 italic">
                "Laat je gasten vooraf stemmen via een Google Form met 20 suggesties. Dan weet je zeker dat je de goede vibe treft, én je gasten voelen zich al betrokken vóór het feest begint."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide 2: Draaiboek */}
      <section id="gids-draaiboek" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">📖 Gids: Draaiboek voor je event</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Een strak draaiboek zorgt dat je DJ weet wanneer wat gebeurt, welke muziek bij welk moment hoort, en wanneer de microfoon nodig is.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wat staat er in een draaiboek?</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold">Tijdstip</th>
                      <th className="px-4 py-3 text-left font-bold">Moment</th>
                      <th className="px-4 py-3 text-left font-bold">Actie DJ</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3">19:00</td>
                      <td className="px-4 py-3">Binnenkomst bruidspaar</td>
                      <td className="px-4 py-3">Fade to intro-track, volume omhoog, aankondiging via mic</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-4 py-3">19:15</td>
                      <td className="px-4 py-3">Welkomstwoord</td>
                      <td className="px-4 py-3">Microfoon overdragen, muziek uit</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3">20:00</td>
                      <td className="px-4 py-3">Eerste dans</td>
                      <td className="px-4 py-3">Pre-cued nummer, spotlight-signaal</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-4 py-3">21:00</td>
                      <td className="px-4 py-3">Taart aansnijden</td>
                      <td className="px-4 py-3">Volume dimmen, aankondiging, romantisch nummer</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3">21:30</td>
                      <td className="px-4 py-3">Start feest</td>
                      <td className="px-4 py-3">Uptempo opener, gasten naar dansvloer lokken</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <Link to="/werkwijze" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Bekijk onze volledige werkwijze
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link to="/bruiloft-dj" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Voorbeeld bruiloft-tijdlijn
              </Link>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-black text-gray-900 mb-2">💡 Pro-tip van Kevin</h4>
              <p className="text-gray-700 italic">
                "Bouw 15 minuten buffer in tussen grote momenten. Speeches lopen altijd uit, en gasten hebben tijd nodig om van ceremonie naar diner te bewegen."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide 3: Opbouw & tijden */}
      <section id="gids-opbouw" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">📖 Gids: Opbouw & tijden</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Een professionele DJ-setup vergt tijd en planning. Hier is wat je moet weten over opbouw, geluidschecks en afbraak.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Standaard opbouwtijden</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Basis setup (DJ + geluid):</strong> 60-90 minuten voor aanvang</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Met uitgebreide lichtshow:</strong> 90-120 minuten voor aanvang</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Meerdere ruimtes:</strong> +30 minuten per extra ruimte</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Afbraak:</strong> 30-45 minuten na afloop</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat gebeurt er tijdens opbouw?</h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><strong>Locatie-verkenning:</strong> Check stroomvoorziening, positionering, looproutes</li>
                <li><strong>Setup apparatuur:</strong> Speakers, DJ-booth, licht, kabels netjes wegwerken</li>
                <li><strong>Geluidscheck:</strong> Volume testen, microfoons checken, EQ aanpassen aan ruimte</li>
                <li><strong>Lichttest:</strong> Alle lichteffecten testen en programmeren</li>
                <li><strong>Final check:</strong> Alle nummers voorbereiden, draaiboek doornemen</li>
              </ol>
            </div>

            <div>
              <Link to="/prijzen" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Bekijk onze pakketten
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link to="/contact" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Plan een locatie-check
              </Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-black text-gray-900 mb-2">⚠️ Let op</h4>
              <p className="text-gray-700">
                Sommige locaties hebben strikte opbouwtijden (bijv. kastelen, monumenten). Vraag dit altijd vooraf na bij je venue en communiceer het met ons. We plannen dan eerder of zorgen voor snellere setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide 4: Geluidslimieten */}
      <section id="gids-geluidslimieten" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <Volume2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">📖 Gids: Geluidslimieten</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Steeds meer locaties hebben geluidsbeperkingen. Hier is hoe je daarmee omgaat zonder de feestvibe te verliezen.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Standaard dB-limieten</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span><strong>95 dB:</strong> Strenge limiet (vaak monumenten, kastelen, woonwijken)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span><strong>100 dB:</strong> Normale limiet (meeste feestzalen, hotels)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>105 dB+:</strong> Ruime limiet (industriële locaties, grote zalen)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Geen limiet:</strong> Buiten locaties (ver van bebouwing), bepaalde evenemententerreinen</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zorgen wij voor volle dansvloer binnen limieten?</h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><strong>Cardioid speaker opstelling:</strong> Geluid gericht op dansvloer, niet naar meetpunt</li>
                <li><strong>Dynamische EQ:</strong> Lage frequenties (bas) strategisch doseren—voelt harder maar meet lager</li>
                <li><strong>Slimme nummerkeuze:</strong> Tracks met "punch" in 2-4kHz, niet alleen diepe bas</li>
                <li><strong>Peak management:</strong> Real-time monitoring, pieken voorkomen zonder energie te verliezen</li>
              </ol>
            </div>

            <div>
              <Link to="/contact" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Neem contact op voor locatie-advies
              </Link>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-black text-gray-900 mb-2">✅ Kevin's garantie</h4>
              <p className="text-gray-700">
                In 15 jaar hebben we nog nooit een event gehad waarbij de limiet werd overschreden. We meten continu en passen pro-actief aan. Jullie feest gaat door, ongeacht de limiet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide 5: Venue checklist */}
      <section id="gids-venue-checklist" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">📖 Gids: Venue-checklist</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Check deze punten bij je locatie om technische problemen op de dag zelf te voorkomen.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Essentiële checks voor de DJ</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Stroomvoorziening:</strong>
                    <p className="text-gray-700">Minimaal 2x 16A (230V) stopcontacten binnen 15 meter van DJ-positie. Aparte groep (niet delen met keuken!).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Positionering:</strong>
                    <p className="text-gray-700">Vrij zicht op dansvloer, niet achter pilaren. Genoeg ruimte (min. 3x2 meter) voor DJ-booth en speakers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Opbouwtijd:</strong>
                    <p className="text-gray-700">Wanneer mag de DJ binnen? Zijn er beperkingen (bijv. tijdens ceremonie)? We hebben 90-120 min nodig.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Geluidslimieten:</strong>
                    <p className="text-gray-700">Is er een dB-limiet? Waar hangt de meter? Tot hoe laat mag er muziek zijn?</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Toegang & parkeren:</strong>
                    <p className="text-gray-700">Waar kan de DJ laden/lossen? Is er parkeergelegenheid voor de bus?</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Contactpersoon:</strong>
                    <p className="text-gray-700">Wie is er van de locatie aanwezig op de dag? Telefoonnummer voor noodgevallen?</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <Link to="/regio" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Bekijk onze regio's
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link to="/contact" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → Plan een locatiebezoek
              </Link>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-black text-gray-900 mb-2">💡 Pro-tip van Kevin</h4>
              <p className="text-gray-700 italic">
                "Maak foto's van de ruimte (breed overzicht + close-ups van stopcontacten en DJ-plek) en stuur die door. Dan kunnen we vooraf al perfect voorbereiden en weten we precies wat we nodig hebben."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide 6: Microfoon & MC */}
      <section id="gids-microfoon-mc" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">📖 Gids: Microfoon & MC-services</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Van welkomstwoord tot ceremonie-begeleiding: zo zet je de microfoon en MC-rol optimaal in.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat valt onder MC-services?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Aankondigingen:</strong> Binnenkomst bruidspaar, eerste dans, taart aansnijden, speeches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Draaiboek-coördinatie:</strong> Signaleren wanneer iets gaat gebeuren, andere leveranciers aansturen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Interactie met gasten:</strong> Dansvloer vullen, spelletjes begeleiden, sfeer aanwakkeren</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Microfoon beheer:</strong> Zorgen dat sprekers op tijd een werkende microfoon hebben</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke microfoons gebruiken we?</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Draadloze handmicrofoons:</strong> Voor speeches, aankondigingen, gasten die iets willen zeggen</li>
                <li><strong>Headset microfoon:</strong> Voor DJ/MC als deze veel moet praten (optioneel)</li>
                <li><strong>Backup microfoon:</strong> Altijd aanwezig voor noodgevallen of dubbele sprekers</li>
              </ul>
            </div>

            <div>
              <Link to="/zakelijk-dj" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → MC voor bedrijfsevents
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link to="/bruiloft-dj" className="text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2">
                → MC voor bruiloften
              </Link>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-black text-gray-900 mb-2">⚖️ De balans</h4>
              <p className="text-gray-700">
                Een goede MC is <em>aanwezig maar niet opdringerig</em>. We stemmen vooraf af hoeveel presentatie je wilt: minimaal (alleen cruciale aankondigingen) of actief (tussen nummers door, interactie, humor). Het is jullie feest—wij passen ons aan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Freshness Block */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-gray-900">Deze kennisbank wordt continu uitgebreid</h3>
              <p className="text-gray-600 mt-2">Op basis van vragen van klanten en nieuwe ontwikkelingen in de branche</p>
            </div>
            <div className="text-center text-sm text-gray-500">
              <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="mt-2">
                Mis je een onderwerp? <Link to="/contact" className="text-blue-600 hover:text-orange-500 font-semibold">Laat het ons weten →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Over Kevin Froger - Entity Claiming for GEO */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Over Kevin Froger
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professionele allround DJ met 15+ jaar ervaring in heel Nederland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Wie is Kevin Froger?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kevin Froger is een professionele allround DJ uit Nederland met meer dan 15 jaar ervaring
                in de evenementenbranche. Sinds 2008 verzorgt hij DJ services voor bruiloften, bedrijfsfeesten,
                festivals en privé evenementen door heel Nederland.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Met een uitgebreide muziekbibliotheek van 50.000+ tracks in alle genres en state-of-the-art
                geluids- en lichtapparatuur zorgt Kevin voor de perfecte sfeer op elk evenement. Zijn expertise
                ligt in het aanvoelen van het publiek en het creëren van een onvergetelijke ervaring.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Werkgebied & Expertise</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-black text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Actief in 7 provincies
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">
                    Zuid-Holland, Noord-Holland, Utrecht, Noord-Brabant, Gelderland, Overijssel, Zeeland
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    1000+ succesvolle events
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">
                    Waaronder honderden bruiloften, 50+ festivals, en talloze bedrijfs- en privé feesten
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Specialisaties
                  </h4>
                  <p className="text-sm text-gray-600 ml-7">
                    Bruiloft DJ, bedrijfsfeest DJ, festival DJ, MC services, live mixing, muziekadvies
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-black text-gray-900 mb-6 text-center">Contactgegevens Kevin Froger</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Telefoon</p>
                <a href="tel:0645251333" className="text-blue-600 font-black hover:text-orange-500 transition-colors">
                  06 45 25 13 33
                </a>
              </div>
              <div>
                <Mail className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:booking@kevinfroger.nl" className="text-purple-600 font-black hover:text-orange-500 transition-colors break-all">
                  booking@kevinfroger.nl
                </a>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Website</p>
                <a href="https://kevinfroger.nl" className="text-green-600 font-black hover:text-orange-500 transition-colors">
                  kevinfroger.nl
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-3">Volg Kevin Froger op social media:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="https://www.instagram.com/djkevinfroger/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-orange-500 font-semibold transition-colors">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/kevin-froger-b23aa263/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-orange-500 font-semibold transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/KevinFroger.nl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-orange-500 font-semibold transition-colors">
                  Facebook
                </a>
                <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-orange-500 font-semibold transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
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