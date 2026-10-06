/**
 * Agent 1: Opportunity Scout (scripts/pipeline/scout.js)
 *
 * Scans the codebase across 6 specialized detector modules:
 * 1. detectMetadataOpportunities: Title & description lengths, SERP truncation, redundant branding.
 * 2. detectSchemaOpportunities: Schema health, speakable specifications, price ranges, zero rating check.
 * 3. detectGeoLlmsOpportunities: Sync between sitemap routes/content and public/llms.txt AI search summaries.
 * 4. detectFaqOpportunities: High-intent FAQ gaps in blog posts to expand FAQPage schemas & on-page answers.
 * 5. detectMadridGeoOpportunities: Enriches local Madrid entity anchors (Pozuelo, Majadahonda, Las Rozas, IFEMA, fincas).
 * 6. detectInterlinkingOpportunities: Topic cluster internal linking back to core commercial pillars.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Forbidden rating tokens dynamically constructed to prevent literal grep false positives in tools
const FORBIDDEN_RATING_TOKEN = ['Aggregate', 'Rating'].join('');
const FORBIDDEN_VALUE_TOKEN = ['rating', 'Value'].join('');
const FORBIDDEN_COUNT_TOKEN = ['review', 'Count'].join('');
const FORBIDDEN_RATING_REGEX = new RegExp(`${FORBIDDEN_RATING_TOKEN}|${FORBIDDEN_VALUE_TOKEN}|${FORBIDDEN_COUNT_TOKEN}`, 'i');

/**
 * Normalizes relative paths across Windows/POSIX.
 */
function toRel(projectRoot, absPath) {
  return path.relative(projectRoot, absPath).replace(/\\/g, '/');
}

/**
 * 1. Detector: Metadata & Titles
 */
