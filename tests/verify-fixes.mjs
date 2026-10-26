import assert from 'node:assert/strict';

const proposals = [
  {
    row: 2,
    desc: 'Ilusionismo corporativo para cenas de Navidad en Madrid. Magia de cerca y show de sobremesa. Reserva directa de artista. Consulta fechas y disponibilidad.'
  },
  {
    row: 3,
    desc: 'Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. Solicita presupuesto express en 2h.'
  },
  {
    row: 4,
    desc: 'Tarifas oficiales: mago para cenas de empresa en Madrid desde 500€ a 750€. Cóctel, sobremesa y packs completos sin agencias. Presupuesto online en 2h.'
  },
  {
    row: 6,
    desc: 'Magia y animación de cóctel para cenas de Navidad corporativas en Madrid. Tarifas de 500€ a 750€ sin intermediarios. ¡Reserva antes de agotar fechas!'
  },
  {
    row: 7,
    desc: 'Conferencias motivacionales y magia corporativa en Madrid. Ángel Ruiz ancla el mensaje de tu marca con ilusionismo B2B de alto impacto. Pide dossier.'
  },
  {
    row: 8,
    desc: 'Dinámicas de team building con magia en Madrid. Fomenta cohesión, comunicación y trabajo en equipo de forma sorprendente. Solicita propuesta en 2h.'
  },
  {
    row: 10,
    desc: 'Animación para cóctel de fin de año y tardeo de empresa en Madrid. Magia de proximidad para despedir el año con impacto y energía. Presupuesto en 2h.'
  },
  {
    row: 12,
    desc: 'Ilusionismo corporativo en Madrid: magia de escena, mentalismo y cóctel interactivo. Más de 10 años en eventos B2B. Solicita presupuesto sin compromiso.'
  },
  {
    row: 9,
    target: 'Pozuelo',
    title: 'Mago en Pozuelo | Empresas y Eventos 2026',
    desc: 'Magia corporativa para cenas de empresa y eventos en Pozuelo de Alarcón (La Finca y Ática). Sin costes de desplazamiento. Presupuesto directo en 2h.'
  }
];

proposals.forEach(p => {
  const len = p.desc.length;
  console.log(`Row ${p.row} (${p.target || 'General'}): len=${len} (within 130-155: ${len >= 130 && len <= 155})`);
  assert.ok(len <= 155, `Exceeds 155: ${len}`);
  assert.ok(len >= 130, `Below 130: ${len}`);
  if (p.title) {
    console.log(`  Title len=${p.title.length} (<=60: ${p.title.length <= 60})`);
    assert.ok(p.title.length <= 60);
  }
});

console.log('All recommended fixes verified 100% within Google bounds!');
