import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import WeddingsPage from './pages/WeddingsPage';
import CorporatePage from './pages/CorporatePage';
import FestivalPage from './pages/FestivalPage';
import PrivatePartiesPage from './pages/PrivatePartiesPage';
import SportsEventsPage from './pages/SportsEventsPage';
import EventsPage from './pages/EventsPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import BiographyPage from './pages/BiographyPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// SEO Landing Pages
import AutoSEORouter from './components/AutoSEORouter';
import DJHoekscheWaardPage from './pages/seo/DJHoekscheWaardPage';
import DJRotterdamPage from './pages/seo/DJRotterdamPage';
import DJDenHaagPage from './pages/seo/DJDenHaagPage';
import DJDordrechtPage from './pages/seo/DJDordrechtPage';
import DJWestlandPage from './pages/seo/DJWestlandPage';
import DJSchiedamPage from './pages/seo/DJSchiedamPage';
import DJSpijkenissePage from './pages/seo/DJSpijkenissePage';
import DJBarendrechtPage from './pages/seo/DJBarendrechtPage';
import DJVlaardingenPage from './pages/seo/DJVlaardingenPage';
import DJCapelleAanDenIJsselPage from './pages/seo/DJCapelleAanDenIJsselPage';
import DJMaassluisPage from './pages/seo/DJMaassluisPage';
import DJZuidHollandPage from './pages/seo/DJZuidHollandPage';
import DJBriellePage from './pages/seo/DJBriellePage';
import DJHellevoetsluisPage from './pages/seo/DJHellevoetsluisPage';
import DJGoerreeOverflakkeePage from './pages/seo/DJGoerreeOverflakkeePage';
import DJBruiloftRotterdamPage from './pages/seo/DJBruiloftRotterdamPage';
import BruiloftDJDenHaagPage from './pages/seo/BruiloftDJDenHaagPage';
import FeestDJHoekscheWaardPage from './pages/seo/FeestDJHoekscheWaardPage';
import DJSGravendeelPage from './pages/seo/DJSGravendeelPage';
import DJRegioTielPage from './pages/seo/DJRegioTielPage';
import DJTielPage from './pages/seo/DJTielPage';
import DJKerkAvezaathPage from './pages/seo/DJKerkAvezaathPage';
import DJVerjaardagPage from './pages/seo/DJVerjaardagPage';

// Additional SEO Pages
import DJLeidenPage from './pages/seo/DJLeidenPage';
import DJDelftPage from './pages/seo/DJDelftPage';
import DJZoetermeerPage from './pages/seo/DJZoetermeerPage';
import DJGoudaPage from './pages/seo/DJGoudaPage';
import DJAlphenAanDenRijnPage from './pages/seo/DJAlphenAanDenRijnPage';
import DJUtrechtPage from './pages/seo/DJUtrechtPage';
import DJAmsterdamPage from './pages/seo/DJAmsterdamPage';
import DJBoekenNederlandPage from './pages/seo/DJBoekenNederlandPage';
import ProfessionaleDJPage from './pages/seo/ProfessionaleDJPage';
import LiveMixingDJPage from './pages/seo/LiveMixingDJPage';
import DJMCServicesPage from './pages/seo/DJMCServicesPage';

// Ultimate SEO Pages
import DJHurenNederlandPage from './pages/seo/DJHurenNederlandPage';
import GoedkopeDJPage from './pages/seo/GoedkopeDJPage';
import DJMetApparatuurPage from './pages/seo/DJMetApparatuurPage';
import DJTuinfeestPage from './pages/seo/DJTuinfeestPage';
import DJSchuurfeestPage from './pages/seo/DJSchuurfeestPage';
import DJThemafeestPage from './pages/seo/DJThemafeestPage';
import DJKoningsdagPage from './pages/seo/DJKoningsdagPage';

// Dynamic SEO Components
import DynamicSEOGenerator from './components/DynamicSEOGenerator';
import DJNederlandPage from './pages/seo/DJNederlandPage';
import { dutchCities, eventTypes } from './data/dutchCities';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="pb-16 md:pb-0">
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
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </Router>
  );
}

export default App;