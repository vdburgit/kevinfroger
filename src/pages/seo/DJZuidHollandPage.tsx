import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Globe } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJZuidHollandPage = () => {
  const services = [
    {
      title: "Bruiloften Zuid-Holland",
      description: "Romantische bruiloft DJ door heel Zuid-Holland",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in alle steden van Zuid-Holland",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen door heel de provincie",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    },
    {
      title: "Privé Feesten",
      description: "Familiefeesten in heel Zuid-Holland",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const regions = [
    "Hoeksche Waard", "Rotterdam", "Den Haag", "Dordrecht", "Westland", "Schiedam",
    "Spijkenisse", "Barendrecht", "Vlaardingen", "Capelle aan den IJssel", "Maassluis",
    "Brielle", "Hellevoetsluis", "Goeree-Overflakkee", "Leiden", "Zoetermeer",
    "Delft", "Alphen aan den Rijn", "Gouda", "Nieuwkoop", "Bodegraven-Reeuwijk"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Zuid-Holland", icon: <Award className="w-8 h-8" /> },
    { number: "1000+", label: "Events Zuid-Holland", icon: <Calendar className="w-8 h-8" /> },
    { number: "500+", label: "Zuid-Hollandse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "200+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
              <Globe className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">ZUID-HOLLAND</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">ZUID-HOLLAND</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services door heel Zuid-Holland. Van de Hoeksche Waard tot Leiden, 
              van Rotterdam tot Gouda - altijd de perfecte sfeer in de mooiste provincie van Nederland.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN ZUID-HOLLAND
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
              <span className="block text-blue-700">ZUID-HOLLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden door heel Zuid-Holland
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

      {/* Regions Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALLE REGIO'S
              <span className="block text-orange-500">ZUID-HOLLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              DJ Kevin Froger verzorgt evenementen in alle steden en gemeenten van Zuid-Holland
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {regions.map((region, index) => (
              <a 
                key={index} 
                href={`/dj-${region.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-orange-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">{region}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">DJ Services</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-orange-500 mx-auto" />
                </div>
              </a>
            ))}
          </div>
          
          {/* SEO Content - Hidden but accessible to search engines */}
          <div className="sr-only">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">
                DJ Zuid-Holland - Professionele DJ Services Hele Provincie
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-black text-orange-600 mb-4">Waarom DJ Kevin Froger in Zuid-Holland?</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Zoek je een DJ in Zuid-Holland? DJ Kevin Froger verzorgt professionele DJ services door de hele provincie. 
                    Van Rotterdam tot Leiden, van Den Haag tot Gouda - altijd de perfecte sfeer in Zuid-Holland.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Kevin is actief in heel Zuid-Holland: DJ Rotterdam, DJ Den Haag, DJ Dordrecht, DJ Leiden, 
                    DJ Zoetermeer, DJ Delft, DJ Westland, DJ Schiedam, DJ Spijkenisse, DJ Barendrecht, 
                    DJ Vlaardingen, DJ Capelle, DJ Maassluis, DJ Brielle, DJ Hellevoetsluis, 
                    DJ Goeree-Overflakkee, DJ Hoeksche Waard, DJ Alphen aan den Rijn, DJ Gouda, 
                    DJ Nieuwkoop, DJ Bodegraven-Reeuwijk.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-blue-600 mb-4">Specialisaties per Event Type</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Heart className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Bruiloft DJ Zuid-Holland</h4>
                        <p className="text-gray-600">500+ bruiloften van Kurhaus Den Haag tot Hotel New York Rotterdam</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Bedrijfsfeest DJ Zuid-Holland</h4>
                        <p className="text-gray-600">Corporate events voor multinationals en MKB door de provincie</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Festival DJ Zuid-Holland</h4>
                        <p className="text-gray-600">Van North Sea Jazz tot lokale dorpsfeesten door heel Zuid-Holland</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">
                  Populaire DJ Services Zuid-Holland
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold text-sm">DJ Zuid-Holland</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm">Bruiloft DJ Zuid-Holland</span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-sm">Bedrijfsfeest DJ Zuid-Holland</span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold text-sm">Festival DJ Zuid-Holland</span>
                  <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-bold text-sm">Corporate DJ Zuid-Holland</span>
                  <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-bold text-sm">Allround DJ Zuid-Holland</span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-sm">Professionele DJ Provincie</span>
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold text-sm">DJ Randstad</span>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  DJ Boeken Zuid-Holland
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wil je een DJ boeken in Zuid-Holland? Kevin Froger is landelijk werkzaam maar heeft speciale expertise 
                  in Zuid-Holland. Professionele DJ services voor de hele provincie met lokale kennis en ervaring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-blue-700">IN ZUID-HOLLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Zuid-Holland onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Zuid-Holland evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJZuidHollandPage;