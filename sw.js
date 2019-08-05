importScripts('/moo-v/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/moo-v/_nuxt/0404fd98e69cbfbd05f5.js",
    "revision": "1b8fce656a42557db8f3ccdce9de6180"
  },
  {
    "url": "/moo-v/_nuxt/06b058fd6c732657da75.js",
    "revision": "d185c74c7b37ef49c1737a3aaeb3c585"
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
    "url": "/moo-v/_nuxt/791033e01bc3cdf14df6.js",
    "revision": "8e876d610894be15f5622d239dc11616"
  },
  {
    "url": "/moo-v/_nuxt/a342dd060c4eb1f6c39d.js",
    "revision": "a529d0fe5984c656ae83b2d490d02523"
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
