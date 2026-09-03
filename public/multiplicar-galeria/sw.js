const CACHE_NAME = 'fotos-magic-v8';
const APP_SHELL = [
    '/multiplicar-galeria/',
    '/multiplicar-galeria/index.html',
    '/multiplicar-galeria/styles.css',
    '/multiplicar-galeria/app.js',
    '/multiplicar-galeria/manifest.json',
    '/multiplicar-galeria/tab_capsule.png',
    '/multiplicar-galeria/tab_search.png',
    '/multiplicar-galeria/foto buena.jpeg',
    '/multiplicar-galeria/foto%20buena.jpeg',
    '/multiplicar-galeria/foto galeria.jpeg',
    '/multiplicar-galeria/foto%20galeria.jpeg',
    '/multiplicar-galeria/foto_original_ultima.jpeg',
    '/multiplicar-galeria/icon-180.png',
    '/multiplicar-galeria/icon-192.png',
    '/multiplicar-galeria/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Cachear cada asset de forma independiente para tolerancia a fallos
            await Promise.allSettled(
                APP_SHELL.map(url => 
                    cache.add(url).catch(err => {
                        console.warn('[SW] Offline cache item note:', url, err.message);
                    })
                )
            );
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            );
        }).then(() => self.clients.claim())
    );
});

// Estrategia Cache-First: Si no hay cobertura o esta offline, responde en 0 ms desde el almacenamiento local
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Servir inmediatamente desde cache local (0 ms de espera)
                // Y si hay red disponible, actualizar en segundo plano silenciosamente
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
                    }
                }).catch(() => {});
                return cachedResponse;
            }

            // Si no estaba en cache, buscar en red y guardar para proximas veces
            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
                }
                return networkResponse;
            }).catch(() => {
                // Si navega a la URL principal sin conexion, devolver index.html
                if (event.request.mode === 'navigate') {
                    return caches.match('/multiplicar-galeria/index.html') || caches.match('/multiplicar-galeria/');
                }
                return new Response('Offline', { status: 503 });
            });
        })
    );
});
