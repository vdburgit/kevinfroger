import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

/**
 * Hoofdpagina's – expliciet lazy loaden
 */
const HomePage = React.lazy(() => import("./pages/HomePage"));
const BruiloftDJPage = React.lazy(() => import("./pages/BruiloftDJPage"));
const VerjaardagDJPage = React.lazy(() => import("./pages/VerjaardagDJPage"));
const EvenementenDJPage = React.lazy(() => import("./pages/EvenementenDJPage"));
const ZakelijkDJPage = React.lazy(() => import("./pages/ZakelijkDJPage"));
const WerkwijzePage = React.lazy(() => import("./pages/WerkwijzePage"));
const ReviewsPage = React.lazy(() => import("./pages/ReviewsPage"));
const RegioPage = React.lazy(() => import("./pages/RegioPage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const PricingPage = React.lazy(() => import("./pages/PricingPage"));
const FAQPage = React.lazy(() => import("./pages/FAQPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const BiographyPage = React.lazy(() => import("./pages/BiographyPage"));
const PrivacyPage = React.lazy(() => import("./pages/PrivacyPage"));
const TermsPage = React.lazy(() => import("./pages/TermsPage"));
const SecretEventsPage = React.lazy(() => import("./pages/SecretEventsPage"));

/**
 * Regio's en provincies – expliciet
 */
const ZuidHollandPage = React.lazy(() => import("./pages/regio/ZuidHollandPage"));
const NoordBrabantPage = React.lazy(() => import("./pages/regio/NoordBrabantPage"));
const GelderlandPage = React.lazy(() => import("./pages/regio/GelderlandPage"));
const UtrechtPage = React.lazy(() => import("./pages/regio/UtrechtPage"));
const OverijsselPage = React.lazy(() => import("./pages/regio/OverijsselPage"));
const NoordHollandPage = React.lazy(() => import("./pages/regio/NoordHollandPage"));
const ZeelandPage = React.lazy(() => import("./pages/regio/ZeelandPage"));

/**
 * Zuid-Holland Steden
 */
const Rotterdam = React.lazy(() => import("./pages/regio/ZuidHolland/Rotterdam"));
const DenHaag = React.lazy(() => import("./pages/regio/ZuidHolland/DenHaag"));
const Delft = React.lazy(() => import("./pages/regio/ZuidHolland/Delft"));
const Leiden = React.lazy(() => import("./pages/regio/ZuidHolland/Leiden"));
const Zoetermeer = React.lazy(() => import("./pages/regio/ZuidHolland/Zoetermeer"));
const Dordrecht = React.lazy(() => import("./pages/regio/ZuidHolland/Dordrecht"));
const Gouda = React.lazy(() => import("./pages/regio/ZuidHolland/Gouda"));
const Schiedam = React.lazy(() => import("./pages/regio/ZuidHolland/Schiedam"));
const Vlaardingen = React.lazy(() => import("./pages/regio/ZuidHolland/Vlaardingen"));
const Spijkenisse = React.lazy(() => import("./pages/regio/ZuidHolland/Spijkenisse"));
const Westland = React.lazy(() => import("./pages/regio/ZuidHolland/Westland"));

/**
 * Noord-Holland Steden
 */
const Amsterdam = React.lazy(() => import("./pages/regio/NoordHolland/Amsterdam"));

/**
 * Utrecht Steden
 */
const Utrecht = React.lazy(() => import("./pages/regio/Utrecht/Utrecht"));

/**
 * Noord-Brabant Steden
 */
const Eindhoven = React.lazy(() => import("./pages/regio/NoordBrabant/Eindhoven"));
const Tilburg = React.lazy(() => import("./pages/regio/NoordBrabant/Tilburg"));
const Breda = React.lazy(() => import("./pages/regio/NoordBrabant/Breda"));
const DenBosch = React.lazy(() => import("./pages/regio/NoordBrabant/DenBosch"));

/**
 * Overige SEO-pagina's (niet-steden) – automatisch uit /pages/seo
 */
const seoModules = import.meta.glob("./pages/seo/*.tsx");

function toSlugFromFile(filename: string) {
  let name = filename.replace(/\.\/pages\/seo\//, "").replace(/\.tsx$/, "");
  name = name.replace(/Page$/, "");
  name = name.replace(/IJ/g, "Ij");
  name = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
  name = name.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");
  let slug = name.toLowerCase();
  slug = slug.replace(/-i-j/g, "-ij");
  slug = slug.replace(/_/g, "-");
  return `/${slug}`;
}

const seoRouteElements = Object.entries(seoModules).map(([path, loader]) => {
  const slug = toSlugFromFile(path);
  const LazyComp = React.lazy(async () => {
    const mod: any = await (loader as () => Promise<any>)();
    return { default: mod.default };
  });
  return <Route key={slug} path={slug} element={<LazyComp />} />;
});

/**
 * Loading state
 */
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white contain-strict">
    <div
      className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"
      role="status"
      aria-label="Pagina laden..."
    >
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
              {/* Hoofd-routes */}
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
              <Route path="/secret-events-privacy" element={<SecretEventsPage />} />

              {/* Regio/Provincie routes */}
              <Route path="/regio/zuid-holland" element={<ZuidHollandPage />} />
              <Route path="/regio/noord-brabant" element={<NoordBrabantPage />} />
              <Route path="/regio/gelderland" element={<GelderlandPage />} />
              <Route path="/regio/utrecht" element={<UtrechtPage />} />
              <Route path="/regio/overijssel" element={<OverijsselPage />} />
              <Route path="/regio/noord-holland" element={<NoordHollandPage />} />
              <Route path="/regio/zeeland" element={<ZeelandPage />} />

              {/* Zuid-Holland Steden */}
              <Route path="/regio/zuid-holland/rotterdam" element={<Rotterdam />} />
              <Route path="/regio/zuid-holland/den-haag" element={<DenHaag />} />
              <Route path="/regio/zuid-holland/delft" element={<Delft />} />
              <Route path="/regio/zuid-holland/leiden" element={<Leiden />} />
              <Route path="/regio/zuid-holland/zoetermeer" element={<Zoetermeer />} />
              <Route path="/regio/zuid-holland/dordrecht" element={<Dordrecht />} />
              <Route path="/regio/zuid-holland/gouda" element={<Gouda />} />
              <Route path="/regio/zuid-holland/schiedam" element={<Schiedam />} />
              <Route path="/regio/zuid-holland/vlaardingen" element={<Vlaardingen />} />
              <Route path="/regio/zuid-holland/spijkenisse" element={<Spijkenisse />} />
              <Route path="/regio/zuid-holland/westland" element={<Westland />} />
              
              {/* Noord-Holland Steden */}
              <Route path="/regio/noord-holland/amsterdam" element={<Amsterdam />} />
              
              {/* Utrecht Steden */}
              <Route path="/regio/utrecht/utrecht" element={<Utrecht />} />
              
              {/* Noord-Brabant Steden */}
              <Route path="/regio/noord-brabant/eindhoven" element={<Eindhoven />} />
              <Route path="/regio/noord-brabant/tilburg" element={<Tilburg />} />
              <Route path="/regio/noord-brabant/breda" element={<Breda />} />
              <Route path="/regio/noord-brabant/den-bosch" element={<DenBosch />} />

              {/* SEO-routes – automatisch uit /pages/seo (alleen niet-steden) */}
              {seoRouteElements}

              {/* Legacy redirects */}
              <Route path="/bruiloften" element={<Navigate to="/bruiloft-dj" replace />} />
              <Route path="/bedrijfsfeesten" element={<Navigate to="/zakelijk-dj" replace />} />
              <Route path="/festivals" element={<Navigate to="/evenementen-dj" replace />} />
              <Route path="/evenementen" element={<Navigate to="/evenementen-dj" replace />} />
              <Route path="/prive-feesten" element={<Navigate to="/verjaardag-dj" replace />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        <MobileCTA />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;