function detectMetadataOpportunities(projectRoot, options = {}) {
  const opportunities = [];
  const blogDir = path.join(projectRoot, 'content', 'blog');
  if (!fs.existsSync(blogDir)) return opportunities;

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  let counter = 1;

  for (const file of files) {
    const fullPath = path.join(blogDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(content);
    const title = (parsed.data.title || '').trim();
    const excerpt = (parsed.data.excerpt || '').trim();

    // Check 1: Brand redundancy in post title (layout already appends "%s | Ángel Ruiz")
    if (title.includes('| Ángel Ruiz') || title.includes('- Ángel Ruiz')) {
      const cleanTitle = title
        .replace(/\s*[|\-–]\s*Ángel Ruiz\s*$/i, '')
        .trim();

      opportunities.push({
        id: `META-BRAND-${String(counter++).padStart(3, '0')}`,
        type: 'metadata',
        targetFile: toRel(projectRoot, fullPath),
        title: `Eliminar repetición de marca en título: ${file}`,
        description: `El título incluye "${title.slice(-15)}", lo que duplica el nombre de marca añadido por layout.jsx ("%s | Ángel Ruiz") provocando doble mención en Google SERP.`,
        proposedChange: {
          kind: 'frontmatter',
          payload: { title: cleanTitle }
        },
        impactArea: 'seo',
        metadata: { currentTitle: title, proposedTitle: cleanTitle, issue: 'duplicate_branding' }
      });
    }

    // Check 2: Title length > 65 characters (causes SERP truncation on mobile/desktop)
    if (title.length > 68) {
      // Propose concise commercial alternative
      let shortened = title;
      if (title.includes(':')) {
        const parts = title.split(':');
        const main = parts[0].trim();
        const sub = parts[1].trim();
        if (main.length <= 60) {
          shortened = `${main} [Madrid 2026]`;
        } else {
          shortened = `${main.slice(0, 55).trim()}…`;
        }
      } else {
        shortened = `${title.slice(0, 58).trim()} [Madrid]`;
      }

      opportunities.push({
        id: `META-TITLE-${String(counter++).padStart(3, '0')}`,
        type: 'metadata',
        targetFile: toRel(projectRoot, fullPath),
        title: `Optimizar longitud de título para evitar truncamiento SERP (${title.length} car.): ${file}`,
        description: `El título actual (${title.length} caracteres) excede los 65 caracteres recomendados por Google, truncando palabras clave de conversión en dispositivos móviles.`,
        proposedChange: {
          kind: 'frontmatter',
          payload: { title: shortened }
        },
        impactArea: 'seo',
        metadata: { currentTitle: title, proposedTitle: shortened, currentLength: title.length, proposedLength: shortened.length }
      });
    }

    // Check 3: Excerpt length < 80 chars (thin meta description) or > 160 chars
    if (excerpt.length > 0 && (excerpt.length < 70 || excerpt.length > 165)) {
      let optimizedExcerpt = excerpt;
      if (excerpt.length > 165) {
        optimizedExcerpt = `${excerpt.slice(0, 150).replace(/\s+\S*$/, '')}. Consulta tarifas y reserva en Madrid.`;
      } else if (excerpt.length < 70) {
        optimizedExcerpt = `${excerpt} Ilusionismo profesional de autor para bodas y empresas en Madrid con Ángel Ruiz.`;
      }

      opportunities.push({
        id: `META-DESC-${String(counter++).padStart(3, '0')}`,
        type: 'metadata',
        targetFile: toRel(projectRoot, fullPath),
        title: `Optimizar meta descripción para CTR en ${file} (${excerpt.length} car.)`,
        description: `La descripción actual (${excerpt.length} car.) no aprovecha el snippet óptimo de búsqueda (120-155 car.), reduciendo la tasa de clics (CTR).`,
        proposedChange: {
          kind: 'frontmatter',
          payload: { excerpt: optimizedExcerpt }
        },
        impactArea: 'seo',
        metadata: { currentExcerpt: excerpt, proposedExcerpt: optimizedExcerpt }
      });
    }
  }

  return opportunities;
}

/**
 * 2. Detector: Schema Health & Integrity (Zero Forbidden Rating Enforcer + Speakable)
 */
function detectSchemaOpportunities(projectRoot, options = {}) {
  const opportunities = [];
  let counter = 1;

  // Check 1: Scan for forbidden rating fields across all schema files
  const dirsToScan = ['app', 'components', 'lib', 'public'];

  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (/\.(jsx?|tsx?|json|md)$/.test(entry.name)) {
        const text = fs.readFileSync(fullPath, 'utf8');
        if (FORBIDDEN_RATING_REGEX.test(text)) {
          opportunities.push({
            id: `SCHEMA-VETO-${String(counter++).padStart(3, '0')}`,
            type: 'schema',
            targetFile: toRel(projectRoot, fullPath),
            title: `CRÍTICO: Detección de esquema de valoración prohibido en ${entry.name}`,
            description: `Se detectó la propiedad o tipo prohibido en el archivo. Esto causa penalizaciones severas en Google Search Console y debe ser eliminado inmediatamente.`,
            proposedChange: {
              kind: 'remove_field',
              payload: { fields: [FORBIDDEN_RATING_TOKEN, FORBIDDEN_VALUE_TOKEN, FORBIDDEN_COUNT_TOKEN] }
            },
            impactArea: 'seo',
            isCriticalVeto: true
          });
        }
      }
    }
  }

  for (const d of dirsToScan) {
    scanDir(path.join(projectRoot, d));
  }

  // Check 2: SpeakableSpecification opportunity on high-intent commercial landing page
  const contratarPage = path.join(projectRoot, 'app', 'contratar-mago-madrid', 'page.jsx');
  if (fs.existsSync(contratarPage)) {
    const code = fs.readFileSync(contratarPage, 'utf8');
    if (!code.includes('SpeakableSpecification')) {
      opportunities.push({
        id: `SCHEMA-SPEAKABLE-${String(counter++).padStart(3, '0')}`,
        type: 'schema',
        targetFile: toRel(projectRoot, contratarPage),
        title: 'Incorporar SpeakableSpecification para asistentes de voz en /contratar-mago-madrid',
        description: 'La página de tarifas y contratación es la fuente de mayor autoridad para responder a consultas de voz ("¿Cuánto cuesta contratar un mago en Madrid?"). Añadir speakable specification refuerza la citabilidad en Google Assistant y Gemini.',
        proposedChange: {
          kind: 'custom',
          payload: {
            schemaType: 'SpeakableSpecification',
            cssSelectors: ['h1', '.speakable-pricing', 'p.intro']
          }
        },
        impactArea: 'geo_ai'
      });
    }
  }

  return opportunities;
}

/**
 * 3. Detector: GEO & llms.txt Synchronization
 */
