'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8ee2acea005601f392b1f11432d8a899",
"assets/AssetManifest.bin.json": "f746089f4039364d776f63bf3265b098",
"assets/AssetManifest.json": "ae1f3e1cf2f4cd90bd569c574cb240f4",
"assets/FontManifest.json": "42f4847be75c845d0eb3fc5c78d68cf8",
"assets/fonts/MaterialIcons-Regular.otf": "8b4cfcb113dc07620320fea0c29a1576",
"assets/lib/assets/fonts/FjallaOne-Regular.ttf": "ec1b2f280f4da66724d41ecd5275ef27",
"assets/lib/assets/fonts/Lora-Italic-VariableFont_wght.ttf": "b1f251bc5aaa536a4d8c27223f3c3257",
"assets/lib/assets/images/academe/1.png": "507aa03c86fa51fe6e15772fce5b70b9",
"assets/lib/assets/images/academe/2.png": "83654747c534369aef8670bc44a247f0",
"assets/lib/assets/images/academe/3.png": "e569b91344cad98ac03d225a20c8b5ad",
"assets/lib/assets/images/academe/4.png": "147fdc09665a842de0e33d28f132cd2d",
"assets/lib/assets/images/academe/5.png": "1596aa51672858adb507d689a1f4d7d6",
"assets/lib/assets/images/academe/6.png": "354fe619e2095a07ca88f804e29948f8",
"assets/lib/assets/images/academe.jpg": "43ab7477d2197b65e167ca05363eeb8f",
"assets/lib/assets/images/bar.svg": "347758a958edc918ad1ebdac486823c4",
"assets/lib/assets/images/browser.png": "4eb881b0072a229e176bcdc1ce483042",
"assets/lib/assets/images/c++.jpeg": "41fb68d99be871baa1a1af108fae1f24",
"assets/lib/assets/images/c++.png": "6923e2e626c1f81498e2a58995f29154",
"assets/lib/assets/images/c.png": "b36685671b8c62b1e2c80ef7a31c6a20",
"assets/lib/assets/images/c.svg": "04aeefb6c14e363926eb1c7e9337c6e7",
"assets/lib/assets/images/c1.jpeg": "7b63b9882ff8b7053155105214f82baa",
"assets/lib/assets/images/c2.jpeg": "c49d61b0fc266a1d41d94d7754f8135f",
"assets/lib/assets/images/coding.png": "a9470a83042f20a99eae239d024219d5",
"assets/lib/assets/images/coding2.png": "400433626f8164d6263e91211bbf3d9b",
"assets/lib/assets/images/coffee/1.png": "82424093d9b0777498c7b5a94ed43edc",
"assets/lib/assets/images/coffee/2.png": "efe3947fd20802f3fa580724b3ba4cd6",
"assets/lib/assets/images/coffee/3.png": "a087dd03f495e5f0e9719655b754da9f",
"assets/lib/assets/images/coffee/4.png": "4168932103de1c7e82437a4e2408767d",
"assets/lib/assets/images/coffee/5.png": "ce9289d31a06e96677186b513ab17b6f",
"assets/lib/assets/images/coffee/6.png": "e018fc1e20cef0a3f0aa8085954495c3",
"assets/lib/assets/images/coffee/7.png": "d4f1b70af804e88c2be491a4d28c44c3",
"assets/lib/assets/images/company.svg": "5be074982d560d2955bcfe28758770b4",
"assets/lib/assets/images/computer.png": "5de1fadd4eb4cd22fe27c166488f489a",
"assets/lib/assets/images/css.svg": "06da3e7e1fd57a94c27eb99c550d472b",
"assets/lib/assets/images/f1.jpeg": "e3cdad29cbd97fd07d1888fc92577a65",
"assets/lib/assets/images/f2.jpeg": "7d519586673f4e87798a161101669cbf",
"assets/lib/assets/images/flutter.png": "c3b92fd3488c08c95693c0d479cad3e0",
"assets/lib/assets/images/flutter.svg": "c0b33b0fb08e38ae8ada0b1127b6857a",
"assets/lib/assets/images/grocery/1.png": "36c676414f7347946bf01f2b788c2e55",
"assets/lib/assets/images/grocery/2.png": "a1b579c3fc85abc793bb11c4773cc62f",
"assets/lib/assets/images/grocery/3.png": "b5720b71deb96d0b304c2bdae636c290",
"assets/lib/assets/images/grocery/4.png": "20a4bcdce49ad2d124ae82045c685c5d",
"assets/lib/assets/images/grocery/5.png": "03918242d34cf0533f8bf08671bbab53",
"assets/lib/assets/images/grocery/6.png": "cfd50b54cb5b80805943aafde954ea44",
"assets/lib/assets/images/html.png": "8aff3e27665d00c67042836c28a9edfd",
"assets/lib/assets/images/html.svg": "5bea3de5b4ce35b46a7672cedcdf6ff6",
"assets/lib/assets/images/me.png": "5addd549391a1fa6d45ac1b299d4263a",
"assets/lib/assets/images/me1.png": "398215b672f709502c8317a713df4724",
"assets/lib/assets/images/mobile.png": "8b42924ad36286546c7d7f46ba9c1cca",
"assets/lib/assets/images/mobile1.png": "b2853e371a5203b62d1fee91b75e059d",
"assets/lib/assets/images/mobile2.png": "4b2d9911b02e826265abbc3d605e8272",
"assets/lib/assets/images/premium/1.png": "579b99c2bc5a461b4000554eccc336c2",
"assets/lib/assets/images/premium/2.png": "49788cc7fc628a89ecbc7e168b322e70",
"assets/lib/assets/images/premium/3.png": "89f537cffbe293d2a83313aaa0c24a8d",
"assets/lib/assets/images/premium/4.png": "f7c8bede4e0647a84ef62a214cc7c9ce",
"assets/lib/assets/images/premium/5.png": "9446b0888fdd65c32ebad451286a876b",
"assets/lib/assets/images/premium/6.png": "1fb39389a9ae279ef7d367ffa00b27ff",
"assets/lib/assets/images/premium/7.png": "34e8212e4e310197692e62cf5ee96f5f",
"assets/lib/assets/images/premium/8.png": "6fc79358928c5b16135f3541b83cadf6",
"assets/lib/assets/images/project_example.jpg": "9faf279f55f65847367908122475d7ef",
"assets/lib/assets/images/sq1.jpeg": "e76ab91c77468738add940eb4190c5ad",
"assets/lib/assets/images/sq2.jpeg": "749f97d0a37217ec250346a3c567bb31",
"assets/lib/assets/images/system.png": "36d78e2fcfcebbff19865067e1afb0ae",
"assets/lib/assets/images/tree/1.png": "d5356eb6c1ea34d7613fffacd12b8068",
"assets/lib/assets/images/tree/2.png": "b2c607149d7b25181afd5cf2a704d556",
"assets/lib/assets/images/tree/3.png": "50b02d1a131fab672e5bbd82f60450ba",
"assets/lib/assets/images/tree/4.png": "d334fbaf8aa39d84a63095a71ac7822f",
"assets/lib/assets/images/tree/5.png": "af57941e1ff6accf96e635452d07f4ea",
"assets/lib/assets/images/tree/6.png": "1137160c1e67ef22c59328e4a652c66d",
"assets/lib/assets/images/tree/7.png": "e577efc422ef06a4a2458a054177bd5b",
"assets/lib/assets/images/wrok-shop.jpg": "591924605c13918a4d0d865070e50724",
"assets/lib/assets/videos/ACADEME.gif": "3f9d74698dbbeeb16fb0fc389fe8a263",
"assets/lib/assets/videos/academe.mp4": "2c974eeaa026fe7b57bcd1b121f2befa",
"assets/NOTICES": "6242f58fcdaa6c8437a035799414bc12",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e69144f8e3220ecee6e8ef3271e6ad6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0219c5ac9710b221888d78cd3365c8fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"index.html": "8ffc7d08006aecd4af2dcba7bcb79404",
"/": "8ffc7d08006aecd4af2dcba7bcb79404",
"main.dart.js": "ceafedb07063f6549a85ebd49aa6a602",
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
