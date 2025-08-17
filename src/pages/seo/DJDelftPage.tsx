import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Beaker } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJDelftPage = () => {
  const services = [
    {
      title: "Bruiloften Delft",
      description: "Romantische bruiloft DJ in de blauwe stad",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Studentenfeesten TU Delft",
      description: "DJ voor technische universiteit evenementen",
      icon: <Beaker className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in historisch Delft",
      icon: <Building className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen in de technische stad",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar in Delft", icon: <Award className="w-8 h-8" /> },
    { number: "80+", label: "Events in Delft", icon: <Calendar className="w-8 h-8" /> },
    { number: "50+", label: "Delftse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "30+", label: "TU Delft Events", icon: <Beaker className="w-8 h-8" /> }
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
              <Beaker className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">DELFT</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">DELFT</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Delft. Van het centrum tot TU Delft, 
              van bruiloften in de blauwe stad tot studentenfeesten - altijd de perfecte sfeer in de technische stad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN DELFT
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
              <span className="block text-blue-700">DELFT</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de blauwe stad
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
          <div className="prose prose-lg max-w-none">
            <h2>DJ Delft - Professionele DJ Services Blauwe Stad</h2>
            <p>Zoek je een DJ in Delft? DJ Kevin Froger verzorgt professionele DJ services in de blauwe stad. Van bruiloften in historische panden tot studentenfeesten op TU Delft - altijd de perfecte sfeer in de technische stad.</p>
            
            <h3>DJ Delft - Alle Wijken</h3>
            <p>Kevin is actief in heel Delft: DJ Delft Centrum, DJ TU Delft, DJ Delft Noord, DJ Delft Zuid, DJ Delft Oost, DJ Delft West, DJ Vrijenban, DJ Voorhof, DJ Buitenhof, DJ Tanthof, DJ Schieweg, DJ Wippolder.</p>
            
            <h3>Bruiloft DJ Delft</h3>
            <p>Voor bruiloften in Delft heeft Kevin meer dan 50 succesvolle events begeleid. Van Prinsenhof tot Nieuwe Kerk, van Museum Paul Tetar van Elven tot Botanische Tuin - Kevin maakt jullie bruiloft onvergetelijk in de blauwe stad.</p>
            
            <h3>Studentenfeest DJ Delft</h3>
            <p>TU Delft is een van de beste technische universiteiten ter wereld. Kevin heeft ervaring met studentenfeesten, disputen, verenigingsfeesten en technische gala's op de campus.</p>
            
            <h3>Bedrijfsfeest DJ Delft</h3>
            <p>Delft heeft veel technische bedrijven en startups. Kevin verzorgt bedrijfsfeesten voor tech companies, engineering firms en innovatieve ondernemingen in de stad.</p>
            
            <h3>DJ TU Delft Campus</h3>
            <p>De TU Delft campus biedt moderne locaties voor evenementen. Kevin heeft ervaring met events in de Aula, faculteitsgebouwen en andere universitaire locaties.</p>
            
            <h3>DJ Boeken Delft</h3>
            <p>Wil je een DJ boeken in Delft? Kevin Froger kent alle locaties van het centrum tot de universiteit. Professionele DJ services voor de blauwe stad.</p>
            
            <h3>Populaire DJ Services Delft</h3>
            <p>DJ Delft centrum, DJ TU Delft, studentenfeest DJ Delft, bruiloft DJ Delft, bedrijfsfeest DJ Delft, technische DJ, blauwe stad DJ, professionele DJ Delft.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-blue-700">IN DELFT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Delft onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Delft evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJDelftPage;