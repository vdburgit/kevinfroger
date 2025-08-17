import React, { useState } from 'react';
import { X, Check, Star, Calendar, Users, Music, Zap, Building, Heart, ArrowRight, Euro, Clock } from 'lucide-react';

interface Package {
  id: string;
  title: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: string[];
  description: string;
  note?: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  packages: Package[];
}

const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories: Category[] = [
    {
      id: 'bruiloften',
      title: 'Bruiloften',
      subtitle: '4 uur show',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-600',
      packages: [
        {
          id: 'bruiloft-basis',
          title: 'Standaard Pakket',
          price: 'Op aanvraag',
          duration: '4 uur',
          description: 'DJ optreden voor 4 uur, zonder apparatuur',
          features: [
            'DJ optreden voor 4 uur',
            'Voorbespreking muziekvoorkeuren', 
            'Live mixing op locatie',
            'Aanpassing aan publiek en sfeer',
            'Professionele uitvoering'
          ],
          note: 'Apparatuur niet inbegrepen - wordt ter plaatse geregeld'
        },
        {
          id: 'bruiloft-compleet',
          title: 'Pro Pakket',
          price: 'Op aanvraag',
          duration: '4 uur',
          popular: true,
          description: 'Uitgebreid DJ optreden met extra aandacht voor details',
          features: [
            'DJ optreden voor 4 uur',
            'Uitgebreide voorbereiding',
            'Persoonlijke muziekwensen',
            'Strakke afstemming op programma',
            'Extra aandacht voor speciale momenten',
            'Professionele begeleiding'
          ],
          note: 'Apparatuur niet inbegrepen - focus op perfecte uitvoering'
        },
        {
          id: 'bruiloft-premium',
          title: 'Exclusief Pakket',
          price: 'In overleg',
          duration: '4 uur',
          description: 'Premium DJ ervaring voor exclusieve evenementen',
          features: [
            'DJ optreden voor 4 uur',
            'Volledig op maat samengesteld',
            'Meerdaagse boekingen mogelijk',
            'Exclusieve voorbereiding',
            'VIP behandeling',
            'Alle speciale wensen mogelijk'
          ],
          note: 'Voor bijzondere gelegenheden en meerdaagse events'
        }
      ]
    },
    {
      id: 'bedrijfsfeesten',
      title: 'Bedrijfsfeesten',
      subtitle: '4 uur show',
      icon: <Building className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      packages: [
        {
          id: 'corporate-netwerk',
          title: 'Netwerk Pakket',
          price: 'Op aanvraag',
          duration: '4 uur',
          description: 'DJ optreden voor zakelijke bijeenkomsten',
          features: [
            'DJ optreden voor 4 uur',
            'Achtergrondmuziek voor netwerksfeer', 
            'Representatieve en professionele uitstraling',
            'Flexibele muziekstijl',
            'Aanpassing aan zakelijke setting'
          ]
        },
        {
          id: 'corporate-compleet',
          title: 'Pro Corporate',
          price: 'Op aanvraag',
          duration: '4 uur',
          popular: true,
          description: 'Uitgebreid DJ optreden voor bedrijfsfeesten',
          features: [
            'DJ optreden voor 4 uur',
            'Professionele begeleiding',
            'Muziek afgestemd op het programma',
            'Flexibele aanpassing tijdens event',
            'Zakelijke uitstraling',
            'Extra aandacht voor timing'
          ]
        },
        {
          id: 'corporate-premium',
          title: 'Exclusief Corporate',
          price: 'In overleg',
          duration: '4 uur',
          description: 'Premium DJ ervaring voor exclusieve zakelijke events',
          features: [
            'DJ optreden voor 4 uur',
            'Volledig op maat voor uw event',
            'Muziek volledig op maat',
            'VIP behandeling',
            'Meerdaagse boekingen mogelijk',
            'Alle speciale wensen mogelijk'
          ]
        }
      ]
    },
    {
      id: 'festival',
      title: 'Festival & Feest',
      subtitle: 'Flexibele shows',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-pink-600',
      packages: [
        {
          id: 'festival-basic',
          title: 'Standaard Optreden',
          price: 'Op aanvraag',
          duration: '4 uur',
          description: 'Energiek DJ optreden voor festivals en feesten',
          features: [
            'DJ optreden voor 4 uur',
            'High-energy festival muziek',
            'Aanpassing aan publiek',
            'Professionele uitvoering'
          ]
        },
        {
          id: 'festival-pro',
          title: 'Aanvullend Optreden',
          price: 'Op aanvraag',
          duration: 'Flexibel',
          popular: true,
          description: 'Extra optreden naast hoofdshow - los te boeken',
          features: [
            'Aanvullend DJ optreden',
            'Flexibele duur in overleg',
            'Perfect als tussenact',
            'Combineerbaar met hoofdshow',
            'Energieke performance'
          ],
          note: 'Ideaal voor festivals met meerdere acts'
        },
        {
          id: 'festival-premium',
          title: 'Exclusief Optreden',
          price: 'In overleg',
          duration: 'Flexibel',
          description: 'Premium DJ ervaring voor exclusieve events',
          features: [
            'DJ optreden op maat',
            'Meerdaagse boekingen mogelijk',
            'Volledig exclusieve ervaring',
            'VIP behandeling',
            'Alle speciale wensen mogelijk',
            'Premium service'
          ]
        }
      ]
    }
  ];

  const openPopup = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPackage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ONZE
              <span className="block text-blue-700">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Klik op een pakket voor alle details en mogelijkheden
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-20">
            {categories.map((category) => (
              <div key={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl lg:text-5xl font-black text-gray-900">{category.title}</h3>
                      <p className="text-xl text-gray-600 font-semibold">{category.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => openPopup(pkg)}
                      className={`relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 hover:border-opacity-50 ${
                        pkg.popular ? `border-opacity-50 ring-4 ring-opacity-30` : 'border-gray-100 hover:border-gray-300'
                      }`}
                      style={{
                        borderColor: pkg.popular ? category.color.includes('pink') ? '#ec4899' : category.color.includes('blue') ? '#3b82f6' : '#f97316' : undefined,
                        ringColor: pkg.popular ? category.color.includes('pink') ? '#ec4899' : category.color.includes('blue') ? '#3b82f6' : '#f97316' : undefined
                      }}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                          <div className={`bg-gradient-to-r ${category.color} text-white px-4 py-1.5 rounded-full shadow-lg border-2 border-white`}>
                            <span className="text-xs font-black tracking-wide">MEEST GEKOZEN</span>
                          </div>
                        </div>
                      )}

                      <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                        {/* Package Header */}
                        <div className="text-center mb-6">
                          <h4 className="text-2xl font-black text-gray-900 mb-2">{pkg.title}</h4>
                          <div className="mb-4">
                            <span className={`text-3xl font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                              {pkg.price}
                            </span>
                            <div className="text-gray-600 text-sm font-semibold mt-1">
                              <Clock className="w-4 h-4 inline-block mr-1" />
                              {pkg.duration}
                            </div>
                          </div>
                        </div>

                        {/* Quick Features Preview */}
                        <div className="space-y-3 mb-6">
                          {pkg.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start text-sm">
                              <Check className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0`} 
                                style={{ color: category.color.includes('pink') ? '#ec4899' : category.color.includes('blue') ? '#3b82f6' : '#f97316' }} />
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                          {pkg.features.length > 3 && (
                            <div className="text-center pt-2">
                              <span className="text-gray-500 text-sm font-semibold">
                                +{pkg.features.length - 3} meer...
                              </span>
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                          <div className={`inline-flex items-center px-6 py-3 rounded-full font-black text-sm transition-all duration-200 ${
                            pkg.popular
                              ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                              : `border-2 text-gray-700 hover:text-white`
                          }`}
                          style={{
                            borderColor: !pkg.popular ? (category.color.includes('pink') ? '#ec4899' : category.color.includes('blue') ? '#3b82f6' : '#f97316') : 'transparent'
                          }}>
                            BEKIJK DETAILS
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-20 pt-16 border-t border-gray-200">
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Vragen over de pakketten?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Neem contact op voor een persoonlijk advies en maatwerk oplossing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                GRATIS OFFERTE
              </a>
              <a
                href="tel:0645251333"
                className="inline-flex items-center border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-black text-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                DIRECT BELLEN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closePopup}
          ></div>

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-black text-gray-900 mb-4">{selectedPackage.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-blue-600">{selectedPackage.price}</span>
                    <div className="text-gray-600 font-semibold mt-2">
                      <Clock className="w-5 h-5 inline-block mr-2" />
                      {selectedPackage.duration}
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{selectedPackage.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-gray-900 mb-6">Wat is inbegrepen:</h4>
                  <div className="space-y-4">
                    {selectedPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                {selectedPackage.note && (
                  <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                    <p className="text-blue-800 font-semibold">{selectedPackage.note}</p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg text-center"
                  >
                    BOEK DIT PAKKET
                  </a>
                  <a
                    href="tel:0645251333"
                    className="flex-1 border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-black text-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-center"
                  >
                    DIRECT BELLEN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingSection;