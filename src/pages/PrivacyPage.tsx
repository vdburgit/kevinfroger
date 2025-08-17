import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            PRIVACYBELEID
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hoe wij omgaan met jouw persoonlijke gegevens
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-xl max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Algemeen</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              DJ Kevin Froger respecteert de privacy van alle gebruikers van zijn website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Gebruik van verzamelde gegevens</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              DJ Kevin Froger gebruikt de verzamelde gegevens om:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
              <li>Contact met u op te nemen voor offertes en boekingen</li>
              <li>Uw evenement optimaal voor te bereiden</li>
              <li>U te informeren over onze services</li>
              <li>De website te verbeteren</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Verstrekking aan derden</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              DJ Kevin Froger verstrekt geen persoonlijke gegevens aan derden, behalve wanneer dit noodzakelijk is voor de uitvoering van onze dienstverlening of wanneer wij hiertoe wettelijk verplicht zijn.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Beveiliging</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              DJ Kevin Froger neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Contact</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Voor vragen over dit privacybeleid kunt u contact opnemen:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-lg font-semibold text-gray-900 mb-2">DJ Kevin Froger</p>
              <p className="text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                06 45 25 13 33
              </p>
              <p className="text-gray-700">
                <Mail className="w-4 h-4 inline mr-2" />
                booking@kevinfroger.nl
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;