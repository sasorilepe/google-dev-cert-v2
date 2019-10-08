self.addEventListener('install', event => {
  console.log('Installing');
  self.skipWaiting();
});

self.addEventListener('activate', event =>{
  console.log('Activating');
});

self.addEventListener('fetch', event =>{
  console.log('Fetching', event.request.url);
});
