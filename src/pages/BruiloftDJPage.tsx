import { Heart, Music, Users, CheckCircle, ArrowRight, Star, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useSEO, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '../hooks/useSEO';

const BruiloftDJPage = () => {
  // Enhanced SEO configuration for wedding DJ page
  useSEO({
    title: 'Bruiloft DJ – persoonlijk & professioneel | Kevin Froger',
    description: 'Openingsdans tot knallend slot. Complete DJ‑show met licht & geluid, afgestemd op jullie dag. 15+ jaar ervaring, 500+ bruiloften gedraaid. Snel een prijs via WhatsApp of ontvang een offerte.',
    keywords: 'bruiloft dj, bruiloft dj nederland, bruiloft dj zuid-holland, trouw dj, dj bruiloft, bruiloft muziek, ceremonie muziek, openingsdans, feest dj bruiloft',
    canonical: 'https://kevinfroger.nl/bruiloft-dj',
    ogType: 'website',
    ogImage: 'https://kevinfroger.nl/images/dj-kevin-froger-bruiloft-scaled.jpeg',
    ogImageAlt: 'DJ Kevin Froger - Bruiloft DJ met complete show setup',
    twitterCard: 'summary_large_image',
    jsonLd: [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Bruiloft DJ', url: '/bruiloft-dj' }
      ]),
      generateServiceSchema({
        name: 'DJ voor bruiloft',
        description: 'Complete bruiloft DJ service met licht, geluid en MC services. Persoonlijke begeleiding van ceremonie tot late avond voor jullie perfecte bruiloft.',
        areaServed: ['Nederland', 'Zuid-Holland', 'Noord-Brabant', 'Gelderland', 'Utrecht', 'Overijssel', 'Noord-Holland', 'Zeeland'],
        priceRange: '€750-€2500'
      }),
      generateFAQSchema([
        {
          question: 'Kunnen we onze favoriete muziek doorgeven?',
          answer: 'Zeker. Vooraf verzamelen we jullie wensen en doornemen we alles. Op de avond zelf speel ik in op de sfeer en verzoekjes.'
        },
        {
          question: 'Wat is inbegrepen bij de show?',
          answer: 'Complete set met licht en geluid, microfoon, op- & afbouw en voorbereiding. Alles in overleg met de locatie.'
        },
        {
          question: 'Hoe snel ontvangen we een prijsindicatie?',
          answer: 'Binnen enkele minuten via WhatsApp of e‑mail krijg je een indicatie op basis van duur, locatie en setup.'
        },
        {
          question: 'Begeleid je ook de ceremonie?',
          answer: 'Ja, als dat gewenst is zorgen we voor muziek tijdens de ceremonie, vanaf binnenkomst tot ontvangst.'
        }
      ])
    ]
  });

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ceremonie & Ontvangst",
      description: "Muzikale begeleiding vanaf binnenkomst tot borrel"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Diner & Speeches",
      description: "Sfeervolle achtergrondmuziek en microfoon voor toespraken"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Openingsdans",
      description: "Perfecte timing en geluid voor jullie eerste dans samen"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Feestavond",
      description: "Live DJ set afgestemd op jullie gasten en wensen"
    }
  ];

  const usps = [
    "Van ceremonie tot laatste plaat – complete begeleiding",
    "Direct contact met de DJ – geen verhuurbedrijf",
    "Eigen licht- en geluidapparatuur uit één hand",
    "500+ bruiloften ervaring – ik weet wat werkt"
  ];

  const process = [
    {
      step: "01",
      title: "INTAKE",
      description: "Kennismaking, wensen bespreken en prijsindicatie binnen 24 uur",
      icon: <Heart className="w-8 h-8" />
    },
    {
      step: "02",
      title: "VOORBEREIDING",
      description: "Muziekwensen verzamelen, afstemming met locatie en draaiboek opstellen",
      icon: <Music className="w-8 h-8" />
    },
    {
      step: "03",
      title: "OPBOUW",
      description: "Ruim voor aanvang installatie opbouwen en testen",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      step: "04",
      title: "UITVOERING",
      description: "Van ceremonie tot feestavond – live mixing op jullie publiek",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const faq = [
    {
      question: "Kunnen we onze favoriete muziek doorgeven?",
      answer: "Zeker. Vooraf verzamelen we jullie wensen en doornemen we alles. Op de avond zelf speel ik in op de sfeer en verzoekjes."
    },
    {
      question: "Wat is inbegrepen bij de show?",
      answer: "Complete set met licht en geluid, microfoon, op- & afbouw en voorbereiding. Alles in overleg met de locatie."
    },
    {
      question: "Hoe snel ontvangen we een prijsindicatie?",
      answer: "Binnen enkele minuten via WhatsApp of e‑mail krijg je een indicatie op basis van duur, locatie en setup."
    },
    {
      question: "Regel jij de techniek?",
      answer: "Ja, inclusief microfoon en passende set. Ik stem alles vooraf af met de locatie voor vlotte opbouw."
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white" role="banner" aria-labelledby="bruiloft-hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-200" />
          <h1 id="bruiloft-hero-title" className="text-4xl lg:text-6xl font-black mb-6">
            De bruiloft DJ die sfeer maakt – persoonlijk & professioneel
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Van openingsdans tot knallend slot: ik zorg voor een volle dansvloer met muziek die bij jullie past. 
            De techniek neem ik mee en ik stem alles af met de locatie. Jullie wensen bespreken we vooraf; 
            op de avond zelf lees ik de zaal en speel ik in op verzoekjes.
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
              <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-pink-900 transition-all duration-300"
            >
              VRAAG OFFERTE AAN
            </a>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAT JE KRIJGT
              <span className="block text-pink-500">BIJ JOUW BRUILOFT</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-pink-50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Wat je krijgt:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              HOE WERKT
              <span className="block text-pink-500">HET?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-pink-500 font-black text-lg mb-4">{item.step}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VEELGESTELDE
              <span className="block text-pink-500">VRAGEN</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
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
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              BOEK EEN BRUILOFT DJ IN JOUW REGIO
            </h2>
            <p className="text-xl text-gray-600">
              Beschikbaar voor bruiloften door heel Nederland
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {regions.map((region, index) => (
              <a
                key={index}
                href={region.href}
                className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <MapPin className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900 group-hover:text-pink-600 transition-colors">
                  {region.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN JULLIE
              <span className="block text-pink-500">DROOMBRUILOFT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Laten we samen jullie perfecte dag plannen. Vul het formulier in voor een vrijblijvend gesprek.
            </p>
          </div>
          <ContactForm eventType="bruiloft" />
        </div>
      </section>
    </div>
  );
};

export default BruiloftDJPage;