const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, '..', 'content', 'blog');

// Define clusters
const clusters = {
  bodas: [
    'mago-bodas-madrid-entretenimiento.md',
    'mago-para-bodas-madrid-faq.md',
    'cuanto-cuesta-mago-boda-madrid.md',
    'mejores-fincas-bodas-madrid-magia.md',
    'ideas-originales-entretenimiento-bodas-madrid.md'
  ],
  empresas: [
    'mago-eventos-empresa-madrid-guia.md',
    'mejor-mago-empresas-madrid.md',
    'magia-tecnologia-eventos-empresa-espana.md',
    'team-building-madrid-actividades-empresas.md',
    'ideas-cenas-empresa-madrid-originales.md'
  ],
  particulares: [
    'mago-comuniones-madrid-guia.md',
    'mago-restaurantes-madrid.md'
  ],
  precios: [
    'cuanto-cuesta-mago-madrid-precios.md',
    'como-elegir-mago-evento-madrid-errores.md',
    'magia-de-cerca-vs-escenario.md',
    'magia-de-cerca-madrid-eventos-bodas.md'
  ]
};

// Titles and Excerpts updates (minor tweaks to ensure SEO power and lengths)
const seoTweaks = {
  // Bodas
  'mago-bodas-madrid-entretenimiento.md': { 
    title: 'Mago para Bodas en Madrid [2026]: Magia y Entretenimiento Inolvidable',
    tags: ['Bodas', 'Madrid', 'Magia de Cerca'] 
  },
  'mago-para-bodas-madrid-faq.md': { 
    tags: ['Bodas', 'Madrid', 'FAQ'] 
  },
  'cuanto-cuesta-mago-boda-madrid.md': { 
    title: '¿Cuánto Cuesta un Mago para Bodas en Madrid? [Precios 2026]',
    tags: ['Bodas', 'Madrid', 'Precios'] 
  },
  'mejores-fincas-bodas-madrid-magia.md': { 
    tags: ['Bodas', 'Madrid', 'Fincas'] 
  },
  'ideas-originales-entretenimiento-bodas-madrid.md': { 
    title: 'Ideas Originales de Entretenimiento para Bodas en Madrid',
    tags: ['Bodas', 'Madrid', 'Ideas'] 
  },
  // Empresas
  'mago-eventos-empresa-madrid-guia.md': { 
    title: 'Mago para Eventos de Empresa en Madrid: Guía Corporativa 2026',
    tags: ['Empresas', 'Madrid', 'Eventos Corporativos'] 
  },
  'mejor-mago-empresas-madrid.md': { 
    title: '¿Cuál es el Mejor Mago para Empresas en Madrid? Claves para Elegir',
    tags: ['Empresas', 'Madrid', 'Eventos Corporativos'] 
  },
  'magia-tecnologia-eventos-empresa-espana.md': { 
    title: 'Magia y Tecnología para Eventos de Empresa en España y Madrid',
    tags: ['Empresas', 'Tecnología', 'Innovación'] 
  },
  'team-building-madrid-actividades-empresas.md': { 
    title: 'Actividades de Team Building en Madrid: La Magia como Herramienta',
    tags: ['Empresas', 'Madrid', 'Team Building'] 
  },
  'team-building-magia-madrid.md': { 
    title: 'Magia para Team Building en Madrid: Dinámicas para Equipos',
    tags: ['Empresas', 'Madrid', 'Team Building'] 
  },
  'cenas-empresa-originales-madrid.md': { 
    title: 'Cenas de Empresa Originales en Madrid: Sorprende con Magia',
    tags: ['Empresas', 'Madrid', 'Cenas'] 
  },
  'ideas-cenas-empresa-madrid-originales.md': { 
    title: 'Ideas Originales para Cenas de Empresa en Madrid [Guía 2026]',
    tags: ['Empresas', 'Madrid', 'Cenas', 'Ideas'] 
  },
  // Particulares & Comuniones
  'mago-comuniones-madrid.md': { 
    title: 'Mago para Comuniones en Madrid: Animación Infantil y Familiar',
    tags: ['Comuniones', 'Madrid', 'Magia Infantil'] 
  },
  'mago-comuniones-madrid-guia.md': { 
    title: 'Guía Completa para Contratar un Mago para Comuniones en Madrid',
    tags: ['Comuniones', 'Madrid', 'Guía'] 
  },
  'mago-restaurantes-madrid.md': { 
    title: 'Mago para Restaurantes en Madrid: Fideliza Clientes con Magia',
    tags: ['Restaurantes', 'Madrid', 'Empresas'] 
  },
  // Formatos & Precios
  'cuanto-cuesta-mago-madrid-precios.md': { 
    title: '¿Cuánto Cuesta un Mago en Madrid? [Tarifas y Precios 2026]',
    tags: ['Precios', 'Madrid', 'Contratación'] 
  },
  'como-elegir-mago-evento-madrid-errores.md': { 
    title: 'Cómo Elegir Mago para tu Evento en Madrid (Y Errores a Evitar)',
    tags: ['Guía', 'Madrid', 'Contratación'] 
  },
  'magia-de-cerca-vs-escenario.md': { 
    title: 'Magia de Cerca vs Magia de Escenario: ¿Qué formato elegir para tu evento?',
    tags: ['Formatos', 'Magia de Cerca', 'Escenario'] 
  },
  'magia-de-cerca-madrid-eventos-bodas.md': { 
    title: 'Magia de Cerca en Madrid para Eventos y Bodas Inolvidables',
    tags: ['Magia de Cerca', 'Madrid', 'Eventos', 'Bodas'] 
  }
};

