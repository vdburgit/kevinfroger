import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Award, Users, Music, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const services = [
    { name: 'Bruiloften', href: '/bruiloften' },
    { name: 'Bedrijfsfeesten', href: '/bedrijfsfeesten' },
    { name: 'Festivals', href: '/festivals' },
    { name: 'Privé feesten', href: '/prive-feesten' },
    { name: 'Sportfeesten', href: '/sportfeesten' },
    { name: 'Evenementen', href: '/evenementen' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Prijzen', href: '/prijzen' },
    { name: 'Biografie', href: '/biografie' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/kevin-logo.png" 
                alt="DJ Kevin Froger - #1 Bruiloft DJ Nederland" 
                className="h-20 w-auto mb-6 drop-shadow-2xl"
                width="200"
                height="80"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              #1 Bruiloft DJ Nederland - Professionele DJ & MC services voor bruiloften, bedrijfsfeesten en festivals. 
              15+ jaar ervaring, 500+ bruiloften, live mixing specialist. DJ boeken voor alle evenementen in Nederland.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-blue-300 hover:text-green-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-green-500/20"
                aria-label="Stuur WhatsApp bericht naar DJ Kevin Froger"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-400">DIENSTEN</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-400">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <a href="tel:0645251333" className="text-blue-200 hover:text-white transition-colors font-semibold">
                  06 45 25 13 33
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <a href="mailto:booking@kevinfroger.nl" className="text-blue-200 hover:text-white transition-colors font-semibold">
                  booking@kevinfroger.nl
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mt-0.5">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-blue-200 font-semibold">
                  Nederland<br />
                  <span className="text-sm opacity-75">(landelijk werkzaam)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-400">SNEL NAAR</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block"
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-black text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                BOEK NU
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700/50 mt-16 pt-16">
          {/* SEO Section - Now visible for users and SEO */}
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Block 1: Meest geboekt in */}
            <div className="bg-blue-800/30 rounded-2xl p-6 hover:bg-blue-800/40 transition-all duration-300">
              <button
                onClick={() => toggleSection('meest-geboekt')}
                className="w-full flex items-center justify-between text-orange-400 font-black text-xl mb-4 hover:text-orange-300 transition-colors duration-200"
              >
                <span className="relative">
                  MEEST GEBOEKT IN
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-orange-500 rounded-full"></span>
                </span>
                {expandedSections['meest-geboekt'] ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedSections['meest-geboekt'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-2 mt-4 grid grid-cols-2 gap-2">
                {/* Zuid-Holland Hoofdsteden */}
                <li><a href="/dj-hoeksche-waard" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Hoeksche Waard</a></li>
                <li><a href="/dj-rotterdam" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Rotterdam</a></li>
                <li><a href="/dj-den-haag" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Den Haag</a></li>
                <li><a href="/dj-dordrecht" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Dordrecht</a></li>
                <li><a href="/dj-westland" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Westland</a></li>
                <li><a href="/dj-schiedam" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Schiedam</a></li>
                <li><a href="/dj-vlaardingen" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Vlaardingen</a></li>
                <li><a href="/dj-spijkenisse" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Spijkenisse</a></li>
                <li><a href="/dj-barendrecht" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Barendrecht</a></li>
                <li><a href="/dj-capelle-aan-den-ijssel" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Capelle aan den IJssel</a></li>
                <li><a href="/dj-maassluis" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Maassluis</a></li>
                <li><a href="/dj-brielle" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Brielle</a></li>
                <li><a href="/dj-hellevoetsluis" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Hellevoetsluis</a></li>
                <li><a href="/dj-goeree-overflakkee" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Goeree-Overflakkee</a></li>
                <li><a href="/dj-s-gravendeel" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ 's-Gravendeel</a></li>
                <li><a href="/dj-zuid-holland" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Zuid-Holland</a></li>
                
                {/* Regio Tiel */}
                <li><a href="/dj-regio-tiel" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Regio Tiel</a></li>
                <li><a href="/dj-tiel" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Tiel</a></li>
                <li><a href="/dj-kerk-avezaath" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Kerk-Avezaath</a></li>
                
                {/* Nieuwe steden */}
                <li><a href="/dj-leiden" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Leiden</a></li>
                <li><a href="/dj-delft" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Delft</a></li>
                <li><a href="/dj-zoetermeer" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Zoetermeer</a></li>
                <li><a href="/dj-gouda" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Gouda</a></li>
                <li><a href="/dj-alphen-aan-den-rijn" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Alphen aan den Rijn</a></li>
                <li><a href="/dj-utrecht" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Utrecht</a></li>
                <li><a href="/dj-amsterdam" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Amsterdam</a></li>
                </ul>
              </div>
            </div>

            {/* Block 2: DJ Services per type */}
            <div className="bg-blue-800/30 rounded-2xl p-6 hover:bg-blue-800/40 transition-all duration-300">
              <button
                onClick={() => toggleSection('dj-services')}
                className="w-full flex items-center justify-between text-orange-400 font-black text-xl mb-4 hover:text-orange-300 transition-colors duration-200"
              >
                <span className="relative">
                  DJ SERVICES
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-orange-500 rounded-full"></span>
                </span>
                {expandedSections['dj-services'] ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedSections['dj-services'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-2 mt-4 grid grid-cols-1 gap-2">
                {/* Bruiloft DJ Services */}
                <li><a href="/dj-bruiloft-rotterdam" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Bruiloft Rotterdam</a></li>
                <li><a href="/bruiloft-dj-den-haag" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Bruiloft DJ Den Haag</a></li>
                <li><a href="/feest-dj-hoeksche-waard" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Feest DJ Hoeksche Waard</a></li>
                <li><a href="/dj-verjaardag" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Verjaardag</a></li>
                <li><a href="/bruiloften" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Bruiloft DJ</a></li>
                <li><a href="/bedrijfsfeesten" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Bedrijfsfeest DJ</a></li>
                <li><a href="/festivals" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Festival DJ</a></li>
                <li><a href="/prive-feesten" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Privé Feest DJ</a></li>
                <li><a href="/sportfeesten" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Sportfeest DJ</a></li>
                
                {/* Nieuwe services */}
                <li><a href="/dj-boeken-nederland" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Boeken Nederland</a></li>
                <li><a href="/professionele-dj" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Professionele DJ</a></li>
                <li><a href="/live-mixing-dj" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Live Mixing DJ</a></li>
                <li><a href="/dj-mc-services" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ MC Services</a></li>
                
                {/* Ultimate SEO Pages */}
                <li><a href="/dj-huren-nederland" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Huren Nederland</a></li>
                <li><a href="/goedkope-dj" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">Goedkope DJ</a></li>
                <li><a href="/dj-met-apparatuur" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Met Apparatuur</a></li>
                <li><a href="/dj-tuinfeest" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Tuinfeest</a></li>
                <li><a href="/dj-schuurfeest" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Schuurfeest</a></li>
                <li><a href="/dj-themafeest" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Themafeest</a></li>
                <li><a href="/dj-koningsdag" className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block text-sm">DJ Koningsdag</a></li>
                </ul>
              </div>
            </div>

            {/* Block 3: Meest gevonden op */}
            <div className="bg-blue-800/30 rounded-2xl p-6 hover:bg-blue-800/40 transition-all duration-300">
              <button
                onClick={() => toggleSection('meest-gevonden')}
                className="w-full flex items-center justify-between text-orange-400 font-black text-xl mb-4 hover:text-orange-300 transition-colors duration-200"
              >
                <span className="relative">
                  MEEST GEVONDEN OP
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-orange-500 rounded-full"></span>
                </span>
                {expandedSections['meest-gevonden'] ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedSections['meest-gevonden'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-2 mt-4 grid grid-cols-1 gap-2">
                {/* Populaire zoektermen */}
                <li><span className="text-blue-200 font-semibold text-sm">DJ boeken Nederland</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ huren Nederland</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ gezocht</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Goedkope DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Betaalbare DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Professionele DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Ervaren DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Perfecte DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ met apparatuur</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Live Mixing DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ MC Services</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Allround DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Entertainment DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ inclusief licht en geluid</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Mobiele DJ show</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ tuinfeest</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ schuurfeest</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ themafeest</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ koningsdag</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ voor verjaardagen</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Festival DJ boeken</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Corporate DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ huren</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ inhuren</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ alle steden Nederland</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Automatische DJ matching</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ voor elke plaats</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Goede DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Beste DJ</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">DJ met ervaring</span></li>
                <li><span className="text-blue-200 font-semibold text-sm">Betrouwbare DJ</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12">
            <p className="text-blue-300 font-semibold mb-4 md:mb-0">
              © 2025 DJ Kevin Froger. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="/privacy" className="text-blue-300 hover:text-white font-semibold transition-colors text-center">
                Privacybeleid
              </a>
              <a href="/algemene-voorwaarden" className="text-blue-300 hover:text-white font-semibold transition-colors text-center">
                Algemene Voorwaarden
              </a>
              <a href="/sitemap.xml" className="text-blue-300 hover:text-white font-semibold transition-colors text-center">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;