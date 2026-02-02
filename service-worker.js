const CACHE_NAME = "site-save-v2"; // ★ バージョン変更重要
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js"
];

// インストール時
self.addEventListener("install", event => {
  self.skipWaiting(); // ★ 即有効化
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 有効化時
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // ★ 古いキャッシュ削除
          }
        })
      );
    })
  );
  self.clients.claim(); // ★ 即反映
});

// 通信時
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
