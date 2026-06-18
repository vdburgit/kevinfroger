// Inline de gebundelde CSS in dist/index.html zodat er geen render-blokkerend
// extern stylesheet-verzoek meer is (PageSpeed: "render-blocking requests").
// De bundel is klein (~15 KB), dus inline zetten is sneller dan een aparte
// round-trip op traag mobiel. Draait NA `vite build` en VOOR `npm run prerender`,
// zodat de prerender deze index.html als shell gebruikt en alle pagina's de
// inline-CSS krijgen.
//
// Draaien: node scripts/inline-css.js
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve("dist");
const indexPath = path.join(DIST, "index.html");
let html = await readFile(indexPath, "utf8");

// Vind alle <link rel="stylesheet" ... href="/assets/xxx.css" ...>
const linkRe = /<link\b[^>]*rel=["']stylesheet["'][^>]*href=["'](\/assets\/[^"']+\.css)["'][^>]*>/g;
const links = [...html.matchAll(linkRe)];
if (links.length === 0) {
  console.log("inline-css: geen stylesheet-link gevonden (al inline?). Niets te doen.");
  process.exit(0);
}

let inlined = 0;
for (const m of links) {
  const href = m[1];
  const cssPath = path.join(DIST, href.replace(/^\//, ""));
  const css = await readFile(cssPath, "utf8");
  html = html.replace(m[0], `<style>${css}</style>`);
  inlined++;
  console.log(`inline-css: ${href} -> inline <style> (${Math.round(css.length / 1024)} KB)`);
}

await writeFile(indexPath, html, "utf8");
console.log(`inline-css: ${inlined} stylesheet(s) inline gezet in dist/index.html`);
