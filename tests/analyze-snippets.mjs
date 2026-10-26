import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const matrixPath = path.resolve(__dirname, '../.agents/teamwork/orchestrator_2/MATRIZ_RESCATE_SERP.md');

const content = fs.readFileSync(matrixPath, 'utf8');
const rows = content.split('\n').filter(l => l.startsWith('| **'));

console.log('| Row | Query | Proposed Title (Chars) | Title <= 60? | Claimed Desc | Actual Desc Len | Desc <= 155? | Exceeded By |');
console.log('|---|---|---|---|---|---|---|---|');

rows.forEach(r => {
  const safe = r.replace(/\\\|/g, '__PIPE__');
  const cols = safe.split('|').slice(1, -1).map(c => c.trim().replace(/__PIPE__/g, '|'));
  const rowId = cols[0].replace(/\*\*/g, '');
  const query = cols[1].replace(/`/g, '');
  const optCell = cols[6];

  const titleMatch = optCell.match(/\*\*Title(?:[^*]*)\*\*:\s*`([^`]+)`/);
  const claimedTitleLenMatch = optCell.match(/\*\*Title\s*\(([^)]+)\)\*\*/);
  const descMatch = optCell.match(/\*\*Desc(?:[^*]*)\*\*:\s*`([^`]+)`/);
  const claimedDescLenMatch = optCell.match(/\*\*Desc\s*\(([^)]+)\)\*\*/);

  const title = titleMatch ? titleMatch[1] : 'N/A';
  const claimedTitle = claimedTitleLenMatch ? claimedTitleLenMatch[1] : 'N/A';
  const titleLen = title.length;
  const titlePass = titleLen <= 60;

  const desc = descMatch ? descMatch[1] : 'N/A';
  const claimedDesc = claimedDescLenMatch ? claimedDescLenMatch[1] : 'N/A';
  const descLen = desc.length;
  const descPass = descLen <= 155;
  const exceedBy = descLen > 155 ? descLen - 155 : 0;

  console.log(`| ${rowId} | ${query} | "${title}" (${titleLen}) | ${titlePass ? 'PASS' : 'FAIL'} | ${claimedDesc} | ${descLen} | ${descPass ? 'PASS' : '**FAIL**'} | ${exceedBy > 0 ? '+' + exceedBy : '0'} |`);
});
