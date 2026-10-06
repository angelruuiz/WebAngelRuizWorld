// Script para notificar a Bing, Bing Copilot y motores de IA mediante IndexNow
import https from 'https';

const HOST = 'angelruiz.world';
const KEY = '8c4e09f53e204c8ba71df2977759a1f2';
const KEY_LOCATION = `https://${HOST}/8c4e09f53e204c8ba71df2977759a1f2.txt`;

// Importar URLs principales
const coreUrls = [
  `https://${HOST}`,
  `https://${HOST}/mago-madrid`,
  `https://${HOST}/contratar-mago-madrid`,
  `https://${HOST}/particulares/bodas`,
  `https://${HOST}/empresas`,
  `https://${HOST}/mago-close-up-madrid`,
  `https://${HOST}/dossier`,
  `https://${HOST}/blog`,
  `https://${HOST}/valoraciones`,
  `https://${HOST}/sobre-mi`,
  `https://${HOST}/galeria`,
  `https://${HOST}/mago-sierra-madrid`,
  `https://${HOST}/particulares/comuniones`,
  `https://${HOST}/particulares/eventos`,
  `https://${HOST}/particulares/fiestas-cumpleanos-madrid`,
  `https://${HOST}/empresas/mago-cenas-empresa-madrid`,
  `https://${HOST}/empresas/mago-ferias-congresos-madrid`,
  `https://${HOST}/empresas/mago-team-building-madrid`,
  `https://${HOST}/empresas/mago-conferenciante-madrid`,
  `https://${HOST}/empresas/mago-para-restaurantes-madrid`,
  `https://${HOST}/blog/timing-animacion-boda-madrid-coctel-banquete`,
  `https://${HOST}/blog/restaurantes-para-cenas-de-empresa-madrid-con-espectaculo`,
  `https://${HOST}/blog/animacion-cena-gala-entrega-premios-madrid`,
  `https://${HOST}/blog/magia-coctel-networking-madrid-ferias-ifema`,
  `https://${HOST}/blog/animacion-coctel-boda-madrid-ideas`,
  `https://${HOST}/blog/guia-contratar-mago-madrid-2026`,
  `https://${HOST}/mago-torrelodones`,
  `https://${HOST}/mago-las-rozas`,
  `https://${HOST}/mago-majadahonda`,
  `https://${HOST}/mago-pozuelo`,
  `https://${HOST}/mago-boadilla`,
  `https://${HOST}/mago-alcobendas`,
];

const postData = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: coreUrls,
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

console.log(`Enviando ${coreUrls.length} URLs al protocolo IndexNow (Bing / Copilot / ChatGPT)...`);

const req = https.request(options, (res) => {
  console.log(`Respuesta IndexNow: Status ${res.statusCode} (${res.statusMessage})`);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('✅ IndexNow completado con éxito. Las URLs han sido enviadas para indexación prioritaria.');
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
