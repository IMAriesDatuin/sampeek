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
    "url": "assets/index/hero.jpg",
    "revision": "b5d220429e2e639a8989cda1db325c2e"
  },
  {
    "url": "assets/index/hero.webp",
    "revision": "bc31b411cc45ef814b74d3c230285931"
  },
  {
    "url": "assets/index/image-01.jpg",
    "revision": "58d4b7211ffb98d023cd4c9f50276607"
  },
  {
    "url": "assets/index/image-01.webp",
    "revision": "39cd61d5191d9f4493789cd5c75025a3"
  },
  {
    "url": "assets/index/image-02.jpg",
    "revision": "00e76898993bad492cd2c0a186a7bad7"
  },
  {
    "url": "assets/index/image-02.webp",
    "revision": "9bc7c8969de499653a790f4a3505cf68"
  },
  {
    "url": "assets/index/image-03.jpg",
    "revision": "fd066a53a564efe71e23d5ecfeb50ada"
  },
  {
    "url": "assets/index/image-03.webp",
    "revision": "9754030bdf7b02294faa65df992970be"
  },
  {
    "url": "assets/index/image-04.jpg",
    "revision": "b438dd384b751571c8cffe34d950e631"
  },
  {
    "url": "assets/index/image-04.webp",
    "revision": "d6bfae5afbefe13885d2f6e538b97f3a"
  },
  {
    "url": "assets/index/image-05.jpg",
    "revision": "3846bd4d9c01e088fc343e6cab1d6443"
  },
  {
    "url": "assets/index/image-05.webp",
    "revision": "aa9b699897d9fa298ec9f2c96e0da018"
  },
  {
    "url": "assets/index/image-06.jpg",
    "revision": "a88ef0c92f1d90252f2d47b819738077"
  },
  {
    "url": "assets/index/image-06.webp",
    "revision": "d9a4c8d880ad1f7c2528a33b78753d34"
  },
  {
    "url": "assets/index/media-01.jpg",
    "revision": "2bc284668b24c3126d34c2f4ad7b9729"
  },
  {
    "url": "assets/index/media-01.webp",
    "revision": "b44609bc0b70a286ecf7ed16a9a4978a"
  },
  {
    "url": "assets/index/media-02.jpg",
    "revision": "bcc480d0784f366258a814d0a6811333"
  },
  {
    "url": "assets/index/media-02.mp4",
    "revision": "e4219fcba98ccf16e08b80e86ffa5470"
  },
  {
    "url": "assets/index/media-02.webp",
    "revision": "592396ce9a540bd4a97426267ab51c5a"
  },
  {
    "url": "assets/index/video-placeholder.jpg",
    "revision": "52c4bc542947a7c7e7b8eb4979608f37"
  },
  {
    "url": "assets/index/video-placeholder.webp",
    "revision": "6c7584a31dbc64ba7f8e5abef9816210"
  },
  {
    "url": "assets/index/woman-in-chair.jpg",
    "revision": "234fe59fc64c95622522841051f6b64f"
  },
  {
    "url": "assets/index/woman-in-chair.webp",
    "revision": "c51288482c95ceb54b4117878a7ac7f6"
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
    "url": "assets/placeholder/background.png",
    "revision": "20f1c9847e54f4c7936fc52f2fddfa07"
  },
  {
    "url": "assets/placeholder/background.webp",
    "revision": "8c14ccd7bc00c59eb0c5147cf5a617ca"
  },
  {
    "url": "assets/placeholder/bear.jpg",
    "revision": "6e7c7c57dec5f707fe442cf449c97c00"
  },
  {
    "url": "assets/placeholder/bear.webp",
    "revision": "dbf61c69f4657984a33017733f78c64c"
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
    "url": "assets/placeholder/john-hernried.jpg",
    "revision": "bca2ee279fdea995a7b83d17287b93c3"
  },
  {
    "url": "assets/placeholder/john-hernried.webp",
    "revision": "3ce34c900e5f7b60808e1a5a58f803f6"
  },
  {
    "url": "assets/placeholder/leopard.jpg",
    "revision": "4d75e964fe5414fb70455e0358d9facc"
  },
  {
    "url": "assets/placeholder/leopard.webp",
    "revision": "3405a8a954f094600f3f227772ee8de6"
  },
  {
    "url": "assets/placeholder/lion.jpg",
    "revision": "73096a3bf78aaacf93ae253eda93ed30"
  },
  {
    "url": "assets/placeholder/lion.webp",
    "revision": "e58e502440de4f34c72dbca63c59327d"
  },
  {
    "url": "assets/placeholder/plane-texture.jpg",
    "revision": "58382286115a06db5daec02b6f6bffa5"
  },
  {
    "url": "assets/placeholder/plane-texture.webp",
    "revision": "3129432b5ffb0ac68af451acacb76675"
  },
  {
    "url": "assets/placeholder/rachel-pumphrey.jpg",
    "revision": "88374c35997e41244ec65432c07f3136"
  },
  {
    "url": "assets/placeholder/rachel-pumphrey.webp",
    "revision": "93da5e38a3d40cee23fcc2b49f1b312b"
  },
  {
    "url": "assets/placeholder/shutterstock_101865508.jpg",
    "revision": "267f86fa96eb464305cb46140ba4958d"
  },
  {
    "url": "assets/placeholder/shutterstock_101865508.webp",
    "revision": "69e6cee8465af22b1dcab5aa9dbb2f3a"
  },
  {
    "url": "assets/placeholder/shutterstock_1025805082.jpg",
    "revision": "e514e765a99bd12f0fd09cfe67269f45"
  },
  {
    "url": "assets/placeholder/shutterstock_1025805082.webp",
    "revision": "9ea8a86a09c0e3fd5685449164d3e300"
  },
  {
    "url": "assets/placeholder/shutterstock_1028011084.jpg",
    "revision": "7d4c877c30c4ba1efbefad83fe1b59aa"
  },
  {
    "url": "assets/placeholder/shutterstock_1028011084.webp",
    "revision": "3136e65a5c8b0bc523931b44769b88bb"
  },
  {
    "url": "assets/placeholder/shutterstock_1032685408.jpg",
    "revision": "4f7fd643fb60c31064b97687dc5a712b"
  },
  {
    "url": "assets/placeholder/shutterstock_1032685408.webp",
    "revision": "a2cb75fbba4bcbffd9c31b1948712502"
  },
  {
    "url": "assets/placeholder/shutterstock_1064553980.jpg",
    "revision": "73485cf07452751ba8889b36663f651f"
  },
  {
    "url": "assets/placeholder/shutterstock_1064553980.webp",
    "revision": "798a7b2ad7045332de20bdb94c5ea78c"
  },
  {
    "url": "assets/placeholder/shutterstock_1242539569.jpg",
    "revision": "a80ce2b52cc16a01692c116ffd2ecf3b"
  },
  {
    "url": "assets/placeholder/shutterstock_1242539569.webp",
    "revision": "180f484d25e2751002a9af2e8f03d2d4"
  },
  {
    "url": "assets/placeholder/shutterstock_1337024621.jpg",
    "revision": "53a007402a4796d207c2940e91a76fd2"
  },
  {
    "url": "assets/placeholder/shutterstock_1337024621.webp",
    "revision": "348b0bb59bdc5f5ac68e9c6b4de2558d"
  },
  {
    "url": "assets/placeholder/shutterstock_156914597.jpg",
    "revision": "b2ed73a001c9636e73af9f11021decdc"
  },
  {
    "url": "assets/placeholder/shutterstock_156914597.webp",
    "revision": "6ce2bab1a06a9b22ae6862b0f4af4b1c"
  },
  {
    "url": "assets/placeholder/shutterstock_207933373.jpg",
    "revision": "d6c40d7f88dcc7ce6d37f5e3251c3183"
  },
  {
    "url": "assets/placeholder/shutterstock_207933373.webp",
    "revision": "3ba89b641087677e267da6f06cb6dfcc"
  },
  {
    "url": "assets/placeholder/shutterstock_241334164.jpg",
    "revision": "8f00f65230a7cfc76080aa5d3766651b"
  },
  {
    "url": "assets/placeholder/shutterstock_241334164.webp",
    "revision": "265b05a9e3a72aef3575cbdee3285e24"
  },
  {
    "url": "assets/placeholder/shutterstock_267632876.jpg",
    "revision": "deb7ca4faad2fd4a18d72890313c12f5"
  },
  {
    "url": "assets/placeholder/shutterstock_267632876.webp",
    "revision": "964ea856d893eeb63dd704a2c9384a8b"
  },
  {
    "url": "assets/placeholder/shutterstock_287788316.jpg",
    "revision": "f31c362f0554ede5777d47a6651314f7"
  },
  {
    "url": "assets/placeholder/shutterstock_287788316.webp",
    "revision": "ab5ba973a807973286b8a9d5cdca327b"
  },
  {
    "url": "assets/placeholder/shutterstock_380423032.jpg",
    "revision": "d889d3020506c11dfb9fbf4cf51804c3"
  },
  {
    "url": "assets/placeholder/shutterstock_380423032.webp",
    "revision": "73d34420aee74929868553775b48342c"
  },
  {
    "url": "assets/placeholder/shutterstock_394494271.jpg",
    "revision": "689c4081718e8ef2de4e67e408dbd8e7"
  },
  {
    "url": "assets/placeholder/shutterstock_394494271.webp",
    "revision": "c0741a85f93e39646dda4cfe74cd526d"
  },
  {
    "url": "assets/placeholder/shutterstock_415387804.jpg",
    "revision": "dcdffdd0cd5aadf8908410551369a8f3"
  },
  {
    "url": "assets/placeholder/shutterstock_415387804.webp",
    "revision": "9aa55592f61a327c6d5b327ddbe5f9dd"
  },
  {
    "url": "assets/placeholder/shutterstock_583329955.jpg",
    "revision": "d26d7c6136860a37b478de2ead4eeb0a"
  },
  {
    "url": "assets/placeholder/shutterstock_583329955.webp",
    "revision": "d2ce6ecb231d18e5bb8a76d1fd66fc2f"
  },
  {
    "url": "assets/placeholder/shutterstock_583401700.jpg",
    "revision": "7128c1b72eca6db71f9adbced171d1cb"
  },
  {
    "url": "assets/placeholder/shutterstock_583401700.webp",
    "revision": "6cc7988fe4b210584dc598f0b87d1e7f"
  },
  {
    "url": "assets/placeholder/tech.jpg",
    "revision": "77c4469d5e4b4463103b6a427a6fd93d"
  },
  {
    "url": "assets/placeholder/tech.webp",
    "revision": "6dc2fbf59853ae98b2cc86b8bda504c0"
  },
  {
    "url": "assets/placeholder/tiger.jpg",
    "revision": "44d6048c36600b4a62df11b097a3f66c"
  },
  {
    "url": "assets/placeholder/tiger.webp",
    "revision": "3ff038e88804817cf85457b5c691120b"
  },
  {
    "url": "assets/sounds/ambience.ogg",
    "revision": "8e76e4b5440d0fcc3b82e32beda6f014"
  },
  {
    "url": "error.html",
    "revision": "d2f92de74bf88651b84a4c86d7041bc1"
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
    "revision": "3ec2fe79b7d5dce067dac694b6ca4391"
  },
  {
    "url": "legal.html",
    "revision": "3c5d8b3f50410a0716128d8d57c6dc27"
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
    "revision": "fb73f1979ad4db34312e0943bf974a9a"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "322cb3db847545be40024dce44ef7206"
  },
  {
    "url": "sample.html",
    "revision": "7e0eea2c7ffc57a2921e488af0fb7b48"
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
    "url": "scripts/b.2513af0383.app.js",
    "revision": "b865165d34c92de33a96db68bfb0a7c3"
  },
  {
    "url": "template2.html",
    "revision": "207561ddfefdeda3ba04f37687df0814"
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
