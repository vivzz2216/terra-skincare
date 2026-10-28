/**
 * TERRA SKINCARE — Integrity & Verification Suite
 */

const fs = require('fs');
const path = require('path');

let errors = 0;
let passed = 0;

function assert(condition, name) {
  if (condition) {
    console.log(`  ✓ PASS: ${name}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${name}`);
    errors++;
  }
}

console.log('\n--- STARTING TERRA SKINCARE VERIFICATION SUITE ---\n');

// 1. Asset & File Verification
console.log('1. Checking Core Files & Assets:');
const requiredFiles = [
  'index.html',
  'style.css',
  'app.js',
  'assets/campaign.webp',
  'assets/morning.webp',
  'assets/products.webp',
  'assets/product-cleanser.webp',
  'assets/product-essence.webp',
  'assets/product-drops.webp',
  'assets/js/motion.min.js'
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  assert(fs.existsSync(filePath), `File exists: ${file}`);
});

// 2. HTML Integrity & ID Matching
console.log('\n2. Verifying DOM IDs and Scripts in index.html:');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const expectedIds = [
  'scrollProgress',
  'siteHeader',
  'searchBtn',
  'cartTrigger',
  'cartCount',
  'hero',
  'heroArt',
  'heroCopy',
  'heroTitle',
  'heroSticker',
  'sunRays',
  'story',
  'essentials',
  'productGrid',
  'bundleAddBtn',
  'ingredients',
  'routine',
  'tabAm',
  'tabPm',
  'step1Title',
  'step1Desc',
  'step2Title',
  'step2Desc',
  'step3Title',
  'step3Desc',
  'reviews',
  'faq',
  'faqAccordion',
  'newsletterForm',
  'emailInput',
  'formFeedback',
  'cartOverlay',
  'cartDrawer',
  'cartCloseBtn',
  'drawerCount',
  'drawerSubtotal',
  'cartItemsList',
  'toastNotice'
];

// Note: id in HTML for hero-title is "hero-title"
assert(html.includes('id="hero-title"'), 'Found id="hero-title"');
expectedIds.filter(id => id !== 'heroTitle').forEach(id => {
  assert(html.includes(`id="${id}"`), `Found element id="${id}"`);
});

// 3. Script References
console.log('\n3. Verifying Scripts & Stylesheets:');
assert(html.includes('href="style.css"'), 'Linked style.css');
assert(html.includes('src="assets/js/motion.min.js"'), 'Linked motion.min.js');
assert(html.includes('src="app.js"'), 'Linked app.js');

// 4. Check CSS variables and rules
console.log('\n4. Verifying CSS Rules:');
const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
assert(css.includes('--plum:'), 'Has --plum variable');
assert(css.includes('--yellow:'), 'Has --yellow variable');
assert(css.includes('--lilac:'), 'Has --lilac variable');
assert(css.includes('.scroll-progress'), 'Has .scroll-progress rules');
assert(css.includes('.hero-sticker'), 'Has .hero-sticker rules');
assert(css.includes('@media (max-width: 768px)'), 'Has mobile breakpoint');

console.log(`\nVerification Complete: ${passed} passed, ${errors} failed.\n`);
if (errors > 0) process.exit(1);

