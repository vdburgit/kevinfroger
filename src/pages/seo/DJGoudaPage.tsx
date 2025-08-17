import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Cookie } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJGoudaPage = () => {
  const services = [
    {
      title: "Bruiloften Gouda",
      description: "Romantische bruiloft DJ in de kaasstad",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in historisch Gouda",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Privé Feesten",
      description: "Familiefeesten in Gouda",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen in de kaasstad",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar in Gouda", icon: <Award className="w-8 h-8" /> },
    { number: "60+", label: "Events in Gouda", icon: <Calendar className="w-8 h-8" /> },
    { number: "40+", label: "Goudse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "20+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
              <Cookie className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">GOUDA</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">GOUDA</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Gouda. Van het historische centrum tot moderne wijken, 
              van bruiloften in de kaasstad tot bedrijfsfeesten - altijd de perfecte sfeer in Gouda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN GOUDA
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
              DJ SERVICES
              <span className="block text-blue-700">GOUDA</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de kaasstad
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

      {/* SEO Content Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Gouda - Professionele DJ Services Kaasstad</h2>
            <p>Zoek je een DJ in Gouda? DJ Kevin Froger verzorgt professionele DJ services in de kaasstad. Van bruiloften in historische panden tot bedrijfsfeesten - altijd de perfecte sfeer in Gouda.</p>
            
            <h3>DJ Gouda - Alle Wijken</h3>
            <p>Kevin is actief in heel Gouda: DJ Gouda Centrum, DJ Gouda Noord, DJ Gouda Zuid, DJ Gouda Oost, DJ Gouda West, DJ Korte Akkeren, DJ Goverwelle, DJ Bloemendaal, DJ Plaswijck, DJ Kort Haarlem.</p>
            
            <h3>Bruiloft DJ Gouda</h3>
            <p>Voor bruiloften in Gouda heeft Kevin meer dan 40 succesvolle events begeleid. Van Sint-Janskerk tot Goudse Waag, van Museum Gouda tot historische panden - Kevin maakt jullie bruiloft onvergetelijk in de kaasstad.</p>
            
            <h3>Bedrijfsfeest DJ Gouda</h3>
            <p>Gouda heeft een mix van traditionele en moderne bedrijven. Kevin verzorgt bedrijfsfeesten voor lokale ondernemingen, van kaasproducenten tot moderne tech companies.</p>
            
            <h3>DJ Kaasmarkt Gouda</h3>
            <p>De beroemde kaasmarkt van Gouda is een toeristische trekpleister. Kevin heeft ervaring met events rondom de kaasmarkt en andere toeristische evenementen.</p>
            
            <h3>Festival DJ Gouda</h3>
            <p>Van Gouda bij Kaarslicht tot zomerfestivals - Kevin heeft ervaring met alle soorten festivals in de kaasstad. Altijd historische sfeer gecombineerd met moderne entertainment.</p>
            
            <h3>DJ Boeken Gouda</h3>
            <p>Wil je een DJ boeken in Gouda? Kevin Froger kent alle locaties van het centrum tot de buitenwijken. Professionele DJ services voor de kaasstad.</p>
            
            <h3>Populaire DJ Services Gouda</h3>
            <p>DJ Gouda centrum, DJ kaasstad, bruiloft DJ Gouda, bedrijfsfeest DJ Gouda, historische DJ Gouda, kaasmarkt DJ, professionele DJ Gouda.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-blue-700">IN GOUDA</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Gouda onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Gouda evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJGoudaPage;