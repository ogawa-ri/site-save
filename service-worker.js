// 開発用 Service Worker（更新最優先）

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// ★ fetch ではキャッシュしない
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
