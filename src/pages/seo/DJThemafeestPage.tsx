import React from 'react';
import { Sparkles, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Palette, Crown, Sun } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Create a simple mask icon component since VenetianMask doesn't exist
const Mask = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const DJThemafeestPage = () => {
  const themes = [
    {
      title: "DJ Jaren 80 Feest",
      description: "Disco, new wave en 80s classics",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      music: ["Disco hits", "New Wave", "80s Pop", "Synthwave"]
    },
    {
      title: "DJ Jaren 90 Feest",
      description: "Eurodance, grunge en 90s hits",
      icon: <Music className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      music: ["Eurodance", "Grunge", "90s Pop", "Dance classics"]
    },
    {
      title: "DJ Tropical Party",
      description: "Zomer vibes en tropical house",
      icon: <Sun className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      music: ["Tropical house", "Reggaeton", "Latin hits", "Zomer vibes"]
    },
    {
      title: "DJ White Party",
      description: "Elegante all-white feesten",
      icon: <Crown className="w-8 h-8" />,
      color: "from-gray-400 to-blue-600",
      music: ["House music", "Deep house", "Lounge", "Elegant beats"]
    }
  ];

  const specialThemes = [
    {
      title: "DJ Oktoberfest",
      description: "Authentieke Duitse feestmuziek en schlagers",
      icon: <Award className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "DJ Carnaval",
      description: "Carnavalsmuziek en Nederlandse feesthits",
      icon: <Mask className="w-8 h-8" />,
      color: "from-yellow-500 to-red-600"
    },
    {
      title: "DJ Kerstfeest",
      description: "Kerstmuziek en winter wonderland sfeer",
      icon: <Star className="w-8 h-8" />,
      color: "from-red-500 to-green-600"
    },
    {
      title: "DJ Nieuwjaarsfeest",
      description: "Party hits voor de perfecte jaarwisseling",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-blue-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar Themafeest Ervaring", icon: <Palette className="w-8 h-8" /> },
    { number: "200+", label: "Themafeesten", icon: <Sparkles className="w-8 h-8" /> },
    { number: "50+", label: "Verschillende Thema's", icon: <Mask className="w-8 h-8" /> },
    { number: "100%", label: "Thema Matching", icon: <CheckCircle className="w-8 h-8" /> }
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
              <Sparkles className="w-10 h-10 text-pink-400" />
              <span className="text-pink-400 font-black text-xl tracking-wide">DJ THEMAFEEST</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ THEMAFEEST
              <span className="block text-pink-400">SPECIALIST</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-pink-100 leading-relaxed max-w-4xl mx-auto">
              Themafeest DJ huren? DJ Kevin Froger is specialist in alle themafeesten. 
              Van jaren 80 disco tot tropical party, van Oktoberfest tot carnaval - altijd de perfecte thema muziek.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
              >
                <Sparkles className="w-6 h-6 inline-block mr-3" />
                BOEK THEMAFEEST DJ
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

      {/* Themes Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              POPULAIRE
              <span className="block text-pink-500">THEMAFEESTEN</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {themes.map((theme, index) => (
                  width="400"
                  height="256"
                  loading="lazy"
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${theme.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {theme.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{theme.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{theme.description}</p>
                  
                  <ul className="space-y-2">
                    {theme.music.map((genre, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Music className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{genre}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialThemes.map((theme, index) => (
              <div key={index} className="group bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${theme.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {theme.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{theme.title}</h3>
                <p className="text-gray-600 leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Themafeest - Specialist in Thematische Entertainment</h2>
            <p>Zoek je een DJ voor themafeest? DJ Kevin Froger is specialist in thematische feesten. Met 15+ jaar ervaring en 200+ themafeesten - themafeest DJ huren met muziek en sfeer perfect afgestemd op jouw thema. DJ themafeest Nederland voor alle thematische events.</p>
            
            <h3>Themafeest DJ Huren - Alle Thema's</h3>
            <p>Kevin verzorgt alle themafeesten: DJ jaren 80 feest, DJ jaren 90 feest, DJ tropical party, DJ white party, DJ black & white feest, DJ neon party, DJ casino night, DJ western party, DJ piraten feest, DJ superhelden feest, DJ disco fever, DJ retro party, DJ vintage feest, DJ Hollywood glamour. Themafeest DJ huren voor elk gewenst thema.</p>
            
            <h3>DJ Voor Themafeest Specialiteiten</h3>
            <p>Speciale themafeesten: DJ Oktoberfest met Duitse schlagers en bier muziek, DJ carnaval met Nederlandse feesthits en polonaise, DJ kerstfeest met winter wonderland sfeer, DJ nieuwjaarsfeest met party classics en countdown. DJ voor themafeest alle seizoenen en gelegenheden.</p>
            
            <h3>Themafeest DJ Muziek</h3>
            <p>Kevin past zijn muziek volledig aan het thema aan: jaren 80 disco en new wave, jaren 90 eurodance en grunge, tropical house en reggaeton, klassieke feesthits voor traditionele thema's, of moderne remixes van oude hits. Themafeest DJ muziek 100% op maat.</p>
            
            <h3>DJ Kostuum Feest</h3>
            <p>Voor kostuum feesten en dress-code events past Kevin zijn presentatie aan het thema aan. Van western outfit tot elegant kostuum, van jaren 80 look tot tropical shirt - altijd passend bij jouw themafeest. DJ kostuum feest met thematische uitstraling.</p>
            
            <h3>Themafeest DJ Boeken</h3>
            <p>Wil je een themafeest DJ boeken? Kevin Froger heeft ervaring met alle thema's en zorgt voor de perfecte sfeer die past bij jouw thematische feest. Themafeest DJ boeken Nederland - binnen 24 uur offerte met thema-specifieke muziekvoorstellen.</p>
            
            <h3>Populaire Zoektermen DJ Themafeest</h3>
            <p>DJ themafeest, themafeest DJ, DJ voor themafeest, jaren 80 DJ, jaren 90 DJ, tropical party DJ, white party DJ, kostuum feest DJ, DJ themafeest huren, DJ themafeest boeken, thematische DJ, dress-code DJ.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK THEMAFEEST DJ
              <span className="block text-pink-500">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor het perfecte themafeest?
            </p>
          </div>
          <ContactForm eventType="Themafeest DJ boeking" />
        </div>
      </section>
    </div>
  );
};

export default DJThemafeestPage;