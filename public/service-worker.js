// public/service-worker.js

//Once i used the Vite bundler i needed to choose the pwa

if (typeof importScripts === 'function') {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
    );
  
    if (workbox) {
      console.log(`Yay! Workbox is loaded 🎉`);
  
      // Precache the assets
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
  
      // Cache API responses
      workbox.routing.registerRoute(
        new RegExp('/api/.*'),
        new workbox.strategies.NetworkFirst({
          cacheName: 'api-cache',
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxEntries: 50,
              maxAgeSeconds: 5 * 60, // Cache for 5 minutes
            }),
          ],
        })
      );
  
      // Cache images
      workbox.routing.registerRoute(
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        new workbox.strategies.CacheFirst({
          cacheName: 'image-cache',
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
            }),
          ],
        })
      );
  
      // Cache other static resources
      workbox.routing.registerRoute(
        new RegExp('.*'),
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: 'static-resources',
        })
      );
    } else {
      console.log(`Boo! Workbox didn't load 😬`);
    }
  }
  