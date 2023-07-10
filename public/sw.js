self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("your-cache-name").then(cache => {
      return cache.addAll(["/index.html", "/static/css/main.css", "/static/js/main.js"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