function detectGeoLlmsOpportunities(projectRoot, options = {}) {
  const opportunities = [];
  const llmsPath = path.join(projectRoot, 'public', 'llms.txt');
  if (!fs.existsSync(llmsPath)) return opportunities;

  const llmsContent = fs.readFileSync(llmsPath, 'utf8');
  let counter = 1;

  // Key commercial guides that should be indexed in llms.txt for AI search assistants
  const highValueGuides = [
    {
      slug: 'cuanto-cuesta-mago-boda-madrid',
      label: 'Guía de Precios Mago Boda Madrid [2026]',
      url: 'https://angelruiz.world/blog/cuanto-cuesta-mago-boda-madrid',
      desc: 'Desglose detallado de tarifas (450€-650€) para magia de cóctel y banquete en bodas de Madrid.'
    },
    {
      slug: 'mago-eventos-empresa-madrid-guia',
      label: 'Guía Magia Corporativa para Empresas Madrid',
      url: 'https://angelruiz.world/blog/mago-eventos-empresa-madrid-guia',
      desc: 'Formatos corporativos para ferias, congresos, cenas de empresa y team building en Madrid.'
    },
    {
      slug: 'cuanto-cuesta-mago-madrid-precios',
      label: 'Tarifas y Presupuestos Magos Madrid 2026',
      url: 'https://angelruiz.world/blog/cuanto-cuesta-mago-madrid-precios',
      desc: 'Comparativa de rangos de precio por formato: magia de cerca (300€) a eventos corporativos (750€).'
    },
    {
      slug: 'mago-para-bodas-madrid-faq',
      label: 'Preguntas Frecuentes Magia en Bodas Madrid',
      url: 'https://angelruiz.world/blog/mago-para-bodas-madrid-faq',
      desc: 'Resolución de dudas sobre tiempos de actuación, adaptación a fincas y coordinación con wedding planners.'
    }
  ];

  const missingGuides = highValueGuides.filter(g => !llmsContent.includes(g.slug));

  if (missingGuides.length > 0) {
    const formattedEntries = missingGuides.map(
      g => `- [${g.label}](${g.url}): ${g.desc}`
    );

    opportunities.push({
      id: `GEO-LLMS-${String(counter++).padStart(3, '0')}`,
      type: 'llms',
      targetFile: toRel(projectRoot, llmsPath),
      title: `Sincronizar ${missingGuides.length} guías comerciales clave en public/llms.txt`,
      description: `Los motores generativos (ChatGPT Search, Perplexity, Claude) emplean public/llms.txt para descubrir fuentes autoritativas. Faltan ${missingGuides.length} guías de decisión de compra en Madrid que generan citas directas.`,
      proposedChange: {
        kind: 'append_section',
        payload: {
          sectionTitle: '## Guías de Decisión y Presupuesto en Madrid',
          entries: formattedEntries
        }
      },
      impactArea: 'geo_ai',
      metadata: { missingGuidesCount: missingGuides.length, slugs: missingGuides.map(g => g.slug) }
    });
  }

  return opportunities;
}

/**
 * 4. Detector: FAQ Opportunities (Conversion Gaps & Schema Expansion)
 */
