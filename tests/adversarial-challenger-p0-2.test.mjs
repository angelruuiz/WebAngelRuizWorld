import fs from 'fs';
import path from 'path';
import assert from 'assert';

console.log('====================================================');
console.log('ADVERSARIAL CHALLENGER P0-2 EMPIRICAL TEST SUITE');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    console.error(`  [FAIL] ${name}`);
    console.error(`         Error: ${err.message}`);
    throw err;
  }
}

// ---------------------------------------------------------------------------
// SUITE 1: WhatsApp URLs and Parameter Encoding
// ---------------------------------------------------------------------------
console.log('--- SUITE 1: WhatsApp URL & Encoding Empirical Validation ---');

test('No source file references obsolete phone 34680650993', () => {
  const dirs = ['app', 'components', 'content'];
  const oldPhoneRegex = /34680650993/g;
  
  function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(full);
      } else if (/\.(jsx?|tsx?|md|json)$/.test(entry.name)) {
        const content = fs.readFileSync(full, 'utf8');
        assert(!oldPhoneRegex.test(content), `Found old phone 34680650993 in ${full}`);
      }
    }
  }
  
  for (const d of dirs) {
    scan(d);
  }
});

test('Validate explicit WhatsApp URLs in P0 modified files', () => {
  const filesToVerify = [
    {
      file: 'app/empresas/mago-cenas-empresa-madrid/page.jsx',
      expectedSubstr: 'https://wa.me/34648055636?text='
    },
    {
      file: 'app/empresas/page.jsx',
      expectedSubstr: 'https://wa.me/34648055636?text='
    },
    {
      file: 'app/particulares/bodas/page.jsx',
      expectedSubstr: 'https://wa.me/34648055636?text='
    }
  ];

  for (const item of filesToVerify) {
    const content = fs.readFileSync(item.file, 'utf8');
    assert(content.includes(item.expectedSubstr), `${item.file} must include ${item.expectedSubstr}`);
    
    // Extract wa.me URLs using regex
    const waUrlRegex = /https:\/\/wa\.me\/[^\s"'`]+/g;
    const matches = content.match(waUrlRegex) || [];
    assert(matches.length > 0, `At least one wa.me URL must be found in ${item.file}`);

    for (const urlStr of matches) {
      // 1. Must parse with WHATWG URL
      const parsed = new URL(urlStr);
      assert.strictEqual(parsed.hostname, 'wa.me', `Host must be wa.me in ${urlStr}`);
      assert(parsed.pathname.startsWith('/34648055636'), `Must target phone 34648055636 in ${urlStr}`);

      // 2. Query param must exist and decode cleanly without URIError
      const textParam = parsed.searchParams.get('text');
      if (textParam !== null) {
        assert(textParam.length > 5, `Text param should not be trivial in ${urlStr}`);
        // Ensure no corrupt percent sequences like %2 or %ZZ
        assert(!/%(?![0-9A-Fa-f]{2})/.test(urlStr), `URL contains malformed percent escape in ${urlStr}`);
      }
    }
  }
});

test('Empirical check on Cenas Above-The-Fold WhatsApp URL parameters', () => {
  const cenasContent = fs.readFileSync('app/empresas/mago-cenas-empresa-madrid/page.jsx', 'utf8');
  const match = cenasContent.match(/href="(https:\/\/wa\.me\/34648055636\?text=[^"]+)"/);
  assert(match, 'Expected above-the-fold wa.me CTA link in cenas landing');
  
  const rawUrl = match[1];
  const parsed = new URL(rawUrl);
  const text = parsed.searchParams.get('text');
  
  assert.strictEqual(parsed.searchParams.get('text'), 'Hola Ángel, quisiera consultar disponibilidad y tarifas para nuestra cena de empresa en Madrid');
  assert(text.includes('cena de empresa en Madrid'), 'Must mention cena de empresa en Madrid');
  assert(text.startsWith('Hola Ángel,'), 'Must greet Angel politely');
});

// ---------------------------------------------------------------------------
// SUITE 2: De-cannibalization of 'mago cenas empresa madrid'
// ---------------------------------------------------------------------------
console.log('\n--- SUITE 2: Keyword De-Cannibalization Adversarial Stress-Test ---');

