'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "86ea2d4591f8ed82916224dd72806b14",
"index.html": "ae8103ff78886dd8887819ed531ef223",
"/": "ae8103ff78886dd8887819ed531ef223",
"main.dart.js": "c08bb604e1d14e57198b46230d9c5273",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c533028b183698f6dbc838e546e43840",
"assets/AssetManifest.json": "808b43f97836311c0c3afeb082d6f320",
"assets/NOTICES": "847f78fd7c17c403c8cc3a35550967b8",
"assets/FontManifest.json": "0c911362923fe6afdf620cbe032bb0ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d7f36c5ce088f7868a43aca4c41531cb",
"assets/fonts/MaterialIcons-Regular.otf": "956260f459b4ad11aedea7476c7f4cd5",
"assets/assets/images/cambodia.png": "4dbfb8295d72c8ecbf25a2bd4511b609",
"assets/assets/images/ic_x.svg": "acdeb9b355ac5d980d4e26dc3c0df1d4",
"assets/assets/images/ic_info.svg": "bb5655c5774056a0608ab699f7a66388",
"assets/assets/images/security_blue.png": "912ee72cb0e5f37fadf5821ce53caee8",
"assets/assets/images/ic_add.svg": "b076025405ba61eafad1baae4f23f89b",
"assets/assets/images/ic_location.png": "72b64bef77402b3fe5de14d1b9449e68",
"assets/assets/images/usa.png": "78759bc509747d3128f147f16c8b6b7b",
"assets/assets/images/ic_wifi_off.svg": "b4b8792fff1b95a0199f08fdd1f9c4bb",
"assets/assets/images/ic_user.svg": "65a1601500c882de0559e31cdd1a91c7",
"assets/assets/images/ic_setting.svg": "d667e4ce5544805e45afa58405e750f9",
"assets/assets/images/ic_face.svg": "91f4d7fb50b11c06330c4d62da9196df",
"assets/assets/images/fi2_info_black.svg": "fe106426f3a871dd464e1c1f8c58648c",
"assets/assets/images/ic_uncheck.svg": "e10b48e86a64c399a59984051f60d51f",
"assets/assets/images/ic_calendar.svg": "ab5bf7fdc253c05469a43ed38034c5d8",
"assets/assets/images/ic_detail.svg": "49975c6a60a1556c4d470aea8ec5916f",
"assets/assets/images/ic_trash.svg": "40b30b0ce00c97033e9556de516777aa",
"assets/assets/images/face.png": "73231f5bcbf3a10b7e06699e5784505c",
"assets/assets/images/ic_info_black.svg": "fe106426f3a871dd464e1c1f8c58648c",
"assets/assets/images/avatar.png": "aa0ba04d7b5c534acbcf55de2dd51b85",
"assets/assets/images/ic_group.svg": "9a88ca1dee5d3ebd634c0cefe0e21b88",
"assets/assets/images/ic_x_circle.svg": "8bfe780506dc4f9ca3591700222b6aea",
"assets/assets/images/logo.png": "fff6ebc4bdd26bc753fadb2f89b23f89",
"assets/assets/images/fi_wifi.svg": "fd4485a5b548b714269499711aca5298",
"assets/assets/images/device.png": "9f91477fec44d29efc05903d2b90b2df",
"assets/assets/images/ic_logo.svg": "77a48f75da195fd1f72d88c89719998f",
"assets/assets/images/ic_checked.svg": "d02c2ce441d988b27df2fa91cdf1e0cb",
"assets/assets/images/ic_dashboard.svg": "97c6b6f673e51f5a3d308ca86844cc71",
"assets/assets/images/ic_devices.svg": "65a1601500c882de0559e31cdd1a91c7",
"assets/assets/images/device_off.png": "700f3a4199b2b45b7e9fa09f68e388fe",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Khmer-Regular.ttf": "5b86fd3cc30e54bfe3d1627ff59e66f8",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/gif/not_found.gif": "c8bc1eb073f225dde3d684b20b2a399a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
