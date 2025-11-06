#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Recursively find .tsx files in src/
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.resolve(dir, e.name);
    if (e.isDirectory()) files.push(...walk(res));
    else if (e.isFile() && res.endsWith('.tsx')) files.push(res);
  }
  return files;
}

function processFile(file) {
  const src = fs.readFileSync(file, 'utf8');
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/;
  const m = src.match(importRegex);
  if (!m) return false;
  const specList = m[1].split(',').map(s => s.trim()).filter(Boolean);
  if (specList.length === 0) return false;
  let used = [];
  for (const spec of specList) {
    // search for usage with word boundary (avoid matching in comments too trivially)
    const re = new RegExp("\\b" + spec + "\\b", 'g');
    // Count occurrences excluding the import line itself by slicing after the match index
    const afterImport = src.slice(m.index + m[0].length);
    if (re.test(afterImport)) used.push(spec);
  }
  let newSrc = src;
  if (used.length === 0) {
    // remove the entire import line
    newSrc = src.replace(importRegex, '');
  } else if (used.length < specList.length) {
    const replacement = `import { ${used.join(', ')} } from 'lucide-react';`;
    newSrc = src.replace(importRegex, replacement);
  } else {
    return false; // nothing to change
  }
  fs.writeFileSync(file, newSrc, 'utf8');
  return true;
}

const srcDir = path.resolve(process.cwd(), 'src');
const files = walk(srcDir);
let changed = 0;
for (const f of files) {
  try {
    if (processFile(f)) changed++;
  } catch (err) {
    console.error('Error processing', f, err.message || err);
  }
}
console.log(`Processed ${files.length} files, updated ${changed} files.`);
