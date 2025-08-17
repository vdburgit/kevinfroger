import React from 'react';
import { Euro, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Globe, Clock, Target } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const GoedkopeDJPage = () => {
  const services = [
    {
      title: "Goedkope DJ Bruiloft",
      description: "Betaalbare bruiloft DJ zonder kwaliteitsverlies",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      price: "Vanaf €500",
      features: ["4 uur DJ", "Basis apparatuur", "Muziekwensen", "Professionele uitvoering"]
    },
    {
      title: "Goedkope DJ Verjaardag",
      description: "Betaalbare DJ voor verjaardagsfeesten",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      price: "Vanaf €350",
      features: ["4 uur DJ", "Party muziek", "Alle leeftijden", "Eigen apparatuur"]
    },
    {
      title: "Goedkope DJ Bedrijfsfeest",
      description: "Betaalbare corporate DJ met professionele uitstraling",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      price: "Vanaf €400",
      features: ["Zakelijke sfeer", "Representatief", "Flexibele muziek", "MC services"]
    },
    {
      title: "Goedkope DJ Festival",
      description: "Betaalbare festival DJ voor grote evenementen",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      price: "Vanaf €600",
      features: ["High-energy", "Crowd control", "Power sets", "Professioneel"]
    }
  ];

  const benefits = [
    {
      title: "GOEDKOOP MAAR NIET GOEDKOOP",
      description: "Betaalbare prijzen zonder concessies aan kwaliteit of professionaliteit",
      icon: <Euro className="w-10 h-10" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "TRANSPARANTE PRIJZEN",
      description: "Geen verborgen kosten, duidelijke all-in prijzen inclusief apparatuur",
      icon: <Target className="w-10 h-10" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "KWALITEIT GEGARANDEERD",
      description: "15+ jaar ervaring en professionele apparatuur voor elke boeking",
      icon: <Award className="w-10 h-10" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "€350", label: "Vanaf Prijs", icon: <Euro className="w-8 h-8" /> },
    { number: "15+", label: "Jaar Ervaring", icon: <Award className="w-8 h-8" /> },
    { number: "1000+", label: "Tevreden Klanten", icon: <Star className="w-8 h-8" /> },
    { number: "100%", label: "Kwaliteit", icon: <CheckCircle className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-blue-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Euro className="w-10 h-10 text-green-400" />
              <span className="text-green-400 font-black text-xl tracking-wide">GOEDKOPE DJ</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              GOEDKOPE DJ
              <span className="block text-green-400">MET KWALITEIT</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-green-100 leading-relaxed max-w-4xl mx-auto">
              Goedkope DJ gezocht? DJ Kevin Froger biedt betaalbare DJ services vanaf €350. 
              Professionele DJ met eigen apparatuur, ervaren entertainer, perfecte DJ voor elk budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105"
              >
                <Euro className="w-6 h-6 inline-block mr-3" />
                GOEDKOPE DJ BOEKEN
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-green-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-green-400 mb-2">{stat.number}</div>
                  <div className="text-green-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              GOEDKOPE DJ
              <span className="block text-green-600">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Betaalbare DJ pakketten voor elk budget en evenement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="text-2xl font-black text-green-500 mb-6">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-black text-sm hover:from-green-600 hover:to-blue-700 transition-all duration-200"
                  >
                    BOEK GOEDKOPE DJ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM GOEDKOPE DJ
              <span className="block text-green-600">KEVIN FROGER?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{benefit.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Goedkope DJ - Betaalbare DJ Services Met Kwaliteit</h2>
            <p>Zoek je een goedkope DJ? DJ Kevin Froger biedt betaalbare DJ services zonder kwaliteitsverlies. Professionele DJ vanaf €350, inclusief apparatuur en complete service.</p>
            
            <h3>Goedkope DJ - Wat Krijg Je?</h3>
            <p>Bij een goedkope DJ van Kevin krijg je: professionele DJ met 15+ jaar ervaring, eigen geluids- en lichtapparatuur, persoonlijke voorbereiding, live mixing (geen playlists), MC services, en backup apparatuur.</p>
            
            <h3>Betaalbare DJ Voor Alle Events</h3>
            <p>Goedkope DJ bruiloft vanaf €500, goedkope DJ verjaardag vanaf €350, goedkope DJ bedrijfsfeest vanaf €400, goedkope DJ festival vanaf €600. Altijd transparante prijzen zonder verborgen kosten.</p>
            
            <h3>Goedkope DJ Met Apparatuur</h3>
            <p>Kevin brengt altijd professionele apparatuur mee: Pioneer mixers, JBL speakers, draadloze microfoons, LED verlichting, en backup systemen. Goedkope DJ inclusief complete setup.</p>
            
            <h3>Waarom Goedkope DJ Kevin Froger?</h3>
            <p>Kevin biedt goedkope DJ services omdat hij direct werkt zonder tussenpersonen. Geen dure overhead, maar wel professionele kwaliteit. Goedkope DJ die inspeelt op het publiek.</p>
            
            <h3>Goedkope DJ Boeken</h3>
            <p>Wil je een goedkope DJ boeken? Neem contact op voor een vrijblijvende offerte. Kevin biedt altijd de beste prijs-kwaliteit verhouding voor DJ services.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK GOEDKOPE DJ
              <span className="block text-green-600">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor betaalbare DJ services van topkwaliteit?
            </p>
          </div>
          <ContactForm eventType="Goedkope DJ boeking" />
        </div>
      </section>
    </div>
  );
};

export default GoedkopeDJPage;