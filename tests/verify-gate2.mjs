import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const matrixPath = path.resolve(__dirname, '../.agents/teamwork/orchestrator_2/MATRIZ_RESCATE_SERP.md');

const content = fs.readFileSync(matrixPath, 'utf8');
const rows = content.split('\n').filter(l => l.startsWith('| **'));

console.log(`\n================================================================================`);
console.log(`MATRIZ RESCATE SERP - DEEP AUDIT OF PROPOSED SNIPPETS (12 Rows)`);
console.log(`================================================================================\n`);

let totalTitles = 0;
let totalDescs = 0;
let titleErrors = 0;
let descErrors = 0;
const results = [];

rows.forEach(r => {
  const safe = r.replace(/\\\|/g, '__PIPE__');
  const cols = safe.split('|').slice(1, -1).map(c => c.trim().replace(/__PIPE__/g, '|'));
  const rowId = cols[0].replace(/\*\*/g, '');
  const query = cols[1].replace(/`/g, '');
  const url = cols[4];
  const optCell = cols[6];

  const titleMatches = [...optCell.matchAll(/\*\*Title(?:[^*]*)\*\*:\s*`([^`]+)`/g)];
  const descMatches = [...optCell.matchAll(/\*\*Desc(?:[^*]*)\*\*:\s*`([^`]+)`/g)];

  console.log(`ROW ${rowId}: Query: "${query}" | Canonical URL: ${url}`);

  titleMatches.forEach((m, idx) => {
    totalTitles++;
    const t = m[1];
    const len = t.length;
    const ok = len <= 60;
    if (!ok) titleErrors++;
    console.log(`  [Title ${idx + 1}] (${len} chars, max 60): "${t}" -> ${ok ? 'PASS' : 'FAIL (exceeds 60)'}`);
  });

  descMatches.forEach((m, idx) => {
    totalDescs++;
    const d = m[1];
    const len = d.length;
    const ok = len <= 155;
    if (!ok) descErrors++;
    console.log(`  [Desc ${idx + 1}] (${len} chars, max 155): "${d}" -> ${ok ? 'PASS' : 'FAIL (exceeds 155)'}`);
  });
  console.log('');
});

console.log(`--------------------------------------------------------------------------------`);
console.log(`Summary:`);
console.log(`  Total Rows Evaluated: ${rows.length}`);
console.log(`  Total Titles Evaluated: ${totalTitles} (Errors: ${titleErrors})`);
console.log(`  Total Descriptions Evaluated: ${totalDescs} (Errors: ${descErrors})`);
console.log(`--------------------------------------------------------------------------------\n`);

if (titleErrors > 0 || descErrors > 0) {
  process.exit(1);
} else {
  console.log(`ALL 12 ROWS STRICTLY SATISFY GOOGLE SERP LENGTH THRESHOLDS.`);
  process.exit(0);
}