async function processCluster(clusterName, files) {
  for (const filename of files) {
    const filePath = path.join(contentDir, filename);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filename}`);
      continue;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(fileContent);

    // Apply SEO tweaks to frontmatter
    const tweaks = seoTweaks[filename];
    if (tweaks) {
      if (tweaks.title) parsed.data.title = tweaks.title;
      if (tweaks.tags) parsed.data.tags = tweaks.tags;
      if (!parsed.data.category) {
        parsed.data.category = clusterName === 'empresas' ? 'Empresas' :
                               clusterName === 'bodas' ? 'Bodas' :
                               clusterName === 'particulares' ? 'Particulares' : 'Guía';
      }
    }

    // Generate internal links
    const relatedFiles = files.filter(f => f !== filename);
    // Grab titles for related files to build links
    const links = relatedFiles.map(rf => {
      const rfPath = path.join(contentDir, rf);
      const rfContent = fs.readFileSync(rfPath, 'utf8');
      const rfParsed = matter(rfContent);
      const url = `/blog/${rf.replace('.md', '')}`;
      return `- [${rfParsed.data.title}](${url})`;
    });

    let newContent = parsed.content;
    
    // Check if the "Sigue leyendo" block already exists to avoid duplicates
    const sigueLeyendoRegex = /### 🔮 Sigue leyendo[\s\S]*$/;
    if (sigueLeyendoRegex.test(newContent)) {
      // replace it
      newContent = newContent.replace(sigueLeyendoRegex, '');
    }

    // Append internal links
    const linkBlock = `\n\n---\n\n### 🔮 Sigue leyendo sobre ${clusterName}\n\nSi te ha parecido interesante, quizás te interese seguir leyendo estos artículos relacionados:\n\n${links.join('\n')}\n`;
    newContent += linkBlock;

    // Stringify and write back
    const output = matter.stringify(newContent, parsed.data);
    fs.writeFileSync(filePath, output);
    console.log(`Updated: ${filename}`);
  }
}

async function main() {
  for (const [clusterName, files] of Object.entries(clusters)) {
    console.log(`\nProcessing cluster: ${clusterName}...`);
    await processCluster(clusterName, files);
  }
  console.log('\n✅ All clusters processed successfully.');
}

main().catch(console.error);
