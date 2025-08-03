const CACHE_NAME = 'vtools-cache-v1';
const urlsToCache = [
  '/index.html',
  '/styles/main.css',
  '/scripts/app.js',
  '/icons/VTools.png',
  '/icons/VTools512.png',
];

// 설치 단계: 캐시 초기화
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 활성화 단계: 이전 캐시 정리
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// 요청 가로채기: 캐시 우선, 없으면 네트워크
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});