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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","7029330fd16de6de3bb43428ea1a4fda"],["/2017/02/01/hello-world/index.html","9c78fdb8dede98c4fecfa3e7eacd98c3"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","291c65921f1f5dbb02df87707e5bc6d9"],["/2019/06/03/Linux-programming-examples/index.html","80779497c972e76e5fac187037bb688b"],["/2019/06/10/Server-basics-and-configuration/index.html","bb3771276ba6883271e022ad33c008e8"],["/2019/07/01/Linux-socket-communication-programming/index.html","5b472e3e43563c411b20a28dda81e89f"],["/2019/10/04/Python-function-call-and-module/index.html","bbd425fc774144abd266e9f1348b9c2d"],["/2019/11/02/Python-100-days/index.html","f9134d92d6c66f297974a9335ddbea01"],["/2020/01/10/C-or-C++_dynamic-array/index.html","6455aa8c76aa299ea7fa2ead28a934a2"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","f0567716ce80d2221c63a454f9f6d913"],["/2020/03/20/Jincheng-lanzhou/index.html","fc0e31114fba63e37ce61342990107c8"],["/2020/03/21/Cumt-aerial/index.html","a3e3b12a852500707821f7a37360fc53"],["/2020/03/25/Bitree-construction-and-traversal/index.html","4fba16ab579bb033984a969ce1d1c0f4"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","906ba6371ce123c1f55bfac4831aeea2"],["/2020/03/27/Stack-application-bracket-matching/index.html","68705a549977aef2582292625af3919b"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","38ec67fcad30719cb3ddcbc2dab7750d"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","1dcac7997ca44b536ca3f72f21fafff4"],["/2020/05/30/School-celebration/index.html","c573f24e00071998a63f1cbceb03fd31"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","cef22da148400fef7370190c848b1a47"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","4726f0d7df58c1a3c88da30567bd91a1"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","31c42349c82058550e6a45e70a52f32b"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","f7e3e0334a5556a228af41afe2e4cb3e"],["/2020/10/09/Python-data-visualization/index.html","958b15c2afacf31b05925d607d6ab2e2"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","4c0072ff3a11f0f5c37a946025ac2d31"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","efd706638eb075aa31e995604fe2a654"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","88159b92c415763f14baaa0cd2c133eb"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","8260715cb4e40421ae19e2b7b7847723"],["/2020/11/02/Data-visualization-matplotlib/index.html","ee5caa07705fbb8248e14e3aad200e68"],["/2020/11/10/Naive-bayes/index.html","ae1471b7e6560c1f022c35e107575331"],["/2020/11/28/Matplotlib-function/index.html","a890d6df0fbe5a2492a15dc60c5b6c9b"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","8a1940d684ec1fe638c45a4fa0e4ac2a"],["/2021/04/27/Git-usage/index.html","71090a238f4d4d4839239db6941f4e49"],["/2021/05/06/Arithmetic-expression/index.html","7ea63dfd9217838d694ad506416e8d7e"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","ec397e1aab546cf116cd66c21fa179b2"],["/2021/06/25/Classic_TopK_problem/index.html","6ae5ec8634cfc15e9a3b133ef9327792"],["/2021/06/27/Calculate_prime_numbers/index.html","bc32ce1c07ea00d8249882b660fcd431"],["/2021/06/28/Priority_queue_and_heap/index.html","2349a51da59d6af78e426386224d0dee"],["/2021/07/15/cpp_constructor_and_destructor/index.html","d794f9fd272bdb52178eab11b9285822"],["/2021/07/17/cpp_file_stream/index.html","381250ca28a2adac860a0b8b68bcb8e8"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","d45504eeb0d96a23973363f458259264"],["/2021/07/22/cpp_this_pointer/index.html","f33ba6d7b5dd6878b9cd9c1b6f900ff2"],["/2021/07/26/cpp_algorithm_analysis/index.html","77f79ab610fe4ee787b3cb7b3da0030b"],["/2021/10/27/Git_common_commands/index.html","942a22ca36ebba2cb1c566256bd47016"],["/2021/11/10/cpp_singleton_pattern/index.html","e2942b562658217a297581d5428c358f"],["/2021/12/05/Semantic_version_control/index.html","7081d4cea5543e3a0afb59ed5308e8e0"],["/2022/01/10/cpp11_default_and_delete/index.html","80c765d485e81de16833b5e1aa069b4c"],["/2022/01/10/cpp_constructor_and_assign/index.html","4996b85a7464f12df213cdfee8589635"],["/2022/03/18/Static_and_dynamic_libraries/index.html","7230eb1b1698c3576a3075bf044bfb0c"],["/2022/05/07/cpp_main_function_parameters/index.html","6497f9a05d568efafdb0102dc00da195"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","5b01605ec13f119103444bf06c2209a5"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","300ba6722d0b36c7de707cb19f703583"],["/404.html","d81d27eeaf5a3c659a2af468e845f466"],["/about/index.html","6e2a2febaf4f3bf6b4beec1c96f3fc8e"],["/archives/2017/02/index.html","778cb472bcfe8c42eeb8711edd8ab88c"],["/archives/2017/index.html","c2e5d22124afac782bca9e88df7b264d"],["/archives/2019/01/index.html","da1ba10a20920641ef07f2aeb805913d"],["/archives/2019/06/index.html","5ab2b27c6669b8e89838541667486f3e"],["/archives/2019/07/index.html","579130ddc587dba8d09310f4fdaa5fee"],["/archives/2019/10/index.html","23d32b422964587386f1407517afcc1d"],["/archives/2019/11/index.html","26d2411bfda595cf382c889290e8d1f0"],["/archives/2019/12/index.html","c88d73767cbe6fb4dfbec2a73d60e3a9"],["/archives/2019/index.html","a9219210f2390d5d91ff482e762b8a83"],["/archives/2020/01/index.html","986118f804d094342a29160ee0d3f285"],["/archives/2020/02/index.html","33809923721bc0b130a95cf3293a08dc"],["/archives/2020/03/index.html","117e0e0919d8230e75942f072fac0c88"],["/archives/2020/04/index.html","4de38808b82fff705a82bc548ad2c17c"],["/archives/2020/05/index.html","fe5789592d0817b449f10298b1e6178e"],["/archives/2020/06/index.html","b2290136ab748f8641c5ea339a776ec3"],["/archives/2020/07/index.html","514a995091cfa3e94583caac8c4f3fb9"],["/archives/2020/08/index.html","e3e082571e2572de384edfbef67ad9f5"],["/archives/2020/09/index.html","5f90e12255452827fd0691fc75cd6653"],["/archives/2020/10/index.html","89a50fb21a8f193cb7ffa7a75afcd0e3"],["/archives/2020/11/index.html","1a423bd2009e9f6ceaf0daeeac6cd60c"],["/archives/2020/index.html","6c56841f99b89a2ef9a99718e4b47f68"],["/archives/2020/page/2/index.html","a6c041d6a7fb40ce87f188f92e03a7c5"],["/archives/2020/page/3/index.html","038d6a16e1785ecdd28b7d905ba3e95e"],["/archives/2021/03/index.html","0edfa4532c8db96693c11908d8c62b7f"],["/archives/2021/04/index.html","05eddffa84dd9627a9e8ea971578933f"],["/archives/2021/05/index.html","83bff181bb11750aeb24ccb0019cad3d"],["/archives/2021/06/index.html","d245661ad12e5ef3ebeb83ab8ef09df3"],["/archives/2021/07/index.html","97ba165c453dd7551e0f887fc93fed13"],["/archives/2021/10/index.html","afc1a43d2c196417178aced0a0915bb6"],["/archives/2021/11/index.html","4574ce786ae4524c99b135e2c1585b4e"],["/archives/2021/12/index.html","96e75f4712bc593a964c1f2ab6f4d67f"],["/archives/2021/index.html","4c3cc4c0ecfd2691e6523a2222983cec"],["/archives/2021/page/2/index.html","05c220ba792dcad5717d4352b26006f8"],["/archives/2022/01/index.html","662f7ce62321e1fcc2e2222f59510db9"],["/archives/2022/03/index.html","555c2f8b818533e4a7c782b5c7cab109"],["/archives/2022/05/index.html","c1709ae47768eb389bf7a0e991c83d9b"],["/archives/2022/index.html","3abb01db999cfc784f165a35a4f839ce"],["/archives/index.html","a7b6c6c8aacc160bb783f7881cf7a45c"],["/archives/page/2/index.html","3aea9e5c1490860b1dce03c0bfb70e23"],["/archives/page/3/index.html","64a4fb17fcf660789aa6ed75821bb4e1"],["/archives/page/4/index.html","5952591b61cd8fa09490d41730f1744c"],["/archives/page/5/index.html","96ffbc2ba8248a10b0f53adee98267ec"],["/archives/page/6/index.html","c37e92bd883e6277f03f5f75bbc3cda2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","2177049e5b8d6efc150e18ee28cd9f03"],["/categories/C-C/index.html","3e5708ca44d61ce2f7f652567a9c3f2d"],["/categories/C-C/page/2/index.html","e1f7de93cc42303a7bb280869a27a8e9"],["/categories/GitHub/index.html","43a02211eb364da317965d7de11a3b68"],["/categories/Linux-学习/index.html","f843d77dcc75b183d96669288457c075"],["/categories/index.html","70eba5a93649810d1ab3f85ef1ef5d79"],["/categories/博客搭建/index.html","25e02ef3ebb0e3092ba5332bc99c6060"],["/categories/学习笔记/LeetCode刷题/index.html","f9a49834b7f478017808b68c8d4ef3bf"],["/categories/学习笔记/Machine-Learning/index.html","64e70950eb57c0168b7d9fdfaf7aa848"],["/categories/学习笔记/Python/index.html","c5684ccbfc55e4f7c8d3d34cdd387eb5"],["/categories/学习笔记/index.html","2b5d8e73efe5e5f35a1da6d55bf3863b"],["/categories/学习笔记/page/2/index.html","2f3c1fe6db4e94035944070c19cf3080"],["/categories/转载/index.html","48140e103c6d693fa19c507d006c8da4"],["/categories/随笔-杂谈/index.html","fa7a415e5824cd8609b83e1175bf8088"],["/clover/index.html","93cd7be8bfa6597f469fae3fc70d44ce"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","5473668d2fa10e0f4f2d72df2288be54"],["/google85949087cc957523.html","9d1631fccf9866bb78bfb33d955deddd"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","76536910aedce40e947af9d990b0b565"],["/interest/index.html","9a6a87a71790474116fca7c966b9caab"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","85fd0ba21c7d5285307dde0eae2152cf"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","8761bb0c6ee8063ee838d4a3a23c1cc7"],["/page/2/index.html","d242b1458c1752b14e483bb702bec42f"],["/page/3/index.html","578f4bf3e925a59aaba8bf5efb59a150"],["/page/4/index.html","b4b15b8a12860487b608fc86c0698c4b"],["/page/5/index.html","48b863432e6eecbe6b58db463678a48f"],["/page/6/index.html","d54c48f2f698beeabe4ac0a1e70fa85e"],["/tags/Binary/index.html","502fa172b67aea353ea42d3a1de2aab0"],["/tags/C-C/index.html","9325c6fa197e4e80a1be3f53b478c0c2"],["/tags/DCLP/index.html","f869ed4b0a21559df1efa98a7430fecf"],["/tags/Git/index.html","ff8289886a761758ba79be18c4012e75"],["/tags/Java/index.html","5f0157eea2766b594c85df0acf83d125"],["/tags/Linux/index.html","4e7ffbed743b547e4cc28254d97667d5"],["/tags/MNIST/index.html","59b7377c1449209de014497c13a8855a"],["/tags/Machine-Learning/index.html","b333fa48e3bc020441b3afb841c5acec"],["/tags/Python/index.html","8271c7b19b1732acfd1b00cf19d98c24"],["/tags/STL/index.html","7f136646f92d2a321e729dcc73610b46"],["/tags/Struct模块/index.html","1927034b58abfc6f2730e5c328e5907e"],["/tags/Windows/index.html","e988c8734db36368100edbe2f8e056cf"],["/tags/define/index.html","a59b03411ab1223689b7526b60f73425"],["/tags/github/index.html","b0cc0f060d17d157531dd5b9e6fd139a"],["/tags/hexo/index.html","ab9e9d29a9446ea15b1ead75b1556952"],["/tags/import/index.html","18c0bb05f6c05c95aa0029298ea1b224"],["/tags/index.html","f49f40ccaf492def07bc364b6182e94a"],["/tags/initializer-list/index.html","5a82bf2c991a44b2990f767444238d92"],["/tags/main形参/index.html","803916c40a35110cc6f7e8197c8b6a3f"],["/tags/matplotlib/index.html","e65d1634fe1dad7a70a80fb01aa6d905"],["/tags/melody/index.html","51062e1bc883b7acede75870c8fdb20d"],["/tags/npm/index.html","c84f0290590432d6089167322bdf70e1"],["/tags/priority-queue/index.html","3c4cb238fb9b8604ca0a0e1c682ead06"],["/tags/rain杂货/index.html","8469deb72269dc367292ad26787f82ad"],["/tags/socket通信/index.html","3774bb9b3c48c11c069d073c3f6d960d"],["/tags/this指针/index.html","db00b37e9263ae00b10db18dfcf856f3"],["/tags/typedef/index.html","ffa6b28f984c42ecdafb1fb92c5ae200"],["/tags/using/index.html","d3d5bb9ef4a3841068d3ca6a3f0c75dd"],["/tags/中序表达式/index.html","e3f03aaea833c34550b7ede4911803b1"],["/tags/二叉树/index.html","081232c8abb18a75d4c97d1f88df52b9"],["/tags/二维数组/index.html","86169cd5dc19d9ecefa6f2a1244b900e"],["/tags/二进制处理/index.html","3540941df38e83ed88cf5a9aa858e703"],["/tags/优先级队列/index.html","1b4b8d8c3e92c5122db6955325a23277"],["/tags/内联函数/index.html","2a0785e4144f9d8e27106916bfa614d6"],["/tags/减治法/index.html","4c7b78155d7a8b4a8d8980d858320449"],["/tags/函数/index.html","e1f72318de8a3829071e0051f192c577"],["/tags/函数图像/index.html","0d8a9a9cbb164e1a040a5b10c83114f4"],["/tags/函数调用/index.html","230da0898a5f8461109e0d1bcccc9213"],["/tags/分治法/index.html","833040e5957eee4a7bd344a36662f218"],["/tags/前序表达式/index.html","68ac9132b2c8be5730d861595d066211"],["/tags/动态库/index.html","b7a935230e28bc8ed53fff74c699f9a9"],["/tags/动态数组/index.html","c432e79884526b3acb7177d0e1f65cef"],["/tags/单例模式/index.html","7b873389d1df6cdb3d24c16611f74199"],["/tags/单调栈/index.html","6ecede26d1523f455038b4cc67f99bad"],["/tags/博客美化/index.html","61b9d840a61e3020bda2e74d8300c5f4"],["/tags/参数传递/index.html","36003fbb6da401758b606f19e590fa65"],["/tags/可变形参/index.html","ae1cf9ad32eaca6bb741a8e9659129c9"],["/tags/右值/index.html","9dfefbe45a08983d8c9f962427ec1ec8"],["/tags/后序表达式/index.html","c34fab367369204eea63de607795e8c5"],["/tags/基础/index.html","041e6864c794e9ec65cf85285102f24e"],["/tags/堆/index.html","a3831c7103f196ee2d545bb77c6dbcea"],["/tags/多线程/index.html","7d85a05899f79d702f13644836c68070"],["/tags/宏/index.html","9ed1ba9de3cfc5f71757bacf1568e64d"],["/tags/左值/index.html","42915f282b376d1536fb510912e3c7f3"],["/tags/开源/index.html","b1d01cf56b5cb13766f54932fa8268f4"],["/tags/影音视频/index.html","f4dbbffb4fb102903dbde604000d65fd"],["/tags/成员函数/index.html","e22881f711af18aa68fda82af0ce019e"],["/tags/括号匹配/index.html","7a1a402f52071e8b8d1d36e5c9849b11"],["/tags/排序/index.html","964d2487be3c319ffac3a746635ef047"],["/tags/数据可视化/index.html","a6fc1f2b47aad916f07bdc790c715d86"],["/tags/数据解析/index.html","7501c6cef5caf9b96b624677c50a10b5"],["/tags/文件流/index.html","beb1e02ef9f24fb9faa2660302eb3b9d"],["/tags/服务器/index.html","a3ee398f0c42f86f89c10de07e86b704"],["/tags/朴素贝叶斯/index.html","8b1700e99f76365245a06851305240ca"],["/tags/机器学习/index.html","d6e298c8065cdbb95e218711cadc654d"],["/tags/构造函数/index.html","bccb7b3daa78fd19bf8a50dd2bbd5401"],["/tags/析构函数/index.html","5de87f6d9d09eb03a7fc7e20e6b6d79a"],["/tags/标准库/index.html","4beeac21c2a4761cee26f2ff3ad45c72"],["/tags/栈/index.html","2d41f3c8ec98a768a212a5944393290e"],["/tags/模块/index.html","47c7434d38b42574313b6c3865e54040"],["/tags/版本控制/index.html","7d173d1e1b10d31d34131edec876c4eb"],["/tags/省略符形参/index.html","710eee0f1dc6539f67072688628a06f9"],["/tags/神经网络/index.html","f8da8f0be078c52b9c4b4297fe5b4e0c"],["/tags/程序设计语言原理/index.html","ac27114ca831159cfee0bcf8c9b3ccf6"],["/tags/算术表达式/index.html","49e2d520bc6ec6820faa1dce9a4189af"],["/tags/算法/index.html","046fd1ba6e060f3f3f0ad9c983a901ea"],["/tags/类/index.html","42821a5f214d6a4df91bece4981976f0"],["/tags/素数/index.html","fe5c15632ec91e4609d89252e54917c9"],["/tags/考研/index.html","42a4e24a656c04a996d2ff28a8dd6588"],["/tags/莞尔日记/index.html","2fa6e8ef005c3963916b69c78982b553"],["/tags/设计模式/index.html","fbc1508654f40814e5c447b1fa81869a"],["/tags/赋值运算符/index.html","f053f23f4aaa2cf90997814f2d969b14"],["/tags/进制转换/index.html","8176e43a3267df1358da127e96498d83"],["/tags/逆波兰式/index.html","74e1f5f0206aac5bee94070e934a1112"],["/tags/锁机制/index.html","68f7c27b8020702961e26b76025b8304"],["/tags/队列/index.html","3498866edfd5dd934f3f713d3ce5b69b"],["/tags/隐式内联/index.html","c3d6a2cbab9a377193ef206126618757"],["/tags/静态库/index.html","c041b5b08c4dfa09ada0373c4240d049"],["/tags/面向对象/index.html","89cf5e94af7a4bcbf3acc1f475e0b7c4"]];
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




