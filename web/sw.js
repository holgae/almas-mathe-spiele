const CACHE='alma-mathe-v1';const ASSETS=['./','index.html','spiele.json','spiele/bis-20.html','spiele/bis-100.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
async function notify(){const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});clients.forEach(c=>c.postMessage('OFFLINE_READY'))}
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('alma-mathe-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()).then(notify))});
self.addEventListener('message',e=>{if(e.data==='CHECK_READY')e.waitUntil(notify())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)))});
