import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, message, details = '') {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  [PASS] ${message}`);
    } else {
        failedTests++;
        const failMsg = `[FAIL] ${message}${details ? ' - ' + details : ''}`;
        console.error(`  ${failMsg}`);
        failures.push(failMsg);
    }
}

console.log('================================================================');
console.log('CHALLENGER P2-1: EMPIRICAL VERIFICATION & ADVERSARIAL STRESS TEST');
console.log('================================================================\n');

// ----------------------------------------------------------------------
// 1. PHONE REGEX & FORM INPUT HANDLING EMPIRICAL STRESS TEST
// ----------------------------------------------------------------------
console.log('Suite 1: Phone Input Regex & Form Constraints');

const formFiles = [
    'components/LiquidGlassForm.jsx',
    'components/CorporateInlineForm.jsx',
    'components/Modals.jsx'
];

for (const relPath of formFiles) {
    const fullPath = path.join(rootDir, relPath);
    assert(fs.existsSync(fullPath), `Form exists: ${relPath}`);
    const content = fs.readFileSync(fullPath, 'utf8');

    // Check handlePhoneInput logic
    const regexMatch = content.match(/e\.target\.value\.replace\(\/\[\^0-9\+ \]\/g,\s*['"]['"]\)\.slice\(0,\s*16\)/);
    assert(!!regexMatch, `${relPath} contains correct phone sanitizer regex /[^0-9+ ]/g and .slice(0, 16)`);

    // Check attributes
    assert(content.includes('maxLength="16"'), `${relPath} has maxLength="16"`);
    assert(content.includes('minLength="9"'), `${relPath} has minLength="9"`);
    assert(content.includes('+34 600 12 34 56'), `${relPath} has international placeholder with +34`);
}

// Adversarial test of the phone sanitizer algorithm
const sanitizePhone = (val) => val.replace(/[^0-9+ ]/g, '').slice(0, 16);

const testVectors = [
    { input: '648055636', expected: '648055636', label: 'Local 9-digit Spanish number' },
    { input: '648 05 56 36', expected: '648 05 56 36', label: 'Spanish number with spaces' },
    { input: '+34 648 05 56 36', expected: '+34 648 05 56 36', label: 'Spanish number with +34 and spaces (16 chars)' },
    { input: '+1 555 123 4567', expected: '+1 555 123 4567', label: 'US number with +1 and spaces (15 chars)' },
    { input: '+33 6 12 34 56 78', expected: '+33 6 12 34 56 7', label: 'French number truncated at 16 chars' },
    { input: 'Juan Perez', expected: ' ', label: 'Adversarial: Alphabetic letters stripped, spaces preserved' },
    { input: '<script>alert("xss")</script>', expected: '', label: 'Adversarial: XSS payload stripped' },
    { input: "' OR '1'='1", expected: '  11', label: 'Adversarial: SQLi stripped to digits and spaces' },
    { input: '+34 (648) 05-56-36', expected: '+34 648 055636', label: 'Parentheses and hyphens stripped cleanly' },
    { input: '123456789012345678901234567890', expected: '1234567890123456', label: 'Overlong 30-digit string clamped to 16' },
];

for (const vec of testVectors) {
    const result = sanitizePhone(vec.input);
    assert(result === vec.expected, `Phone sanitizer: ${vec.label}`, `Got "${result}", expected "${vec.expected}"`);
    assert(result.length <= 16, `Phone sanitizer output length <= 16 for ${vec.label}`);
}

// ----------------------------------------------------------------------
// 2. WHATSAPP LINKS & CONTEXTUAL ?text= PARAMETERS
// ----------------------------------------------------------------------
console.log('\nSuite 2: WhatsApp Link Validation & Contextual Message Encoding');

const contratarMagoPath = path.join(rootDir, 'app/contratar-mago-madrid/page.jsx');
const digitalCardPath = path.join(rootDir, 'app/contacto/DigitalCard.jsx');

assert(fs.existsSync(contratarMagoPath), 'contratar-mago-madrid/page.jsx exists');
assert(fs.existsSync(digitalCardPath), 'contacto/DigitalCard.jsx exists');

const contratarContent = fs.readFileSync(contratarMagoPath, 'utf8');
const digitalCardContent = fs.readFileSync(digitalCardPath, 'utf8');

// Scan contratar-mago-madrid for wa.me links
const contratarWaRegex = /href=["'](https:\/\/wa\.me\/[^"']+)["']/g;
let match;
let contratarCount = 0;
while ((match = contratarWaRegex.exec(contratarContent)) !== null) {
    contratarCount++;
    const urlStr = match[1];
    assert(urlStr.startsWith('https://wa.me/34648055636'), `contratar-mago-madrid wa.me link uses phone 34648055636: ${urlStr}`);
    const url = new URL(urlStr);
    const textParam = url.searchParams.get('text');
    assert(!!textParam && textParam.length > 10, `contratar-mago-madrid wa.me link contains non-empty ?text=: "${textParam}"`);
    assert(textParam.includes('tarifas') && textParam.includes('disponibilidad'), `contratar-mago-madrid wa.me text has rates context`);
}
assert(contratarCount >= 1, `Found at least 1 wa.me link in contratar-mago-madrid (found ${contratarCount})`);

// Scan DigitalCard for wa.me links
const digitalCardWaRegex = /href=["'](https:\/\/wa\.me\/[^"']+)["']/g;
let digitalCount = 0;
while ((match = digitalCardWaRegex.exec(digitalCardContent)) !== null) {
    digitalCount++;
    const urlStr = match[1];
    assert(urlStr.startsWith('https://wa.me/34648055636'), `DigitalCard wa.me link uses phone 34648055636: ${urlStr}`);
    const url = new URL(urlStr);
    const textParam = url.searchParams.get('text');
    assert(!!textParam && textParam.length > 10, `DigitalCard wa.me link contains non-empty ?text=: "${textParam}"`);
    assert(textParam.includes('tarjeta digital'), `DigitalCard wa.me text has digital card context`);
}
assert(digitalCount >= 1, `Found at least 1 wa.me link in DigitalCard (found ${digitalCount})`);

// Verify ZERO occurrences of deprecated phone 34680650993 across entire codebase
console.log('\nChecking deprecated phone 34680650993...');
const scanDirs = ['app', 'components', 'lib', 'public', 'content'];
let deprecatedPhoneFound = 0;
function scanForPhone(dir) {
    const entries = fs.readdirSync(path.join(rootDir, dir), { withFileTypes: true });
    for (const ent of entries) {
        const full = path.join(rootDir, dir, ent.name);
        if (ent.isDirectory()) {
            scanForPhone(path.join(dir, ent.name));
        } else if (/\.(jsx?|tsx?|html|json|md)$/.test(ent.name)) {
            const txt = fs.readFileSync(full, 'utf8');
            if (txt.includes('34680650993') || txt.includes('680650993')) {
                deprecatedPhoneFound++;
                console.error(`  Found deprecated phone in: ${full}`);
            }
        }
    }
}
for (const d of scanDirs) scanForPhone(d);
assert(deprecatedPhoneFound === 0, `Zero occurrences of deprecated phone 34680650993 site-wide (found ${deprecatedPhoneFound})`);

// ----------------------------------------------------------------------
// 3. CORPORATE LOGOS BAR AUDIT (7 VERIFIED BRANDS & ZERO POLITICAL)
// ----------------------------------------------------------------------
console.log('\nSuite 3: Corporate Logos Bar Audit');

const logosBarPath = path.join(rootDir, 'components/CorporateLogosBar.jsx');
assert(fs.existsSync(logosBarPath), 'CorporateLogosBar.jsx exists');
const logosContent = fs.readFileSync(logosBarPath, 'utf8');

const expectedBrands = [
    'Movistar Estudiantes',
    'Alcampo',
    'Ahorramás',
    'Grupo Index',
    'Zeppelin TV',
    'Catering Senescal',
    'Makaa Eventos'
];

// Extract corporateLogos array
const matchLogos = logosContent.match(/const corporateLogos\s*=\s*\[([\s\S]*?)\];/);
assert(!!matchLogos, 'corporateLogos array found in CorporateLogosBar.jsx');

const arrayBlock = matchLogos ? matchLogos[1] : '';
const extractedBrands = [];
const nameMatches = arrayBlock.matchAll(/name:\s*["']([^"']+)["']/g);
for (const m of nameMatches) {
    extractedBrands.push(m[1]);
}

assert(extractedBrands.length === 7, `CorporateLogosBar contains exactly 7 brands (found ${extractedBrands.length})`);
for (const brand of expectedBrands) {
    assert(extractedBrands.includes(brand), `Corporate brand present: ${brand}`);
}

// Blacklist check for political or non-corporate entities
const blacklistExact = [
    'NNGG', 'NNGG Torrelodones', 'Torrelodones', 'Peña', 'Peña La Escombrera', 
    'Colegio Gondomar', 'El Badulaque', 'Badulaque',
    'Partido Popular', 'PP', 'PSOE', 'Vox', 'Podemos', 'Sumar', 'Ciudadanos'
];
for (const brand of extractedBrands) {
    for (const bad of blacklistExact) {
        assert(brand.toLowerCase() !== bad.toLowerCase(), `CorporateLogosBar brand "${brand}" is not political/blacklisted "${bad}"`);
    }
}
const politicalRegex = /\b(NNGG|Torrelodones|Escombrera|Gondomar|Badulaque|PSOE|Vox|Podemos|Sumar|Ciudadanos)\b/i;
assert(!politicalRegex.test(logosContent), 'CorporateLogosBar.jsx does not contain political/non-corporate keywords');

// Verify that all logo image files exist in public/
const srcMatches = arrayBlock.matchAll(/src:\s*["']([^"']+)["']/g);
for (const s of srcMatches) {
    const imgSrc = s[1];
    const fullImgPath = path.join(rootDir, 'public', imgSrc);
    assert(fs.existsSync(fullImgPath), `Logo image file exists on disk: public${imgSrc}`);
}

// ----------------------------------------------------------------------
// 4. MOVISTAR ESTUDIANTES TESTIMONIAL & VISUAL REPUTATION BADGE
// ----------------------------------------------------------------------
console.log('\nSuite 4: Movistar Estudiantes Testimonial & Reputation Badge');

const empresasPath = path.join(rootDir, 'app/empresas/page.jsx');
const cenasEmpresasPath = path.join(rootDir, 'app/empresas/mago-cenas-empresa-madrid/page.jsx');

assert(fs.existsSync(empresasPath), 'app/empresas/page.jsx exists');
assert(fs.existsSync(cenasEmpresasPath), 'app/empresas/mago-cenas-empresa-madrid/page.jsx exists');

const empresasContent = fs.readFileSync(empresasPath, 'utf8');
const cenasEmpresasContent = fs.readFileSync(cenasEmpresasPath, 'utf8');

// Verify Movistar Estudiantes testimonial in /empresas
assert(empresasContent.includes('Movistar Estudiantes'), '/empresas includes "Movistar Estudiantes" testimonial');
assert(empresasContent.includes('profesionalidad absoluta, cercanía y una magia que dejó a todo el mundo boquiabierto'), '/empresas includes full verbatim testimonial text');

// Verify Movistar Estudiantes testimonial in /empresas/mago-cenas-empresa-madrid
assert(cenasEmpresasContent.includes('Movistar Estudiantes'), '/empresas/mago-cenas-empresa-madrid includes "Movistar Estudiantes" testimonial');
assert(cenasEmpresasContent.includes('profesionalidad absoluta, cercanía y una magia que dejó a todo el mundo boquiabierto'), '/empresas/mago-cenas-empresa-madrid includes full verbatim testimonial text');

// Verify Visual reviews badge on both pages
for (const [pageName, pageCode] of [['/empresas', empresasContent], ['/empresas/mago-cenas-empresa-madrid', cenasEmpresasContent]]) {
    assert(pageCode.includes('4.9 ★'), `${pageName} visual badge renders "4.9 ★"`);
    assert(pageCode.includes('en Google Reviews (+50 opiniones reales)'), `${pageName} visual badge renders text "(+50 opiniones reales)"`);
    assert(pageCode.includes('https://www.google.com/search?q=%C3%81ngel+Ruiz+Mago+e+Ilusionista+Madrid'), `${pageName} badge links to Google search / maps for entity`);
    assert(pageCode.includes('aria-label='), `${pageName} badge has accessibility aria-label`);
}

// ----------------------------------------------------------------------
// 5. NEXT.CONFIG.JS AVIF CONFIGURATION
// ----------------------------------------------------------------------
console.log('\nSuite 5: Next.js Config AVIF Support');

const nextConfigPath = path.join(rootDir, 'next.config.js');
assert(fs.existsSync(nextConfigPath), 'next.config.js exists');
const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');

assert(nextConfigContent.includes("'image/avif'"), "next.config.js includes 'image/avif'");
assert(nextConfigContent.includes("'image/webp'"), "next.config.js includes 'image/webp'");
const formatsMatch = nextConfigContent.match(/formats:\s*\[([^\]]+)\]/);
assert(!!formatsMatch, 'formats array found in next.config.js');
if (formatsMatch) {
    const formatsStr = formatsMatch[1];
    assert(formatsStr.includes('image/avif') && formatsStr.includes('image/webp'), 'formats array contains both avif and webp');
}

// ----------------------------------------------------------------------
// 6. BUSINESS SCHEMA REMOVAL & ZERO BROKEN IMPORTS
// ----------------------------------------------------------------------
console.log('\nSuite 6: BusinessSchema.jsx Dead Code Removal');

const businessSchemaPath = path.join(rootDir, 'components/BusinessSchema.jsx');
assert(!fs.existsSync(businessSchemaPath), 'components/BusinessSchema.jsx does NOT exist on disk');

let businessSchemaRefs = 0;
function scanForSchemaImports(dir) {
    const entries = fs.readdirSync(path.join(rootDir, dir), { withFileTypes: true });
    for (const ent of entries) {
        const full = path.join(rootDir, dir, ent.name);
        if (ent.isDirectory()) {
            scanForSchemaImports(path.join(dir, ent.name));
        } else if (/\.(jsx?|tsx?|json|mjs)$/.test(ent.name)) {
            const txt = fs.readFileSync(full, 'utf8');
            if (txt.includes('BusinessSchema')) {
                businessSchemaRefs++;
                console.error(`  Found BusinessSchema reference in: ${full}`);
            }
        }
    }
}
for (const d of ['app', 'components', 'lib']) scanForSchemaImports(d);
assert(businessSchemaRefs === 0, `Zero references to BusinessSchema in app/, components/, lib/ (found ${businessSchemaRefs})`);

// ----------------------------------------------------------------------
// 7. BLOG POST CANNIBALIZATION & INTERNAL LINKING
// ----------------------------------------------------------------------
console.log('\nSuite 7: Blog Post Differentiation & Internal Links');

const blogPost1 = path.join(rootDir, 'content/blog/ideas-cenas-empresa-madrid-originales.md');
const blogPost2 = path.join(rootDir, 'content/blog/cenas-empresa-originales-madrid-ideas-magia.md');

assert(fs.existsSync(blogPost1), 'blog post 1 exists');
assert(fs.existsSync(blogPost2), 'blog post 2 exists');

const post1Content = fs.readFileSync(blogPost1, 'utf8');
const post2Content = fs.readFileSync(blogPost2, 'utf8');

const post1TitleMatch = post1Content.match(/^title:\s*(.+)$/m);
const post2TitleMatch = post2Content.match(/^title:\s*(.+)$/m);

assert(!!post1TitleMatch, 'Post 1 has title');
assert(!!post2TitleMatch, 'Post 2 has title');

const title1 = post1TitleMatch ? post1TitleMatch[1].trim().replace(/^['"]|['"]$/g, '') : '';
const title2 = post2TitleMatch ? post2TitleMatch[1].trim().replace(/^['"]|['"]$/g, '') : '';

console.log(`  Post 1 Title: "${title1}"`);
console.log(`  Post 2 Title: "${title2}"`);

assert(title1 !== title2, 'Blog post titles are distinct and non-identical');
assert(title1.includes('Restaurantes y Espacios'), 'Post 1 focuses on Venues/Restaurants');
assert(title2.includes('7 Ideas de Animación'), 'Post 2 focuses on Entertainment/Activities');

// Verify both link to /empresas/mago-cenas-empresa-madrid
const targetSlug = '/empresas/mago-cenas-empresa-madrid';
assert(post1Content.includes(targetSlug), `Post 1 contains internal link to ${targetSlug}`);
assert(post2Content.includes(targetSlug), `Post 2 contains internal link to ${targetSlug}`);

const countLinks = (txt, slug) => (txt.match(new RegExp(slug, 'g')) || []).length;
const links1 = countLinks(post1Content, targetSlug);
const links2 = countLinks(post2Content, targetSlug);

assert(links1 >= 2, `Post 1 contains multiple contextual links to ${targetSlug} (found ${links1})`);
assert(links2 >= 2, `Post 2 contains multiple contextual links to ${targetSlug} (found ${links2})`);

// ----------------------------------------------------------------------
// 8. STRICT ZERO AGGREGATERATING SITE-WIDE VERIFICATION
// ----------------------------------------------------------------------
console.log('\nSuite 8: Site-Wide Zero AggregateRating Audit');

const bannedTerms = [
    'aggregaterating',
    'ratingvalue',
    'reviewcount',
    'bestrating',
    'worstrating'
];

let bannedCount = 0;
const bannedMatches = [];

function checkBannedInFile(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const lower = text.toLowerCase();
    
    // Check if banned terms appear inside JSON-LD or schema contexts
    for (const term of bannedTerms) {
        if (lower.includes(term)) {
            // Note: Check if it's in comments or actual schema
            bannedCount++;
            bannedMatches.push({ filePath, term });
            console.error(`  [VIOLATION] Found "${term}" in ${filePath}`);
        }
    }
}

function scanDirForBanned(dir) {
    const fullDir = path.join(rootDir, dir);
    if (!fs.existsSync(fullDir)) return;
    const entries = fs.readdirSync(fullDir, { withFileTypes: true });
    for (const ent of entries) {
        const full = path.join(fullDir, ent.name);
        const rel = path.join(dir, ent.name);
        if (ent.isDirectory()) {
            if (ent.name !== 'node_modules' && ent.name !== '.next' && ent.name !== '.git') {
                scanDirForBanned(rel);
            }
        } else if (/\.(jsx?|tsx?|json|html|md)$/.test(ent.name)) {
            checkBannedInFile(full);
        }
    }
}

for (const d of ['app', 'components', 'lib', 'public', 'content']) {
    scanDirForBanned(d);
}

assert(bannedCount === 0, `Site-wide Zero AggregateRating / ratingValue / reviewCount (found ${bannedCount})`);

// ----------------------------------------------------------------------
// FINAL SUMMARY
// ----------------------------------------------------------------------
console.log('\n================================================================');
console.log(`TOTAL TESTS: ${totalTests}`);
console.log(`PASSED: ${passedTests}`);
console.log(`FAILED: ${failedTests}`);
console.log('================================================================');

if (failedTests > 0) {
    console.error(`\nFAILED TEST DETAILS:`);
    for (const f of failures) {
        console.error(`  - ${f}`);
    }
    process.exit(1);
} else {
    console.log('\nALL EMPIRICAL TESTS PASSED SUCCESSFULLY! (100%)\n');
    process.exit(0);
}
