// Prerender: rendert elke route uit de sitemap in een headless browser en
// schrijft de volledige HTML (mét door de router geinjecteerde per-pagina meta,
// JSON-LD en content) weg als statisch dist/<route>/index.html.
//
// Waarom: de site is een client-side SPA. Zonder prerender bevat de rauwe HTML
// op elke pagina dezelfde generieke meta; social scrapers en niet-JS crawlers
// zien dan geen pagina-specifieke title/description/og. Na prerender heeft elke
// pagina de juiste meta in de statische HTML.
//
// Draaien: `node scripts/prerender.js` (na `vite build`). Vereist puppeteer.
import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const PORT = 4178;

// Routes uit de sitemap halen (canonieke lijst van indexeerbare URL's).
const sitemap = await readFile(path.join(DIST, "sitemap.xml"), "utf8");
const routes = [
  ...new Set(
    [
      ...sitemap.matchAll(/<loc>https:\/\/kevinfroger\.nl(\/[^<]*)?<\/loc>/g),
    ].map((m) => (m[1] || "/").replace(/\/$/, "") || "/"),
  ),
];

// Statische server met SPA-fallback (onbekend pad -> index.html).
const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".json": "application/json",
  ".xml": "application/xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
};
// Pristine SPA-shell in geheugen: voor ELKE route serveren we deze, niet de
// schijf-index.html (die overschrijven we tijdens het prerenderen van "/").
// Zo start elke route schoon en lekt de home-meta niet naar andere pagina's.
const SHELL = await readFile(path.join(DIST, "index.html"));
const server = createServer(async (req, res) => {
  try {
    const p = decodeURIComponent(req.url.split("?")[0]);
    const ext = path.extname(p);
    const fp = path.join(DIST, p);
    if (ext && ext !== ".html" && existsSync(fp) && (await stat(fp)).isFile()) {
      res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
      res.end(await readFile(fp));
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(SHELL); // route of fallback -> pristine shell
    }
  } catch {
    res.statusCode = 500;
    res.end("err");
  }
});
await new Promise((r) => server.listen(PORT, r));

async function launch() {
  const base = {
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  };
  try {
    return await puppeteer.launch(base);
  } catch {
    return await puppeteer.launch({ ...base, channel: "chrome" });
  }
}
const browser = await launch();

let n = 0;
for (const route of routes) {
  const page = await browser.newPage();
  // GTM niet laten laden tijdens prerender: anders injecteert de snippet de
  // runtime gtm.js-tag (en evt. door de container geladen tags) in de DOM, die
  // dan in de statische HTML belandt en de container straks dubbel laadt.
  await page.setRequestInterception(true);
  page.on("request", (req) =>
    /googletagmanager\.com/.test(req.url()) ? req.abort() : req.continue(),
  );
  await page.goto(`http://localhost:${PORT}${route}`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });
  // Wacht tot de router de canonical voor deze route heeft gezet.
  await page
    .waitForFunction(
      (r) => {
        const c = document.querySelector('link[rel="canonical"]');
        const want = r === "/" ? "/" : r;
        return c && (c.getAttribute("href") || "").endsWith(want);
      },
      { timeout: 10000 },
      route,
    )
    .catch(() => {});
  const html =
    "<!doctype html>\n" +
    (await page.evaluate(() => {
      // De door de GTM-snippet runtime-geinjecteerde script-node weghalen; de
      // originele inline snippet blijft staan en draait straks in de browser.
      document
        .querySelectorAll('script[src*="googletagmanager.com"]')
        .forEach((s) => s.remove());
      return document.documentElement.outerHTML;
    }));
  const outDir = route === "/" ? DIST : path.join(DIST, route);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
  await page.close();
  n++;
  console.log(`✓ ${route}`);
}

await browser.close();
server.close();
console.log(`\n${n} routes geprerenderd`);
