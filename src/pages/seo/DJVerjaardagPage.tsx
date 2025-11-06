import React from 'react';
import { Gift, Award, CheckCircle, ArrowRight, PartyPopper, Cake, Sparkles } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJVerjaardagPage = () => {
  const services = [
    {
      title: "18e Verjaardagen",
      description: "De perfecte overgang naar volwassenheid vieren",
      icon: <Gift className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "21e & 25e Verjaardagen",
      description: "Belangrijke mijlpalen stijlvol vieren",
      icon: <PartyPopper className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "30+ Verjaardagen",
      description: "Volwassen verjaardagsfeesten met stijl",
      icon: <Cake className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "50+ Jubilea",
      description: "Speciale jubileumfeesten voor alle leeftijden",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const ageGroups = [
    {
      title: "Sweet 16 & 18e Verjaardagen",
      description: "Trendy muziek en social media moments",
      features: ["Actuele hits", "TikTok favorites", "Interactieve games", "Photo booth muziek"]
    },
    {
      title: "21-30 Jaar Verjaardagen",
      description: "Perfect mix van party en sophistication",
      features: ["Club hits", "Nostalgische 2000s", "Dance classics", "Sing-alongs"]
    },
    {
      title: "30-50 Jaar Verjaardagen",
      description: "Muziek die alle generaties aanspreekt",
      features: ["90s & 2000s hits", "Rock classics", "Nederlandse hits", "Dansbare muziek"]
    },
    {
      title: "50+ Jubileumfeesten",
      description: "Tijdloze klassiekers en evergreens",
      features: ["Golden oldies", "Disco classics", "Nederlandse evergreens", "Meezingers"]
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar Verjaardag Ervaring", icon: <Award className="w-8 h-8" /> },
    { number: "300+", label: "Verjaardagsfeesten", icon: <Gift className="w-8 h-8" /> },
    { number: "100+", label: "18e Verjaardagen", icon: <PartyPopper className="w-8 h-8" /> },
    { number: "200+", label: "Volwassen Feesten", icon: <Cake className="w-8 h-8" /> }
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
              <Gift className="w-10 h-10 text-pink-400" />
              <span className="text-pink-400 font-black text-xl tracking-wide">DJ VOOR VERJAARDAGEN</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ VOOR
              <span className="block text-pink-400">VERJAARDAGEN</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-pink-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ voor verjaardagsfeesten. Van Sweet 16 tot 50+ jubilea, 
              van intieme familiefeesten tot grote verjaardagsparty's - altijd de perfecte muziek voor jouw speciale dag.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
              >
                <Gift className="w-6 h-6 inline-block mr-3" />
                BOEK VERJAARDAG DJ
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
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VERJAARDAG DJ
              <span className="block text-pink-500">VOOR ALLE LEEFTIJDEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van Sweet 16 tot gouden jubilea - de perfecte muziek voor elke verjaardag
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

      {/* Age Groups Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content - Hidden but accessible to search engines */}
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Verjaardag - Professionele DJ Services Alle Leeftijden</h2>
            <p>Zoek je een DJ voor een verjaardag? DJ Kevin Froger verzorgt professionele DJ services voor verjaardagsfeesten van alle leeftijden. Met 15+ jaar ervaring en 300+ verjaardagsfeesten - van Sweet 16 tot 50+ jubilea - altijd de perfecte muziek voor jouw speciale dag. DJ verjaardag Nederland voor alle leeftijdsgroepen.</p>
            
            <h3>DJ Verjaardag - Alle Leeftijdsgroepen</h3>
            <p>Kevin heeft ervaring met verjaardagen voor alle leeftijden: DJ 16e verjaardag (Sweet 16), DJ 18e verjaardag, DJ 21e verjaardag, DJ 25e verjaardag, DJ 30e verjaardag, DJ 40e verjaardag, DJ 50e verjaardag, DJ 60e verjaardag, DJ 65e verjaardag, DJ pensioenfeest, DJ Abraham/Sarah feest. DJ verjaardag alle leeftijden specialist.</p>
            
            <h3>Sweet 16 DJ</h3>
            <p>Voor Sweet 16 feesten biedt Kevin trendy muziek en social media moments. Van TikTok hits tot Instagram-worthy momenten, van interactieve games tot dance challenges - altijd aangepast aan de jonge generatie. Sweet 16 DJ voor de perfecte tiener party.</p>
            
            <h3>DJ 18e Verjaardag</h3>
            <p>De 18e verjaardag is een belangrijke mijlpaal. Kevin zorgt voor de perfecte mix van party muziek en speciale momenten voor deze overgang naar volwassenheid. DJ 18e verjaardag met coming-of-age vibes en volwassen party sfeer.</p>
            
            <h3>DJ 21e Verjaardag</h3>
            <p>Voor 21e verjaardagen combineert Kevin party sfeer met sophistication. Van club hits tot nostalgische 2000s tracks - altijd de juiste balans tussen feest en volwassenheid. DJ 21e verjaardag voor de perfecte young adult party.</p>
            
            <h3>DJ 30e Verjaardag</h3>
            <p>30e verjaardagen verdienen een speciale aanpak. Kevin speelt muziek die alle generaties aanspreekt en zorgt voor een onvergetelijk feest. DJ 30e verjaardag met nostalgische 90s/2000s hits gecombineerd met moderne tracks voor alle gasten.</p>
            
            <h3>DJ 40e Verjaardag</h3>
            <p>Voor 40e verjaardagen biedt Kevin de perfecte mix van nostalgische hits en moderne muziek. Van 90s classics tot actuele hits, van rock anthems tot dance classics. DJ 40e verjaardag voor de perfecte midlife celebration.</p>
            
            <h3>DJ 50e Verjaardag</h3>
            <p>50e verjaardagen zijn bijzondere jubilea. Kevin zorgt voor tijdloze klassiekers en evergreens die alle gasten kunnen waarderen. DJ 50e verjaardag met golden oldies, disco classics, en Nederlandse evergreens voor alle generaties.</p>
            
            <h3>DJ Boeken Verjaardag</h3>
            <p>Wil je een DJ boeken voor een verjaardag? Kevin Froger past zijn service aan elke leeftijd en elk type verjaardagsfeest. Altijd persoonlijk en op maat. DJ boeken verjaardag Nederland - binnen 24 uur offerte op maat voor jouw leeftijd en wensen.</p>
            
            <h3>Populaire Zoektermen Verjaardag DJ</h3>
            <p>DJ verjaardag, DJ verjaardagsfeest, Sweet 16 DJ, DJ 18e verjaardag, DJ 21e verjaardag, DJ 30e verjaardag, DJ 40e verjaardag, DJ 50e verjaardag, jubileum DJ, party DJ verjaardag, verjaardag DJ boeken, DJ voor verjaardag, verjaardagsfeest entertainment.</p>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              MUZIEK OP MAAT
              <span className="block text-pink-500">PER LEEFTIJD</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
                  width="400"
                  height="256"
                  loading="lazy"
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{group.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{group.description}</p>
                  <ul className="space-y-2">
                    {group.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <span className="block text-pink-500">VOOR JOUW VERJAARDAG</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw verjaardag onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="verjaardag" />
        </div>
      </section>
    </div>
  );
};

export default DJVerjaardagPage;