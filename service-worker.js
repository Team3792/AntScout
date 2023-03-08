// List the files to cache
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
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

// Install the Service Worker and cache files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch cached files when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached response if found, otherwise fetch from network
        return response || fetch(event.request);
      })
  );
});
