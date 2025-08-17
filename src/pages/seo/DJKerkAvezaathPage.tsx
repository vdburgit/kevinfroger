import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Church } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJKerkAvezaathPage = () => {
  const services = [
    {
      title: "Bruiloften Kerk-Avezaath",
      description: "Romantische bruiloft DJ in het kleine dorp",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Privé Feesten",
      description: "Gezellige familiefeesten in Kerk-Avezaath",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Dorpsfeesten",
      description: "Lokale evenementen en dorpsfeesten",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Jubilea",
      description: "Speciale gelegenheden in het dorp",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "10+", label: "Jaar in Kerk-Avezaath", icon: <Award className="w-8 h-8" /> },
    { number: "25+", label: "Events Kerk-Avezaath", icon: <Calendar className="w-8 h-8" /> },
    { number: "15+", label: "Dorps Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "10+", label: "Dorpsfeesten", icon: <Building className="w-8 h-8" /> }
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
              <Church className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">KERK-AVEZAATH</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">KERK-AVEZAATH</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Kerk-Avezaath. Van dorpsfeesten tot bruiloften, 
              van familiebijeenkomsten tot jubilea - altijd de perfecte sfeer in het kleine dorp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN KERK-AVEZAATH
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
          {/* SEO Content */}
          <div className="prose prose-lg max-w-none">
            <h2>DJ Kerk-Avezaath - Professionele DJ Services Kleine Dorpen</h2>
            <p>Zoek je een DJ in Kerk-Avezaath? DJ Kevin Froger verzorgt professionele DJ services in kleine dorpen en gemeenschappen. Van dorpsfeesten tot bruiloften - altijd persoonlijke aandacht voor lokale evenementen.</p>
            
            <h3>DJ Kerk-Avezaath - Lokale Expertise</h3>
            <p>Kevin kent de lokale gemeenschap van Kerk-Avezaath en omgeving. Van dorpshuizen tot lokale verenigingen - Kevin past zijn service aan de intieme sfeer van kleine dorpen.</p>
            
            <h3>Bruiloft DJ Kerk-Avezaath</h3>
            <p>Voor bruiloften in Kerk-Avezaath biedt Kevin persoonlijke begeleiding. Van kerkelijke ceremonies tot recepties in dorpshuizen - altijd aangepast aan de lokale tradities.</p>
            
            <h3>Dorpsfeest DJ Kerk-Avezaath</h3>
            <p>Kevin heeft ervaring met dorpsfeesten en lokale evenementen in Kerk-Avezaath. Van koningsdag tot oogstfeesten - altijd de juiste muziek voor de gemeenschap.</p>
            
            <h3>DJ Kleine Dorpen Betuwe</h3>
            <p>Naast Kerk-Avezaath verzorgt Kevin ook events in andere kleine dorpen in de Betuwe: Kapel-Avezaath, Zoelen, Wadenoijen en omliggende gemeenschappen.</p>
            
            <h3>DJ Boeken Kerk-Avezaath</h3>
            <p>Wil je een DJ boeken in Kerk-Avezaath? Kevin Froger begrijpt de behoeften van kleine gemeenschappen en biedt persoonlijke service voor dorpsevenementen.</p>
            
            <h3>Populaire DJ Services Kerk-Avezaath</h3>
            <p>DJ Kerk-Avezaath, DJ kleine dorpen, dorpsfeest DJ, bruiloft DJ Kerk-Avezaath, lokale DJ Betuwe, gemeenschap DJ, traditionele DJ, persoonlijke DJ service.</p>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ SERVICES
              <span className="block text-blue-700">KERK-AVEZAATH</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in het dorp
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-blue-700">IN KERK-AVEZAATH</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Kerk-Avezaath onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Kerk-Avezaath evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJKerkAvezaathPage;