// Self-host Google Fonts: downloadt de woff2-bestanden (latin-subset) naar
// public/fonts/ zodat de site geen render-blokkerende externe Google Fonts-
// aanroep meer doet. Genereert ook de @font-face-CSS (geprint, plak in styles.css).
//
// Draaien: node scripts/self-host-fonts.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const OUT = path.resolve("public/fonts");
await mkdir(OUT, { recursive: true });

const FAMILIES = [
  { css: "Inter", family: "Inter", slug: "inter", weights: [400, 500, 600, 700, 800] },
  { css: "Barlow+Condensed", family: "Barlow Condensed", slug: "barlow-condensed", weights: [500, 600, 700] },
];

const faceCss = [];
for (const f of FAMILIES) {
  const url = `https://fonts.googleapis.com/css2?family=${f.css}:wght@${f.weights.join(";")}&display=swap`;
  const css = await fetch(url, { headers: { "User-Agent": UA } }).then((r) => r.text());
  // Blokken zijn "/* subset */ @font-face { ... }". Pak alleen de latin-blokken.
  const blocks = css.split("/*").map((b) => "/*" + b);
  for (const w of f.weights) {
    const latin = blocks.find(
      (b) => b.startsWith("/* latin */") && b.includes(`font-weight: ${w};`),
    );
    if (!latin) { console.error(`!! latin ${f.family} ${w} niet gevonden`); continue; }
    const m = latin.match(/url\((https:\/\/[^)]+\.woff2)\)/);
    if (!m) { console.error(`!! geen woff2 ${f.family} ${w}`); continue; }
    const buf = Buffer.from(await fetch(m[1], { headers: { "User-Agent": UA } }).then((r) => r.arrayBuffer()));
    const file = `${f.slug}-${w}.woff2`;
    await writeFile(path.join(OUT, file), buf);
    console.log(`${file}  ${Math.round(buf.length / 1024)} KB`);
    faceCss.push(
      `@font-face{font-family:'${f.family}';font-style:normal;font-weight:${w};font-display:swap;src:url('/fonts/${file}') format('woff2');}`,
    );
  }
}
console.log("\n----- @font-face CSS -----\n" + faceCss.join("\n"));
