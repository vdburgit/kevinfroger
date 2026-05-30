import { Link } from "@tanstack/react-router";

export type Crumb = { name: string; path: string };

type Props = {
  items: Crumb[];
  // onDark: voor gebruik over een donkere hero (lichte tekst);
  // default: voor lichte pagina-achtergrond.
  variant?: "onDark" | "default";
  className?: string;
};

// Zichtbare broodkruimels. Gebruik DEZELFDE items-array als de breadcrumb()
// JSON-LD in de route-head, zodat zichtbare tekst en structured data matchen.
// Het laatste item is de huidige pagina en is niet klikbaar (aria-current="page").
export function Breadcrumbs({
  items,
  variant = "default",
  className = "",
}: Props) {
  if (items.length < 2) return null;

  const onDark = variant === "onDark";
  const linkClass = onDark
    ? "text-white/80 hover:text-secondary transition-colors"
    : "text-muted-foreground hover:text-primary transition-colors";
  const currentClass = onDark ? "text-white" : "text-foreground";
  const sepClass = onDark ? "text-white/40" : "text-muted-foreground/50";

  return (
    <nav
      aria-label="Broodkruimels"
      className={`text-xs sm:text-sm font-medium ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-x-2">
              {last ? (
                <span aria-current="page" className={currentClass}>
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className={linkClass}>
                  {item.name}
                </Link>
              )}
              {!last && (
                <span aria-hidden="true" className={sepClass}>
                  ›
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
