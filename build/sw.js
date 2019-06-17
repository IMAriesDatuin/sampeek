/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-72x72.png",
    "revision": "b749436bdcb90e8927d9751cea7ad497"
  },
  {
    "url": "android-chrome-72x72.webp",
    "revision": "18a2eecd71927a6ebe63ca1df82b6364"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "d65fd5060baf3439503d93e2984cf3ba"
  },
  {
    "url": "apple-touch-icon.webp",
    "revision": "bee26be52e75d19032515c200a144694"
  },
  {
    "url": "assets/backgrounds/noise.png",
    "revision": "2eb88572cd26ea42606923e50e615306"
  },
  {
    "url": "assets/backgrounds/noise.webp",
    "revision": "b60b7af74ff2fff1933185847591cef0"
  },
  {
    "url": "assets/backgrounds/pattern-floral.webp",
    "revision": "6a2bb79e5175139054e4d735a036ede6"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/blank.svg",
    "revision": "a618f05d0e890f40750109f67a2dcb7c"
  },
  {
    "url": "assets/displacement/map.jpg",
    "revision": "45f3e9b576642cf958503eec6508bff1"
  },
  {
    "url": "assets/displacement/map.webp",
    "revision": "24a69d7f44de62d07afb24037f38349c"
  },
  {
    "url": "assets/error-static.gif",
    "revision": "e49fc1bd18b966580f4c6d0486adf97b"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon.png",
    "revision": "8484f36646ce9b9cd2bf3f992100c313"
  },
  {
    "url": "assets/icon.webp",
    "revision": "80f83b7cf46ba374691f396524ab07a4"
  },
  {
    "url": "assets/icons/cover.png",
    "revision": "b319bcbf74f93f79f15c376e562864e7"
  },
  {
    "url": "assets/icons/cover.webp",
    "revision": "bd6ee1cf82234fe7034704fe4e0b5ca2"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "8484f36646ce9b9cd2bf3f992100c313"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "80f83b7cf46ba374691f396524ab07a4"
  },
  {
    "url": "assets/logos/american-dental-association.svg",
    "revision": "56f71fc5bfb0eae43d76c530eb320934"
  },
  {
    "url": "assets/logos/american-medical-association.svg",
    "revision": "1ae87f9fe7c5047e97221859cfa13902"
  },
  {
    "url": "assets/logos/american-society-for-dematologic-surgery.svg",
    "revision": "651fc51bf53b1c7bff216be2136ff915"
  },
  {
    "url": "assets/logos/american-society-of-plastic-surgeons.svg",
    "revision": "0d13e6268996071aef684b8a6800681c"
  },
  {
    "url": "assets/logos/member-of-the-american-society-for-aesthetic-plastic-surgery.svg",
    "revision": "c8f2745ea32bb2d38826ac90059245bf"
  },
  {
    "url": "assets/logos/the-american-board-of-venous-and-lymphatic-medicine.svg",
    "revision": "6f327decde1a287287aca37a8e792665"
  },
  {
    "url": "assets/placeholder/incredible-photo-01.jpg",
    "revision": "f17d0baca5a593a4e62a8ac42c0ef78a"
  },
  {
    "url": "assets/placeholder/incredible-photo-01.webp",
    "revision": "7ce8fafc4ba5995d057c32aa0f9846d0"
  },
  {
    "url": "assets/placeholder/incredible-photo-02.jpg",
    "revision": "354f3191ccb2c46024e99b5248c99e3d"
  },
  {
    "url": "assets/placeholder/incredible-photo-02.webp",
    "revision": "d584b1fbb900eeb9de4fb6c52455c9b6"
  },
  {
    "url": "assets/placeholder/incredible-photo-03.webp",
    "revision": "641d39cb99311428e0f915b07894e3d1"
  },
  {
    "url": "assets/placeholder/incredible-photo-04.jpg",
    "revision": "7e0edefeddc23812dff25adbf74a5c97"
  },
  {
    "url": "assets/placeholder/incredible-photo-04.webp",
    "revision": "0268556dbdf9afb61d50995c4507157c"
  },
  {
    "url": "assets/placeholder/incredible-photo-05.webp",
    "revision": "6105fc9ad809eb3412948e73fb5b4b01"
  },
  {
    "url": "assets/sounds/ambience.ogg",
    "revision": "8e76e4b5440d0fcc3b82e32beda6f014"
  },
  {
    "url": "error.html",
    "revision": "2d282d166358ef92ebb1c9fc4d662580"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "c3cf877788cbcf7b4189870ed47b225b"
  },
  {
    "url": "favicon-16x16.webp",
    "revision": "91f0f2f2d879e379e3a9944e510290b6"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "344bc9b3a868e673904cab29488d66cc"
  },
  {
    "url": "favicon-32x32.webp",
    "revision": "81ab3de8e558372b163ba6dfd46cb7bc"
  },
  {
    "url": "index.html",
    "revision": "1a0c9ab9dd5e2979275940db48e5b42c"
  },
  {
    "url": "legal.html",
    "revision": "8f24e520f06d7c64ce84ce8a7c68debf"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "415a794415f6c73ddde2c22aa3a10e42"
  },
  {
    "url": "mstile-150x150.webp",
    "revision": "dc62fdaadc771f6a196755791e4b897c"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "3831bb2acc32631d06d778f08cd82323"
  },
  {
    "url": "mstile-310x150.webp",
    "revision": "5e2e8f061d12e0438c808380c0fe5d32"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "7c90a72e25b13b9075dee433628de3e7"
  },
  {
    "url": "mstile-70x70.webp",
    "revision": "d9e76c99175491e5fce3a9b423fb17f1"
  },
  {
    "url": "procedures.html",
    "revision": "bf7fd2c8e103760f30189adc556ca670"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "322cb3db847545be40024dce44ef7206"
  },
  {
    "url": "sample.html",
    "revision": "c4e24a5307afb627424a60104a17def5"
  },
  {
    "url": "scripts/a.ba0d5f6e21.vendors.js",
    "revision": "c08196ae58fb85c0caae92942989e9cc"
  },
  {
    "url": "scripts/app.e1d916bcee.css",
    "revision": "fc517a18bcd24880c972ddc5c2a7953e"
  },
  {
    "url": "scripts/b.f7b9cc2e86.app.js",
    "revision": "71b4b59e869650ebaeddcb48ea490fb3"
  },
  {
    "url": "template2.html",
    "revision": "957148f8804b648c9f557bf43bdeb0d6"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "72721167aea128f7ddac301c15dab835"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "f77645622015337d638b8a3d6266fe43"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "29e1f75381d3efde65c48168ebe5c403"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "fb481cb3c3d44b2d16d38e93ef118f9a"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "68c177c286c34e1b7b975807dd5d9ed0"
  },
  {
    "url": "webfonts/fa-light-300.eot",
    "revision": "a06baf702fb4e2a21830fa7dfa71c0dc"
  },
  {
    "url": "webfonts/fa-light-300.svg",
    "revision": "9969a9da0ab8636ad1a428b3838757d4"
  },
  {
    "url": "webfonts/fa-light-300.ttf",
    "revision": "7f384302d16d8bf29d1549de26d0153d"
  },
  {
    "url": "webfonts/fa-light-300.woff",
    "revision": "1008b6dd09c8b71b65e7c449bf881d90"
  },
  {
    "url": "webfonts/fa-light-300.woff2",
    "revision": "20bbccf14518922fa95a440f4c217d9e"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "df3024c0f2d296c59947567afffb0a3b"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "416d58293e221c2b4b8f34c1531d5dfd"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "bd86e53df8c36e22fbba9d4e60e3c632"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "239abe3e583864d4ab3d27c34ac37cc6"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "8cfe82e8c97df9ab3f52ac86af21230d"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "11823289c2cdeaf2415c76be9c5e4a09"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "506bcfeaad71580149d11c8fb36af219"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "ff4aabff5dc839470245d1e5043bdd51"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "6a9e75ccf66ab99b14f2873840cfc01d"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "e57324a466c24a207fd9ad0f5f5e3c9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
