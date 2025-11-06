#!/usr/bin/env node

/**
 * SEO Migration Script
 *
 * This script helps migrate pages from the old SEO pattern to the new useSEO hook.
 * It processes .tsx files and performs the following transformations:
 *
 * 1. Adds import for useSEO hook and helper functions
 * 2. Removes old React.useEffect() blocks that manually update meta tags
 * 3. Generates useSEO hook call based on extracted meta data
 * 4. Removes React import if no longer needed
 *
 * Usage:
 *   node scripts/migrate-seo.js <file-path>
 *   node scripts/migrate-seo.js src/pages/ExamplePage.tsx
 *
 * Or migrate all pages in a directory:
 *   node scripts/migrate-seo.js src/pages/*.tsx
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://kevinfroger.nl';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/kevin-portrait.png`;

/**
 * Extract meta data from old React.useEffect blocks
 */
function extractMetaData(content) {
  const meta = {
    title: '',
    description: '',
    hasOldMetaCode: false
  };

  // Extract title
  const titleMatch = content.match(/document\.title\s*=\s*["'](.+?)["']/);
  if (titleMatch) {
    meta.title = titleMatch[1];
    meta.hasOldMetaCode = true;
  }

  // Extract description
  const descMatch = content.match(/metaDescription\.setAttribute\(['"]content["'],\s*['"](.+?)['"]\)/);
  if (descMatch) {
    meta.description = descMatch[1];
    meta.hasOldMetaCode = true;
  }

  return meta;
}

/**
 * Generate canonical URL from file path
 */
function generateCanonicalUrl(filePath) {
  const fileName = path.basename(filePath, '.tsx');

  // Convert PascalCase to kebab-case
  const slug = fileName
    .replace(/Page$/, '') // Remove "Page" suffix
    .replace(/([A-Z])/g, '-$1') // Add dash before capitals
    .toLowerCase()
    .replace(/^-/, ''); // Remove leading dash

  if (slug === 'home') return `${BASE_URL}/`;

  return `${BASE_URL}/${slug}`;
}

/**
 * Generate breadcrumb based on file path
 */
function generateBreadcrumb(filePath, pageTitle) {
  const breadcrumbs = [{ name: 'Home', url: '/' }];

  // Extract path segments
  const relativePath = filePath.replace(/\\/g, '/');
  const segments = relativePath.split('/');

  // Check if it's a regional page
  if (segments.includes('regio')) {
    breadcrumbs.push({ name: 'Regio', url: '/regio' });

    if (segments.includes('provinces')) {
      const provinceName = path.basename(filePath, 'Page.tsx').replace(/([A-Z])/g, ' $1').trim();
      breadcrumbs.push({ name: provinceName, url: `/regio/${provinceName.toLowerCase().replace(/\s+/g, '-')}` });
    } else if (segments.includes('cities')) {
      // Add province and city breadcrumbs
      breadcrumbs.push({ name: '[Province]', url: '/regio/[province]' });
      breadcrumbs.push({ name: '[City]', url: '/regio/[province]/[city]' });
    }
  } else {
    // Regular page
    const pageName = pageTitle.split('–')[0].trim();
    const url = generateCanonicalUrl(filePath).replace(BASE_URL, '');
    breadcrumbs.push({ name: pageName, url: url });
  }

  return breadcrumbs;
}

/**
 * Generate new useSEO hook code
 */
function generateUseSEOCode(meta, filePath) {
  const canonicalUrl = generateCanonicalUrl(filePath);
  const breadcrumbs = generateBreadcrumb(filePath, meta.title);

  // Determine appropriate keywords based on page type
  let keywords = '';
  const lowerTitle = meta.title.toLowerCase();

  if (lowerTitle.includes('bruiloft')) {
    keywords = 'bruiloft dj, bruiloft dj nederland, dj bruiloft, trouw dj';
  } else if (lowerTitle.includes('verjaardag')) {
    keywords = 'verjaardag dj, feest dj, dj verjaardag, party dj';
  } else if (lowerTitle.includes('evenement')) {
    keywords = 'evenementen dj, dj evenement, event dj, festival dj';
  } else if (lowerTitle.includes('zakelijk') || lowerTitle.includes('bedrijf')) {
    keywords = 'zakelijk dj, bedrijfsfeest dj, corporate dj, dj bedrijf';
  } else if (lowerTitle.includes('contact')) {
    keywords = 'dj boeken, dj contact, dj offerte, dj huren';
  } else {
    keywords = 'dj nederland, dj boeken, dj huren, allround dj';
  }

  return `  // Enhanced SEO configuration
  useSEO({
    title: '${meta.title}',
    description: '${meta.description}',
    keywords: '${keywords}',
    canonical: '${canonicalUrl}',
    ogType: 'website',
    ogImage: '${DEFAULT_OG_IMAGE}',
    ogImageAlt: 'DJ Kevin Froger - Professional DJ Services',
    twitterCard: 'summary_large_image',
    jsonLd: [
      generateBreadcrumbSchema(${JSON.stringify(breadcrumbs, null, 6).replace(/\n/g, '\n      ')})
    ]
  });`;
}

/**
 * Migrate a single file
 */
function migrateFile(filePath) {
  console.log(`\n📄 Processing: ${filePath}`);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return false;
  }

  // Read file content
  let content = fs.readFileSync(filePath, 'utf-8');

  // Extract meta data
  const meta = extractMetaData(content);

  if (!meta.hasOldMetaCode) {
    console.log(`⏭️  No old meta code found, skipping...`);
    return false;
  }

  console.log(`   Title: ${meta.title}`);
  console.log(`   Description: ${meta.description.substring(0, 60)}...`);

  // Step 1: Update imports
  const hasUseSEOImport = content.includes('useSEO');

  if (!hasUseSEOImport) {
    // Find the last import statement
    const importRegex = /import .+ from .+;/g;
    const imports = content.match(importRegex);

    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const newImport = "import { useSEO, generateBreadcrumbSchema } from '../hooks/useSEO';";

      content = content.replace(lastImport, `${lastImport}\n${newImport}`);
      console.log(`   ✅ Added useSEO import`);
    }
  }

  // Step 2: Remove old React.useEffect meta code
  const useEffectRegex = /React\.useEffect\(\(\) => \{[\s\S]*?document\.title[\s\S]*?\}, \[\]\);/g;
  const oldUseEffect = content.match(useEffectRegex);

  if (oldUseEffect) {
    // Generate new useSEO code
    const newCode = generateUseSEOCode(meta, filePath);

    // Replace old useEffect with new useSEO hook
    content = content.replace(useEffectRegex, newCode);
    console.log(`   ✅ Replaced old meta code with useSEO hook`);
  }

  // Step 3: Remove React import if no longer needed
  if (!content.includes('React.') && content.match(/^import React from 'react';$/m)) {
    content = content.replace(/import React from 'react';\n/, '');
    console.log(`   ✅ Removed unused React import`);
  }

  // Write updated content back to file
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`   ✅ File migrated successfully!`);

  return true;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                     SEO Migration Script                       ║
╚════════════════════════════════════════════════════════════════╝

Usage:
  node scripts/migrate-seo.js <file-path>

Examples:
  node scripts/migrate-seo.js src/pages/ExamplePage.tsx
  node scripts/migrate-seo.js src/pages/VerjaardagDJPage.tsx

Note: This script will:
  1. Extract title and description from old meta code
  2. Add useSEO import
  3. Replace old React.useEffect with useSEO hook
  4. Remove unused React import if applicable
  5. Generate breadcrumb schema automatically

⚠️  Always backup your files before running this script!
    `);
    process.exit(0);
  }

  let successCount = 0;
  let failCount = 0;

  args.forEach(filePath => {
    const result = migrateFile(filePath);
    if (result) {
      successCount++;
    } else {
      failCount++;
    }
  });

  console.log(`
╔════════════════════════════════════════════════════════════════╗
║                      Migration Complete                        ║
╚════════════════════════════════════════════════════════════════╝

✅ Successfully migrated: ${successCount} file(s)
${failCount > 0 ? `⏭️  Skipped: ${failCount} file(s)` : ''}

Next steps:
  1. Review the migrated files
  2. Test the pages in your browser
  3. Run Lighthouse audit to verify SEO improvements
  4. Commit the changes to git
  `);
}

// Run the script
main();
