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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","36ec8321d3386d0e4b8f1f144b13bf73"],["/2017/02/01/hello-world/index.html","3b937b27e067abff18827fc1e9147aae"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","10e91a6d1e8f45ae03e726c7c4f8fcaa"],["/2019/06/03/Linux-programming-examples/index.html","49cd1e6aedf3019543c600d4a88ae633"],["/2019/06/10/Server-basics-and-configuration/index.html","711332bee2cdd241afb0e82af2f29c6a"],["/2019/07/01/Linux-socket-communication-programming/index.html","832012dbb89b8822933d63fa9bdf2ca4"],["/2019/10/04/Python-function-call-and-module/index.html","e22072d99b649ed6fb09708abb157cba"],["/2019/11/02/Python-100-days/index.html","22cf491470766d6a4633068fbbe4aa7d"],["/2020/01/10/C-or-C++_dynamic-array/index.html","0282827b776f78baae09694a7a65d047"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","0f51ec0890ac8f5083c55ec15461bde8"],["/2020/03/20/Jincheng-lanzhou/index.html","c8177cf36cbb03390c9527c561ad34f3"],["/2020/03/21/Cumt-aerial/index.html","97f3750f028b353686bbdf1033cc5a5b"],["/2020/03/25/Bitree-construction-and-traversal/index.html","40f1c3cd1ded12a347093a52aba58596"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","53bd34a3789279a17959e5e28a59a914"],["/2020/03/27/Stack-application-bracket-matching/index.html","2ea20ca05a0c7907153518d39519808f"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","b1cfd4812149238eb5d956c7c8e2c13e"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","6423fd373062624c0795b81464a86cb4"],["/2020/05/30/School-celebration/index.html","302a681e873f7e8517d24186ecb9be76"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","7c2b35a871e968b06c20d0f832a00136"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","c9b461a6915e6965a557ca4af3138006"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","7535a967cf816274c3c73278fe318ede"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","8f16df926bf904fb28d9f110671baed0"],["/2020/10/09/Python-data-visualization/index.html","dfb9be8ac20e9c7e5702a819f51ca0d8"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","6a1ad34afd03f2cd6bf92f61bd9b200d"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","e5945ce03b70fc1601c17f2a6f07c512"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","82175e62b52aa7274cd726fa7cf413ca"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","c9976c599ddf2ce3dc85f1eedc77afea"],["/2020/11/02/Data-visualization-matplotlib/index.html","aba5456ecccb482b421c30a8079c2fb9"],["/2020/11/10/Naive-bayes/index.html","007a1426e219493093f16939c6482a99"],["/2020/11/28/Matplotlib-function/index.html","99b39c717ac2148abeaeaddfcc0174a4"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","4fa7859e4afbee9063d1f99f0e93d77f"],["/2021/04/27/Git-usage/index.html","765466d1d0fb067b904c392e1f9fe166"],["/2021/05/06/Arithmetic-expression/index.html","23e96c80bbf458628b8269adfcf10d72"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","0ec9d8b864d3b7aeb2890bd162507eed"],["/2021/06/25/Classic_TopK_problem/index.html","8e1fc571c1d259fe3e56a40f80387f0c"],["/2021/06/27/Calculate_prime_numbers/index.html","61591b7b65a360891395bd5e3f0b73e8"],["/2021/06/28/Priority_queue_and_heap/index.html","172d6bf003546515a563438760cc245c"],["/2021/07/15/cpp_constructor_and_destructor/index.html","5d9abc682fd9eac26945c6edaed45776"],["/2021/07/17/cpp_file_stream/index.html","5f8280ccca6a0f17f016e6b4f6ee1b97"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","9e1b890bfad85effd30a909af373f545"],["/2021/07/22/cpp_this_pointer/index.html","37f62f413993e3a80cb9517d4fa6aeb9"],["/2021/07/26/cpp_algorithm_analysis/index.html","74c093ca1d61d6e07700d84c5bb4f20f"],["/404.html","9c1750185e6813779f0dfb66ceeaf498"],["/about/index.html","8893ba22bfa907546c47327c3eeb5c9b"],["/archives/2017/02/index.html","bd8ef865f8718239b24b849254aeb2db"],["/archives/2017/index.html","374aac1533f9f08e9ba81ae5823466d5"],["/archives/2019/01/index.html","d5856a27f5c74fc8b81f5609862c2c3a"],["/archives/2019/06/index.html","23d7e5629eb51a11d7c9f5252c5d2673"],["/archives/2019/07/index.html","8630fe80a0f9b82f064442c9d0cc822a"],["/archives/2019/10/index.html","a5adc15469f50751ba38b969711aa7f2"],["/archives/2019/11/index.html","896bd098e5d053a3053c16debce5965e"],["/archives/2019/12/index.html","9ecd01342d45b2e9ee4dbd8b382fb6c5"],["/archives/2019/index.html","0c98bd869b3b9b4452e1961f7cda1c7b"],["/archives/2020/01/index.html","e79ed9a358e23eec372e3c4f9abef491"],["/archives/2020/02/index.html","cde4f82dcf46dce24e02974fe5488940"],["/archives/2020/03/index.html","9768ccb1cbbcdf2f6c41ba6251c78779"],["/archives/2020/04/index.html","ddc70fbf051400b5265113f3b3117afe"],["/archives/2020/05/index.html","dce7ffb9514b8c974de4b7c306f1829f"],["/archives/2020/06/index.html","9f70c44929292627ba6ae2d3a3ca0769"],["/archives/2020/07/index.html","dd923dbd9c9b5c421fffe69747acf85a"],["/archives/2020/08/index.html","80011a656fed96db033eafce695e3f5b"],["/archives/2020/09/index.html","0aa8c543c9b7ab0d57838f4ec67bbceb"],["/archives/2020/10/index.html","d214636178ac5086ad3d808c354a9511"],["/archives/2020/11/index.html","1455575f468b46cb5294e9f32464dc4e"],["/archives/2020/index.html","15aa7286927c9e6b7deadb1046aea92e"],["/archives/2020/page/2/index.html","eb97d400e773247e70f90f3a954fe42b"],["/archives/2020/page/3/index.html","1149519d5bfbf66441c250bf092921cc"],["/archives/2021/03/index.html","c1e689965b1a11d038318edd89b072a3"],["/archives/2021/04/index.html","fac9b23c312969125732faff35a03b9d"],["/archives/2021/05/index.html","32b8a119ec7cbf615606c5f72362dbdd"],["/archives/2021/06/index.html","f25dd5da2a35dad27d4b65c5ff6412d8"],["/archives/2021/07/index.html","d8139ebd49e84ca2ac950e9c75138ecc"],["/archives/2021/index.html","f548f5cd7bfe01b6309926e88348360b"],["/archives/2021/page/2/index.html","b53420ec181fd3ae5306dece67d06f83"],["/archives/index.html","1d27983f942076bf94c1227d61e2417a"],["/archives/page/2/index.html","17cdf372d44cb5d218d6b8c922ff328d"],["/archives/page/3/index.html","783006d98796f950b8345b417bb2e1d3"],["/archives/page/4/index.html","a643abe973b3921b6e5fed575a6cad10"],["/archives/page/5/index.html","43436462188b5326714e0f37e291dac9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","e19f6758c9c993e1f9760186b9f900ab"],["/categories/C-C/index.html","6c707ab7956ebe4333fbd274a44fc245"],["/categories/C-C/page/2/index.html","fec745cf17a963711c67eb5f58394dad"],["/categories/GitHub/index.html","cc07e5c90ec773077b2e99ce48cd3fb9"],["/categories/Hexo博客搭建/index.html","031067693f45964eb7823f04adf723fe"],["/categories/Linux-学习/index.html","e265360e1a678b3190503836625d5093"],["/categories/index.html","726735f2f3e1e9c1c2e86cfc2c167994"],["/categories/博客搭建/index.html","ab58978fc03501c516160e17a323994e"],["/categories/学习笔记/LeetCode刷题/index.html","6eef4a59fc5be0d6058df2205e207202"],["/categories/学习笔记/Machine-Learning/index.html","f4a5012edd75aa32017f9895d0d353ae"],["/categories/学习笔记/Python/index.html","434fd3686ef1660600242b0208a3d77a"],["/categories/学习笔记/index.html","7328e60cdecf5288255de271bc43b46c"],["/categories/学习笔记/page/2/index.html","65ff4789ad49acba037434214bbb7593"],["/categories/转载/index.html","c617cd1ea953a1f96d5f4ee407b0ac52"],["/categories/随笔-杂谈/index.html","02754cd2a674342fa03ab893cd236710"],["/clover/index.html","92ffb8f8bdf9ac03ea05b368aa066c0f"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d533d7737c41b742ae0cf8e97d6059ad"],["/google85949087cc957523.html","a2c49c20cac019e3dacc1f25fb1d9922"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","5b7ade59bb07f3411244957e0ad2ae02"],["/interest/index.html","89e70d1e0f928ba6a14ca83ca2d19192"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","ca7b741f094207e140021bc863627f3f"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","6312d5fa0a545d30788beb053eb2348a"],["/page/2/index.html","f6f76ee459847f0a8dc60ab14a8ea527"],["/page/3/index.html","50c24f0df2358697ea88900c84525f82"],["/page/4/index.html","570cf94f8e79992413182775f6ac27e0"],["/page/5/index.html","426bcb90948110f3acac6a8addd1be8a"],["/tags/Binary/index.html","20022f6360160ef9df922c498697f40f"],["/tags/C-C/index.html","964f4f84f9f8b1069c8867029812b64f"],["/tags/Git/index.html","c85fdb055e008e4884a8c69ecc26b96d"],["/tags/Java/index.html","db2a4d9b40904f2bcc5dbaeb8e1cd8d1"],["/tags/Linux/index.html","5062de5d1566653aeb0b144996729b19"],["/tags/MNIST/index.html","41718e063151a175d1952253f4b653d9"],["/tags/Machine-Learning/index.html","3cceebf8d63ac186b56680ea09f6a7ae"],["/tags/Python/index.html","067ec31768c2c6908faf2b83dc877581"],["/tags/STL/index.html","271bba374a951a6aee4bfdfc6c7d8197"],["/tags/Struct模块/index.html","4801d985f3b695d55bd45c2646a10d0d"],["/tags/define/index.html","b1bef33f10c5137edf07b7fe7d004b3e"],["/tags/github/index.html","c5d7990dd801edc3cfeb4b82f6b10e6e"],["/tags/hexo/index.html","399ce74e1612a3c843da9fc44c3f1975"],["/tags/import/index.html","32fafdcf6a327e853c2f8a42219f1029"],["/tags/index.html","4c75c4f92265580790b87ce15629460f"],["/tags/matplotlib/index.html","af5d10273b4ad8778df3ef83471d9e05"],["/tags/melody/index.html","6495e54c920d91ce15a888d035947dca"],["/tags/npm/index.html","9f5f4e7a56862c96f276171e8d592f73"],["/tags/priority-queue/index.html","7749dff321c0031122ae9cb04b8dd616"],["/tags/rain杂货/index.html","5c71862e59a2d872731526f0bb336ce9"],["/tags/socket通信/index.html","4e9ae3471eb92c42ab7ec3e3a7cbe925"],["/tags/this指针/index.html","ea4fa8e3e194b5da95da4ac001ef4054"],["/tags/typedef/index.html","50379cb206a974a2e411bbc112c4d7f0"],["/tags/中序表达式/index.html","9565d13e30cd25764b47f73f12137080"],["/tags/二叉树/index.html","ae9c18ce4db80a52727e440163b73e6d"],["/tags/二维数组/index.html","901d17d6f554bb3f421d256a951250dd"],["/tags/二进制处理/index.html","ecbf500ff0a0e0199e9bed5992ceb94e"],["/tags/优先级队列/index.html","b2c87c796a29377ec294d7935b6316ed"],["/tags/减治法/index.html","515d8c2d5a2f2372ae2d4e83ae0efd36"],["/tags/函数图像/index.html","d55ae4a2524d53fddbf9bac09c308583"],["/tags/函数调用/index.html","55d56a1cf94206c80c3a7a56cb4db678"],["/tags/分治法/index.html","aa66df7768cd1349c4e223d9437c5454"],["/tags/前序表达式/index.html","7ad9b55462111b3c5b36be271047809a"],["/tags/动态数组/index.html","ed2fcbe07921e5499076bfe2c062ac0b"],["/tags/单调栈/index.html","e7ed1135405f8ecf1759d1a3241dac46"],["/tags/博客美化/index.html","d2549a50484125495aa05917d918e208"],["/tags/右值/index.html","1405fc0353dc6d785cf53a37064eb43f"],["/tags/后序表达式/index.html","0f6f12c5116152de812804fc22e3384c"],["/tags/基础/index.html","c9b26905be77a6d481581d9d03daa331"],["/tags/堆/index.html","09baf11eecaca663bb26056804ee9f36"],["/tags/宏/index.html","c24c916310bd8a102bee03f556e84211"],["/tags/左值/index.html","b7a7a40214d67695204d75800cf25bc6"],["/tags/开源/index.html","0e70de3d8a81c0265593e7526872d20d"],["/tags/影音视频/index.html","a3c3c02f23d57dce76081795292b820e"],["/tags/括号匹配/index.html","c4ae35acf42845183a7b8dd502257abb"],["/tags/排序/index.html","78b8fa257c2272f97ba6d89fa2b3af02"],["/tags/数据可视化/index.html","437e96fa2c3f806b0849c2e70a44861f"],["/tags/数据解析/index.html","180ca5df220077bf4f78d931c81be905"],["/tags/文件流/index.html","490ff92eec6e5e8d3c31a4d3cc5d6b93"],["/tags/服务器/index.html","0f38fd6d18c450f4d3210053d2e9f13e"],["/tags/朴素贝叶斯/index.html","9e12d716dd965e00de50d021fb8f9922"],["/tags/机器学习/index.html","af611fc02b945a2eafd3d69a0b5243b0"],["/tags/构造函数/index.html","066c4708a33e7f26bc924008dd94f35e"],["/tags/析构函数/index.html","5eea7cda8e1a835d183cd3e0da2085db"],["/tags/标准库/index.html","ce73a91bbb0f64caae9df35040ea38b3"],["/tags/栈/index.html","ae3fc8dfa572a8af79cedd0778a626c8"],["/tags/模块/index.html","e95f7075b53084d223b1ac1aa04ce3e0"],["/tags/神经网络/index.html","cf1e3fd0349e09e9101db06c8d4548f5"],["/tags/程序设计语言原理/index.html","4c6f35eacc5183ee5aad9129fb8f9a80"],["/tags/算术表达式/index.html","b7fe0a0a55d30c5c05ae4b81b013edb9"],["/tags/算法/index.html","e57da32cda37cfa3cab54c23a5c333a0"],["/tags/素数/index.html","aed8b90483127bade729f759cc1b0408"],["/tags/考研/index.html","1db352c9bea4166eeff2656f33924db2"],["/tags/莞尔日记/index.html","3508a456f6db2d86acea07f0d43140a0"],["/tags/进制转换/index.html","648610ac068a9b41c7eac5033e69170e"],["/tags/逆波兰式/index.html","c84ecc9467fe2e7239b5a5f7f1957388"],["/tags/队列/index.html","83b3285fd9af5fd929676d442d05e8bb"],["/tags/面向对象/index.html","597caf156bcbd686c5178ab86b165004"]];
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




