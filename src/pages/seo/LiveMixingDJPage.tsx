import React from 'react';
import { Music, Users, ArrowRight, Star, Heart, Building, Zap, Disc, Headphones, Volume2 } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const LiveMixingDJPage = () => {
  const services = [
    {
      title: "Live Mixing Bruiloft",
      description: "Unieke live mixen voor jullie mooiste dag",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Live Mixing Bedrijfsfeest",
      description: "Professionele live sets voor corporate events",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Live Mixing Festival",
      description: "High-energy live performances voor festivals",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    },
    {
      title: "Live Mixing Privé",
      description: "Persoonlijke live sets voor privé evenementen",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const mixingFeatures = [
    {
      title: "Geen Standaard Playlists",
      description: "Elke track wordt live gekozen en gemixt ter plekke",
      icon: <Disc className="w-8 h-8" />
    },
    {
      title: "Publiek Lezen",
      description: "Kevin voelt perfect aan wat het publiek wil horen",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Naadloze Overgangen",
      description: "Professionele beatmatching en harmonic mixing",
      icon: <Volume2 className="w-8 h-8" />
    },
    {
      title: "Moment Gevoel",
      description: "De juiste track op het perfecte moment",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar Live Mixing", icon: <Music className="w-8 h-8" /> },
    { number: "1000+", label: "Live Mixed Events", icon: <Disc className="w-8 h-8" /> },
    { number: "50k+", label: "Live Mixed Tracks", icon: <Headphones className="w-8 h-8" /> },
    { number: "100%", label: "Live Performance", icon: <Volume2 className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Music className="w-10 h-10 text-purple-400" />
              <span className="text-purple-400 font-black text-xl tracking-wide">LIVE MIXING DJ</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              LIVE MIXING DJ
              <span className="block text-purple-400">KEVIN FROGER</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-purple-100 leading-relaxed max-w-4xl mx-auto">
              Live mixing specialist met 15+ jaar ervaring. Geen standaard playlists maar unieke live mixen 
              die ter plekke worden samengesteld, perfect afgestemd op de sfeer van het moment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-purple-500 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <Music className="w-6 h-6 inline-block mr-3" />
                BOEK LIVE MIXING DJ
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-purple-200 font-semibold">{stat.label}</div>
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
              LIVE MIXING
              <span className="block text-purple-600">SERVICES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Unieke live mixing services voor alle evenementen
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

      {/* Live Mixing Features */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              LIVE MIXING
              <span className="block text-purple-600">EXPERTISE</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mixingFeatures.map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>Live Mixing DJ - Specialist in Live DJ Performances</h2>
            <p>Zoek je een live mixing DJ? DJ Kevin Froger is specialist in live mixing en live DJ performances. Met 15+ jaar ervaring en 50.000+ live gemixte tracks - geen standaard playlists maar unieke live mixen die ter plekke worden samengesteld. Live mixing DJ Nederland met unieke skills.</p>
            
            <h3>Live Mixing DJ - Wat is Live Mixing?</h3>
            <p>Live mixing betekent dat de DJ ter plekke tracks selecteert, mixt en aanpast aan de sfeer. Kevin leest het publiek en past zijn set real-time aan voor de perfecte flow. Live mixing DJ technieken: beatmatching, harmonic mixing, looping, en seamless transitions voor unieke performances.</p>
            
            <h3>Live Mixing Bruiloft</h3>
            <p>Voor bruiloften biedt live mixing de perfecte flexibiliteit. Kevin past zijn set aan elk moment: van ceremonie tot diner, van eerste dans tot feestavond. Live mixing bruiloft DJ voor spontane momenten en perfecte timing op jullie mooiste dag.</p>
            
            <h3>Live Mixing Bedrijfsfeest</h3>
            <p>Bij bedrijfsfeesten zorgt live mixing voor de juiste professionele sfeer. Kevin past zijn mixing aan de zakelijke setting en het diverse publiek. Live mixing bedrijfsfeest DJ voor corporate events met real-time aanpassing aan de sfeer.</p>
            
            <h3>Live Mixing Festival</h3>
            <p>Voor festivals is live mixing essentieel. Kevin leest de menigte en bouwt zijn set op voor maximum impact en energie op het juiste moment. Live mixing festival DJ voor crowd control en energy management tijdens grote events.</p>
            
            <h3>Live Mixing Techniek</h3>
            <p>Kevin gebruikt geavanceerde mixing technieken: beatmatching, harmonic mixing, looping, effects, seamless transitions, key matching, en tempo control voor de perfecte flow. Live mixing techniek op professioneel niveau met Pioneer apparatuur.</p>
            
            <h3>Live Mixing DJ Boeken</h3>
            <p>Wil je een live mixing DJ boeken? Kevin Froger is specialist in live performances en biedt unieke live mixing services voor alle evenementen. Live mixing DJ boeken Nederland - ervaar het verschil van echte live performances zonder playlists.</p>
            
            <h3>Populaire Zoektermen Live Mixing DJ</h3>
            <p>Live mixing DJ, live DJ, live performance DJ, real-time mixing, interactive DJ, responsive DJ, adaptive DJ, live music mixing, professional live mixing, DJ zonder playlists, spontane DJ, improvisatie DJ, live DJ Nederland.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK LIVE MIXING DJ
              <span className="block text-purple-600">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor unieke live mixing services?
            </p>
          </div>
          <ContactForm eventType="Live Mixing DJ boeking" />
        </div>
      </section>
    </div>
  );
};

export default LiveMixingDJPage;