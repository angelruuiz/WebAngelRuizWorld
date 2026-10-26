import fs from 'fs';
import assert from 'assert';

console.log('=== VERIFYING P0 TASKS ===');

// 1. FICHA-CRO-01: WhatsApp Number Unification
const empresasContent = fs.readFileSync('app/empresas/page.jsx', 'utf8');
const bodasContent = fs.readFileSync('app/particulares/bodas/page.jsx', 'utf8');
const cenasContent = fs.readFileSync('app/empresas/mago-cenas-empresa-madrid/page.jsx', 'utf8');

assert(!empresasContent.includes('34680650993'), 'empresas page must not contain 34680650993');
assert(!bodasContent.includes('34680650993'), 'bodas page must not contain 34680650993');
assert(!cenasContent.includes('34680650993'), 'cenas page must not contain 34680650993');
console.log('✔ FICHA-CRO-01: 34680650993 completely absent from modified files');

// 2. FICHA-CRO-02: Above-the-fold CTA & anchor section
assert(cenasContent.includes('Consultar Disponibilidad WhatsApp (&lt;15 min)'), 'cenas page must contain primary CTA');
assert(cenasContent.includes('href="#presupuesto-empresa"'), 'cenas page must contain secondary CTA anchor');
assert(cenasContent.includes('<section id="presupuesto-empresa"'), 'cenas page must contain section id="presupuesto-empresa"');
console.log('✔ FICHA-CRO-02: Above-the-fold dual CTA and anchor id verified');

// 3. FICHA-SEO-01: Anchor text in empresas/page.jsx line 344
const expectedAnchor = 'Ideal como <Link href="/empresas/mago-cenas-empresa-madrid" className="text-amber-400 hover:underline">mago para cenas de empresa</Link>, <Link href="/empresas/mago-ferias-congresos-madrid" className="text-amber-400 hover:underline">dinamizador en IFEMA</Link>, <Link href="/empresas/mago-para-restaurantes-madrid" className="text-amber-400 hover:underline">magia en restaurantes</Link>';
assert(empresasContent.includes(expectedAnchor), 'empresas page must contain corrected link and preserved restaurant link');
console.log('✔ FICHA-SEO-01: Anchor text and internal links verified');

// 4. FICHA-SEO-02: Metadata in empresas/page.jsx
const empTitleMatch = empresasContent.match(/title:\s*\{\s*absolute:\s*['"]([^'"]+)['"]/);
const empDescMatch = empresasContent.match(/description:\s*['"]([^'"]+)['"]/);
assert(empTitleMatch, 'empresas title found');
assert(empDescMatch, 'empresas description found');
const empTitle = empTitleMatch[1];
const empDesc = empDescMatch[1];
console.log(`empresas Title (${empTitle.length} chars): "${empTitle}"`);
console.log(`empresas Desc (${empDesc.length} chars): "${empDesc}"`);
assert(empTitle.length <= 60, `Title must be <= 60 chars, got ${empTitle.length}`);
assert(empDesc.length <= 155, `Desc must be <= 155 chars, got ${empDesc.length}`);
assert(!empresasContent.includes("'mago cenas empresa madrid'"), 'Cannibalizing keyword must be removed from keywords');
console.log('✔ FICHA-SEO-02: B2B hub metadata lengths and de-cannibalization verified');

// 5. FICHA-SEO-03: Metadata in empresas/mago-cenas-empresa-madrid/page.jsx
const cenasTitleMatch = cenasContent.match(/title:\s*\{\s*absolute:\s*['"]([^'"]+)['"]/);
const cenasDescMatch = cenasContent.match(/description:\s*['"]([^'"]+)['"]/);
assert(cenasTitleMatch, 'cenas title found');
assert(cenasDescMatch, 'cenas description found');
const cenasTitle = cenasTitleMatch[1];
const cenasDesc = cenasDescMatch[1];
console.log(`cenas Title (${cenasTitle.length} chars): "${cenasTitle}"`);
console.log(`cenas Desc (${cenasDesc.length} chars): "${cenasDesc}"`);
assert(cenasTitle.length <= 60, `Title must be <= 60 chars, got ${cenasTitle.length}`);
assert(cenasDesc.length <= 155, `Desc must be <= 155 chars, got ${cenasDesc.length}`);
console.log('✔ FICHA-SEO-03: Cenas page metadata lengths verified');

// 6. GEMINI.md: Zero AggregateRating check
assert(!empresasContent.toLowerCase().includes('aggregaterating'), 'empresas page must not contain aggregaterating');
assert(!bodasContent.toLowerCase().includes('aggregaterating'), 'bodas page must not contain aggregaterating');
assert(!cenasContent.toLowerCase().includes('aggregaterating'), 'cenas page must not contain aggregaterating');
console.log('✔ GEMINI.md: ZERO AggregateRating occurrences strictly verified');

console.log('\nALL P0 VERIFICATIONS PASSED 100%!');
