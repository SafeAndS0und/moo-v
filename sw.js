importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0404fd98e69cbfbd05f5.js",
    "revision": "1b8fce656a42557db8f3ccdce9de6180"
  },
  {
    "url": "/_nuxt/42a912a522a5513c7369.js",
    "revision": "a3a0e7c9574760d33fb5fdcde7c334a5"
  },
  {
    "url": "/_nuxt/4b99716dc5d125f7c3b8.js",
    "revision": "c0189bf2064e6f6f619d0b8fc4cefd46"
  },
  {
    "url": "/_nuxt/635858f8a3919dceb9a2.js",
    "revision": "5ebbc2a81ff0ade9e7cf9d5acd577aca"
  },
  {
    "url": "/_nuxt/d5829ec01b0ab115e762.js",
    "revision": "d2148c28fc64276a19f87a961efe333a"
  },
  {
    "url": "/_nuxt/d70f821fc5f086b95637.js",
    "revision": "0fb219af30a25343ee0f9a0596bbcb19"
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
