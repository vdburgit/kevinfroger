// Hercodeert de homepage-foto's (service-kaarten + portret) naar lichtere WebP.
// De -1280 varianten waren op te hoge kwaliteit gegenereerd (tot 210 KB); op mobiel
// (DPR ~1.75, 100vw) kiest de browser juist die. q72 halveert de bytes ~ruim.
//
// Draaien: `node scripts/optimize-cards.js` (vereist `npm i sharp`).
import sharp from "sharp";
import path from "node:path";

const IMAGES = path.resolve("public/images");

// base = bestandsnaam zonder extensie/suffix, source = origineel, widths = te genereren
const JOBS = [
  { base: "dj-kevin-froger-bruiloft-scaled", source: "dj-kevin-froger-bruiloft-scaled.jpeg", widths: [640, 1280, 1920] },
  { base: "dj-kevin-froger-bedrijfsfeest", source: "dj-kevin-froger-bedrijfsfeest.png", widths: [640, 1280] },
  { base: "dj-kevin-froger-apreskifeest", source: "dj-kevin-froger-apreskifeest.png", widths: [640, 1280] },
  { base: "kevin-portrait", source: "kevin-portrait.png", widths: [320, 640, 1280] },
];

for (const job of JOBS) {
  for (const w of job.widths) {
    const out = path.join(IMAGES, `${job.base}-${w}.webp`);
    const info = await sharp(path.join(IMAGES, job.source))
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(out);
    console.log(`${job.base}-${w}.webp ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`);
  }
}
