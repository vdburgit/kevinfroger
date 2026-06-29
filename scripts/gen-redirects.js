// Genereert statische redirect-stubs voor GitHub Pages.
// GH Pages past netlify.toml niet toe, dus oude URL's belandden op de SPA-404.
// Per oude URL schrijven we public/<oud-pad>/index.html met een instant
// meta-refresh + canonical naar de nieuwe URL (door Google behandeld als een
// permanente redirect die de linkwaarde doorgeeft).
//
// Draaien: `node scripts/gen-redirects.js`
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE = "https://kevinfroger.nl";

// Oude URL -> nieuwe URL. Alleen paden die GEEN echte route (meer) zijn.
// Let op: /dj-boeken-utrecht en /dj-boeken-groningen zijn bewust weggelaten —
// dat zijn nu bestaande pagina's en die mogen we niet wegredirecten.
const REDIRECTS = {
  // Oude dienst-slugs
  "/bruiloften": "/bruiloft-dj",
  "/bedrijfsfeesten": "/zakelijk-dj",
  "/festivals": "/festival-dj",
  "/privefeesten": "/verjaardag-dj",
  "/evenementen": "/festival-dj",
  "/evenementen-dj": "/festival-dj",
  "/prive-feesten": "/verjaardag-dj",
  "/feest-dj": "/verjaardag-dj",
  "/bedrijfsfeest-dj": "/zakelijk-dj",
  "/portfolio": "/reviews",
  // Werkgebied-aliassen
  "/werkgebied": "/regios",
  "/regio": "/regios",
  // Dunne provinciepagina's (oude site)
  "/dj-boeken-drenthe": "/regios",
  "/dj-boeken-friesland": "/regios",
  "/dj-boeken-limburg": "/regios",
  "/dj-boeken-noord-brabant": "/regios",
  "/dj-boeken-noord-brabant-2": "/regios",
  "/dj-boeken-noord-holland": "/regios",
  "/dj-boeken-overijssel": "/regios",
  "/dj-boeken-flevoland": "/regios",
  "/dj-boeken-zeeland": "/regios",
  "/dj-boeken-gelderland": "/dj-boeken-betuwe",
  // /dj-boeken-zuid-holland is nu een echte regiopagina; niet wegredirecten.
  // LET OP: /dj-boeken-tuil, /dj-boeken-ophemert en /dj-boeken-varik zijn
  // inmiddels weer echte routes (src/routes/*.tsx) en staan in de sitemap.
  // Daarom NIET wegredirecten — een stub zou de live, geindexeerde pagina
  // overschrijven. Eerder verwezen ze naar /dj-boeken-betuwe.
  // Oude merk-slugs
  "/dj-kevin-froger": "/",
  "/kevin-froger-dj": "/",
  "/dj-kevin": "/",
  // Legacy occasion-/themaslugs (oude site, nog geindexeerd in GSC juni 2026)
  "/dj-verjaardag": "/verjaardag-dj",
  "/dj-themafeest": "/verjaardag-dj",
  "/dj-tuinfeest": "/verjaardag-dj",
  "/dj-koningsdag": "/verjaardag-dj",
  "/dj-met-apparatuur": "/dj-en-mc",
  "/dj-huren-nederland": "/regios",
  // Legacy plaats-/regiopaden (oude /regio/* structuur en losse plaatsslugs)
  "/dj-bruiloft-rotterdam": "/dj-boeken-rotterdam",
  "/bruiloft-dj-den-haag": "/dj-boeken-den-haag",
  "/feest-dj-hoeksche-waard": "/dj-boeken-hoeksche-waard",
  "/regio/zuid-holland": "/dj-boeken-zuid-holland",
  "/regio/zuid-holland/westland": "/regios",
  "/regio/noord-holland/amsterdam": "/dj-boeken-amsterdam",
};

const PUBLIC = path.resolve("public");

function stub(target) {
  const abs = SITE + target;
  return `<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <title>Pagina verhuisd</title>
    <link rel="canonical" href="${abs}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <script>location.replace(${JSON.stringify(target)} + location.search + location.hash);</script>
  </head>
  <body>
    <p>Deze pagina is verhuisd naar <a href="${target}">${abs}</a>.</p>
  </body>
</html>
`;
}

let n = 0;
for (const [from, to] of Object.entries(REDIRECTS)) {
  const dir = path.join(PUBLIC, from.replace(/^\//, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), stub(to));
  console.log(`${from}  ->  ${to}`);
  n++;
}
console.log(`\n${n} redirect-stubs geschreven onder public/`);
