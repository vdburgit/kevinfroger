import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const WeddingsPage = React.lazy(() => import('./pages/WeddingsPage'));
const CorporatePage = React.lazy(() => import('./pages/CorporatePage'));
const FestivalPage = React.lazy(() => import('./pages/FestivalPage'));
const PrivatePartiesPage = React.lazy(() => import('./pages/PrivatePartiesPage'));
const SportsEventsPage = React.lazy(() => import('./pages/SportsEventsPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const BiographyPage = React.lazy(() => import('./pages/BiographyPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));

// SEO Landing Pages
const AutoSEORouter = React.lazy(() => import('./components/AutoSEORouter'));
const DJHoekscheWaardPage = React.lazy(() => import('./pages/seo/DJHoekscheWaardPage'));
const DJRotterdamPage = React.lazy(() => import('./pages/seo/DJRotterdamPage'));
const DJDenHaagPage = React.lazy(() => import('./pages/seo/DJDenHaagPage'));
const DJDordrechtPage = React.lazy(() => import('./pages/seo/DJDordrechtPage'));
const DJWestlandPage = React.lazy(() => import('./pages/seo/DJWestlandPage'));
const DJSchiedamPage = React.lazy(() => import('./pages/seo/DJSchiedamPage'));
const DJSpijkenissePage = React.lazy(() => import('./pages/seo/DJSpijkenissePage'));
const DJBarendrechtPage = React.lazy(() => import('./pages/seo/DJBarendrechtPage'));
const DJVlaardingenPage = React.lazy(() => import('./pages/seo/DJVlaardingenPage'));
const DJCapelleAanDenIJsselPage = React.lazy(() => import('./pages/seo/DJCapelleAanDenIJsselPage'));
const DJMaassluisPage = React.lazy(() => import('./pages/seo/DJMaassluisPage'));
const DJZuidHollandPage = React.lazy(() => import('./pages/seo/DJZuidHollandPage'));
const DJBriellePage = React.lazy(() => import('./pages/seo/DJBriellePage'));
const DJHellevoetsluisPage = React.lazy(() => import('./pages/seo/DJHellevoetsluisPage'));
const DJGoerreeOverflakkeePage = React.lazy(() => import('./pages/seo/DJGoerreeOverflakkeePage'));
const DJBruiloftRotterdamPage = React.lazy(() => import('./pages/seo/DJBruiloftRotterdamPage'));
const BruiloftDJDenHaagPage = React.lazy(() => import('./pages/seo/BruiloftDJDenHaagPage'));
const FeestDJHoekscheWaardPage = React.lazy(() => import('./pages/seo/FeestDJHoekscheWaardPage'));
const DJSGravendeelPage = React.lazy(() => import('./pages/seo/DJSGravendeelPage'));
const DJRegioTielPage = React.lazy(() => import('./pages/seo/DJRegioTielPage'));
const DJTielPage = React.lazy(() => import('./pages/seo/DJTielPage'));
const DJKerkAvezaathPage = React.lazy(() => import('./pages/seo/DJKerkAvezaathPage'));
const DJVerjaardagPage = React.lazy(() => import('./pages/seo/DJVerjaardagPage'));

// Additional SEO Pages
const DJLeidenPage = React.lazy(() => import('./pages/seo/DJLeidenPage'));
const DJDelftPage = React.lazy(() => import('./pages/seo/DJDelftPage'));
const DJZoetermeerPage = React.lazy(() => import('./pages/seo/DJZoetermeerPage'));
const DJGoudaPage = React.lazy(() => import('./pages/seo/DJGoudaPage'));
const DJAlphenAanDenRijnPage = React.lazy(() => import('./pages/seo/DJAlphenAanDenRijnPage'));
const DJUtrechtPage = React.lazy(() => import('./pages/seo/DJUtrechtPage'));
const DJAmsterdamPage = React.lazy(() => import('./pages/seo/DJAmsterdamPage'));
const DJBoekenNederlandPage = React.lazy(() => import('./pages/seo/DJBoekenNederlandPage'));
const ProfessionaleDJPage = React.lazy(() => import('./pages/seo/ProfessionaleDJPage'));
const LiveMixingDJPage = React.lazy(() => import('./pages/seo/LiveMixingDJPage'));
const DJMCServicesPage = React.lazy(() => import('./pages/seo/DJMCServicesPage'));

