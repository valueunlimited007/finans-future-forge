// Service Worker for Finansguiden Casino PWA
const CACHE_NAME = 'finansguiden-casino-v1.0.1';
const OFFLINE_URL = '/offline.html';

// Essential files to cache for offline functionality
const ESSENTIAL_CACHE_FILES = [
  '/',
  '/offline.html',
  '/finansguiden-logo-v2.png',
  '/manifest.json'
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first', 
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache essential files
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching essential files');
        return cache.addAll(ESSENTIAL_CACHE_FILES);
      })
      .then(() => {
        console.log('Essential files cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Failed to cache essential files:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Old caches cleaned up');
        return self.clients.claim();
      })
  );
});

// Fetch event - handle network requests with caching strategies
self.addEventListener('fetch', event => {
  // Skip non-GET requests and external URLs
  if (event.request.method !== 'GET' || 
      !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(event.request.url);
  
  // Handle different types of requests
  if (url.pathname === '/') {
    // Cache homepage with network-first strategy
    event.respondWith(handleNetworkFirst(event.request));
  } else if (url.pathname.startsWith('/se/')) {
    // Casino pages - stale while revalidate for fresh content
    event.respondWith(handleStaleWhileRevalidate(event.request));
  } else if (url.pathname.startsWith('/adtraction-logos/') ||
             url.pathname.startsWith('/images/')) {
    // Images - cache first for performance
    event.respondWith(handleCacheFirst(event.request));
  } else if (url.pathname.endsWith('.css') || 
             url.pathname.endsWith('.js') ||
             url.pathname.endsWith('.woff2')) {
    // Static assets - cache first
    event.respondWith(handleCacheFirst(event.request));
  } else {
    // Default to network first with offline fallback
    event.respondWith(handleNetworkFirst(event.request));
  }
});

// Cache-first strategy (good for static assets)
async function handleCacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Update cache in background
    fetch(request).then(response => {
      if (response.status === 200) {
        cache.put(request, response.clone());
      }
    }).catch(() => {}); // Ignore network errors
    
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache-first strategy failed:', error);
    return new Response('Offline - Resource not available', { 
      status: 503,
      statusText: 'Service Unavailable' 
    });
  }
}

// Network-first strategy (good for dynamic content)
async function handleNetworkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network request failed, trying cache:', error);
    
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await cache.match(OFFLINE_URL);
      if (offlineResponse) {
        return offlineResponse;
      }
    }
    
    return new Response('Offline - No cached version available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Stale-while-revalidate strategy (good for frequently updated content)
async function handleStaleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Start network request (don't await)
  const networkResponsePromise = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Otherwise wait for network
  const networkResponse = await networkResponsePromise;
  if (networkResponse) {
    return networkResponse;
  }
  
  return new Response('Offline - Content not available', {
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// Handle push notifications
self.addEventListener('push', event => {
  console.log('Push notification received:', event);
  
  const defaultOptions = {
    badge: '/finansguiden-logo-v2.png',
    icon: '/finansguiden-logo-v2.png',
    dir: 'ltr',
    lang: 'sv-SE',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'Visa',
        icon: '/finansguiden-logo-v2.png'
      },
      {
        action: 'dismiss',
        title: 'Stäng'
      }
    ]
  };

  let notificationData = {
    title: 'Finansguiden Casino',
    body: 'Nya svenska casinon att upptäcka!',
    ...defaultOptions
  };

  if (event.data) {
    try {
      const pushData = event.data.json();
      notificationData = { ...notificationData, ...pushData };
    } catch (error) {
      console.error('Error parsing push data:', error);
    }
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if (event.action === 'dismiss') {
    return;
  }
  
  // Default action or 'view' action
  const urlToOpen = event.notification.data?.url || '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Check if there's already a window open
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.navigate(urlToOpen);
            return client.focus();
          }
        }
        
        // Open new window
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'casino-data-sync') {
    event.waitUntil(syncCasinoData());
  }
});

// Sync casino data when back online
async function syncCasinoData() {
  try {
    // Sync any pending casino interactions or analytics
    const pendingData = await getFromIndexedDB('pending-sync');
    
    if (pendingData && pendingData.length > 0) {
      for (const data of pendingData) {
        await fetch(data.endpoint, {
          method: data.method || 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data.payload)
        });
      }
      
      // Clear pending data after successful sync
      await clearFromIndexedDB('pending-sync');
      console.log('Successfully synced offline data');
    }
  } catch (error) {
    console.error('Failed to sync casino data:', error);
  }
}

// IndexedDB helpers for offline data storage
async function getFromIndexedDB(storeName) {
  // Simplified - implement proper IndexedDB handling
  return [];
}

async function clearFromIndexedDB(storeName) {
  // Simplified - implement proper IndexedDB handling
  return true;
}

// Periodic background sync for fresh casino data
self.addEventListener('periodicsync', event => {
  if (event.tag === 'casino-update') {
    event.waitUntil(updateCasinoCache());
  }
});

async function updateCasinoCache() {
  try {
    const cache = await caches.open(CACHE_NAME);
    
    // Update casino data in background
    const casinoPages = [
      '/',
      '/se/casinon',
      '/se/casinon-med-bankid',
      '/se/pay-n-play'
    ];
    
    for (const page of casinoPages) {
      try {
        const response = await fetch(page);
        if (response.ok) {
          await cache.put(page, response);
        }
      } catch (error) {
        console.log(`Failed to update cache for ${page}:`, error);
      }
    }
    
    console.log('Casino cache updated successfully');
  } catch (error) {
    console.error('Failed to update casino cache:', error);
  }
}
