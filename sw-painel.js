const CACHE_NAME = 'wiggers-bjj-v1';
const assets = [
  '/',
  '/painel.html',
  '/historia.html',
  '/alicerce.html',
  '/manifest-painel.json',
  '/wiggers.192.png',
  '/wiggers.512.png'
];

// Instalação do Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Resposta do Cache (Faz o app carregar instantâneo)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
