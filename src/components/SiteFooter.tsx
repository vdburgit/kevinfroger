import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const LOGO = "/images/kevin-logo-small.webp";

// SoundCloud zit niet in lucide; eigen icoon.
function SoundCloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.013.063.045.094.09.094s.089-.031.104-.094l.21-1.308-.21-1.332c-.015-.057-.045-.094-.09-.094m1.83-1.229c-.061 0-.12.05-.12.111l-.226 2.563.226 2.458c0 .062.059.111.12.111.06 0 .12-.049.12-.111l.25-2.458-.25-2.563c0-.061-.06-.111-.12-.111m.945-.097c-.075 0-.135.06-.135.135l-.195 2.526.195 2.41c0 .075.06.135.135.135.074 0 .135-.06.135-.135l.225-2.41-.225-2.526c0-.075-.061-.135-.135-.135m1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.21 2.301.21 2.452c.006.09.074.149.164.149.084 0 .154-.06.159-.149l.24-2.452-.24-2.301m.81-.78c-.101 0-.18.079-.186.18l-.18 2.901.18 2.418c.006.099.085.179.186.179.099 0 .18-.08.18-.179l.21-2.418-.21-2.901c0-.101-.081-.18-.18-.18m.93.022c-.107 0-.195.087-.195.195l-.165 2.864.165 2.371c0 .107.088.195.195.195s.195-.088.195-.195l.18-2.371-.18-2.864c0-.108-.088-.195-.195-.195m.93.51c-.121 0-.219.099-.219.219l-.15 2.354.15 2.354c0 .12.098.219.219.219.12 0 .218-.099.218-.219l.165-2.354-.165-2.354c0-.12-.098-.219-.218-.219m.93-.78c-.127 0-.226.099-.232.226l-.135 3.134.135 2.339c.006.127.105.226.232.226.126 0 .225-.099.231-.226l.15-2.339-.15-3.134c-.006-.127-.105-.226-.231-.226m.96.78c-.139 0-.247.108-.247.247l-.119 2.353.119 2.34c0 .139.108.247.247.247s.247-.108.247-.247l.135-2.34-.135-2.353c0-.139-.108-.247-.247-.247m.99-2.025c-.146 0-.262.116-.262.262l-.105 4.116.105 2.32c0 .146.116.262.262.262.145 0 .262-.116.262-.262l.119-2.32-.119-4.116c0-.146-.117-.262-.262-.262m1.005.135c-.152 0-.275.123-.275.275l-.09 3.967.09 2.301c0 .152.123.275.275.275s.275-.123.275-.275l.105-2.301-.105-3.967c0-.152-.123-.275-.275-.275m1.95-.27c-.159 0-.288.129-.288.288l-.075 4.224.075 2.279c0 .159.129.288.288.288s.288-.129.288-.288l.09-2.279-.09-4.224c0-.159-.129-.288-.288-.288m-.961.105c-.155 0-.281.126-.281.281l-.083 4.122.083 2.29c0 .155.126.281.281.281.156 0 .282-.126.282-.281l.09-2.29-.09-4.122c0-.155-.126-.281-.282-.281m3.03 6.692c.165 0 .311-.046.45-.135.78-.51 1.275-1.395 1.275-2.4 0-1.611-1.305-2.916-2.916-2.916-.405 0-.795.084-1.155.24-.024.012-.038.036-.038.06v5.151c0 .024.018.045.04.046l2.344.954z"/>
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/djkevinfroger/", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/KevinFroger.nl", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@KEVINFROGER", Icon: Youtube },
  { label: "SoundCloud", href: "https://soundcloud.com/kevin-froger-358539469", Icon: SoundCloud },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevinfroger/", Icon: Linkedin },
];

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
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
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
