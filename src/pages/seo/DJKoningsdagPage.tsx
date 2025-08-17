import React from 'react';
import { Crown, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Flag, PartyPopper } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJKoningsdagPage = () => {
  const services = [
    {
      title: "DJ Koningsdag Feest",
      description: "Oranje feest DJ voor Koningsdag viering",
      icon: <Crown className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      features: ["Oranje hits", "Nederlandse muziek", "Feest sfeer", "Alle leeftijden"]
    },
    {
      title: "DJ Koningsnacht",
      description: "DJ voor Koningsnacht party's en voorfeesten",
      icon: <PartyPopper className="w-8 h-8" />,
      color: "from-purple-500 to-orange-600",
      features: ["Party hits", "Dance muziek", "Nacht sfeer", "High energy"]
    },
    {
      title: "DJ Vrijmarkt",
      description: "Achtergrondmuziek voor vrijmarkten en straatfeesten",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-orange-600",
      features: ["Gezellige sfeer", "Familie muziek", "Nederlandse hits", "Vrolijke vibes"]
    },
    {
      title: "DJ Oranje Feest",
      description: "Complete oranje feest entertainment",
      icon: <Flag className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      features: ["Oranje repertoire", "Patriottische hits", "Feest classics", "Meezing muziek"]
    }
  ];

  const koningsdagMusic = [
    "Oranje Boven", "Wij Houden Van Oranje", "Oranje Nassouw", "Wilhelmus",
    "Ik Ben Zo Blij", "Oranje Fever", "Holland", "Amsterdam", "Tulpen Uit Amsterdam",
    "Nederlandse Feesthits", "Carnaval Classics", "Volksliederen", "Oranje Hits"
  ];

  const stats = [
    { number: "15+", label: "Jaar Koningsdag DJ", icon: <Crown className="w-8 h-8" /> },
    { number: "50+", label: "Koningsdag Events", icon: <Flag className="w-8 h-8" /> },
    { number: "100+", label: "Oranje Feesten", icon: <PartyPopper className="w-8 h-8" /> },
    { number: "1000+", label: "Oranje Fans", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Crown className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">DJ KONINGSDAG</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KONINGSDAG
              <span className="block text-orange-400">SPECIALIST</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-orange-100 leading-relaxed max-w-4xl mx-auto">
              DJ Koningsdag huren? DJ Kevin Froger is specialist in oranje feesten. 
              Van Koningsnacht tot Koningsdag, van vrijmarkten tot oranje party's - altijd de perfecte Nederlandse feestsfeer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Crown className="w-6 h-6 inline-block mr-3" />
                BOEK KONINGSDAG DJ
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-orange-900 transition-all duration-300"
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
                  <div className="text-orange-200 font-semibold">{stat.label}</div>
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
              KONINGSDAG DJ
              <span className="block text-orange-500">SERVICES</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ORANJE
              <span className="block text-orange-500">REPERTOIRE</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {koningsdagMusic.map((song, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Music className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900">{song}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Koningsdag - Specialist in Oranje Feesten</h2>
            <p>Zoek je een DJ voor Koningsdag? DJ Kevin Froger is specialist in oranje feesten en Nederlandse festiviteiten. Met 15+ jaar ervaring en 50+ Koningsdag events - Koningsdag DJ huren met het beste oranje repertoire en Nederlandse feestmuziek. DJ Koningsdag Nederland voor alle oranje celebrations.</p>
            
            <h3>DJ Koningsdag - Nederlandse Feestmuziek</h3>
            <p>Kevin heeft het complete oranje repertoire: Oranje Boven, Wij Houden Van Oranje, Wilhelmus, Oranje Nassouw, Nederlandse feesthits, carnaval classics, volksliederen, en alle patriottische liedjes. DJ Koningsdag met authentiek Nederlands repertoire.</p>
            
            <h3>DJ Koningsnacht</h3>
            <p>Voor Koningsnacht party's biedt Kevin energieke DJ sets met dance muziek, party hits, en Nederlandse feesthits. Perfect voor de voorfeesten van Koningsdag. DJ Koningsnacht voor alle pre-party events en oranje warming-up feesten.</p>
            
            <h3>DJ Vrijmarkt</h3>
            <p>Kevin verzorgt ook achtergrondmuziek voor vrijmarkten en straatfeesten. Gezellige Nederlandse muziek die past bij de Koningsdag sfeer en familie-vriendelijke events. DJ vrijmarkt voor alle leeftijden en Koningsdag activiteiten.</p>
            
            <h3>DJ Oranje Feest</h3>
            <p>Voor oranje feesten en Nederlandse festiviteiten heeft Kevin speciale oranje playlists met alle patriottische hits en Nederlandse feestmuziek. DJ oranje feest voor alle Nederlandse nationale feestdagen en patriottische gelegenheden.</p>
            
            <h3>Koningsdag DJ Boeken</h3>
            <p>Wil je een Koningsdag DJ boeken? Kevin Froger zorgt voor de perfecte oranje sfeer met Nederlandse feestmuziek en patriottische hits. Koningsdag DJ boeken Nederland - binnen 24 uur offerte voor jouw oranje event.</p>
            
            <h3>Populaire Zoektermen DJ Koningsdag</h3>
            <p>DJ Koningsdag, Koningsdag DJ, DJ voor Koningsdag, oranje feest DJ, Nederlandse feest DJ, patriottische DJ, DJ Koningsnacht, vrijmarkt DJ, DJ Koningsdag huren, DJ Koningsdag boeken, nationale feestdag DJ.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK KONINGSDAG DJ
              <span className="block text-orange-500">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor het perfecte oranje feest?
            </p>
          </div>
          <ContactForm eventType="Koningsdag DJ boeking" />
        </div>
      </section>
    </div>
  );
};

export default DJKoningsdagPage;