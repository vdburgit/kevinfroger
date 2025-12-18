import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';

const IMAGE_DIR = 'public/images';
const MAX_WIDTH = 1920;
const QUALITY = 85;

async function optimizeImage(filePath) {
  const { name, ext } = parse(filePath);

  // Skip already optimized webp files
  if (ext === '.webp') {
    return;
  }

  // Skip logo files (they're usually small)
  if (filePath.includes('/logos/')) {
    return;
  }

  try {
    const stats = await stat(filePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    // Only process files larger than 100KB
    if (stats.size < 100 * 1024) {
      console.log(`⏭️  Skipping ${name}${ext} (${sizeMB}MB - too small)`);
      return;
    }

    console.log(`🔄 Processing ${name}${ext} (${sizeMB}MB)...`);

    const outputPath = join(IMAGE_DIR, `${name}.webp`);

    await sharp(filePath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const newStats = await stat(outputPath);
    const newSizeMB = (newStats.size / (1024 * 1024)).toFixed(2);
    const savedMB = (sizeMB - newSizeMB).toFixed(2);
    const savedPercent = ((savedMB / sizeMB) * 100).toFixed(1);

    console.log(`✅ ${name}.webp created: ${newSizeMB}MB (saved ${savedMB}MB / ${savedPercent}%)`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = parse(entry.name).ext.toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        await optimizeImage(fullPath);
      }
    }
  }
}

console.log('🚀 Starting image optimization...\n');
processDirectory(IMAGE_DIR)
  .then(() => console.log('\n✨ All images processed!'))
  .catch(err => console.error('❌ Error:', err));
