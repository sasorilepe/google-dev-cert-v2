window.addEventListener('load', () => {
  navigator.serviceWorker.register('service-worker.js',{
    scope: '/example'
  })
  .then(registration => {
    console.log('SW registered with scope:', registration.scope);
  })
  .catch(err => {
    console.error('Registration failed:', err);
  });
});