test('app/empresas/page.jsx metadata has ZERO occurrences of "cena" or "cenas"', () => {
  const empresasContent = fs.readFileSync('app/empresas/page.jsx', 'utf8');
  
  // Extract metadata object block
  const metaMatch = empresasContent.match(/export const metadata = \{([\s\S]*?)\n\};/);
  assert(metaMatch, 'Metadata object must exist in app/empresas/page.jsx');
  const metadataBlock = metaMatch[1];

  // Stress-test: check for 'cena' or 'cenas' (case-insensitive) anywhere in metadata
  const cenaMatches = metadataBlock.match(/\bcenas?\b/i);
  assert(!cenaMatches, `Found forbidden word "cena(s)" in app/empresas/page.jsx metadata: ${cenaMatches}`);

  // Specifically check keywords array
  const keywordsMatch = metadataBlock.match(/keywords:\s*\[([\s\S]*?)\]/);
  assert(keywordsMatch, 'Keywords array must exist in metadata');
  assert(!keywordsMatch[1].toLowerCase().includes('cena'), 'Keywords must not include any cena terms');
  assert(!keywordsMatch[1].toLowerCase().includes('mago cenas empresa madrid'), 'Keywords must not include mago cenas empresa madrid');
});

test('app/empresas/mago-cenas-empresa-madrid/page.jsx retains the targeted keyword', () => {
  const cenasContent = fs.readFileSync('app/empresas/mago-cenas-empresa-madrid/page.jsx', 'utf8');
  const metaMatch = cenasContent.match(/export const metadata = \{([\s\S]*?)\n\};/);
  assert(metaMatch, 'Metadata object must exist in cenas page');
  const metadataBlock = metaMatch[1];

  assert(metadataBlock.includes("'mago cenas empresa madrid'"), 'Cenas page must target mago cenas empresa madrid');
  assert(metadataBlock.includes('Cenas de Empresa'), 'Title must target Cenas de Empresa');
});

test('Disambiguation of internal link in app/empresas/page.jsx', () => {
  const empresasContent = fs.readFileSync('app/empresas/page.jsx', 'utf8');
  
  // Check that "mago para cenas de empresa" links strictly to /empresas/mago-cenas-empresa-madrid
  const linkRegex = /<Link\s+href="\/empresas\/mago-cenas-empresa-madrid"[^>]*>mago para cenas de empresa<\/Link>/;
  assert(linkRegex.test(empresasContent), 'Must link "mago para cenas de empresa" to /empresas/mago-cenas-empresa-madrid');

  // Ensure "magia en restaurantes" is linked to /empresas/mago-para-restaurantes-madrid
  const restaurantLinkRegex = /<Link\s+href="\/empresas\/mago-para-restaurantes-madrid"[^>]*>magia en restaurantes<\/Link>/;
  assert(restaurantLinkRegex.test(empresasContent), 'Must link "magia en restaurantes" to /empresas/mago-para-restaurantes-madrid');
});

