import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import ScrollToTop from "./components/ScrollToTop";

/**
 * Hoofdpagina’s – expliciet lazy loaden
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

/**
 * Regio’s en steden – expliciet
 */
const ZuidHollandPage = React.lazy(() => import("./pages/regio/ZuidHollandPage"));
const NoordBrabantPage = React.lazy(() => import("./pages/regio/NoordBrabantPage"));
const GelderlandPage = React.lazy(() => import("./pages/regio/GelderlandPage"));
const UtrechtPage = React.lazy(() => import("./pages/regio/UtrechtPage"));
const OverijsselPage = React.lazy(() => import("./pages/regio/OverijsselPage"));

const RotterdamPage = React.lazy(() => import("./pages/regio/steden/RotterdamPage"));

/**
 * SEO-pagina’s – automatisch routes genereren via import.meta.glob
 * Bestandsnaam => pad:
 *   DJBruiloftRotterdamPage.tsx  -> /dj-bruiloft-rotterdam
 *   DJCapelleAanDenIJsselPage.tsx -> /dj-capelle-aan-den-ijssel (speciale IJ-fix)
 *   BruiloftDJDenHaagPage.tsx    -> /bruiloft-dj-den-haag
 */
const seoModules = import.meta.glob("./pages/seo/*.tsx"); // lazy loaders per file

function toSlugFromFile(filename: string) {
  // strip map + extensie
  let name = filename.replace(/\.\/pages\/seo\//, "").replace(/\.tsx$/, ""); // bijv. "DJBruiloftRotterdamPage"
  name = name.replace(/Page$/, ""); // "DJBruiloftRotterdam"

  // Specifieke NL-fix: "IJ" als 1 cluster behandelen
  name = name.replace(/IJ/g, "Ij");

  // CamelCase -> kebab-case
  // a) scheiding tussen lower/number en Upper
  name = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
  // b) sequences van capitals gevolgd door Capital+lower (ABCDef -> ABC-Def)
  name = name.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2");

  // naar lowercase
  let slug = name.toLowerCase();

  // "i-jssel" edgecase die soms kan ontstaan -> "ijssel"
  slug = slug.replace(/-i-j/g, "-ij");

  // underscores -> streepjes
  slug = slug.replace(/_/g, "-");

  return `/${slug}`;
}

const seoRouteElements = Object.entries(seoModules).map(([path, loader]) => {
  const slug = toSlugFromFile(path);

  // React.lazy verwacht { default: Component }
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

              {/* Regio-routes */}
              <Route path="/regio/zuid-holland" element={<ZuidHollandPage />} />
              <Route path="/regio/noord-brabant" element={<NoordBrabantPage />} />
              <Route path="/regio/gelderland" element={<GelderlandPage />} />
              <Route path="/regio/utrecht" element={<UtrechtPage />} />
              <Route path="/regio/overijssel" element={<OverijsselPage />} />

              {/* Steden */}
              <Route path="/regio/zuid-holland/rotterdam" element={<RotterdamPage />} />

              {/* SEO-routes – automatisch uit /pages/seo */}
              {seoRouteElements}

              {/* 's-Gravendeel 7-pack - Explicit routes */}
              <Route path="/dj-s-gravendeel" element={<DJSGravendeelPage />} />
              <Route path="/dj-bruiloft-s-gravendeel" element={<DJBruiloftSGravendeelPage />} />
              <Route path="/dj-verjaardag-s-gravendeel" element={<DJVerjaardagSGravendeelPage />} />
              <Route path="/dj-bedrijfsfeest-s-gravendeel" element={<DJBedrijfsfeestSGravendeelPage />} />
              <Route path="/dj-last-minute-s-gravendeel" element={<DJLastMinuteSGravendeelPage />} />
              <Route path="/dj-prijs-s-gravendeel" element={<DJPrijsSGravendeelPage />} />
              <Route path="/dj-saxofonist-s-gravendeel" element={<DJSaxofonistSGravendeelPage />} />

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
      </div>
    </Router>
  );
}

export default App;
