const CACHE_NAME = 'escombrera-v18';

const ASSETS_TO_CACHE = [
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/components.js',
  './js/events.js',
  './js/mvp.js',
  './js/game.js',
  './js/easter.js',
  './assets/logo.png',
  './assets/logo-hd.png',
  './assets/tonin.png',
  './assets/tonina.png',
  './assets/estatutos-la-escombrera.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const accept = event.request.headers.get('accept') || '';
  if (event.request.mode === 'navigate' || accept.includes('text/html')) {
    // Network first for HTML
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache first for static assets
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
});
