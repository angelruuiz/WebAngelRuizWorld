import fs from 'fs';
import assert from 'assert';

console.log('=== INDEPENDENT EMPIRICAL CHALLENGER P0-1 VERIFICATION ===\n');

// 1. Phone number verification
console.log('[Check 1: Phone number 34680650993 eradication]');
const emp = fs.readFileSync('app/empresas/page.jsx', 'utf8');
const cenas = fs.readFileSync('app/empresas/mago-cenas-empresa-madrid/page.jsx', 'utf8');
const bodas = fs.readFileSync('app/particulares/bodas/page.jsx', 'utf8');
const contacto = fs.readFileSync('app/contacto/page.jsx', 'utf8');
const closeup = fs.readFileSync('app/mago-close-up-madrid/page.jsx', 'utf8');

const oldPhone = '34680650993';
for (const [name, content] of Object.entries({
  'app/empresas/page.jsx': emp,
  'app/empresas/mago-cenas-empresa-madrid/page.jsx': cenas,
  'app/particulares/bodas/page.jsx': bodas,
  'app/contacto/page.jsx': contacto,
  'app/mago-close-up-madrid/page.jsx': closeup
})) {
  const count = (content.match(new RegExp(oldPhone, 'g')) || []).length;
  console.log(`- ${name}: ${count} matches for ${oldPhone}`);
  assert.strictEqual(count, 0, `Expected 0 matches in ${name}, got ${count}`);
}
console.log('PASS: Legacy phone number completely eradicated from key target pages.\n');

// 2. Metadata length checks
console.log('[Check 2: Metadata exact character counts]');
const empTitleMatch = emp.match(/title:\s*\{\s*absolute:\s*['"]([^'"]+)['"]/);
const empDescMatch = emp.match(/description:\s*['"]([^'"]+)['"]/);
const cenasTitleMatch = cenas.match(/title:\s*\{\s*absolute:\s*['"]([^'"]+)['"]/);
const cenasDescMatch = cenas.match(/description:\s*['"]([^'"]+)['"]/);

assert(empTitleMatch, 'Title match in app/empresas/page.jsx');
assert(empDescMatch, 'Desc match in app/empresas/page.jsx');
assert(cenasTitleMatch, 'Title match in app/empresas/mago-cenas-empresa-madrid/page.jsx');
assert(cenasDescMatch, 'Desc match in app/empresas/mago-cenas-empresa-madrid/page.jsx');

const empTitle = empTitleMatch[1];
const empDesc = empDescMatch[1];
const cenasTitle = cenasTitleMatch[1];
const cenasDesc = cenasDescMatch[1];

console.log(`- app/empresas title: "${empTitle}" (${empTitle.length} chars) <= 60: ${empTitle.length <= 60}`);
console.log(`- app/empresas desc: "${empDesc}" (${empDesc.length} chars) <= 155: ${empDesc.length <= 155}`);
console.log(`- app/empresas/mago-cenas-empresa-madrid title: "${cenasTitle}" (${cenasTitle.length} chars) <= 60: ${cenasTitle.length <= 60}`);
console.log(`- app/empresas/mago-cenas-empresa-madrid desc: "${cenasDesc}" (${cenasDesc.length} chars) <= 155: ${cenasDesc.length <= 155}`);

assert(empTitle.length <= 60, `empTitle length ${empTitle.length} > 60`);
assert(empDesc.length <= 155, `empDesc length ${empDesc.length} > 155`);
assert(cenasTitle.length <= 60, `cenasTitle length ${cenasTitle.length} > 60`);
assert(cenasDesc.length <= 155, `cenasDesc length ${cenasDesc.length} > 155`);
console.log('PASS: All titles and descriptions strictly satisfy character constraints.\n');

// 3. Anchor target in cenas page
console.log('[Check 3: Anchor target #presupuesto-empresa]');
const hasAnchorHref = cenas.includes('href="#presupuesto-empresa"');
const hasAnchorId = /<[^>]+id=["']presupuesto-empresa["']/.test(cenas);
console.log(`- CTA href="#presupuesto-empresa" present: ${hasAnchorHref}`);
console.log(`- Matching HTML id="presupuesto-empresa" element present: ${hasAnchorId}`);
assert(hasAnchorHref, 'Missing href="#presupuesto-empresa" in cenas page');
assert(hasAnchorId, 'Missing id="presupuesto-empresa" in cenas page');
console.log('PASS: Anchor link and matching target element verified.\n');

// 4. Line 344 in app/empresas/page.jsx
console.log('[Check 4: Line 344 internal link in app/empresas/page.jsx]');
const lines = emp.split(/\r?\n/);
const line344 = lines[343]; // 1-indexed line 344 is array index 343
console.log(`- Line 344 content:\n  ${line344.trim()}`);
const linksToCenas = line344.includes('href="/empresas/mago-cenas-empresa-madrid"');
const hasCenasAnchorText = line344.includes('>mago para cenas de empresa<');
console.log(`- Links to /empresas/mago-cenas-empresa-madrid: ${linksToCenas}`);
console.log(`- Anchor text is "mago para cenas de empresa": ${hasCenasAnchorText}`);
assert(linksToCenas, 'Line 344 does not link to /empresas/mago-cenas-empresa-madrid');
assert(hasCenasAnchorText, 'Line 344 anchor text is not "mago para cenas de empresa"');
console.log('PASS: Line 344 correctly points to the dedicated cenas landing page.\n');

// 5. Strict GEMINI.md Invariant: Zero AggregateRating
console.log('[Check 5: Strict AggregateRating Invariant]');
assert(!emp.toLowerCase().includes('aggregaterating'), 'AggregateRating found in empresas');
assert(!cenas.toLowerCase().includes('aggregaterating'), 'AggregateRating found in cenas');
assert(!bodas.toLowerCase().includes('aggregaterating'), 'AggregateRating found in bodas');
console.log('PASS: Zero AggregateRating in target files.\n');

console.log('ALL EMPIRICAL CHECKS CONFIRMED 100%');
