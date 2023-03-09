// List the files to cache
const cacheName = 'cache-v1';
const precacheResources = [
  'index.html',
  'index.css',
  'index.js',
  'jquery.min.js',
  'p5.js',
  'p5.sound.min.js',
  'qrcode.js',
  'ClickableObject.js',
  'ChargeStationButton.js',
  'StartButton.js',
  'StartTeleOpButton.js',
  'FinishedScreen.js',
  'Clock.js',
  'FieldImage.png',
  'carpet.jfif',
  'high.png',
  'mid.png',
  'docked.png',
  'engaged.png',
  'ground.png',
  'scout.html',
  'sketch.js',
  'sketch2.js',
  'daisyui.js',
  'daisyui.css',
  'jsoncrush.min.js',
  'service-worker.js',
  'BackspaceButton.js',
  'FieldImage.png',
  'x.png',
  'auto-select.html'
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});