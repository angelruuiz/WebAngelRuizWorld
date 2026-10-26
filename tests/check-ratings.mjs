import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '../.agents/teamwork/orchestrator_2');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
const forbiddenRegex = /AggregateRating|ratingValue|reviewCount|bestRating|worstRating/i;

console.log('Inspecting markdown files in orchestrator_2:');
files.forEach(f => {
  const filePath = path.join(dir, f);
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  let count = 0;
  lines.forEach((line, i) => {
    if (forbiddenRegex.test(line)) {
      count++;
      console.log(`[${f}:${i + 1}] ${line.trim()}`);
    }
  });
  console.log(`-> ${f}: ${count} references to rating tokens`);
});
