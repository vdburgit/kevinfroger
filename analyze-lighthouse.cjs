const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lighthouse_live_latest.json', 'utf8'));

console.log('=== LIGHTHOUSE ANALYSIS ===\n');

// Scores
console.log('📊 SCORES:');
console.log('Performance:', Math.round(data.categories.performance.score * 100));
console.log('SEO:', Math.round(data.categories.seo.score * 100));
console.log('Accessibility:', Math.round(data.categories.accessibility.score * 100));
console.log('Best Practices:', Math.round(data.categories['best-practices'].score * 100));

// Core Web Vitals
console.log('\n⚡ CORE WEB VITALS:');
const metrics = data.audits;
console.log('LCP:', metrics['largest-contentful-paint'].displayValue, '-', metrics['largest-contentful-paint'].score < 0.5 ? '❌ NEEDS IMPROVEMENT' : metrics['largest-contentful-paint'].score < 0.9 ? '⚠️ OK' : '✅ GOOD');
console.log('TBT:', metrics['total-blocking-time'].displayValue);
console.log('CLS:', metrics['cumulative-layout-shift'].displayValue, '-', metrics['cumulative-layout-shift'].score > 0.9 ? '✅ GOOD' : '⚠️ NEEDS IMPROVEMENT');
console.log('FCP:', metrics['first-contentful-paint'].displayValue);
console.log('SI:', metrics['speed-index'].displayValue);

// Performance opportunities
console.log('\n🚀 PERFORMANCE OPPORTUNITIES:');
const opportunities = Object.entries(data.audits)
  .filter(([k,v]) => v.details?.type === 'opportunity' && v.score < 1)
  .map(([k,v]) => ({
    title: v.title,
    savings: v.details.overallSavingsMs || 0,
    description: v.description
  }))
  .sort((a,b) => b.savings - a.savings);

opportunities.forEach(opp => {
  console.log(`\n- ${opp.title}`);
  console.log(`  Savings: ${opp.savings}ms`);
});

// Failed audits
console.log('\n❌ FAILED AUDITS:');
const failed = Object.entries(data.audits)
  .filter(([k,v]) => v.score !== null && v.score < 1 && v.scoreDisplayMode === 'binary')
  .map(([k,v]) => ({id: k, title: v.title, description: v.description}));

if (failed.length === 0) {
  console.log('None - all audits passed! ✅');
} else {
  failed.forEach(f => console.log(`- ${f.title}`));
}

// Important diagnostics
console.log('\n⚠️ KEY DIAGNOSTICS:');
const diagnostics = [
  'render-blocking-resources',
  'uses-long-cache-ttl',
  'dom-size',
  'uses-responsive-images',
  'offscreen-images',
  'unminified-css',
  'unminified-javascript'
].map(id => data.audits[id])
  .filter(audit => audit && audit.score !== null && audit.score < 1);

diagnostics.forEach(d => {
  console.log(`\n- ${d.title}`);
  if (d.displayValue) console.log(`  ${d.displayValue}`);
});

// Accessibility issues
console.log('\n♿ ACCESSIBILITY ISSUES:');
const a11yIssues = Object.entries(data.audits)
  .filter(([k,v]) => k.includes('aria') || k.includes('heading') || k.includes('label') || k.includes('color'))
  .filter(([k,v]) => v.score !== null && v.score < 1)
  .map(([k,v]) => v.title);

if (a11yIssues.length === 0) {
  console.log('None detected ✅');
} else {
  a11yIssues.forEach(issue => console.log(`- ${issue}`));
}