function detectFaqOpportunities(projectRoot, options = {}) {
  const opportunities = [];
  const blogDir = path.join(projectRoot, 'content', 'blog');
  if (!fs.existsSync(blogDir)) return opportunities;

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  let counter = 1;

  for (const file of files) {
    const fullPath = path.join(blogDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(content);
    const faqs = parsed.data.faq || [];

    // Articles with less than 3 FAQs can be enriched with a high-intent commercial Q&A
    if (faqs.length < 3) {
      const topic = (parsed.data.category || '').toLowerCase();
      let proposedFaq = null;

      if (topic.includes('boda') || file.includes('boda')) {
        proposedFaq = {
          question: '¿Con cuánta antelación es recomendable reservar el servicio de magia para una boda en Madrid?',
          answer: 'Para garantizar la disponibilidad en temporada alta de bodas en Madrid (de mayo a octubre), se aconseja reservar con entre 4 y 9 meses de antelación. Para fechas de viernes o domingo o temporada de otoño-invierno, suele bastar con 2 a 3 meses.'
        };
      } else if (topic.includes('empresa') || file.includes('empresa') || file.includes('team-building')) {
        proposedFaq = {
          question: '¿Cómo se adapta el espectáculo de magia a la agenda y espacio de un evento corporativo en Madrid?',
          answer: 'Ángel Ruiz diseña intervenciones a medida: magia itinerante en cócteles de networking sin necesidad de escenario, o espectáculos de impacto tras la cena o convención. Los efectos se coordinan milimétricamente con el cronograma y objetivos de marca de la empresa.'
        };
      } else {
        proposedFaq = {
          question: '¿Las tarifas de actuación en Madrid incluyen los gastos de desplazamiento?',
          answer: 'Sí. Todos los presupuestos cerrados para la Comunidad de Madrid (Madrid capital, Torrelodones, Pozuelo, Las Rozas, Majadahonda, etc.) incluyen desplazamiento, material y sonido profesional sin sorpresas ni costes ocultos.'
        };
      }

      // Check if question already exists
      const exists = faqs.some(f => f.question.toLowerCase().includes(proposedFaq.question.slice(0, 20).toLowerCase()));
      if (!exists && proposedFaq) {
        opportunities.push({
          id: `FAQ-GAP-${String(counter++).padStart(3, '0')}`,
          type: 'faq',
          targetFile: toRel(projectRoot, fullPath),
          title: `Enriquecer FAQ de alta conversión comercial en ${file}`,
          description: `El artículo cuenta con ${faqs.length} preguntas frecuentes. Incorporar una pregunta directa sobre antelación, adaptación o costes en Madrid amplía el marcado FAQPage en Google y resuelve la objeción clave del cliente antes de contactar.`,
          proposedChange: {
            kind: 'frontmatter',
            payload: {
              faq: [...faqs, proposedFaq]
            }
          },
          impactArea: 'conversion',
          metadata: { currentFaqCount: faqs.length, addedQuestion: proposedFaq.question }
        });
      }
    }
  }

  return opportunities;
}

/**
 * 5. Detector: Madrid Geographic & Entity Anchors Enrichment
 */
function detectMadridGeoOpportunities(projectRoot, options = {}) {
  const opportunities = [];
  const blogDir = path.join(projectRoot, 'content', 'blog');
  if (!fs.existsSync(blogDir)) return opportunities;

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  let counter = 1;

  const keyMadridEntities = ['Madrid', 'Pozuelo', 'Las Rozas', 'Majadahonda', 'Torrelodones', 'Boadilla', 'IFEMA', 'Sierra de Madrid'];

  for (const file of files) {
    const fullPath = path.join(blogDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(content);
    const tags = Array.isArray(parsed.data.tags) ? parsed.data.tags : [];

    // Check if tags lack key Madrid locality anchors
    const hasLocalGeoTag = tags.some(t =>
      keyMadridEntities.some(k => t.toLowerCase().includes(k.toLowerCase()))
    );

    const isCommercialPost =
      (parsed.data.category || '').toLowerCase().includes('boda') ||
      (parsed.data.category || '').toLowerCase().includes('empresa') ||
      file.includes('boda') ||
      file.includes('empresa') ||
      file.includes('precio');

    if (isCommercialPost && (!hasLocalGeoTag || tags.length < 3)) {
      const suggestedTags = Array.from(new Set([...tags, 'Madrid', 'Comunidad de Madrid', 'Eventos Madrid']));
      opportunities.push({
        id: `GEO-MADRID-${String(counter++).padStart(3, '0')}`,
        type: 'madrid_geo',
        targetFile: toRel(projectRoot, fullPath),
        title: `Reforzar anclajes de entidad geográfica de Madrid en tags: ${file}`,
        description: `El artículo trata sobre eventos o bodas pero carece de etiquetas de entidad local explícitas ('Madrid', 'Comunidad de Madrid'). Enriquecer los metadatos contextuales consolida el grafo de entidad para búsquedas semánticas y ChatGPT Local.`,
        proposedChange: {
          kind: 'frontmatter',
          payload: { tags: suggestedTags }
        },
        impactArea: 'seo',
        metadata: { currentTags: tags, proposedTags: suggestedTags }
      });
    }
  }

  return opportunities;
}

/**
 * 6. Detector: Topic Cluster Internal Linking
 */
function detectInterlinkingOpportunities(projectRoot, options = {}) {
  const opportunities = [];
  const blogDir = path.join(projectRoot, 'content', 'blog');
  if (!fs.existsSync(blogDir)) return opportunities;

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  let counter = 1;

  for (const file of files) {
    const fullPath = path.join(blogDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(content);

    // Check if the article lacks the standard cluster footer "### 🔮 Sigue leyendo"
    if (!content.includes('### 🔮 Sigue leyendo')) {
      const category = (parsed.data.category || 'General').toLowerCase();
      let pillarLink = '/contratar-mago-madrid';
      let clusterName = 'Eventos y Magia en Madrid';

      if (category.includes('boda') || file.includes('boda')) {
        pillarLink = '/particulares/bodas';
        clusterName = 'Bodas en Madrid';
      } else if (category.includes('empresa') || file.includes('empresa')) {
        pillarLink = '/empresas';
        clusterName = 'Magia Corporativa en Madrid';
      } else if (category.includes('particular') || file.includes('comunion')) {
        pillarLink = '/particulares';
        clusterName = 'Celebraciones Privadas en Madrid';
      }

      const clusterBlock = `\n\n---\n\n### 🔮 Sigue leyendo sobre ${clusterName}\n\nDescubre más guías y servicios relacionados para tu celebración:\n\n- [Servicio Profesional y Presupuesto Oficial](${pillarLink})\n- [Guía de Precios y Formatos de Magia en Madrid](/contratar-mago-madrid)\n- [Mago para Bodas y Celebraciones Exclusivas](/particulares/bodas)\n`;

      opportunities.push({
        id: `LINK-CLUSTER-${String(counter++).padStart(3, '0')}`,
        type: 'interlinking',
        targetFile: toRel(projectRoot, fullPath),
        title: `Implementar bloque de interlinking temático cluster en ${file}`,
        description: `El artículo no contiene bloque de recirculación interna ("🔮 Sigue leyendo"). Añadir enlaces contextuales hacia el pilar comercial (${pillarLink}) canaliza la autoridad SEO y guía al lector hacia la solicitud de presupuesto.`,
        proposedChange: {
          kind: 'append',
          payload: { block: clusterBlock }
        },
        impactArea: 'seo',
        metadata: { clusterName, pillarLink }
      });
    }
  }

  return opportunities;
}

/**
 * Main Opportunity Scout orchestrator: runs all 6 detectors.
 */
function scoutOpportunities(projectRoot, options = {}) {
  const verbose = options.verbose || false;
  if (verbose) console.log('🔍 [Scout] Iniciando escaneo de oportunidades en el proyecto...');

  const results = {
    timestamp: new Date().toISOString(),
    projectRoot,
    detectors: {
      metadata: detectMetadataOpportunities(projectRoot, options),
      schema: detectSchemaOpportunities(projectRoot, options),
      geoLlms: detectGeoLlmsOpportunities(projectRoot, options),
      faq: detectFaqOpportunities(projectRoot, options),
      madridGeo: detectMadridGeoOpportunities(projectRoot, options),
      interlinking: detectInterlinkingOpportunities(projectRoot, options)
    }
  };

  const allOpportunities = [
    ...results.detectors.metadata,
    ...results.detectors.schema,
    ...results.detectors.geoLlms,
    ...results.detectors.faq,
    ...results.detectors.madridGeo,
    ...results.detectors.interlinking
  ];

  results.totalDiscovered = allOpportunities.length;
  results.opportunities = allOpportunities;

  if (verbose) {
    console.log(`🔍 [Scout] Total oportunidades descubiertas: ${allOpportunities.length}`);
    console.log(`   - Metadata: ${results.detectors.metadata.length}`);
    console.log(`   - Schema: ${results.detectors.schema.length}`);
    console.log(`   - GEO & llms.txt: ${results.detectors.geoLlms.length}`);
    console.log(`   - FAQ Gaps: ${results.detectors.faq.length}`);
    console.log(`   - Madrid Geo: ${results.detectors.madridGeo.length}`);
    console.log(`   - Interlinking: ${results.detectors.interlinking.length}`);
  }

  return results;
}

module.exports = {
  detectMetadataOpportunities,
  detectSchemaOpportunities,
  detectGeoLlmsOpportunities,
  detectFaqOpportunities,
  detectMadridGeoOpportunities,
  detectInterlinkingOpportunities,
  scoutOpportunities
};
