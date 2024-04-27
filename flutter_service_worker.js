'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a60bdf4153346602bfc4dbe696fad81a",
"assets/AssetManifest.bin.json": "9a34c1f3ee870e7345f601b69e82d135",
"assets/AssetManifest.json": "ec72fa0a58f413ddd11ec8113af1d62a",
"assets/FontManifest.json": "42f4847be75c845d0eb3fc5c78d68cf8",
"assets/fonts/MaterialIcons-Regular.otf": "f0e1c5418d37e0c8da21cabbbd699b50",
"assets/lib/assets/fonts/FjallaOne-Regular.ttf": "ec1b2f280f4da66724d41ecd5275ef27",
"assets/lib/assets/fonts/Lora-Italic-VariableFont_wght.ttf": "b1f251bc5aaa536a4d8c27223f3c3257",
"assets/lib/assets/images/academe.jpg": "85f7c413f8c9b706bea54d87e3c0289e",
"assets/lib/assets/images/browser.png": "4eb881b0072a229e176bcdc1ce483042",
"assets/lib/assets/images/c++.jpeg": "41fb68d99be871baa1a1af108fae1f24",
"assets/lib/assets/images/c.png": "b36685671b8c62b1e2c80ef7a31c6a20",
"assets/lib/assets/images/c.svg": "04aeefb6c14e363926eb1c7e9337c6e7",
"assets/lib/assets/images/c1.jpeg": "7b63b9882ff8b7053155105214f82baa",
"assets/lib/assets/images/c2.jpeg": "c49d61b0fc266a1d41d94d7754f8135f",
"assets/lib/assets/images/coding.png": "a9470a83042f20a99eae239d024219d5",
"assets/lib/assets/images/coding2.png": "400433626f8164d6263e91211bbf3d9b",
"assets/lib/assets/images/computer.png": "5de1fadd4eb4cd22fe27c166488f489a",
"assets/lib/assets/images/f1.jpeg": "e3cdad29cbd97fd07d1888fc92577a65",
"assets/lib/assets/images/f2.jpeg": "7d519586673f4e87798a161101669cbf",
"assets/lib/assets/images/flutter.svg": "c0b33b0fb08e38ae8ada0b1127b6857a",
"assets/lib/assets/images/me.png": "5addd549391a1fa6d45ac1b299d4263a",
"assets/lib/assets/images/me1.png": "398215b672f709502c8317a713df4724",
"assets/lib/assets/images/mobile.png": "8b42924ad36286546c7d7f46ba9c1cca",
"assets/lib/assets/images/mobile1.png": "b2853e371a5203b62d1fee91b75e059d",
"assets/lib/assets/images/mobile2.png": "4b2d9911b02e826265abbc3d605e8272",
"assets/lib/assets/images/project_example.jpg": "9faf279f55f65847367908122475d7ef",
"assets/lib/assets/images/sq1.jpeg": "e76ab91c77468738add940eb4190c5ad",
"assets/lib/assets/images/sq2.jpeg": "749f97d0a37217ec250346a3c567bb31",
"assets/NOTICES": "240981e8edbd59557e87650904cc8344",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e69144f8e3220ecee6e8ef3271e6ad6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0219c5ac9710b221888d78cd3365c8fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d8da2224485ce8fbbadd49433ff18b2",
"/": "7d8da2224485ce8fbbadd49433ff18b2",
"main.dart.js": "7e30f7daba28b00b093ab878ca7e5763",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