test('Snippet length budgets strictly satisfied (Title <= 60, Desc <= 155)', () => {
  const empresasContent = fs.readFileSync('app/empresas/page.jsx', 'utf8');
  const cenasContent = fs.readFileSync('app/empresas/mago-cenas-empresa-madrid/page.jsx', 'utf8');

  const empTitle = empresasContent.match(/title:\s*\{\s*absolute:\s*['"]([^'"]+)['"]/)[1];
  const empDesc = empresasContent.match(/description:\s*['"]([^'"]+)['"]/)[1];
  const cenasTitle = cenasContent.match(/title:\s*\{\s*absolute:\s*['"]([^'"]+)['"]/)[1];
  const cenasDesc = cenasContent.match(/description:\s*['"]([^'"]+)['"]/)[1];

  assert(empTitle.length <= 60, `Empresas Title (${empTitle.length}) exceeds 60 chars`);
  assert(empDesc.length <= 155, `Empresas Desc (${empDesc.length}) exceeds 155 chars`);
  assert(cenasTitle.length <= 60, `Cenas Title (${cenasTitle.length}) exceeds 60 chars`);
  assert(cenasDesc.length <= 155, `Cenas Desc (${cenasDesc.length}) exceeds 155 chars`);

  console.log(`    - Empresas Title [${empTitle.length}/60]: "${empTitle}"`);
  console.log(`    - Empresas Desc  [${empDesc.length}/155]: "${empDesc}"`);
  console.log(`    - Cenas Title    [${cenasTitle.length}/60]: "${cenasTitle}"`);
  console.log(`    - Cenas Desc     [${cenasDesc.length}/155]: "${cenasDesc}"`);
});

// ---------------------------------------------------------------------------
// SUITE 3: Compiled Static HTML Artifact Verification
// ---------------------------------------------------------------------------
console.log('\n--- SUITE 3: Next.js Static HTML Compilation Verification ---');

test('.next compiled HTML artifacts exist for modified routes', () => {
  assert(fs.existsSync('.next/server/app/empresas.html'), '.next/server/app/empresas.html must exist');
  assert(fs.existsSync('.next/server/app/empresas/mago-cenas-empresa-madrid.html'), '.next/server/app/empresas/mago-cenas-empresa-madrid.html must exist');
  assert(fs.existsSync('.next/server/app/particulares/bodas.html'), '.next/server/app/particulares/bodas.html must exist');
});

test('empresas.html renders expected head tags and corrected link', () => {
  const html = fs.readFileSync('.next/server/app/empresas.html', 'utf8');

  // Title tag
  assert(html.includes('<title>Mago para Empresas en Madrid | Eventos Corporativos y B2B</title>'), 'HTML title mismatch in empresas.html');

  // Description meta tag
  assert(html.includes('content="Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. ¡Presupuesto express en 2h!"'), 'HTML description mismatch in empresas.html');

  // Canonical tag
  assert(html.includes('<link rel="canonical" href="https://angelruiz.world/empresas"/>') || html.includes('rel="canonical" href="https://angelruiz.world/empresas"'), 'Canonical tag missing or incorrect in empresas.html');

  // Link to cenas landing page
  assert(html.includes('href="/empresas/mago-cenas-empresa-madrid"') && html.includes('mago para cenas de empresa'), 'Rendered HTML must link to /empresas/mago-cenas-empresa-madrid with anchor "mago para cenas de empresa"');

  // WhatsApp link updated
  assert(html.includes('href="https://wa.me/34648055636?text='), 'Rendered HTML must have updated WhatsApp URL');
  assert(!html.includes('34680650993'), 'Rendered HTML must not have old WhatsApp number');
});

test('mago-cenas-empresa-madrid.html renders expected head tags and dual CTA', () => {
  const html = fs.readFileSync('.next/server/app/empresas/mago-cenas-empresa-madrid.html', 'utf8');

  // Title tag
  assert(html.includes('<title>Mago para Cenas de Empresa en Madrid | Cenas y Navidad</title>'), 'HTML title mismatch in cenas HTML');

  // Description meta tag
  assert(html.includes('content="Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!"'), 'HTML description mismatch in cenas HTML');

  // Canonical tag
  assert(html.includes('rel="canonical" href="https://angelruiz.world/empresas/mago-cenas-empresa-madrid"'), 'Canonical mismatch in cenas HTML');

  // Above the fold CTA WhatsApp
  assert(html.includes('href="https://wa.me/34648055636?text=Hola%20Ángel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20nuestra%20cena%20de%20empresa%20en%20Madrid"') ||
         html.includes('href="https://wa.me/34648055636?text=Hola%20%C3%81ngel,%20quisiera%20consultar%20disponibilidad%20y%20tarifas%20para%20nuestra%20cena%20de%20empresa%20en%20Madrid"'),
         'Primary WhatsApp CTA button missing in compiled HTML');

  // Secondary anchor CTA and target section id
  assert(html.includes('href="#presupuesto-empresa"'), 'Secondary anchor CTA missing in compiled HTML');
  assert(html.includes('id="presupuesto-empresa"'), 'Section id="presupuesto-empresa" missing in compiled HTML');
});

// ---------------------------------------------------------------------------
// SUITE 4: GEMINI.md Strict Rule Verification
// ---------------------------------------------------------------------------
console.log('\n--- SUITE 4: GEMINI.md Zero AggregateRating Compliance ---');

test('Zero AggregateRating or review rating fields in compiled HTML', () => {
  const files = [
    '.next/server/app/empresas.html',
    '.next/server/app/empresas/mago-cenas-empresa-madrid.html',
    '.next/server/app/particulares/bodas.html'
  ];

  for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    const lower = html.toLowerCase();
    assert(!lower.includes('aggregaterating'), `Found AggregateRating in ${f}`);
    assert(!lower.includes('ratingvalue'), `Found ratingValue in ${f}`);
    assert(!lower.includes('reviewcount'), `Found reviewCount in ${f}`);
  }
});

console.log(`\n====================================================`);
console.log(`ALL ${passedTests}/${totalTests} ADVERSARIAL TESTS PASSED WITH 100% SUCCESS!`);
console.log(`====================================================\n`);
