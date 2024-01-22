'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "351383e386f88dbc1e474271c98c8c7c",
"index.html": "863aaf9c3fc256a56c7dde010d87b83b",
"/": "863aaf9c3fc256a56c7dde010d87b83b",
"main.dart.js": "f492a238d44bb779dc3c86acc59a56fb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b47365b7cb3145977f0e8557144928bd",
"assets/AssetManifest.json": "5c04eb076c26bf732b34138e563e3daf",
"assets/NOTICES": "20bc41fb547580fe57b33622799fc6b9",
"assets/FontManifest.json": "c62481f66e9380a2039f138636fbe3dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b270a1f26827766636122e9c84f8e7ff",
"assets/fonts/MaterialIcons-Regular.otf": "956260f459b4ad11aedea7476c7f4cd5",
"assets/assets/images/ic_clock.svg": "c2d750c04dd00c092f242129b43fc18f",
"assets/assets/images/ic_trash.png": "661c38b22a588799c1be7d943deb4bc0",
"assets/assets/images/ic_detail.png": "55bb2886b67cb45d1371f9366a6c036c",
"assets/assets/images/ic_calendar.png": "60fb8aa9e1b9eae42e1ca009863829b5",
"assets/assets/images/ic_gender.png": "570d8ce5c6dc2b31227587e34e6f4c10",
"assets/assets/images/ic_notification.png": "dbab32ee22d5530f37c4a9773855269e",
"assets/assets/images/ic_uncheck.png": "40da85d6aa2531e48b6e78ebf123d2e7",
"assets/assets/images/ic_refresh.png": "4f5ab2f483fceece5e7447ba91aaa14b",
"assets/assets/images/security_blue.png": "912ee72cb0e5f37fadf5821ce53caee8",
"assets/assets/images/ic_wifi_off.png": "ffa74e029cda226d76a4e63de3c7b48f",
"assets/assets/images/ic_location.png": "f3173dcf40a22c65010599348f87a2ef",
"assets/assets/images/ic_user.svg": "65a1601500c882de0559e31cdd1a91c7",
"assets/assets/images/ic_cancel_red.png": "0a4f14af6c5469460b8e0844d67315b4",
"assets/assets/images/ic_setting.svg": "d667e4ce5544805e45afa58405e750f9",
"assets/assets/images/ic_add.png": "520352687d01bc2f317f88145089973e",
"assets/assets/images/ic_face.svg": "91f4d7fb50b11c06330c4d62da9196df",
"assets/assets/images/ic_wifi.png": "7b84f1d4d07d702f4c0418f280207e85",
"assets/assets/images/ic_x.png": "073650f448b1abdabeb377bb13d477f4",
"assets/assets/images/ic_info.png": "d79e3676f1e134351135ede97345c2d4",
"assets/assets/images/user.png": "bc4164b1dc29571a958fe4b922be6696",
"assets/assets/images/face.png": "73231f5bcbf3a10b7e06699e5784505c",
"assets/assets/images/ic_filter.png": "d1fdbe7044ba59bc337ef085ebb33300",
"assets/assets/images/ic_time.png": "8d9797945a3314d297ddcbbe70503850",
"assets/assets/images/ic_vector.png": "03ddb7d8d1da970b2da3ec80ed946992",
"assets/assets/images/ic_x_circle.svg": "8bfe780506dc4f9ca3591700222b6aea",
"assets/assets/images/logo.png": "fff6ebc4bdd26bc753fadb2f89b23f89",
"assets/assets/images/ic_search.png": "a700985042c4ba3022a42205af9ee464",
"assets/assets/images/ic_save.png": "a5b7d7991f8d770e9d320ceefb237dde",
"assets/assets/images/ic_download.png": "75727c6bf34b6c88fcbce0fc8d86c695",
"assets/assets/images/ic_checked.png": "62a4ff36b4d3f6964a1e8b99d97046be",
"assets/assets/images/device.png": "9f91477fec44d29efc05903d2b90b2df",
"assets/assets/images/ic_logo.svg": "77a48f75da195fd1f72d88c89719998f",
"assets/assets/images/ic_dashboard.svg": "97c6b6f673e51f5a3d308ca86844cc71",
"assets/assets/images/ic_ok.png": "38e429a1a34a9ca085bc5b7ccd31682e",
"assets/assets/images/security.png": "79d466404c4bf684341e5e8ad4bfb51d",
"assets/assets/images/ic_devices.svg": "65a1601500c882de0559e31cdd1a91c7",
"assets/assets/images/ic_group.png": "b777983c513bee19a714b2115aae3baf",
"assets/assets/images/ic_info_black.png": "c145365db9cc46d10cd12ae6708baee0",
"assets/assets/images/device_off.png": "700f3a4199b2b45b7e9fa09f68e388fe",
"assets/assets/json/address/district.json": "0677cc94108f6ee005549e73fd94527f",
"assets/assets/json/address/province.json": "92f497237f8eaf25ec24cb29a57ec0c6",
"assets/assets/json/address/ward.json": "178ece0a2f98ff042bc9cd39f1b7b491",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
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