// Ultimate SEO Pages
const DJHurenNederlandPage = React.lazy(() => import('./pages/seo/DJHurenNederlandPage'));
const GoedkopeDJPage = React.lazy(() => import('./pages/seo/GoedkopeDJPage'));
const DJMetApparatuurPage = React.lazy(() => import('./pages/seo/DJMetApparatuurPage'));
const DJTuinfeestPage = React.lazy(() => import('./pages/seo/DJTuinfeestPage'));
const DJSchuurfeestPage = React.lazy(() => import('./pages/seo/DJSchuurfeestPage'));
const DJThemafeestPage = React.lazy(() => import('./pages/seo/DJThemafeestPage'));
const DJKoningsdagPage = React.lazy(() => import('./pages/seo/DJKoningsdagPage'));

// Dynamic SEO Components
const DynamicSEOGenerator = React.lazy(() => import('./components/DynamicSEOGenerator'));
const DJNederlandPage = React.lazy(() => import('./pages/seo/DJNederlandPage'));
import { dutchCities, eventTypes } from './data/dutchCities';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="pb-16 md:pb-0">
          <React.Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bruiloften" element={<WeddingsPage />} />
              <Route path="/bedrijfsfeesten" element={<CorporatePage />} />
              <Route path="/festivals" element={<FestivalPage />} />
              <Route path="/prive-feesten" element={<PrivatePartiesPage />} />
              <Route path="/sportfeesten" element={<SportsEventsPage />} />
              <Route path="/evenementen" element={<EventsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/prijzen" element={<PricingPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/biografie" element={<BiographyPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/algemene-voorwaarden" element={<TermsPage />} />
            
              {/* SEO Landing Pages */}
              <Route path="/dj-hoeksche-waard" element={<DJHoekscheWaardPage />} />
              <Route path="/dj-rotterdam" element={<DJRotterdamPage />} />
              <Route path="/dj-den-haag" element={<DJDenHaagPage />} />
              <Route path="/dj-dordrecht" element={<DJDordrechtPage />} />
              <Route path="/dj-westland" element={<DJWestlandPage />} />
              <Route path="/dj-schiedam" element={<DJSchiedamPage />} />
              <Route path="/dj-spijkenisse" element={<DJSpijkenissePage />} />
              <Route path="/dj-barendrecht" element={<DJBarendrechtPage />} />
              <Route path="/dj-vlaardingen" element={<DJVlaardingenPage />} />
              <Route path="/dj-capelle-aan-den-ijssel" element={<DJCapelleAanDenIJsselPage />} />
              <Route path="/dj-maassluis" element={<DJMaassluisPage />} />
              <Route path="/dj-zuid-holland" element={<DJZuidHollandPage />} />
              <Route path="/dj-brielle" element={<DJBriellePage />} />
              <Route path="/dj-hellevoetsluis" element={<DJHellevoetsluisPage />} />
              <Route path="/dj-goeree-overflakkee" element={<DJGoerreeOverflakkeePage />} />
              <Route path="/dj-bruiloft-rotterdam" element={<DJBruiloftRotterdamPage />} />
              <Route path="/bruiloft-dj-den-haag" element={<BruiloftDJDenHaagPage />} />
              <Route path="/feest-dj-hoeksche-waard" element={<FeestDJHoekscheWaardPage />} />
            
              {/* New SEO Pages */}
              <Route path="/dj-s-gravendeel" element={<DJSGravendeelPage />} />
              <Route path="/dj-regio-tiel" element={<DJRegioTielPage />} />
              <Route path="/dj-tiel" element={<DJTielPage />} />
              <Route path="/dj-kerk-avezaath" element={<DJKerkAvezaathPage />} />
              <Route path="/dj-verjaardag" element={<DJVerjaardagPage />} />
            
              {/* Additional SEO Pages */}
              <Route path="/dj-leiden" element={<DJLeidenPage />} />
              <Route path="/dj-delft" element={<DJDelftPage />} />
              <Route path="/dj-zoetermeer" element={<DJZoetermeerPage />} />
              <Route path="/dj-gouda" element={<DJGoudaPage />} />
              <Route path="/dj-alphen-aan-den-rijn" element={<DJAlphenAanDenRijnPage />} />
              <Route path="/dj-utrecht" element={<DJUtrechtPage />} />
              <Route path="/dj-amsterdam" element={<DJAmsterdamPage />} />
              <Route path="/dj-boeken-nederland" element={<DJBoekenNederlandPage />} />
              <Route path="/professionele-dj" element={<ProfessionaleDJPage />} />
              <Route path="/live-mixing-dj" element={<LiveMixingDJPage />} />
              <Route path="/dj-mc-services" element={<DJMCServicesPage />} />
            
              {/* Ultimate SEO Pages */}
              <Route path="/dj-huren-nederland" element={<DJHurenNederlandPage />} />
              <Route path="/dj-huren" element={<DJHurenNederlandPage />} />
              <Route path="/dj-boeken" element={<DJBoekenNederlandPage />} />
              <Route path="/goedkope-dj" element={<GoedkopeDJPage />} />
              <Route path="/betaalbare-dj" element={<GoedkopeDJPage />} />
              <Route path="/dj-met-apparatuur" element={<DJMetApparatuurPage />} />
              <Route path="/dj-inclusief-licht-en-geluid" element={<DJMetApparatuurPage />} />
              <Route path="/dj-tuinfeest" element={<DJTuinfeestPage />} />
              <Route path="/tuinfeest-dj" element={<DJTuinfeestPage />} />
              <Route path="/dj-schuurfeest" element={<DJSchuurfeestPage />} />
              <Route path="/schuurfeest-dj" element={<DJSchuurfeestPage />} />
              <Route path="/dj-themafeest" element={<DJThemafeestPage />} />
              <Route path="/themafeest-dj" element={<DJThemafeestPage />} />
              <Route path="/dj-koningsdag" element={<DJKoningsdagPage />} />
              <Route path="/koningsdag-dj" element={<DJKoningsdagPage />} />
            
              {/* Dynamic SEO Routes - Auto-generated for all Dutch cities */}
              <Route path="/dj-nederland" element={<DJNederlandPage />} />
            
              {/* Auto-generate routes for all Dutch cities */}
              {dutchCities.map(city => {
                const citySlug = city.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
                return (
                  <React.Fragment key={citySlug}>
                    {/* Basic city DJ page - only if not already manually created */}
                    {!['hoeksche-waard', 'rotterdam', 'den-haag', 'dordrecht', 'westland', 'schiedam', 'spijkenisse', 'barendrecht', 'vlaardingen', 'capelle-aan-den-ijssel', 'maassluis', 'brielle', 'hellevoetsluis', 'goeree-overflakkee', 'leiden', 'delft', 'zoetermeer', 'gouda', 'alphen-aan-den-rijn', 'utrecht', 'amsterdam', 's-gravendeel', 'tiel'].includes(citySlug) && (
                      <Route 
                        path={`/dj-${citySlug}`} 
                        element={<DynamicSEOGenerator city={citySlug} />} 
                      />
                    )}
                  
                    {/* City + event type combinations */}
                    {eventTypes.map(event => (
                      <React.Fragment key={`${citySlug}-${event.name}`}>
                        <Route 
                          path={`/dj-${event.name}-${citySlug}`} 
                          element={<DynamicSEOGenerator city={citySlug} eventType={event.name} />} 
                        />
                        <Route 
                          path={`/${event.name}-dj-${citySlug}`} 
                          element={<DynamicSEOGenerator city={citySlug} eventType={event.name} />} 
                        />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                );
              })}
            
              {/* Auto-generated SEO routes for all Dutch cities */}
              <Route path="/auto-seo/*" element={<AutoSEORouter />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </Router>
  );
}

export default App;