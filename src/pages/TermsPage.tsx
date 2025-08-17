import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Mail, Phone } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-gray-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            ALGEMENE VOORWAARDEN
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Voorwaarden voor DJ services van Kevin Froger
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-xl max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Artikel 1: Algemeen</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen DJ Kevin Froger en opdrachtgever, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Artikel 2: Offerte en Overeenkomst</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Alle offertes zijn vrijblijvend en geldig voor 30 dagen. Een overeenkomst komt tot stand door ondertekening van het contract door beide partijen of door betaling van de aanbetaling.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Artikel 3: Betaling</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
              <li>50% aanbetaling bij contractondertekening</li>
              <li>50% restbetaling uiterlijk 2 weken voor het evenement</li>
              <li>Bij annulering binnen 4 weken: 100% van het totaalbedrag verschuldigd</li>
              <li>Bij annulering binnen 8 weken: 50% van het totaalbedrag verschuldigd</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Artikel 4: Uitvoering</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              DJ Kevin Froger verbindt zich ertoe de overeengekomen diensten naar beste kunnen uit te voeren. Kleine afwijkingen die de kwaliteit niet aantasten zijn toegestaan.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Artikel 5: Aansprakelijkheid</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              DJ Kevin Froger is verzekerd voor aansprakelijkheid. De aansprakelijkheid is beperkt tot het bedrag dat door de verzekeraar wordt uitgekeerd.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Artikel 6: Overmacht</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bij overmacht (ziekte, ongeval, extreme weersomstandigheden) wordt een vervanger geregeld of wordt het contract ontbonden zonder schadevergoeding.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6">Contact</h2>
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

export default TermsPage;