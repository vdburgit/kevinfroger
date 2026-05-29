// One-off image optimizer voor PageSpeed-winst.
// - Hero: responsive WebP + AVIF (640/1280/1920).
// - Partnerlogo's + sitelogo: verkleinen naar max 240px (logo's) / 360px (sitelogo)
//   en als WebP wegschrijven. De originele PNG's waren tot 3323px breed.
//
// Draaien: `node scripts/optimize-logos.js` (vereist `npm i sharp`).
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const IMAGES = path.resolve("public/images");
const LOGOS = path.join(IMAGES, "logos");

const dims = {};

async function hero() {
  const src = path.join(IMAGES, "hero-crowd.jpg");
  for (const w of [640, 1280, 1920]) {
    const img = sharp(src).resize({ width: w, withoutEnlargement: true });
    await img.clone().webp({ quality: 70 }).toFile(path.join(IMAGES, `hero-crowd-${w}.webp`));
    await img.clone().avif({ quality: 55 }).toFile(path.join(IMAGES, `hero-crowd-${w}.avif`));
  }
  console.log("hero: 640/1280/1920 webp+avif geschreven");
}

async function siteLogo() {
  // Header toont max ~56px hoog, footer ~64px. 360px breed dekt retina ruim.
  const src = path.join(IMAGES, "kevin-logo.png");
  const out = path.join(IMAGES, "kevin-logo-small.webp");
  const info = await sharp(src)
    .resize({ width: 360, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(out);
  dims["kevin-logo"] = { w: info.width, h: info.height };
  console.log(`kevin-logo-small.webp ${info.width}x${info.height}`);
}

async function logos() {
  const files = (await readdir(LOGOS)).filter((f) => /\.(png|jpe?g)$/i.test(f));
  for (const f of files) {
    const base = f.replace(/\.(png|jpe?g)$/i, "");
    const info = await sharp(path.join(LOGOS, f))
      .resize({ width: 240, height: 240, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(LOGOS, `${base}.webp`));
    dims[base] = { w: info.width, h: info.height };
    console.log(`${base}.webp ${info.width}x${info.height}`);
  }
}

await hero();
await siteLogo();
await logos();
console.log("\nDIMS_JSON=" + JSON.stringify(dims));
