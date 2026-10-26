import fs from 'node:fs';
import path from 'node:path';

const matrixPath = path.resolve('C:/Users/angel/Desktop/ANGEL RUIZ WORLD/AngelRuizWorld-main/.agents/teamwork/orchestrator_2/MATRIZ_RESCATE_SERP.md');
let content = fs.readFileSync(matrixPath, 'utf8');

// Proposed replacements for column 6:
const replacements = {
  2: '**Title (54 car.)**: `Mago para Cenas de Navidad de Empresa en Madrid [2026]`<br>**Desc (154 car.)**: `Ilusionismo corporativo para cenas de Navidad en Madrid. Magia de cerca y show de sobremesa. Reserva directa de artista. Consulta fechas y disponibilidad.`',
  3: '**Title (57 car.)**: `Mago para Empresas en Madrid \\| Eventos Corporativos y B2B`<br>**Desc (155 car.)**: `Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. Solicita presupuesto express en 2h.`',
  4: '**Title (59 car.)**: `¿Cuánto Cuesta un Mago para Cena de Empresa en Madrid? 2026`<br>**Desc (150 car.)**: `Tarifas oficiales: mago para cenas de empresa en Madrid desde 500€ a 750€. Cóctel, sobremesa y packs completos sin agencias. Presupuesto online en 2h.`',
  6: '**Title (56 car.)**: `Animación y Espectáculos para Cenas de Navidad en Madrid`<br>**Desc (149 car.)**: `Magia y animación de cóctel para cenas de Navidad corporativas en Madrid. Tarifas de 500€ a 750€ sin intermediarios. ¡Reserva antes de agotar fechas!`',
  7: '**Title (55 car.)**: `Mago Conferenciante en Madrid \\| Keynotes de Empresa B2B`<br>**Desc (149 car.)**: `Conferencias motivacionales y magia corporativa en Madrid. Ángel Ruiz ancla el mensaje de tu marca con ilusionismo B2B de alto impacto. Pide dossier.`',
  8: '**Title (56 car.)**: `Mago para Team Building en Madrid \\| Dinámicas y Empresas`<br>**Desc (147 car.)**: `Dinámicas de team building con magia en Madrid. Fomenta cohesión, comunicación y trabajo en equipo de forma sorprendente. Solicita propuesta en 2h.`',
  9: '**Title Las Rozas (41 car.)**: `Mago en Las Rozas \\| Empresas y Cenas 2026`<br>**Desc Las Rozas (151 car.)**: `Magia corporativa para cenas de empresa y eventos en Las Rozas. Más de 10 años de experiencia. Sin costes de desplazamiento. Presupuesto directo en 2h.`<br>**Title Pozuelo (41 car.)**: `Mago en Pozuelo \\| Empresas y Eventos 2026`<br>**Desc Pozuelo (148 car.)**: `Magia corporativa para cenas de empresa y eventos en Pozuelo de Alarcón (La Finca y Ática). Sin costes de desplazamiento. Presupuesto directo en 2h.`',
  10: '**Title (57 car.)**: `Cóctel de Fin de Año para Empresas en Madrid: Ideas Magia`<br>**Desc (149 car.)**: `Animación para cóctel de fin de año y tardeo de empresa en Madrid. Magia de proximidad para despedir el año con impacto y energía. Presupuesto en 2h.`',
  12: '**Title (57 car.)**: `Espectáculo de Magia para Empresas en Madrid \\| Ángel Ruiz`<br>**Desc (152 car.)**: `Ilusionismo corporativo en Madrid: magia de escena, mentalismo y cóctel interactivo. Más de 10 años en eventos B2B. Solicita presupuesto sin compromiso.`'
};

const lines = content.split('\n');
const newLines = lines.map(line => {
  if (!line.startsWith('| **')) return line;
  const safe = line.replace(/\\\|/g, '__ESCAPED_PIPE__');
  const rawCols = safe.split('|').map(s => s.trim().replace(/__ESCAPED_PIPE__/g, '\\|'));
  const cols = rawCols.slice(1, -1);
  const rowId = parseInt(cols[0].replace(/\*\*/g, ''), 10);
  if (replacements[rowId]) {
    // Replace column 6 (index 6, which is 7th column)
    cols[6] = replacements[rowId];
    return '| ' + cols.join(' | ') + ' |';
  }
  return line;
});

const simulatedContent = newLines.join('\n');

// Now run the exact challenger test on simulatedContent
const rows = simulatedContent.split('\n').filter(line => line.startsWith('| **'));
const titleRegex = /\*\*Title[^*]*\*\*:\s*`([^`]+)`/g;
const descRegex = /\*\*Desc[^*]*\*\*:\s*`([^`]+)`/g;

let issues = [];
rows.forEach(row => {
  const safeRow = row.replace(/\\\|/g, '__ESCAPED_PIPE__');
  const rawCols = safeRow.split('|').map(s => s.trim().replace(/__ESCAPED_PIPE__/g, '|'));
  const cols = rawCols.slice(1, -1);
  const rowId = cols[0];
  const optCell = cols[6];

  const titles = [...optCell.matchAll(titleRegex)].map(m => m[1]);
  const descs = [...optCell.matchAll(descRegex)].map(m => m[1]);

  titles.forEach(t => {
    if (t.length > 60) issues.push(`Title > 60: ${t.length} (${t}) in row ${rowId}`);
  });
  descs.forEach(d => {
    if (d.length > 155) issues.push(`Desc > 155: ${d.length} (${d}) in row ${rowId}`);
    if (d.length < 100) issues.push(`Desc < 100: ${d.length} (${d}) in row ${rowId}`);
  });
  console.log(`Row ${rowId}: titles=${titles.length}, descs=${descs.length}`);
});

console.log('Total issues found in simulation:', issues.length);
if (issues.length > 0) {
  console.log('Issues:', issues);
} else {
  console.log('SUCCESS: All 12 rows comply with Title <= 60 and Desc <= 155!');
}
