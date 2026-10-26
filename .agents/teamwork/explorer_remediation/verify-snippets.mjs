import fs from 'node:fs';
import path from 'node:path';

const candidates = [
  { row: 1, title: "Mago para Cenas de Empresa en Madrid | Cenas y Navidad", desc: "Mago profesional para cenas de empresa en Madrid y fiestas de Navidad. Magia de cerca cóctel y sobremesa. Fechas limitadas Q4. ¡Presupuesto express en 2h!" },
  { row: 2, title: "Mago para Cenas de Navidad de Empresa en Madrid [2026]", desc: "Ilusionismo corporativo para cenas de Navidad en Madrid. Magia de cerca y show de sobremesa. Reserva directa de artista. Consulta fechas y disponibilidad." },
  { row: 3, title: "Mago para Empresas en Madrid | Eventos Corporativos y B2B", desc: "Mago para empresas en Madrid: convenciones, kick-offs, team building y ferias. Ilusionismo corporativo de alto impacto. Solicita presupuesto express en 2h." },
  { row: 4, title: "¿Cuánto Cuesta un Mago para Cena de Empresa en Madrid? 2026", desc: "Tarifas oficiales: mago para cenas de empresa en Madrid desde 500€ a 750€. Cóctel, sobremesa y packs completos sin agencias. Presupuesto online en 2h." },
  { row: 5, title: "Cenas de Empresa Originales en Madrid: 7 Ideas Únicas 2026", desc: "Descubre 7 ideas originales para cenas de empresa y Navidad en Madrid: magia de cerca en mesas, catas a ciegas y team building. Consejos y tarifas reales." },
  { row: 6, title: "Animación y Espectáculos para Cenas de Navidad en Madrid", desc: "Magia y animación de cóctel para cenas de Navidad corporativas en Madrid. Tarifas de 500€ a 750€ sin intermediarios. ¡Reserva antes de agotar fechas!" },
  { row: 7, title: "Mago Conferenciante en Madrid | Keynotes de Empresa B2B", desc: "Conferencias motivacionales y magia corporativa en Madrid. Ángel Ruiz ancla el mensaje de tu marca con ilusionismo B2B de alto impacto. Pide dossier." },
  { row: 8, title: "Mago para Team Building en Madrid | Dinámicas y Empresas", desc: "Dinámicas de team building con magia en Madrid. Fomenta cohesión, comunicación y trabajo en equipo de forma sorprendente. Solicita propuesta en 2h." },
  { row: "9-rozas", title: "Mago en Las Rozas | Empresas y Cenas 2026", desc: "Magia corporativa para cenas de empresa y eventos en Las Rozas. Más de 10 años de experiencia. Sin costes de desplazamiento. Presupuesto directo en 2h." },
  { row: "9-pozuelo", title: "Mago en Pozuelo | Empresas y Eventos 2026", desc: "Magia corporativa para cenas de empresa y eventos en Pozuelo de Alarcón (La Finca y Ática). Sin costes de desplazamiento. Presupuesto directo en 2h." },
  { row: 10, title: "Cóctel de Fin de Año para Empresas en Madrid: Ideas Magia", desc: "Animación para cóctel de fin de año y tardeo de empresa en Madrid. Magia de proximidad para despedir el año con impacto y energía. Presupuesto en 2h." },
  { row: 11, title: "Mago para Ferias y Congresos en IFEMA Madrid | B2B 2026", desc: "Atracción de leads y dinamización de stands en IFEMA Madrid. Magia personalizada con el producto y mensaje de tu empresa. Solicita propuesta express en 2h." },
  { row: 12, title: "Espectáculo de Magia para Empresas en Madrid | Ángel Ruiz", desc: "Ilusionismo corporativo en Madrid: magia de escena, mentalismo y cóctel interactivo. Más de 10 años en eventos B2B. Solicita presupuesto sin compromiso." },
];

console.log('| Row | Title Length | Title <= 60 | Desc Length | 130 <= Desc <= 155 | Status |');
console.log('|---|---|---|---|---|---|');
for (const c of candidates) {
  const tLen = c.title.length;
  const dLen = c.desc.length;
  const tPass = tLen <= 60;
  const dPass = dLen >= 130 && dLen <= 155;
  const status = tPass && dPass ? 'PERFECT' : 'FAIL';
  console.log(`| ${c.row} | ${tLen} | ${tPass} | ${dLen} | ${dPass} | ${status} |`);
}
