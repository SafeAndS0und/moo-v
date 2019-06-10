importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0404fd98e69cbfbd05f5.js",
    "revision": "1b8fce656a42557db8f3ccdce9de6180"
  },
  {
    "url": "/_nuxt/227b284c58e0c9db95ce.js",
    "revision": "011045766be1dd145f2368c27ab776d4"
  },
  {
    "url": "/_nuxt/4b99716dc5d125f7c3b8.js",
    "revision": "c0189bf2064e6f6f619d0b8fc4cefd46"
  },
  {
    "url": "/_nuxt/593b9169dc1dd82bdae3.js",
    "revision": "02e4a84fa32ec8c00f05857476c6f540"
  },
  {
    "url": "/_nuxt/635858f8a3919dceb9a2.js",
    "revision": "5ebbc2a81ff0ade9e7cf9d5acd577aca"
  },
  {
    "url": "/_nuxt/d5d00a270002264a5f49.js",
    "revision": "05b5f53c2d6bda2b5ec8f802ba62cc3e"
  }
], {
  "cacheId": "moo-v",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
