import React from 'react';
import { Star, Building, Award, ArrowRight, MessageCircle, Phone, Briefcase, MapPin, Users as UsersIcon, CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import PartnersSection from '../components/PartnersSection';

const PortfolioPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Portfolio DJ Kevin Froger | Reviews | Exclusieve DJ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio DJ Kevin Froger - exclusieve DJ Nederland. Google reviews, partners en referenties. 15+ jaar ervaring, 1000+ events!');
    }
    
    // Add structured data for portfolio page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Portfolio DJ Kevin Froger",
      "description": "Portfolio, Google reviews en partners van DJ Kevin Froger",
      "url": "https://kevinfroger.nl/portfolio",
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
  const googleStats = [
  
  ];

  const achievements = [
    {
      title: "GOOGLE REVIEWS",
      description: "Uitstekende beoordelingen van tevreden klanten",
      icon: <Star className="w-10 h-10" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "VERTROUWDE PARTNERS",
      description: "Samenwerking met top bedrijven en organisaties",
      icon: <Building className="w-10 h-10" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "BEWEZEN KWALITEIT",
      description: "15+ jaar ervaring met 1000+ succesvolle evenementen",
      icon: <Award className="w-10 h-10" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Case Studies - Real-world examples
  const cases = [
    {
      id: 1,
      eventType: "Bruiloft",
      location: "Rotterdam, Maassilo",
      region: "Zuid-Holland",
      date: "Oktober 2024",
      title: "Urban bruiloft met 300 gasten in industriële locatie",
      challenge: "Venue zonder akoestische demping, strenge geluidslimiet 95dB, breed publiek (20-75 jaar), high-end verwachtingen",
      solution: "2x line-array speakers in cardioid-opstelling, dynamische EQ per tijdslot, 3-fase muziekflow (lounge → dinner → party), real-time dB-monitoring",
      result: "Hele avond binnen limiet gebleven, volle dansvloer van 22:00-02:00, 5-sterren review + aanbeveling aan 3 andere stellen",
      testimonial: "Kevin heeft de perfecte balans gevonden tussen volume en sfeer. Zelfs onze oudere gasten vonden het niet te hard, terwijl de dansvloer constant vol stond!",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 2,
      eventType: "Bedrijfsfeest",
      location: "Utrecht, Jaarbeurs",
      region: "Utrecht",
      date: "December 2024",
      title: "Kerstborrel 500 medewerkers met live-act integratie",
      challenge: "Live-band speelt 2 sets, DJ moet naadloos overnemen, networking-deel (18-20u) vs party-deel (20-23u), diverse leeftijden en muzieksmaken",
      solution: "Shared backline met band, pre-sync setlist voor smooth handovers, aparte DJ-booth met zichtlijn naar stage manager, lounge-mix tijdens networking → upbeat party na 20:00",
      result: "Zero downtime tussen acts, 85% van gasten bleef tot het einde (normaal ~60%), opdrachtgever boekt opnieuw voor 2025 + referral naar andere BV's in concern",
      testimonial: "De overgang van band naar DJ was zo smooth dat niemand het merkte. Kevin voelde perfect aan wanneer hij de energie moest verhogen.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 3,
      eventType: "Verjaardag",
      location: "Den Haag, Privé villa",
      region: "Zuid-Holland",
      date: "September 2024",
      title: "50-jarig jubileum met 120 gasten in tuin + binnen",
      challenge: "Outdoor ceremonie (17:00), indoor diner (18:30), outdoor party (21:00), weer-afhankelijk, 2 ruimtes simultaan van geluid voorzien",
      solution: "Draadloos systeem met zone-control, backup indoor setup voor regen, seamless overgangen tussen locaties, muziek afgestemd op 'golden oldies' meets modern",
      result: "Weer bleef goed, geen technische issues, perfecte flow tussen momenten, jarige gaf aan dat muziek 'de rode draad' was die alles samensmeedde",
      testimonial: "We hadden 3 generaties op ons feest en iedereen heeft genoten. Kevin wist precies wanneer hij welk genre moest draaien.",
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 4,
      eventType: "Bruiloft",
      location: "Delft, Prinsenhof",
      region: "Zuid-Holland",
      date: "Juni 2024",
      title: "Kasteel-bruiloft met strikte monumentenregels",
      challenge: "Monument met 98dB limiet + sluitingstijd 00:00, geen vaste stroomvoorziening in feestzaal, historisch interieur (geen schroeven/spijkers), ceremonie + diner + feest in verschillende ruimtes",
      solution: "Accu-powered speaker systemen (geen kabels door monumentale gangen), geluidsmeter op DJ-booth, pro-actieve volume management, mobiele setup in 45 min verplaatsbaar tussen ruimtes",
      result: "Nooit boven 96dB gekomen, monumentenwacht complimenteerde ons over 'minst invasieve setup ooit', bruidspaar kreeg extra uur (tot 01:00) vanwege nul klachten buurt",
      testimonial: "We waren bang dat de geluidslimiet het feest zou verpesten, maar Kevin maakte er juist een voordeel van. Iedereen kon praten én dansen!",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 5,
      eventType: "Zakelijk",
      location: "Amsterdam, Beurs van Berlage",
      region: "Noord-Holland",
      date: "November 2024",
      title: "Product launch event met 400 gasten en CEO speech",
      challenge: "Strak draaiboek met live product reveal (20:30), CEO speech (21:00) + Q&A, internationale gasten (Engels + Nederlands), corporate branding moet overal zichtbaar blijven",
      solution: "LED screen integratie met product visuals, draadloze lavaliermicrofoon voor CEO + backup handheld, playlist fully approved door marketing (brand-aligned), seamless switch tussen background → presentatie → party modes",
      result: "Product reveal op exact juiste moment (gesynct met videomuur), CEO speech zonder enkel technisch probleem, 92% van gasten bleef tot einde (target was 80%), klant vroeg direct offerte voor 2025 event",
      testimonial: "Kevin was niet 'just a DJ' maar een volwaardige technische partner. Hij dacht mee over draaiboek en lost problemen op voordat wij ze zagen.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden" role="banner" aria-labelledby="reviews-hero-title">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 id="reviews-hero-title" className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              GOOGLE REVIEWS
              <span className="block text-orange-400">& PARTNERS</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Ontdek wat onze klanten zeggen en bekijk de topbedrijven die vertrouwen op DJ Kevin Froger. 
              Van 5-sterren reviews tot internationale partnerships.
            </p>
            
            <div className="md:hidden mobile-btn-container mb-16 px-4">
              <a
                href="#google-reviews"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('google-reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group mobile-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold text-lg w-full min-h-[60px] rounded-2xl flex items-center justify-center mb-4"
              >
                <Star className="w-6 h-6 inline-block mr-3" />
                BEKIJK ALLE REVIEWS
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="mobile-btn border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg font-bold text-lg w-full min-h-[60px] rounded-2xl flex items-center justify-center"
              >
                BOEK NU
              </a>
            </div>

            {/* Google Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {googleStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM KIEZEN
              <span className="block text-blue-700">VOOR KEVIN?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bewezen kwaliteit door reviews en partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{achievement.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <div id="google-reviews">
        <GoogleReviewsSection />
      </div>

      {/* Partners Section */}
      <PartnersSection />

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4">
              Cases: hoe we feesten laten slagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van intieme verjaardagen tot grote bedrijfsevents - concrete voorbeelden van hoe we uitdagingen oplossen
            </p>
          </div>

          <div className="space-y-12">
            {cases.map((c, i) => (
              <article
                key={c.id}
                id={`case-${c.id}`}
                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full">
                    {c.icon}
                    <span className="text-sm font-bold">{c.eventType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">{c.location}</span>
                  </div>
                  <div className="text-sm text-gray-500">|</div>
                  <span className="text-sm text-gray-600">{c.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8">{c.title}</h3>

                {/* Three Columns */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-sm text-orange-600 mb-3">
                      <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-xs">1</span>
                      VRAAGSTUK
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-sm text-blue-600 mb-3">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs">2</span>
                      AANPAK
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-sm text-green-600 mb-3">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs">3</span>
                      RESULTAAT
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{c.result}</p>
                  </div>
                </div>

                {/* Testimonial */}
                {c.testimonial && (
                  <blockquote className="mt-8 p-6 bg-white rounded-xl border-l-4 border-blue-600">
                    <p className="text-gray-700 italic leading-relaxed">"{c.testimonial}"</p>
                  </blockquote>
                )}

                {/* Region Link */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to={`/regio/${c.region.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-blue-600 hover:text-orange-500 font-semibold inline-flex items-center gap-2 group"
                  >
                    <MapPin className="w-4 h-4" />
                    Meer events in {c.region}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              Herken je jouw situatie in een van deze cases?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Elke locatie en elk feest is uniek. Laat ons weten wat jouw uitdagingen zijn en we denken mee over de beste aanpak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
              >
                Bespreek jouw event
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/prijzen"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Bekijk pakketten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            SLUIT JE AAN BIJ
            <span className="block text-orange-400">TEVREDEN KLANTEN</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Word onderdeel van onze groeiende lijst van tevreden klanten en partners. 
            Ervaar zelf waarom bedrijven en particulieren kiezen voor DJ Kevin Froger.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              BOEK NU DIRECT
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0645251333"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              <Phone className="w-6 h-6 inline-block mr-3" />
              BEL DIRECT
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border-3 border-green-400 text-green-100 px-10 py-5 rounded-full font-black text-xl hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;