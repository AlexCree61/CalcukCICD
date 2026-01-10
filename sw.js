self.addEventListener('fetch', (event) => {
    // Просто проксируем запросы, этого достаточно для установки PWA
    event.respondWith(fetch(event.request));
});
