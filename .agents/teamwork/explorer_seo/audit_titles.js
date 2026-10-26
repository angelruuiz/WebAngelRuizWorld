const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const root = path.resolve(__dirname, '../../..');

console.log('=== AUDITING APP PAGES TITLE & METADATA ===');
function checkDir(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory() && f.name !== 'node_modules' && f.name !== '.next') {
      checkDir(p);
    } else if (f.name === 'page.jsx' || f.name === 'page.js') {
      const code = fs.readFileSync(p, 'utf8');
      const rel = path.relative(root, p).replace(/\\/g, '/');
      if (code.includes('export const metadata') || code.includes('generateMetadata')) {
        const hasAbsolute = /title\s*:\s*\{\s*absolute\s*:/.test(code);
        const titleMatch = code.match(/title\s*:\s*\{\s*absolute\s*:\s*[`'"]([^`'"]+)[`'"]/);
        const simpleTitleMatch = code.match(/title\s*:\s*[`'"]([^`'"]+)[`'"]/);
        const descMatch = code.match(/description\s*:\s*[`'"]([^`'"]+)[`'"]/);
        const canonicalMatch = code.match(/canonical\s*:\s*[`'"]([^`'"]+)[`'"]/);

        const titleVal = titleMatch ? titleMatch[1] : (simpleTitleMatch ? simpleTitleMatch[1] : 'dynamic/other');
        const descVal = descMatch ? descMatch[1] : 'dynamic/other';
        const canonVal = canonicalMatch ? canonicalMatch[1] : 'dynamic/none';

        if (!hasAbsolute && !code.includes('generateMetadata')) {
          console.log(`[NO ABSOLUTE] ${rel} -> "${titleVal}" (will be suffixed with " | Ángel Ruiz")`);
        }

        if (titleVal.length > 65) {
          console.log(`[LONG TITLE ${titleVal.length} chars] ${rel} -> "${titleVal}"`);
        }
        if (descVal !== 'dynamic/other' && (descVal.length < 110 || descVal.length > 165)) {
          console.log(`[DESC LENGTH ${descVal.length} chars] ${rel} -> "${descVal.slice(0, 50)}..."`);
        }
        if (canonVal === 'dynamic/none' && !code.includes('generateMetadata')) {
          console.log(`[MISSING CANONICAL] ${rel}`);
        }
      }
    }
  }
}
checkDir(path.join(root, 'app'));


// end of checkDir

