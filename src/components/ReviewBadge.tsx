import { Link } from "@tanstack/react-router";
import { REVIEW_COUNT, REVIEW_RATING } from "@/lib/seo";

function Stars() {
  return (
    <span className="text-secondary text-lg leading-none tracking-tight" aria-hidden="true">
      ★★★★★
    </span>
  );
}

// Compact reviewblok met de echte Google-score (5,0 / 10 reviews). Bedoeld om op
// elke landingspagina te plaatsen, zodat sociaal bewijs overal direct zichtbaar
// is. De cijfers komen uit lib/seo.ts, net als de aggregateRating in de JSON-LD,
// zodat zichtbare tekst en markup gegarandeerd matchen.
export function ReviewBadge({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/reviews"
      className={`inline-flex items-center gap-3 rounded-full border-2 border-border bg-card px-5 py-2.5 hover:border-primary transition-colors ${className}`}
    >
      <Stars />
      <span className="text-sm font-semibold text-foreground">
        {REVIEW_RATING.replace(".", ",")} op Google
      </span>
      <span className="text-sm text-muted-foreground">{REVIEW_COUNT} reviews</span>
    </Link>
  );
}

// Variant als volledige sectie met wat meer ademruimte, voor onderaan een
// landingspagina of tussen contentblokken.
export function ReviewStrip({
  text = "Stuk voor stuk echte klanten voor wie ik zelf achter de set stond.",
}: {
  text?: string;
}) {
  return (
    <section className="py-12 px-6 lg:px-10 bg-card border-y-2 border-border">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <Stars />
        <p className="text-lg text-foreground">
          <strong className="font-semibold">{REVIEW_RATING.replace(".", ",")}</strong> op Google
          uit {REVIEW_COUNT} reviews. {text}{" "}
          <Link to="/reviews" className="text-secondary underline hover:text-primary">
            Lees de reviews
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
