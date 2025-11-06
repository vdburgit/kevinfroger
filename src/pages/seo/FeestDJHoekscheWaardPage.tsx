import React from 'react';
import { Gift, Calendar, Users, Award, ArrowRight, Star, PartyPopper } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const FeestDJHoekscheWaardPage = () => {
  const services = [
    {
      title: "Verjaardagsfeesten",
      description: "Van 18e verjaardag tot 50+ jubileum in de Hoeksche Waard",
      icon: <Gift className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Familiebijeenkomsten",
      description: "Reünies en familiefeesten in de regio",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Jubilea",
      description: "Speciale mijlpalen vieren in de Hoeksche Waard",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Themafeesten",
      description: "Van jaren '80 tot tropical party",
      icon: <PartyPopper className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const locations = [
    "Oud-Beijerland", "Strijen", "Binnenmaas", "Cromstrijen", "Korendijk",
    "Westmaas", "Heinenoord", "Klaaswaal", "Maasdam", "Puttershoek"
  ];

  const stats = [
    { number: "15+", label: "Jaar Feest Ervaring", icon: <Award className="w-8 h-8" /> },
    { number: "200+", label: "Feesten Hoeksche Waard", icon: <Gift className="w-8 h-8" /> },
    { number: "300+", label: "Totaal Privé Feesten", icon: <Calendar className="w-8 h-8" /> },
    { number: "100%", label: "Tevreden Gasten", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <PartyPopper className="w-10 h-10 text-pink-400" />
              <span className="text-pink-400 font-black text-xl tracking-wide">FEEST DJ HOEKSCHE WAARD</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              FEEST DJ
              <span className="block text-pink-400">HOEKSCHE WAARD</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-pink-100 leading-relaxed max-w-4xl mx-auto">
              Professionele feest DJ in de Hoeksche Waard. Van verjaardagen tot jubilea, 
              van Oud-Beijerland tot Strijen - wij maken elk feest onvergetelijk in jouw eigen regio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
              >
                <Gift className="w-6 h-6 inline-block mr-3" />
                BOEK FEEST DJ HOEKSCHE WAARD
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-pink-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-pink-400 mb-2">{stat.number}</div>
                  <div className="text-pink-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content - Hidden but accessible to search engines */}
          <div className="sr-only prose prose-lg max-w-none">
            <h2>Feest DJ Hoeksche Waard - Professionele Party DJ Services</h2>
            <p>Zoek je een feest DJ in de Hoeksche Waard? DJ Kevin Froger verzorgt professionele party DJ services in de hele regio. Van verjaardagen tot jubilea, van Oud-Beijerland tot Strijen - altijd de perfecte feestsfeer.</p>
            
            <h3>Feest DJ Hoeksche Waard - Alle Feest Types</h3>
            <p>Kevin verzorgt alle soorten feesten in de Hoeksche Waard: verjaardagsfeest DJ, jubileum DJ, familiefeest DJ, reünie DJ, themafeest DJ, carnavalsfeest DJ, nieuwjaarsfeest DJ, zomerfeest DJ.</p>
            
            <h3>Verjaardag DJ Hoeksche Waard</h3>
            <p>Voor verjaardagsfeesten in de Hoeksche Waard heeft Kevin meer dan 200 succesvolle events begeleid. Van 18e verjaardagen tot 50+ jubilea - altijd aangepast aan de leeftijd en wensen.</p>
            
            <h3>Party DJ Hoeksche Waard</h3>
            <p>Als party DJ in de Hoeksche Waard zorgt Kevin voor de ultieme feestsfeer. Van intieme huisfeesten tot grote party's - altijd de juiste energie en muziek.</p>
            
            <h3>Familiefeest DJ Hoeksche Waard</h3>
            <p>Kevin heeft ervaring met familiefeesten en reünies in de Hoeksche Waard. Muziek die alle generaties aanspreekt en families samenbrengt.</p>
            
            <h3>Themafeest DJ Hoeksche Waard</h3>
            <p>Van jaren 80 disco tot tropical party - Kevin verzorgt themafeesten in de Hoeksche Waard. Altijd de juiste muziek en sfeer voor elk thema.</p>
            
            <h3>Feest DJ Boeken Hoeksche Waard</h3>
            <p>Wil je een feest DJ boeken in de Hoeksche Waard? Kevin Froger is de lokale specialist voor alle soorten feesten en party's in de regio.</p>
            
            <h3>Populaire Feest DJ Services Hoeksche Waard</h3>
            <p>Feest DJ Hoeksche Waard, party DJ Hoeksche Waard, verjaardag DJ Hoeksche Waard, jubileum DJ, familiefeest DJ, themafeest DJ, carnaval DJ, lokale feest DJ.</p>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              FEEST DJ
              <span className="block text-pink-500">SERVICES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Alle soorten feesten in de Hoeksche Waard
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
              BOEK FEEST DJ
              <span className="block text-pink-500">HOEKSCHE WAARD</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw feest in de Hoeksche Waard onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Feest Hoeksche Waard" />
        </div>
      </section>
    </div>
  );
};

export default FeestDJHoekscheWaardPage;