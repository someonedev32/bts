self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('wallet-store').then(cache => {
      return cache.addAll(['index.html', 'manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

setInterval(updateBalance, 60000); // Update balance every minute