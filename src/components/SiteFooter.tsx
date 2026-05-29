import { Link } from "@tanstack/react-router";

const LOGO = "/images/kevin-logo-small.webp";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t-2 border-border py-12 sm:py-16 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Top: branding + diensten + info */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          <div className="md:col-span-2">
            <img src={LOGO} alt="DJ Kevin Froger" width={360} height={198} loading="lazy" decoding="async" className="h-14 sm:h-16 w-auto mb-4" />
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Allround DJ voor bruiloften, bedrijfsfeesten, verjaardagen en festivals door heel Nederland. Veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland.
            </p>
            <div className="mt-4 text-muted-foreground text-sm space-y-1">
              <div>📞 <a href="tel:0645251333" className="hover:text-foreground">Bellen</a></div>
              <div>✉️ <a href="mailto:Booking@kevinfroger.nl" className="hover:text-foreground">Booking@kevinfroger.nl</a></div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-secondary font-bold mb-4">Diensten</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/bruiloft-dj" className="hover:text-foreground">Bruiloft DJ</Link></li>
              <li><Link to="/verjaardag-dj" className="hover:text-foreground">Feest en verjaardag</Link></li>
              <li><Link to="/zakelijk-dj" className="hover:text-foreground">Bedrijfsfeest</Link></li>
              <li><Link to="/festival-dj" className="hover:text-foreground">Festival</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-secondary font-bold mb-4">Info</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/regios" className="hover:text-foreground">Werkgebied</Link></li>
              <li><Link to="/werkwijze" className="hover:text-foreground">Werkwijze</Link></li>
              <li><Link to="/prijzen" className="hover:text-foreground">Prijzen</Link></li>
              <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
              <li><Link to="/biografie" className="hover:text-foreground">Biografie</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Subtiele link naar landelijk werkgebied (alle plaatsen + provincies) */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <Link
            to="/regios"
            className="text-muted-foreground text-xs tracking-[0.18em] uppercase font-bold hover:text-foreground transition"
          >
            DJ in Nederland — bekijk alle plaatsen
          </Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-4">
        <div>© {new Date().getFullYear()} DJ Kevin Froger, allround DJ Nederland</div>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link to="/algemene-voorwaarden" className="hover:text-foreground">Algemene voorwaarden</Link>
        </div>
      </div>
    </footer>
  );
}
