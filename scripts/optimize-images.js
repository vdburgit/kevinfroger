import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Config
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const OUTPUT_DIR = IMAGES_DIR; // write next to originals
const SIZES = [320, 640, 1280, 1920];
const FORMATS = [
  { ext: 'avif', options: { quality: 60 } },
  { ext: 'webp', options: { quality: 75 } }
];

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  if (file.includes('-') && /-\d+\.(jpg|jpeg|png)$/.test(file)) {
    // already a resized variant; skip
    return;
  }

  const basename = path.basename(file, ext);
  const inputPath = path.join(IMAGES_DIR, file);

  try {
    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width || 1200;

    for (const size of SIZES) {
      if (size > width) continue; // no upscaling
      for (const fmt of FORMATS) {
        const outName = `${basename}-${size}.${fmt.ext}`;
        const outPath = path.join(OUTPUT_DIR, outName);
        if (fs.existsSync(outPath)) continue;
        await sharp(inputPath)
          .resize({ width: size })
          [fmt.ext]({ quality: fmt.options.quality })
          .toFile(outPath);
        console.log('Written', outPath);
      }
    }

    // also write a reasonable fallback resized jpeg (if original is huge)
    const fallbackName = `${basename}-1280.jpg`;
    const fallbackPath = path.join(OUTPUT_DIR, fallbackName);
    if (!fs.existsSync(fallbackPath)) {
      await sharp(inputPath).resize({ width: Math.min(1280, width) }).jpeg({ quality: 80 }).toFile(fallbackPath);
      console.log('Written fallback', fallbackPath);
    }
  } catch (err) {
    console.error('Failed processing', inputPath, err);
  }
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Images dir not found:', IMAGES_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(IMAGES_DIR).filter(f => !fs.lstatSync(path.join(IMAGES_DIR, f)).isDirectory());
  for (const file of files) {
    await processFile(file);
  }

  // Generate a simple JSON index of available srcsets for manual use
  const index = {};
  for (const file of fs.readdirSync(IMAGES_DIR)) {
    const m = file.match(/(.+)-(\d+)\.(avif|webp|jpg|jpeg|png)$/i);
    if (m) {
      const base = m[1];
      index[base] = index[base] || [];
      index[base].push({ file, width: Number(m[2]) });
    }
  }
  fs.writeFileSync(path.join(IMAGES_DIR, 'image-srcsets.json'), JSON.stringify(index, null, 2));
  console.log('Wrote image-srcsets.json');
}

main();
