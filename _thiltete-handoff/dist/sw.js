/**
 * Thiltete Tank Game — service worker.
 *
 * Strategy, deliberately split by request type:
 *
 *   Navigations (the HTML page): NETWORK-FIRST.
 *     The game ships as one big HTML file, so a stale cached copy means the player
 *     is stuck on an old build forever. Always try the network; fall back to cache
 *     only when genuinely offline. This is the single most important rule here.
 *
 *   Everything else (icons, manifest): CACHE-FIRST.
 *     Small, static, and versioned by CACHE_NAME — serve instantly.
 *
 * Bumping CACHE_NAME on release evicts the previous generation via the activate
 * handler below.
 */

const CACHE_NAME = 'thiltete-tank-v1';

const PRECACHE = [
  './',
  './ThilteteTankGame.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // Individual failures must not abort the whole install (e.g. an icon missing
      // on a partial deploy), so each entry is added independently.
      .then((cache) => Promise.allSettled(PRECACHE.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch cross-origin

  const isNavigation =
    req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isNavigation) {
    // Network-first: the player always gets the freshest build when online.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || caches.match('./ThilteteTankGame.html'))
        )
    );
    return;
  }

  // Cache-first for static assets.
  event.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      });
    })
  );
});
