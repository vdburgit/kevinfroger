import React from 'react';
import { Mic, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Volume2, MessageSquare } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJMCServicesPage = () => {
  const services = [
    {
      title: "DJ & MC Bruiloft",
      description: "Complete begeleiding van ceremonie tot feestavond",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "DJ & MC Bedrijfsfeest",
      description: "Professionele presentatie en entertainment",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "DJ & MC Festival",
      description: "Crowd interaction en high-energy performance",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    },
    {
      title: "DJ & MC Event",
      description: "Complete entertainment voor alle evenementen",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const mcServices = [
    {
      title: "Ceremonie Begeleiding",
      description: "Professionele begeleiding van trouwceremonies en officiële momenten",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Crowd Interaction",
      description: "Interactie met het publiek voor extra energie en betrokkenheid",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Aankondigingen",
      description: "Professionele aankondigingen en presentaties tijdens events",
      icon: <Volume2 className="w-8 h-8" />
    },
    {
      title: "Entertainment Host",
      description: "Complete entertainment hosting van begin tot eind",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar MC Ervaring", icon: <Mic className="w-8 h-8" /> },
    { number: "1000+", label: "MC Events", icon: <MessageSquare className="w-8 h-8" /> },
    { number: "500+", label: "Bruiloft MC", icon: <Heart className="w-8 h-8" /> },
    { number: "100%", label: "DJ & MC Combo", icon: <Music className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Mic className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">DJ & MC SERVICES</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ & MC
              <span className="block text-orange-400">KEVIN FROGER</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              DJ & MC services in één persoon. Van professionele presentatie tot energieke crowd interaction - 
              complete entertainment voor elk evenement met de perfecte combinatie van muziek en presentatie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Mic className="w-6 h-6 inline-block mr-3" />
                BOEK DJ & MC
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
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

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ & MC
              <span className="block text-blue-700">SERVICES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete entertainment met DJ en MC services gecombineerd
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MC Services Features */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              MC
              <span className="block text-orange-500">EXPERTISE</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mcServices.map((service, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ MC Services - Professionele DJ & MC Combinatie</h2>
            <p>Zoek je DJ MC services? DJ Kevin Froger combineert professionele DJ skills met ervaren MC services. Eén persoon voor complete entertainment van begin tot eind.</p>
            
            <h3>DJ MC Services - Voordelen Combinatie</h3>
            <p>De voordelen van DJ & MC in één persoon: betere afstemming, naadloze overgangen, kosteneffectief, één aanspreekpunt, en perfecte timing tussen muziek en presentatie.</p>
            
            <h3>MC DJ Bruiloft</h3>
            <p>Voor bruiloften biedt Kevin complete MC DJ services: ceremonie begeleiding, aankondigingen, eerste dans presentatie, spelletjes leiden, en feestavond entertainment.</p>
            
            <h3>MC DJ Bedrijfsfeest</h3>
            <p>Bij bedrijfsfeesten zorgt Kevin voor professionele MC services: welkomstwoord, presentaties begeleiden, award ceremonies, en zakelijke entertainment.</p>
            
            <h3>MC DJ Festival</h3>
            <p>Voor festivals combineert Kevin DJ sets met MC skills: crowd interaction, energy building, aankondigingen, en publiek entertainment tussen acts.</p>
            
            <h3>DJ Presentator Services</h3>
            <p>Kevin is ook ervaren presentator en kan ceremonies, galas, en officiële evenementen professioneel begeleiden met de juiste tone of voice.</p>
            
            <h3>MC DJ Boeken</h3>
            <p>Wil je een MC DJ boeken? Kevin Froger biedt de perfecte combinatie van DJ en MC services voor complete entertainment op elk evenement.</p>
            
            <h3>Populaire DJ MC Services</h3>
            <p>DJ MC services, MC DJ, DJ presentator, entertainment host, ceremony MC, crowd interaction DJ, professional MC DJ, event host DJ, wedding MC DJ.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ & MC
              <span className="block text-blue-700">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor complete DJ & MC services?
            </p>
          </div>
          <ContactForm eventType="DJ & MC Services boeking" />
        </div>
      </section>
    </div>
  );
};

export default DJMCServicesPage;