import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for optimal performance and code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'));
const BruiloftDJPage = React.lazy(() => import('./pages/BruiloftDJPage'));
const VerjaardagDJPage = React.lazy(() => import('./pages/VerjaardagDJPage'));
const EvenementenDJPage = React.lazy(() => import('./pages/EvenementenDJPage'));
const ZakelijkDJPage = React.lazy(() => import('./pages/ZakelijkDJPage'));
const WerkwijzePage = React.lazy(() => import('./pages/WerkwijzePage'));
const ReviewsPage = React.lazy(() => import('./pages/ReviewsPage'));
const RegioPage = React.lazy(() => import('./pages/RegioPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const BiographyPage = React.lazy(() => import('./pages/BiographyPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));

// New region pages
const ZuidHollandPage = React.lazy(() => import('./pages/regio/ZuidHollandPage'));

// City pages
const RotterdamPage = React.lazy(() => import('./pages/regio/steden/RotterdamPage'));
const DenHaagPage = React.lazy(() => import('./pages/regio/steden/DenHaagPage'));
const DelftPage = React.lazy(() => import('./pages/regio/steden/DelftPage'));
const LeidenPage = React.lazy(() => import('./pages/regio/steden/LeidenPage'));
const ZoetermeerPage = React.lazy(() => import('./pages/regio/steden/ZoetermeerPage'));

// Optimized loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white contain-strict">
    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin gpu-accelerated" role="status" aria-label="Pagina laden...">
      <span className="sr-only">Laden...</span>
    </div>
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
              <Route path="/bruiloft-dj" element={<BruiloftDJPage />} />
              <Route path="/verjaardag-dj" element={<VerjaardagDJPage />} />
              <Route path="/evenementen-dj" element={<EvenementenDJPage />} />
              <Route path="/zakelijk-dj" element={<ZakelijkDJPage />} />
              <Route path="/werkwijze" element={<WerkwijzePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/regio" element={<RegioPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/prijzen" element={<PricingPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/biografie" element={<BiographyPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/algemene-voorwaarden" element={<TermsPage />} />
            
              {/* New region structure */}
              <Route path="/regio/zuid-holland" element={<ZuidHollandPage />} />
              
              {/* City pages */}
              <Route path="/regio/zuid-holland/rotterdam" element={<RotterdamPage />} />
              <Route path="/regio/zuid-holland/den-haag" element={<DenHaagPage />} />
              <Route path="/regio/zuid-holland/delft" element={<DelftPage />} />
              <Route path="/regio/zuid-holland/leiden" element={<LeidenPage />} />
              <Route path="/regio/zuid-holland/zoetermeer" element={<ZoetermeerPage />} />
              
              {/* Legacy redirects */}
              <Route path="/bruiloften" element={<Navigate to="/bruiloft-dj" replace />} />
              <Route path="/bedrijfsfeesten" element={<Navigate to="/zakelijk-dj" replace />} />
              <Route path="/festivals" element={<Navigate to="/evenementen-dj" replace />} />
              <Route path="/evenementen" element={<Navigate to="/evenementen-dj" replace />} />
              <Route path="/prive-feesten" element={<Navigate to="/verjaardag-dj" replace />} />
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