import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare, ArrowRight, Award, Users, Music, Calendar, Star, Quote, MessageCircle, Send, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "DIRECT BELLEN",
      subtitle: "Voor snelle vragen en spoedboekingen",
      contact: "06 45 25 13 33",
      href: "tel:0645251333",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      description: "Bereikbaar 7 dagen per week"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WHATSAPP",
      subtitle: "Snelle berichten en foto's delen",
      contact: "06 45 25 13 33",
      href: "https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      description: "Gemiddeld binnen 1 uur reactie"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "EMAIL STUREN",
      subtitle: "Voor uitgebreide vragen en informatie",
      contact: "booking@kevinfroger.nl",
      href: "mailto:booking@kevinfroger.nl",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      description: "Binnen 24 uur uitgebreid antwoord"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "FORMULIER",
      subtitle: "Persoonlijke offerte aanvragen",
      contact: "Scroll naar beneden",
      href: "#contact-form",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      description: "Binnen 24 uur uw persoonlijke offerte"
    }
  ];

  const services = [
    "Complete DJ services van 4-12 uur",
    "MC & presentatie services", 
    "Professionele geluids- en lichtapparatuur",
    "Draadloze microfoons en headsets",
    "Muziek op maat voor elk publiek",
    "Technische setup en breakdown",
    "Backup apparatuur en noodplan",
    "Persoonlijke voorbereiding en overleg"
  ];

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Jaar Ervaring', color: 'text-blue-500' },
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Bruiloften', color: 'text-pink-500' },
    { icon: <Music className="w-8 h-8" />, number: '50+', label: 'Festivals', color: 'text-orange-500' },
    { icon: <CheckCircle className="w-8 h-8" />, number: '1000+', label: 'Events', color: 'text-green-500' }
  ];

  const process = [
    {
      step: "01",
      title: "CONTACT & INTAKE",
      description: "Vertel ons over uw evenement en wensen",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: "02",
      title: "OFFERTE OP MAAT",
      description: "Binnen 24 uur een persoonlijke offerte",
      icon: <Star className="w-8 h-8" />
    },
    {
      step: "03",
      title: "VOORBEREIDING",
      description: "Muziekwensen en technische planning",
      icon: <Music className="w-8 h-8" />
    },
    {
      step: "04",
      title: "EVENEMENT",
      description: "Ontspannen genieten van uw feest",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const faqs = [
    {
      question: "Hoe ver van tevoren moet ik boeken?",
      answer: "Voor bruiloften raden we aan om 6-12 maanden van tevoren te boeken. Voor andere evenementen is 2-3 maanden meestal voldoende, maar we proberen altijd mee te denken ook bij last-minute boekingen."
    },
    {
      question: "Wat is inbegrepen in de prijs?",
      answer: "Standaard inbegrepen: DJ services, complete geluidsapparatuur, draadloze microfoons, basisverlichting en voor-/nabereiding. Uitgebreide licht shows en extra apparatuur kunnen worden toegevoegd."
    },
    {
      question: "Kunnen we eigen muziekwensen doorgeven?",
      answer: "Absoluut! We bespreken vooraf uitgebreid jullie muziekvoorkeuren en no-go songs. Jullie kunnen een playlist aanleveren die we vakkundig verwerken in de set."
    },
    {
      question: "Hoe zit het met de technische setup?",
      answer: "Wij verzorgen de complete technische setup en breakdown. We hebben eigen professionele apparatuur en zorgen voor de juiste aansluitingen en veiligheid."
    },
    {
      question: "Wat gebeurt er bij ziekte of noodgevallen?",
      answer: "We hebben altijd een backup plan en een netwerk van professionele DJ's die kunnen invallen. Uw evenement gaat altijd door met dezelfde kwaliteit."
    },
    {
      question: "Kunnen jullie ook buiten Nederland optreden?",
      answer: "Ja, we verzorgen ook evenementen in België en Duitsland. Voor internationale boekingen bespreken we de specifieke voorwaarden en kosten."
    }
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
    <div className="bg-white">
      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden" role="banner" aria-labelledby="contact-hero-title">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-20">
            <h1 id="contact-hero-title" className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              NEEM CONTACT
              <span className="block text-orange-400">OP MET</span>
              <span className="block text-orange-400">DJ KEVIN</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Klaar om jouw evenement onvergetelijk te maken? Neem contact op voor een vrijblijvende offerte 
              en persoonlijk advies. We reageren altijd binnen 24 uur.
            </p>

          </div>

          {/* Contact Methods Grid - Redesigned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleSmoothScroll(e, method.href)}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 shadow-2xl hover:shadow-3xl border border-white/20"
              >
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  {method.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-black text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed font-semibold">
                    {method.subtitle}
                  </p>
                  <div className={`text-lg font-black mb-3 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                    {method.contact}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">
                    {method.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </a>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="text-center mt-16">
            <p className="text-xl text-blue-100 mb-8 font-semibold">
              Of kies direct een actie:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact-form"
                onClick={(e) => handleSmoothScroll(e, '#contact-form')}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Send className="w-6 h-6 inline-block mr-3" />
                VRAAG OFFERTE AAN
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <Phone className="w-6 h-6 inline-block mr-3" />
                DIRECT BELLEN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Enhanced */}
      <section id="contact-form" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VRAAG DIRECT EEN
              <span className="block text-blue-700">OFFERTE AAN</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte 
              op maat voor jouw evenement. Geen verplichtingen, wel professioneel advies.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section id="process" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              HOE WERKT
              <span className="block text-orange-500">HET?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van eerste contact tot perfect feest in 4 eenvoudige stappen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  {item.icon}
                </div>
                <div className="text-blue-500 font-black text-lg mb-4">{item.step}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Improved */}
      <section id="faq" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VEELGESTELDE
              <span className="block text-blue-700">VRAGEN</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              De meest gestelde vragen over onze DJ services - snel beantwoord
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-black mr-4 shadow-lg">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-14 text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Staat jouw vraag er niet bij?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Neem gerust contact op voor persoonlijk advies. We beantwoorden alle vragen graag!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0645251333"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                BEL DIRECT
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-green-500 text-green-500 px-8 py-4 rounded-full font-black text-lg hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            KLAAR VOOR EEN
            <span className="block text-orange-400">ONVERGETELIJK FEEST?</span>
          </h2>
          <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Neem vandaag nog contact op en laten we samen jouw evenement tot een groot succes maken. 
            Binnen 24 uur ontvang je een persoonlijke offerte.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="font-black text-xl mb-2">DIRECT CONTACT</h3>
              <p className="text-blue-200">Binnen 24 uur reactie</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-black text-xl mb-2">GRATIS OFFERTE</h3>
              <p className="text-blue-200">Vrijblijvend en op maat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-black text-xl mb-2">15+ JAAR ERVARING</h3>
              <p className="text-blue-200">Bewezen kwaliteit</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact-form"
              onClick={(e) => handleSmoothScroll(e, '#contact-form')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              BOEK NU DIRECT
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0645251333"
              className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              06 45 25 13 33
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border-3 border-green-400 text-green-100 px-12 py-6 rounded-full font-black text-2xl hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;