const CACHE_NAME = 'ceip-capitulaciones-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './icon-16.png',
  './icon-32.png',
  './icon-48.png',
  './icon-72.png',
  './icon-96.png',
  './icon-120.png',
  './icon-144.png',
  './icon-152.png',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Cache abierto y actualizado');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Eliminando cache antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  console.log('🔄 Service Worker activado correctamente');
});

// Interceptar peticiones
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // ⚠️ No interferir con recursos de otros dominios (por ejemplo, los juegos externos)
  if (url.origin !== self.location.origin) {
    return; // Dejar que el navegador gestione la petición directamente
  }

  // Manejar solo los archivos del mismo dominio
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        // Guardar en caché las respuestas válidas
        if (fetchResponse && fetchResponse.status === 200 && fetchResponse.type === 'basic') {
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        }
        return fetchResponse;
      }).catch(() => caches.match('./index.html')); // Offline fallback
    })
  );
});
