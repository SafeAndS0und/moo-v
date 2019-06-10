importScripts('/moo-v/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/moo-v/_nuxt/0404fd98e69cbfbd05f5.js",
    "revision": "1b8fce656a42557db8f3ccdce9de6180"
  },
  {
    "url": "/moo-v/_nuxt/42cc4fd4d7eb4b34fd15.js",
    "revision": "32da5ea5ceee9c31d275557dff9bb3f9"
  },
  {
    "url": "/moo-v/_nuxt/4b99716dc5d125f7c3b8.js",
    "revision": "c0189bf2064e6f6f619d0b8fc4cefd46"
  },
  {
    "url": "/moo-v/_nuxt/635858f8a3919dceb9a2.js",
    "revision": "5ebbc2a81ff0ade9e7cf9d5acd577aca"
  },
  {
    "url": "/moo-v/_nuxt/99b482bad00192e5cc1a.js",
    "revision": "1974dbbd08fc8aa0711f230b130a8282"
  },
  {
    "url": "/moo-v/_nuxt/d5d00a270002264a5f49.js",
    "revision": "05b5f53c2d6bda2b5ec8f802ba62cc3e"
  }
], {
  "cacheId": "moo-v",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/moo-v/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/moo-v/.*'), workbox.strategies.networkFirst({}), 'GET')
