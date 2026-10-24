// Ao publicar uma nova versão, aumente o número abaixo.
const CACHE = 'celebrar-v31';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './pdfjs/pdf.min.mjs', './pdfjs/pdf.worker.min.mjs'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{})); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
// Rede primeiro, sem cache do navegador (pega sempre a versão nova); sem internet, usa a cópia guardada.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  const nav = e.request.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html');
  e.respondWith(
    fetch(nav ? new Request(e.request.url, {cache: 'no-store'}) : e.request).then(r => {
      if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(nav ? './index.html' : e.request, cp)); }
      return r;
    }).catch(() => caches.match(nav ? './index.html' : e.request).then(r => r || caches.match('./index.html')))
  );
});
