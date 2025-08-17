import React from 'react';
import { Euro, Clock, Users, CheckCircle, ArrowRight, Calendar, Music, Award, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PricingSection from '../components/PricingSection';

const PricingPage = () => {
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
      name: "Extra Geluidspunt",
      price: "Op aanvraag",
      description: "Aanvullende speakers voor grote locaties"
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
      title: "Duur van het Event",
      description: "Van 4 uur tot complete dagbegeleiding"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Aantal Gasten",
      description: "Bepaalt de benodigde apparatuur"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Type Evenement",
      description: "Elke gelegenheid heeft eigen behoeften"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Extra Services",
      description: "MC, verlichting, speciale effecten"
    }
  ];

  const benefits = [
    "Transparante prijzen zonder verborgen kosten",
    "Gratis offerte binnen 24 uur",
    "Flexibele pakketten op maat",
    "Professionele apparatuur inbegrepen",
    "15+ jaar ervaring gegarandeerd",
    "Backup plan en apparatuur standaard",
    "Persoonlijke voorbereiding altijd",
    "Tevredenheidsgarantie"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              TRANSPARANTE
              <span className="block text-orange-400">PRIJZEN</span>
              <span className="block text-orange-400">VOOR ELKE</span>
              <span className="block text-orange-400">GELEGENHEID</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Duidelijke pakketten zonder verborgen kosten. Van intieme feesten tot grote evenementen - wij hebben voor elke gelegenheid en elk budget de perfecte oplossing.
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
                GRATIS OFFERTE
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