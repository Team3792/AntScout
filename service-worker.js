// List the files to cache
const cacheName = 'cache-v1';
const precacheResources = [
  '/AntScout/',
  '/AntScout/index.html',
  '/AntScout/index.css',
  '/AntScout/index.js',
  '/AntScout/jquery.min.js',
  '/AntScout/p5.js',
  '/AntScout/p5.sound.min.js',
  '/AntScout/qrcode.js',
  '/AntScout/ClickableObject.js',
  '/AntScout/ChargeStationButton.js',
  '/AntScout/StartButton.js',
  '/AntScout/StartTeleOpButton.js',
  '/AntScout/FinishedScreen.js',
  '/AntScout/Clock.js',
  '/AntScout/FieldImage.png',
  '/AntScout/carpet.jfif',
  '/AntScout/high.png',
  '/AntScout/mid.png',
  '/AntScout/docked.png',
  '/AntScout/engaged.png',
  '/AntScout/ground.png',
  '/AntScout/scout.html',
  '/AntScout/sketch.js',
  '/AntScout/sketch2.js',
  '/AntScout/daisyui.js',
  '/AntScout/daisyui.css',
  '/AntScout/jsoncrush.min.js',
  '/AntScout/service-worker.js',
  '/AntScout/BackspaceButton.js',
  '/AntScout/x.png',
  '/AntScout/auto-select.html'
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