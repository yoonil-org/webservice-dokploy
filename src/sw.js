const CACHE_NAME = 'computeportal-v1';
const urlsToCache = [
  '/',
  '/about',
  '/contact',
  '/styles/main.css',
  '/scripts/main.js',
  '/logo/PNG/Compute%20portal%20-%20Brand%20Guidelines_Wordmark%20-%20black.png',
  '/logo/PNG/Compute%20portal%20-%20Brand%20Guidelines_Full%20-%20Extra%20space%20-%20Green.png',
  '/logo/PNG/Compute%20portal%20-%20Brand%20Guidelines_Logomark%20-%20Extra%20Space%20-%20colored.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 