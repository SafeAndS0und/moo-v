importScripts('/moo-v/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/moo-v/_nuxt/0404fd98e69cbfbd05f5.js",
    "revision": "1b8fce656a42557db8f3ccdce9de6180"
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
    "url": "/moo-v/_nuxt/6741c4080a0ff07c2023.js",
    "revision": "64d1a33b8f1e73d273b10446d3f7640c"
  },
  {
    "url": "/moo-v/_nuxt/b2171f6e70caa8c60aba.js",
    "revision": "1d03232741f29899184f500098204afe"
  },
  {
    "url": "/moo-v/_nuxt/e224683c5bdc4d5fff52.js",
    "revision": "b78ba03909074ee8b524f904d1300dc3"
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
