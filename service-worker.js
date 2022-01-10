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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","9fce9daefe1b7f56697268e2dd9c997c"],["/2017/02/01/hello-world/index.html","b4b3fef563a302eb46b977361d08db19"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","6da9a9fe19d4edf3b592f0b79c634428"],["/2019/06/03/Linux-programming-examples/index.html","dc9952eefb098872b5c8de716bfac3d2"],["/2019/06/10/Server-basics-and-configuration/index.html","564b732aa4350e48db5de5ced3adeb9b"],["/2019/07/01/Linux-socket-communication-programming/index.html","1858d2dae6f73b8a0d85bd332d23b000"],["/2019/10/04/Python-function-call-and-module/index.html","85634580745701c86c414f4df5783a98"],["/2019/11/02/Python-100-days/index.html","f2458c272478bf79b051cd2977e2b00e"],["/2020/01/10/C-or-C++_dynamic-array/index.html","4f967fbdfcde45565d8cdf33add122ff"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","54ee4921b4382072620ef01988515266"],["/2020/03/20/Jincheng-lanzhou/index.html","4f9f3e76a7f1b6cd420ffc9df943246d"],["/2020/03/21/Cumt-aerial/index.html","437a185d1cfb74a8648300974318ae23"],["/2020/03/25/Bitree-construction-and-traversal/index.html","5bf84bd1fa2fb682f07c11ab04ea8d20"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","85a8d3a0318d3c6f0b10428046f07a71"],["/2020/03/27/Stack-application-bracket-matching/index.html","7662da1633c288c9e3e52d205a3c58e5"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","cf4bc7e8d232ebf43625a01b4f77a72f"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","6ec52ad40b9604bcda0bdd44db194ee4"],["/2020/05/30/School-celebration/index.html","5fbf5cb25aa6e1253e68bb4945cf4201"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","7f40ca539005009945d59c297b1ca01c"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","9ac90a1f755e38d2d1c37862c06d6d12"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","b1d092a2c3ad8634f7d356dbbcb5db01"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","ce8ad26bc5c9e623481175ee48c1a1c3"],["/2020/10/09/Python-data-visualization/index.html","5884cbe1dbf557080bf566def1f05371"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","e1d64afeadbdfab9d59b26e2247eb0b8"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","a91e3a681e4af960a5e02189b1da9ac0"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","4b597a757a34def7ade2a1611d386500"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","0f14e9d08b1d170d52ca451f2bf09457"],["/2020/11/02/Data-visualization-matplotlib/index.html","dfb6dc5bfb9604f27555382db422ab36"],["/2020/11/10/Naive-bayes/index.html","e0b16ac64bb54c1362fceb3ea45a10ad"],["/2020/11/28/Matplotlib-function/index.html","69df720a50a75ecf7076877b0f3dab92"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","ae732334adb92f0d473818b51fe2dc8c"],["/2021/04/27/Git-usage/index.html","7c8726fa1ff4082b3d91b48aafcd0abe"],["/2021/05/06/Arithmetic-expression/index.html","e6ff6b89aa5775591f811a7acf3f011c"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","e0546c3c43c3e35efdef3fc577e55096"],["/2021/06/25/Classic_TopK_problem/index.html","937608bf5d146c6ac1e970498d66132e"],["/2021/06/27/Calculate_prime_numbers/index.html","d7340e8cf45407f6369fc5a5c58b9ef0"],["/2021/06/28/Priority_queue_and_heap/index.html","a3eaa9a346c7b7bb52be3428f5c0efff"],["/2021/07/15/cpp_constructor_and_destructor/index.html","f40899cf083e4cda5bc530a961858fc4"],["/2021/07/17/cpp_file_stream/index.html","cc410fc7f50d5d128335bd5d477fe9f5"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","e806dbd18c71590df6483c191349c1e9"],["/2021/07/22/cpp_this_pointer/index.html","195a92ec13045946aba030e66a6e001e"],["/2021/07/26/cpp_algorithm_analysis/index.html","2d4b3340652971f4b5a111d509a520c0"],["/2021/10/27/Git_common_commands/index.html","e97420c7513e3ec542a623bf60d1eeb1"],["/2021/11/10/cpp_singleton_pattern/index.html","db5287b709b2eccadf1a39c8ce5970a3"],["/2021/12/05/Semantic_version_control/index.html","6c99aadb71985a19e260db4162c3aacb"],["/2022/01/10/cpp11_default_and_delete/index.html","b1b54fa238803afa0aad010dea7949be"],["/2022/01/10/cpp_constructor_and_assign/index.html","f661ed38412b3cfee1fa1eae95747816"],["/404.html","9c1750185e6813779f0dfb66ceeaf498"],["/about/index.html","22c92b3aa010668aaec9218c214b7220"],["/archives/2017/02/index.html","ed51f27439acabf76226dffe52a08a97"],["/archives/2017/index.html","a8344828f42c7923574f5ddbcdeae71a"],["/archives/2019/01/index.html","85c1873df95ffdebcb4aa93dadd631fe"],["/archives/2019/06/index.html","a1c540d712186103e937e8f1ffdb5ae5"],["/archives/2019/07/index.html","26304b01846fe51bbc826bb4e32468dc"],["/archives/2019/10/index.html","e3e49607434e01b05cf48f5df3439614"],["/archives/2019/11/index.html","5e96d527521deef13bf75c25e58343b7"],["/archives/2019/12/index.html","32dca50d62edde97976e7f06bfa2bcad"],["/archives/2019/index.html","4b8787999d3a1cfcc8a4ec528ad670bc"],["/archives/2020/01/index.html","48f472c1b50727e926c16a35d9e3ae57"],["/archives/2020/02/index.html","d988ce749a52024f9f61b7b7cd926ed7"],["/archives/2020/03/index.html","82b3a70fd0f4956869aeb2426511d93e"],["/archives/2020/04/index.html","5ef67f89de53230efeae7df6c80ef39d"],["/archives/2020/05/index.html","ae05603fc23352bfe27dd75721c52ea7"],["/archives/2020/06/index.html","3a2343e3e5e155d3e517556ea0ae6a1b"],["/archives/2020/07/index.html","8801f597d75f2d2ea795060b86455a91"],["/archives/2020/08/index.html","a077f775cfe94babe425a749dd432be9"],["/archives/2020/09/index.html","800fd47d16b1a90e202a199a2b007d66"],["/archives/2020/10/index.html","f0dc3ac17d533a1172a5095303038e3e"],["/archives/2020/11/index.html","de6a65409bdc53c689505feb9fdf0a54"],["/archives/2020/index.html","46cbcc1d801b79110ca6ef573a895db9"],["/archives/2020/page/2/index.html","0216397b4463847968b44f7a57582f5c"],["/archives/2020/page/3/index.html","f365c3c3c32f35dbb13818bc36268ad6"],["/archives/2021/03/index.html","b556b65c172c1e7d5aae54efb970d119"],["/archives/2021/04/index.html","f7267210757984275114750e8adb073d"],["/archives/2021/05/index.html","622baef73028e5a97f76b7a2fcb02ed0"],["/archives/2021/06/index.html","4ccdb525f0dfb4b5d734008e7b2fb8f4"],["/archives/2021/07/index.html","b8722cd29926eab2a5d3c228593f7956"],["/archives/2021/10/index.html","d04176989f17fd9ecea970c307dc2d87"],["/archives/2021/11/index.html","ecb073d23132b8c3b9c49bfa041edd39"],["/archives/2021/12/index.html","ab1a34ae3cab5e26d87eabd32101c8ca"],["/archives/2021/index.html","14cbb861501e7e30814fb38f32e0c996"],["/archives/2021/page/2/index.html","27e8994b2143af2e42c66f6601265bcc"],["/archives/2022/01/index.html","772923d8a3a840b91c66e04baca8560b"],["/archives/2022/index.html","2ef018e86bbb9426fe805538bac633a4"],["/archives/index.html","9dfb58fd628e0c4141c72bf5cb97c737"],["/archives/page/2/index.html","d223547b246257735c6a844aeaa02fd6"],["/archives/page/3/index.html","97d09e991dc70fdfc398ff2de8670ef2"],["/archives/page/4/index.html","73045fb729552bdd6955dfa3f8190eb0"],["/archives/page/5/index.html","647d4beccee7329ae20954a4e2a36d8a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","85610a0a2d300365f7ea1986bdf3283e"],["/categories/C-C/index.html","c26bb7d993039f4cc8778db3eaa925f5"],["/categories/C-C/page/2/index.html","887aa919945422ed10d9a13dafcdc867"],["/categories/GitHub/index.html","fe3cd49d64ec014f4cf7eb2a2abc87de"],["/categories/Hexo博客搭建/index.html","81e0bb28c0e1550dd7f97f7a5f5cd62b"],["/categories/Linux-学习/index.html","b712822ae74666e90691a9a5314c6dd3"],["/categories/index.html","ed96301779372bf6c3eb27d0710a8cfe"],["/categories/博客搭建/index.html","19c5ae043f022c7d38d48b02e177c1e9"],["/categories/学习笔记/LeetCode刷题/index.html","4998c90b6b3d4bb11de54f2359c2db87"],["/categories/学习笔记/Machine-Learning/index.html","3a4cd88250ebd82c3cb5214326714d7e"],["/categories/学习笔记/Python/index.html","9c50ebd1518bea9af3065d6928ee6ec0"],["/categories/学习笔记/index.html","b743ec3e2d08e9a66b3cd0fda872b06c"],["/categories/学习笔记/page/2/index.html","b6e021e485fac4144d64ec24d62cb799"],["/categories/转载/index.html","4cd8750d6038d1912f5941027daad6ab"],["/categories/随笔-杂谈/index.html","3f956f93ce54810820bbc4d33f7fb455"],["/clover/index.html","6103e7f9013cfa47d71c9f646d892f45"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","123bae0982fa91cb75d38d42782b47aa"],["/google85949087cc957523.html","f7482b5ec8cbb744d81bf076600c8cd7"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","32e159878b6e54eb4cc86ad26d20e55f"],["/interest/index.html","1d52871df630535c917b18f0d4f27047"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","75aaa35778c7e161f841968d40f81d28"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","09f51644bfba6a418dda74ee79b838e1"],["/page/2/index.html","6635e81c1ea5e29e1f4225d1c848973d"],["/page/3/index.html","ce7d69be8465fd9ebe24a530f4326223"],["/page/4/index.html","fb03e69b71db6f257dc57cd8d2967044"],["/page/5/index.html","fc2d9855ea1a9d6812e2c9bde372e630"],["/tags/Binary/index.html","a1c573068a3c2ad85e2ef9c84e5e8ae6"],["/tags/C-C/index.html","125a0e19a55dec8606fa065c1fac761a"],["/tags/DCLP/index.html","3461eba0cdcb51b015458d8bb5acbe16"],["/tags/Git/index.html","fe5d927686702cecf1916290c5fbe8bb"],["/tags/Java/index.html","4686d2ed86867658eacb2bee8a7e4a03"],["/tags/Linux/index.html","824454c83741f307345a7ddd7d58e894"],["/tags/MNIST/index.html","c2779fa61e96af80161302c7f0c94855"],["/tags/Machine-Learning/index.html","e230f7a268e022a80ad9a0c04c992af7"],["/tags/Python/index.html","709570da4b4541b79812487852332b1b"],["/tags/STL/index.html","47536adfb5f790f887604fc27da81e25"],["/tags/Struct模块/index.html","716f4368a4808e26990f96ec8352eeb0"],["/tags/define/index.html","fbd6e561518667fd7a4f83703d5ecf27"],["/tags/github/index.html","1284bc35307e277310de45de572ae0d5"],["/tags/hexo/index.html","b2ea5284a6678e6a8e5a0d3eeb5eaa8c"],["/tags/import/index.html","a3d29c8e12e7eb643588786ad6f1b758"],["/tags/index.html","02ed49b370de56599242f7bae1e3c7a1"],["/tags/matplotlib/index.html","63706e5d8d5e9735ee0ff205355afd11"],["/tags/melody/index.html","20caefd289490b1e38a6f296bd32b235"],["/tags/npm/index.html","9cf0a4827842e69d0efcafa693ae7021"],["/tags/priority-queue/index.html","b7546a31ad4110b0bb0176add8dcd19d"],["/tags/rain杂货/index.html","2dbc2c5f83ff6eed4643f544c6570a7c"],["/tags/socket通信/index.html","31a2ab6cee5ff6a5a2b6ddcba14e747e"],["/tags/this指针/index.html","bda27d898f9387aaf7ac34ec86b7fe23"],["/tags/typedef/index.html","5b3722cdbbe730a569753da91c5849b8"],["/tags/中序表达式/index.html","48e87a4100f4404c7c01df8ca06ab215"],["/tags/二叉树/index.html","9b93a6f3a186c9df2f0b54ad0b20c5ba"],["/tags/二维数组/index.html","0a2d85438516d078d9d2e649f6ae50e3"],["/tags/二进制处理/index.html","c8a8c19e129ea9e1e82b5dca87a66edd"],["/tags/优先级队列/index.html","09599084e86d5995eb897bef4d073032"],["/tags/减治法/index.html","6fcbd6777dae572ad5bcf33efa48953c"],["/tags/函数图像/index.html","9be5f9f3aeb2e96801baf5a5ccc35c04"],["/tags/函数调用/index.html","6b3031ae07f17611ea69433c32753ec3"],["/tags/分治法/index.html","fde2d9cf40477e45f7ee5e51397d5edc"],["/tags/前序表达式/index.html","fc8fae888013824d6bf7505305d13d4a"],["/tags/动态数组/index.html","84eb0a4b113ccf555c7c73d9e0175328"],["/tags/单例模式/index.html","1ec54d432fa27ee9907cdd87bb021cd4"],["/tags/单调栈/index.html","93001d76ac4d068bed74229bd1d16e8e"],["/tags/博客美化/index.html","34cf8d407b7f344085266d547a57bbd2"],["/tags/右值/index.html","32001523d2d05764524d27b9013c1df0"],["/tags/后序表达式/index.html","af4bae2f462fd2e9e1ae580749a4b0da"],["/tags/基础/index.html","ca460aa323d671473e9fdd334b24d618"],["/tags/堆/index.html","5b4b5ed2d62a1f9cde80f57936fcb959"],["/tags/多线程/index.html","11266357293c38ac9bcd69341b80170a"],["/tags/宏/index.html","25a3930df0b78db71b633fb4c506fc05"],["/tags/左值/index.html","4ffbe069beb782d804432c4b59bc207f"],["/tags/开源/index.html","4887ad61bbb41fcb5f4bcfa0093159c2"],["/tags/影音视频/index.html","c6a4f42ff9499d9c60d5d40fdff26985"],["/tags/括号匹配/index.html","bfd62c587e764d59231efaf2c56fd0ac"],["/tags/排序/index.html","b3726e0ec42bbe5c4c3728c7af8f5ff0"],["/tags/数据可视化/index.html","3ee4a4d887cf33288d1033023ab5e7b1"],["/tags/数据解析/index.html","feff06ce47e426590258e16c0da2398d"],["/tags/文件流/index.html","c8783d83f2753eae25d4d35f6b845e37"],["/tags/服务器/index.html","fda1e9382fd249bc596d23b54a70769e"],["/tags/朴素贝叶斯/index.html","bd6363921296a114e6692ae1a5db8639"],["/tags/机器学习/index.html","42781f9de92301b46f69ee2cada04d7f"],["/tags/构造函数/index.html","11e04f0b9958ed4841f37342c3fc5497"],["/tags/析构函数/index.html","54698a4ab282db67e545ed8734f38d08"],["/tags/标准库/index.html","4bdd4725d1b22c9aab6e0debd128514f"],["/tags/栈/index.html","86cd8011d1fda5b48f7096ec07012c77"],["/tags/模块/index.html","7e5485cf3f1a984d04de7db4d6ba8e18"],["/tags/版本控制/index.html","0ac072f6175973b1c7bc2330a8d97973"],["/tags/神经网络/index.html","492c6eb6a8d3f59308b29df2514e9614"],["/tags/程序设计语言原理/index.html","9e538efa2d3ab16b7deb9ed506bf0ce6"],["/tags/算术表达式/index.html","84a65d641812fefb37a7202090e80e56"],["/tags/算法/index.html","999637e46e5fdc7fcb8abbb9f9b008ef"],["/tags/素数/index.html","8c235de7846190f91b3662b4b0367c71"],["/tags/考研/index.html","bc640642632bf2b6859a60f53b78df71"],["/tags/莞尔日记/index.html","a32c503ad0b8b246fe3b06118b9537f9"],["/tags/设计模式/index.html","ee8ca7880faf5c410761c35aa76c9ecb"],["/tags/赋值运算符/index.html","00ba1f39be610d3cd439039a996161af"],["/tags/进制转换/index.html","f1508f4462abb9d218346c7bbf7e425f"],["/tags/逆波兰式/index.html","f04d020f9df664498181abf32f52cdf5"],["/tags/锁机制/index.html","950ad9d5234cf71abf292ef31a6d6647"],["/tags/队列/index.html","35dbccdbebd5e3050843de68a412cfd6"],["/tags/面向对象/index.html","d3b31081dbb5a5576416ad4b96022bfa"]];
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




