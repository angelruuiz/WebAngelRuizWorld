// Script para notificar a Bing, Bing Copilot y motores de IA mediante IndexNow (140 URLs dinámicas)
import https from 'https';
import fs from 'fs';
import path from 'path';

const HOST = 'angelruiz.world';
const KEY = '8c4e09f53e204c8ba71df2977759a1f2';
const KEY_LOCATION = `https://${HOST}/8c4e09f53e204c8ba71df2977759a1f2.txt`;

// 1. URLs Comerciales y Estáticas Principales
const staticRoutes = [
  '',
  '/mago-madrid',
  '/contratar-mago-madrid',
  '/particulares/bodas',
  '/empresas',
  '/empresas/mago-cenas-empresa-madrid',
  '/empresas/mago-conferenciante-madrid',
  '/empresas/mago-ferias-congresos-madrid',
  '/empresas/mago-team-building-madrid',
  '/empresas/mago-para-restaurantes-madrid',
  '/mago-close-up-madrid',
  '/mago-sierra-madrid',
  '/particulares/comuniones',
  '/particulares/eventos',
  '/particulares/fiestas-cumpleanos-madrid',
  '/particulares/despedidas-soltera-madrid',
  '/sobre-mi',
  '/galeria',
  '/valoraciones',
  '/dossier',
  '/contacto',
  '/blog',
];

// 2. URLs de Municipios Locales
const locationSlugs = [
  'galapagar',
  'las-rozas',
  'majadahonda',
  'pozuelo',
  'boadilla',
  'villalba',
  'torrelodones',
  'alcobendas',
  'alcorcon',
  'getafe',
  'leganes',
  'mostoles',
  'el-escorial',
  'las-matas',
];

const locationUrls = locationSlugs.map(slug => `https://${HOST}/mago-${slug}`);
const coreStaticUrls = staticRoutes.map(route => `https://${HOST}${route}`);

// 3. URLs Dinámicas del Blog (80 Artículos)
const blogDir = path.resolve(process.cwd(), 'content', 'blog');
let blogUrls = [];
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  blogUrls = blogFiles.map(file => {
    const slug = file.replace(/\.md$/, '');
    return `https://${HOST}/blog/${slug}`;
  });
}

// Consolidar todas las URLs sin duplicados
const allUrls = Array.from(new Set([...coreStaticUrls, ...locationUrls, ...blogUrls]));

const postData = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: allUrls,
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(postData),
  },
};

console.log(`🚀 Enviando ${allUrls.length} URLs al protocolo IndexNow (Bing / Microsoft Copilot / Perplexity)...`);

const req = https.request(options, (res) => {
  console.log(`Respuesta IndexNow: Status ${res.statusCode} (${res.statusMessage})`);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`✅ IndexNow completado con éxito: ${allUrls.length} URLs enviadas para indexación prioritaria.`);
    } else {
      console.log('Respuesta recibida:', data || '(sin cuerpo)');
    }
  });
});

req.on('error', (e) => {
  console.error('Error al conectar con IndexNow:', e.message);
});

req.write(postData);
req.end();
