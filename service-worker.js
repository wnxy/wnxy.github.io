/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","6e6c9822084bbbb3cd68e4ec52d265ba"],["/2017/02/01/hello-world/index.html","3deb3f776bb746cd3194c168902b7885"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","fb8ad4fe396b51de0436137c02adeb64"],["/2019/06/03/Linux-programming-examples/index.html","908be7a767990590d218914ee2b99614"],["/2019/06/10/Server-basics-and-configuration/index.html","b25ea5c5d442b6b3f39e1611ed2fa07c"],["/2019/07/01/Linux-socket-communication-programming/index.html","f54acba2dfc8a76d26cecc59d2da93e7"],["/2019/10/04/Python-function-call-and-module/index.html","49a730ee2a9849f5b57a31983ebc9c5b"],["/2019/11/02/Python-100-days/index.html","d55762cb374bea6adb47d3a36061816d"],["/2020/01/10/C-or-C++_dynamic-array/index.html","aefe2651746983ff1fdbef1840a18ea2"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","200869a82543a279347fb150ceb9d78a"],["/2020/03/20/Jincheng-lanzhou/index.html","ae88a0caebe13545f3f3eb977a26a6e2"],["/2020/03/21/Cumt-aerial/index.html","03926ce491ad39796f17fadce2e19104"],["/2020/03/25/Bitree-construction-and-traversal/index.html","03e3cf01f3573788d6521a15da44ad4d"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","fcbef754ddfe98be58e1a672595a952f"],["/2020/03/27/Stack-application-bracket-matching/index.html","8a3fb643f1133729efda8dac9aa1e8fc"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","7192e17f0299935cc512864fad91059b"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","3400060a18a9353a373bc8e69e2500e1"],["/2020/05/30/School-celebration/index.html","fcf28cc83882801a202a8fe60b813c6b"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","0e28d9cd35c543598651d6ff9a191723"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","368ecbd6d67a340181ac14c835a42fc4"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","6894b5f59d72e86e0495a2d9b0cad9e6"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","dfab472cc645179d4f107cda562e5f8a"],["/2020/10/09/Python-data-visualization/index.html","2f4e99e2389a9c20752bfe0d8d2212c1"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","f36988a18956984512e89e541356941d"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","f30f3f852f0ad39118b891a11ca3ddaf"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","769ac9fb04e7e689ea60535905a3f63a"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","78a6219b3c095cf0439ba4d1ce756000"],["/2020/11/02/Data-visualization-matplotlib/index.html","74868939b8033e4f5f2310a0f8256f11"],["/2020/11/10/Naive-bayes/index.html","5d496c1373cab8daf023ad24a134574f"],["/2020/11/28/Matplotlib-function/index.html","3758a091d7df9bd5937f7ce7664e59a1"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","c8d484325429c2c81ef7cd4b9118a8cd"],["/2021/04/27/Git-usage/index.html","d94c40476488dfe5cbd5fe1e4f823b23"],["/2021/05/06/Arithmetic-expression/index.html","36d48dd6ed5ed3f9dc342fc8ba271c13"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","716160355405cdd303b11ac9e692c53b"],["/2021/06/25/Classic_TopK_problem/index.html","ad59a8aa4133b651438620754c47b018"],["/2021/06/27/Calculate_prime_numbers/index.html","fdfddf231a8040c389088be0aed85868"],["/2021/06/28/Priority_queue_and_heap/index.html","6848ab66d1a8b94c99c23683ac082d04"],["/404.html","9c1750185e6813779f0dfb66ceeaf498"],["/about/index.html","088c5839e992c05e1ae267e086f38063"],["/archives/2017/02/index.html","60e4ef59174cbe5ccaadff8bc4c4d662"],["/archives/2017/index.html","92b8fc3ceee2a9d760ba0839a53b2390"],["/archives/2019/01/index.html","7c75704e70e47e59e921cd7c3a8031e9"],["/archives/2019/06/index.html","01aba004c7a1b256b8b88d50b577e0fe"],["/archives/2019/07/index.html","3d9ebcc25c74052bb93067aea2b3af0c"],["/archives/2019/10/index.html","b86e7acd4d4c3b550783a9a1b2653192"],["/archives/2019/11/index.html","b10f015da05f41e9b9ca5734d9fdf204"],["/archives/2019/12/index.html","da1ead0e9e1467f89b85bece10e21212"],["/archives/2019/index.html","a6438b362463068d257eb45e8f9bb77c"],["/archives/2020/01/index.html","1c66bd7bb77212510db37fcc86f10201"],["/archives/2020/02/index.html","8a0b673fac045b8d21999fdb7fb13f69"],["/archives/2020/03/index.html","daeab8378eda4ea583667bb9445e7944"],["/archives/2020/04/index.html","77c97e2ccb7c8fa3879a534784c655f7"],["/archives/2020/05/index.html","5cbf7b549870d1e586302e3b328e8839"],["/archives/2020/06/index.html","e595091b2e6eec9d571ec00bca29cbcb"],["/archives/2020/07/index.html","72100476a1af15509040615cf2144339"],["/archives/2020/08/index.html","16a46816c5e4e263c960c034b9dc9769"],["/archives/2020/09/index.html","3c4dc28ed5d201c53706ef2cb6b63fc7"],["/archives/2020/10/index.html","fe5d6efe03444a4a114154267bf95e30"],["/archives/2020/11/index.html","726d524cbde9856d0c9545971242d9ef"],["/archives/2020/index.html","0c1d005bb083e196404d28cf6e3a26e6"],["/archives/2020/page/2/index.html","1693c0a895cb2bf18324108482accc06"],["/archives/2020/page/3/index.html","c9953b6f9e4ff7c2c83c1769f12ae003"],["/archives/2021/03/index.html","c5090260a674cfc7956c7a55a6873592"],["/archives/2021/04/index.html","07fffd646bcdcd3344f78c4883e01f3f"],["/archives/2021/05/index.html","15079e1956080c116f3112b039e74896"],["/archives/2021/06/index.html","a327609bf5061ae614a84a2ef1d7d0c7"],["/archives/2021/index.html","e4a07dbbe2331248833ed287dc9f5b13"],["/archives/index.html","920d7edbf2d92a0c6d2cc4563deebf5d"],["/archives/page/2/index.html","f10642529a46100e3bdbd4ee24b33493"],["/archives/page/3/index.html","3ea3532d25128d50b019c498407b6274"],["/archives/page/4/index.html","11918fe7c42aa554f3272eeb9a8cdf34"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","e6bcadd117df83f3a386bd4a3fb49ca6"],["/categories/C-C/index.html","7b5328fc5427700a03f61f92e7f1ed5d"],["/categories/GitHub/index.html","e1d88d7db1b4622b14414786338a0cc2"],["/categories/Hexo博客搭建/index.html","e71c0abcb3c8e9e5c309b62d7a358e7f"],["/categories/Linux-学习/index.html","54d573dc7340d2339bb885be1d20bfdc"],["/categories/index.html","4065abdc91ff6741ed0c774759d02dd2"],["/categories/博客搭建/index.html","33ed6186255247aeea676b75eae2a8f7"],["/categories/学习笔记/LeetCode刷题/index.html","4effb4dfa10624aeb6f8286ad06bd5ac"],["/categories/学习笔记/Machine-Learning/index.html","2fb8afb8f4987e855f294e4cec0ab640"],["/categories/学习笔记/Python/index.html","cbd3aab93474f01ad4092c7cbaa79119"],["/categories/学习笔记/index.html","ea751fd594e629274c2587bd9272d1fb"],["/categories/学习笔记/page/2/index.html","f4ef9013ab593ff62dff2950721e92bd"],["/categories/转载/index.html","32457e79b4f4742c92068ac6ff441254"],["/categories/随笔-杂谈/index.html","7cf1a32df2432462d6e996549f632044"],["/clover/index.html","bb71f32d5f56b44f2798b62993645b37"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ce3bf7ca3e6a3d30893cc83d7a8f2091"],["/google85949087cc957523.html","aa3033307cac0e7d6704ced4bbb4df86"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","f5a3d53bff93070080cd8a78239290c3"],["/interest/index.html","085fcdf6b8821102505b407a777e4db3"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","e9d6ae9b1d3f0e0a94c90447b3ee26bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","e2cf49fe95c26413a488c52d6d8a1742"],["/page/2/index.html","727e6b6eae7f36693ed9572e1ecc3d34"],["/page/3/index.html","5ee1c6e9dfcf0b3d4bff6307c3e944c5"],["/page/4/index.html","26b0579a86f395e055fa53f9a8769610"],["/tags/Binary/index.html","e1e4bbe9ffe8c8a0ce1199a96ec20173"],["/tags/C-C/index.html","f8c8591f185bf6b08148b74337143c00"],["/tags/Git/index.html","aa2bcdd01caabdbeee625ee517651c32"],["/tags/Java/index.html","df4c11a2eb0f855433549f37680dc263"],["/tags/Linux/index.html","d481d28b3648c7cd096bc87305a34214"],["/tags/MNIST/index.html","b4c0ad805d914dd9a54ee8bb5112d517"],["/tags/Machine-Learning/index.html","acaf2eb4a5d20ab42c67f3b714bd8a76"],["/tags/Python/index.html","446d5249c8c3f44660c159efef1e92f4"],["/tags/STL/index.html","c76824f1261a9b8585e9de956ceff91e"],["/tags/Struct模块/index.html","0c601c6496222a0d0b8617aad59f766c"],["/tags/define/index.html","2c7d68ce9d0f5fce15b4cf74cdeab74d"],["/tags/github/index.html","4035d680d75974cf3814b59b3fb4ed1b"],["/tags/hexo/index.html","ff655451c4ed7416f6624b3fe47cb8ea"],["/tags/import/index.html","ce03f00c4737081c97e78066f8fdb7b2"],["/tags/index.html","7355ba54083901cc2e8c210349487603"],["/tags/matplotlib/index.html","833294ba087d925d8a9f2d81f8fb59e8"],["/tags/melody/index.html","a566b97e494d44e17c51cf301cdbdd4e"],["/tags/npm/index.html","2b401243dfd8e88505b5303a579fb75d"],["/tags/priority-queue/index.html","b46caae51548efbe08c19c348d0fedbc"],["/tags/rain杂货/index.html","84f41f83863feacf1e96ecd6ee93bea7"],["/tags/socket通信/index.html","496553ba3e9d9765b19bd2d80ef0581f"],["/tags/typedef/index.html","e83cbd20bcf431d103a51beca14133e4"],["/tags/中序表达式/index.html","6683104832e1001253649a4165a7c9f4"],["/tags/二叉树/index.html","8c86158c8be1e5a8768b7d16ad6915b3"],["/tags/二维数组/index.html","b45f937fb900bf7c43f68fd2416c4e1e"],["/tags/二进制处理/index.html","81c45ac29785342767699a15aff380ae"],["/tags/优先级队列/index.html","5bb64b10d4e3eacef404598c8ee45f66"],["/tags/减治法/index.html","54760f0d66c8fe247ac5ad2125449024"],["/tags/函数图像/index.html","146779ff96c0b067e7cecb05b5667196"],["/tags/函数调用/index.html","acd916873625c8684277b227499ecf1a"],["/tags/分治法/index.html","08d11590bdd73f3d3fc6d16637b7af1e"],["/tags/前序表达式/index.html","25c389c3f3035541d46dce776f4ceddf"],["/tags/动态数组/index.html","8383b49b7e048c38d72b28abe77aa44c"],["/tags/单调栈/index.html","4933f97b7a070d0e6fbbf73db4fed958"],["/tags/博客美化/index.html","ce9ef07c0d63594b3a42824c065d2852"],["/tags/后序表达式/index.html","298e4f3110f5f813e1962a75e0710c02"],["/tags/基础/index.html","f5e3407e758e40ff76fa8f92121c58d2"],["/tags/堆/index.html","5cef63b0848dbc6e2bedab90443cf84d"],["/tags/宏/index.html","ecfa4f0dbff942acdef3213adbf03c14"],["/tags/开源/index.html","d9eb463802f4865a1e7aed68eb4b29d4"],["/tags/影音视频/index.html","9d3c4214c4ae4d998ab0b23b1b9a8bc6"],["/tags/括号匹配/index.html","63d441f2e33b50bd5a52d2664260dc04"],["/tags/排序/index.html","ce28d740f03b4e51912d8f9aa8beaa1f"],["/tags/数据可视化/index.html","95d515a0366864ca5b5806d6636e0148"],["/tags/数据解析/index.html","d02c37fe8e2e60d6435a81055b97003b"],["/tags/服务器/index.html","d408024b80a496709a8f57ca409c2c9c"],["/tags/朴素贝叶斯/index.html","44a1fa02bb7eb2a0a8b4091e4dd449d6"],["/tags/机器学习/index.html","f234536c1941db57e93a394ddf72e4a1"],["/tags/栈/index.html","199e992790830a64b7d6019dd8e4f532"],["/tags/模块/index.html","378f31f139c7ce13b3b7314c8fb77ec4"],["/tags/神经网络/index.html","5747d7539f9aa7913d3a53f9872a03b1"],["/tags/程序设计语言原理/index.html","b3d017769df169626f2f66d9585305cb"],["/tags/算术表达式/index.html","d081b9248f608e004ccea168ebb6f60c"],["/tags/素数/index.html","2794a126c01bb585915d830208040a8d"],["/tags/考研/index.html","012dd589c48e2f102252e64a8b5778ac"],["/tags/莞尔日记/index.html","051f830d9b7ad7a609491acc9f42655d"],["/tags/进制转换/index.html","6f903915af07307e06aa78b6bf3ac53a"],["/tags/逆波兰式/index.html","d8b4a1aa24fa0b6f2f0de432ec674471"],["/tags/队列/index.html","1144798cbf48a50cfb00d2b36672a9c4"],["/tags/面向对象/index.html","51de8a465a30b604f4078e293d2983ed"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://wnxy.github.io/"});




