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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","3637f4e38e59a3d6c000158de4767a3c"],["/2017/02/01/hello-world/index.html","d1c338be2d4e2632c65ef3b0f3fa46d6"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","35a346b75895028e3b3d843eaed26de0"],["/2019/06/03/Linux-programming-examples/index.html","bdbd83bf06e1df5448c76956993c91b1"],["/2019/06/10/Server-basics-and-configuration/index.html","4dce321f9a1422362e09fc4856ddf0eb"],["/2019/07/01/Linux-socket-communication-programming/index.html","8808210908bb59233f4147150e123be9"],["/2019/10/04/Python-function-call-and-module/index.html","f46ed1a9ed2edaa774e8f5f3903b287e"],["/2019/11/02/Python-100-days/index.html","71fcef77b5f61c6a787cca6e4088deea"],["/2020/01/10/C-or-C++_dynamic-array/index.html","258d79e357cb7692c8225b177001d46b"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","4b751a0f26b226a47242ff1c29968345"],["/2020/03/20/Jincheng-lanzhou/index.html","549d2c110dab6c884186402035d701d6"],["/2020/03/21/Cumt-aerial/index.html","948f8b64192d78675f725a4e0ac56ad8"],["/2020/03/25/Bitree-construction-and-traversal/index.html","5869987e73d10c8e77c3f33413054389"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","ea72b0f37169290ddde148992af7c0bd"],["/2020/03/27/Stack-application-bracket-matching/index.html","65d171af1ade4976afcbf178637b9c37"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","6fdc030d102ecc2ec162cdcf293a55ea"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","a155dd92f1c667508878edb9a802ed87"],["/2020/05/30/School-celebration/index.html","40822387dfb1959dda4d6c109dbb9ef8"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","2a6646ef239928b3ca6ad370754f6bf5"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","3778caeb2e0cd72038399f37bd5cf012"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","c3896acbb28ce1c753ab8ed9aec816ef"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","703c025c2345a3756af1807988bd38d0"],["/2020/10/09/Python-data-visualization/index.html","bf020677cdd615c3ef6d73a255c30cdd"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","433a30fd8efc045558fd7c966c07d56a"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","22403f3c05e74b8fc8d079beb7f30a31"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","153ce5c263daa429c5d18c25b22e5ff2"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","6e06541c07807bdc2f0ea1927b12e4e9"],["/2020/11/02/Data-visualization-matplotlib/index.html","e05308ec234c7992453869303ad6b35e"],["/2020/11/10/Naive-bayes/index.html","8dfff5d74b13feb823c763608d7d3309"],["/2020/11/28/Matplotlib-function/index.html","0a39b19748695c08deb7b9964e19ba43"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","feb7369df9730be79aa76f43bb00cd97"],["/2021/04/27/Git-usage/index.html","fc70deed7d3a6754d07af07e0c091dea"],["/2021/05/06/Arithmetic-expression/index.html","7baecfa365675e4436125b893b36a090"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","ec8e53dc5c46c90eb69f02a543990ac3"],["/2021/06/25/Classic_TopK_problem/index.html","ebb1d5bd49bacca65bb27242370d1ac9"],["/2021/06/27/Calculate_prime_numbers/index.html","aee9ab1444f36432a2690156f2a06b68"],["/2021/06/28/Priority_queue_and_heap/index.html","ff25677cbc7c593ae455a73310e1cb0f"],["/2021/07/15/cpp_constructor_and_destructor/index.html","56df9b1b95aa3cd16abbc9e00541b47f"],["/2021/07/17/cpp_file_stream/index.html","105f9cd095a5f5257199e96565d9ffbf"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","b9887c34769b01c0a75e8d25b21acbde"],["/2021/07/22/cpp_this_pointer/index.html","3af5f8d88e2cb1f0275e49eae4c0d378"],["/2021/07/26/cpp_algorithm_analysis/index.html","4a9b2c9c544159e7173e5271f7525063"],["/2021/10/27/Git_common_commands/index.html","093549bebfb42e856b1435a6fb46d6a0"],["/2021/11/10/cpp_singleton_pattern/index.html","14c5286fc4ff9882cc7db5cf09b376b9"],["/2021/12/05/Semantic_version_control/index.html","dee3ce12d170d73f036b9eec028fad83"],["/2022/01/10/cpp11_default_and_delete/index.html","6dd59eb739b79dada06a8ea90eb53c72"],["/2022/01/10/cpp_constructor_and_assign/index.html","6ec2316e7efc42967a44e7f2e5b9abc2"],["/2022/03/18/Static_and_dynamic_libraries/index.html","0027a4e7e81b439729aa77540286d621"],["/2022/05/07/cpp_main_function_parameters/index.html","feb924ee174f2433879475814b5433b5"],["/404.html","9c1750185e6813779f0dfb66ceeaf498"],["/about/index.html","5a7b3944a79cf12395a0004c120178ed"],["/archives/2017/02/index.html","b1d88075309a95afe4c70900d49e8644"],["/archives/2017/index.html","22c972ffd77bb7b84df643296a5e0e3c"],["/archives/2019/01/index.html","deea77abe263553d89eafa6456e840b0"],["/archives/2019/06/index.html","3355515a4da91ca344b41ee101fa8720"],["/archives/2019/07/index.html","1417fc6cf6d58447038851e90d582e8f"],["/archives/2019/10/index.html","9eddd49093afa88bf2af93d5590032b9"],["/archives/2019/11/index.html","e362c6458d30dd3a5f130761fbb3448a"],["/archives/2019/12/index.html","82a8293f0f2e539abc6ade49ac9024b4"],["/archives/2019/index.html","45cfa4522e4618d9b8d41b857cdcaab2"],["/archives/2020/01/index.html","c45b417fecca56256b999b22c670cf87"],["/archives/2020/02/index.html","1895bb080a8e9381d3d16f6cce131991"],["/archives/2020/03/index.html","b7d61630a4b135de2ec9326667278616"],["/archives/2020/04/index.html","9b22ea30bc45f4707ee906c1852c9afb"],["/archives/2020/05/index.html","d46b774897c1404055ffee8474e40b5f"],["/archives/2020/06/index.html","18b2c0456278ebc00301da2e1d11e573"],["/archives/2020/07/index.html","1c319331b4a5e1482fa7913086e8fb77"],["/archives/2020/08/index.html","53745bfaf0cf240e6eac58cad4aab314"],["/archives/2020/09/index.html","2eeaf94aab3de0bb1b6884a86d664735"],["/archives/2020/10/index.html","7322fd761b4546d352fcc0a4511a32a8"],["/archives/2020/11/index.html","9cbf7f3db7f87e628ccb02913c550a6c"],["/archives/2020/index.html","91e134af2f23e6bd265cb971c3334f7f"],["/archives/2020/page/2/index.html","49c6c47eb2399211481b22f7538fffdc"],["/archives/2020/page/3/index.html","b0832bc87966d5026d640d8391a60b3e"],["/archives/2021/03/index.html","e7def64d3521b35086c7ba9eff44542d"],["/archives/2021/04/index.html","134c49df1df166611c6aba121cecae90"],["/archives/2021/05/index.html","394c451667e3845e269b3731cc9ae87b"],["/archives/2021/06/index.html","95b189f4802bb86cf5602cc36e5fb235"],["/archives/2021/07/index.html","2a006b4132d731e55227b559a4ee8bc5"],["/archives/2021/10/index.html","daf474578c0e4b0a9748eb93add84033"],["/archives/2021/11/index.html","8338fcde92dacddd5859ee9249fb3dde"],["/archives/2021/12/index.html","287fba226b70c86d660fc68380c5c24a"],["/archives/2021/index.html","6185860ddf9459831685111ace010034"],["/archives/2021/page/2/index.html","14f4b2c43cfda503cc8d09e5729c5864"],["/archives/2022/01/index.html","13eb44a8e744677763ee5d00d27a5979"],["/archives/2022/03/index.html","64b975447b871bac86d921800e637c8f"],["/archives/2022/05/index.html","ea4eb10a15a69102e317f23bc712dca6"],["/archives/2022/index.html","5dcbb7355c4beff22113c70fdae7c87f"],["/archives/index.html","8de7af6ca3fdf66e4304ed0eb0056f1c"],["/archives/page/2/index.html","0c171eecfde82fd47052b4fb20102ee8"],["/archives/page/3/index.html","9bfc2736368ff2b42090801c86a7abf2"],["/archives/page/4/index.html","00e788c7c693656324d8f043f4e1e593"],["/archives/page/5/index.html","239e446627a4f5b19911cc05cb97f76d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","52416cdd8ddb5d1021f374eff76dfcda"],["/categories/C-C/index.html","10d891023b1caab72bf06b3d0f10e72b"],["/categories/C-C/page/2/index.html","288015f42e8c1a36cfd69cb3812cb2ec"],["/categories/GitHub/index.html","4615171c48e70ffaa372247f223ebc19"],["/categories/Linux-学习/index.html","952d13bbfa8411495c48a1295bb37b1d"],["/categories/index.html","1d9192b79bad49e119442386689d02b3"],["/categories/博客搭建/index.html","e6c02e0490a4d6919009c3426d127b75"],["/categories/学习笔记/LeetCode刷题/index.html","54c930674c318baa75b853573e69af58"],["/categories/学习笔记/Machine-Learning/index.html","9bd1384605369bf88f20db5af255ef3f"],["/categories/学习笔记/Python/index.html","f09b4ede27f26642e023a4ffb81afd1f"],["/categories/学习笔记/index.html","9963fb2623da916816c08e138144e879"],["/categories/学习笔记/page/2/index.html","65dbea68770b4e9d573812e560ae6fcd"],["/categories/转载/index.html","e43a8600f28755e2cc40a1d31ca2e07d"],["/categories/随笔-杂谈/index.html","da3357260b1b9ab0e466df0a25d7e8e5"],["/clover/index.html","513f36b71c4c3eb4032b061c9788d75d"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d295b083375757f34de5ba4063af9a33"],["/google85949087cc957523.html","538aa62c85fddb472d9d84aa13d51013"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","c29c98e94aa125e33ffe42519c078cc6"],["/interest/index.html","8b1794c5d0ef896b9370ce3338a4dc98"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","33ec4379b386d7107402da9179d4d371"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","ab0fb4fa19b9a180a052bea52d45a4f0"],["/page/2/index.html","3039f6d0dd6564e3aa5c2db0f8c99d62"],["/page/3/index.html","d5017dd78a57c73fc703522a81c75d49"],["/page/4/index.html","b318dd6b34740f7a21de7cc5fcad0a19"],["/page/5/index.html","364cd8ff5d4fd62ea55dfa2f79975a77"],["/tags/Binary/index.html","3f5aa924ad2c8c1cfd564637edb63374"],["/tags/C-C/index.html","9b553b933259db5a7cf0d6e412fe9c56"],["/tags/DCLP/index.html","ec3f48ee025cea3001cdacce0f8a0694"],["/tags/Git/index.html","38a694634fc12313cb14afda048a01b4"],["/tags/Java/index.html","82b669888b5ab183aae968351006dde5"],["/tags/Linux/index.html","5365a75b09a147bf84379f3b97505fde"],["/tags/MNIST/index.html","e86839da7a986e047583f1f50f308e8c"],["/tags/Machine-Learning/index.html","41aaee8112fb78400bd92d1689a1f95f"],["/tags/Python/index.html","c1eb9b45d89c19c8fcec50274af8b219"],["/tags/STL/index.html","3fb6d3dd8ed8aad0cee8ab3d131f772c"],["/tags/Struct模块/index.html","7f3c7a9cc6fc5e2cc2c200e778be5c7a"],["/tags/Windows/index.html","96d7886c994786f8a19f7c9dde913336"],["/tags/define/index.html","78a5f449a2c51e38af792507e587e11d"],["/tags/github/index.html","fc6a6ab70b3bec24ea89863f5fdf7a71"],["/tags/hexo/index.html","7c24a2a8e2813ef0e3972443cc16e392"],["/tags/import/index.html","7099cef255e76c43cd2b8e6c867f52d7"],["/tags/index.html","3bd170db513a38847d0d2be20ee7808e"],["/tags/main形参/index.html","0b634df5e401a46183b095bd1320ed4a"],["/tags/matplotlib/index.html","10c57ea007feace2d9723c38ece63b34"],["/tags/melody/index.html","da4e986ac1954920fb407902e6dc0374"],["/tags/npm/index.html","d88a2db84f82a69f7dbe3748506d7445"],["/tags/priority-queue/index.html","e0153c4cabd3d3b4aa1d4c4eaa5f3209"],["/tags/rain杂货/index.html","b862644b854ddffd68145e0692983c1f"],["/tags/socket通信/index.html","4150bd40d7adaa690a2aac888a68db2a"],["/tags/this指针/index.html","989108d0b24b9c177206fd5bd667c670"],["/tags/typedef/index.html","77192e5ef99ef6e323e69f41af4b4baf"],["/tags/中序表达式/index.html","8c8aac3e77bc23eff58ca9a4d163ebd5"],["/tags/二叉树/index.html","1980348a347ba45d61edaedb1f516a74"],["/tags/二维数组/index.html","76782f94444266c6af65cae4f0ce3954"],["/tags/二进制处理/index.html","f61acf6a9d8fc34b5f9776cec403e600"],["/tags/优先级队列/index.html","64aec38db121a05e7add18e933418fd6"],["/tags/减治法/index.html","169a775a224547b7ed0b7ac759e85a51"],["/tags/函数/index.html","5c9b4df7830053b15d96b0f2637bfae0"],["/tags/函数图像/index.html","c6443db9886d38027b9d88525e5cbc70"],["/tags/函数调用/index.html","f21b888192ee4494ddb4482d1278c1b6"],["/tags/分治法/index.html","77782222c42ab898ff050819960390a1"],["/tags/前序表达式/index.html","92f45cd557653fb5dc606fa3e9f30b34"],["/tags/动态库/index.html","73d00ab27d98cd8e8a2df3b814863c3b"],["/tags/动态数组/index.html","fa742321ab898bcc99e19d4e1cb9a0f0"],["/tags/单例模式/index.html","64d574ec587757147290010f8492dc79"],["/tags/单调栈/index.html","3d9ca32c2c1f51540bb5ee13e9fcc80e"],["/tags/博客美化/index.html","107625c53e39f19a6ad9d5f4764096aa"],["/tags/参数传递/index.html","a2a314e5bee5f541ba0bb73958aaaa6d"],["/tags/右值/index.html","1a06dccbc56b98ea5b3f173be89db165"],["/tags/后序表达式/index.html","009496992757b2fe626b57a4c01d3b0b"],["/tags/基础/index.html","b7e18eca2b578f78de03e2d03dcb148c"],["/tags/堆/index.html","26ec748dbe9384f76b2361300a7038ad"],["/tags/多线程/index.html","784bce17e36bca1c8f48e693eecaec4f"],["/tags/宏/index.html","7ab79f57a120b500b0deef5e95634c91"],["/tags/左值/index.html","d111a5bf1445bb1ac3755317dce143f2"],["/tags/开源/index.html","40327753a62ad8bdb7cb05be2b698931"],["/tags/影音视频/index.html","83d6c66083d8ac7ca5a4b265774d62e8"],["/tags/括号匹配/index.html","18c74642ff82bc39c0c27bb42d979d7c"],["/tags/排序/index.html","f50292c779879c7c9c50286e736035c5"],["/tags/数据可视化/index.html","3ea5a0f5437723a4df377bac2c9425dd"],["/tags/数据解析/index.html","a5bebed05476b99dcacf1002d2ea3c27"],["/tags/文件流/index.html","0b3fd5ebf884d6e3bca02e1452069e01"],["/tags/服务器/index.html","89432bc99524a516eafa806cd3b0545a"],["/tags/朴素贝叶斯/index.html","34134b42874d6e2bc0b79acbe68ed413"],["/tags/机器学习/index.html","70cb18e7a7a389579865c442c8dfb78b"],["/tags/构造函数/index.html","aadc5ebb3a208334a2aee3a0a1905af8"],["/tags/析构函数/index.html","7c108bfb357541709b5d8f844c2d9fb5"],["/tags/标准库/index.html","01b5d98a6a52d766607d7b799282511c"],["/tags/栈/index.html","0fc711a79d05f4047611ea5910a6d26c"],["/tags/模块/index.html","5fed02d68a3246c50300e70b92aa0207"],["/tags/版本控制/index.html","1bfd2d1bad8f02d814391ef252c64ec2"],["/tags/神经网络/index.html","07bb9696caf8afd938c7c871ace0fdac"],["/tags/程序设计语言原理/index.html","3759fcce54644184b97fe01efb2c1e0e"],["/tags/算术表达式/index.html","5cb545f478e52e57acb0b3e393b09152"],["/tags/算法/index.html","814b0098b97298512d68d250bb7243b5"],["/tags/素数/index.html","57bda3d8a8d997b05a270c78990c038f"],["/tags/考研/index.html","1ded42d2b0d0254796afa74d81906bf3"],["/tags/莞尔日记/index.html","78490ac908c20ac8bcd184101e004596"],["/tags/设计模式/index.html","1a5261df06e26f853e12e3451111feb3"],["/tags/赋值运算符/index.html","9ab798b1d31671013ec490a2088da475"],["/tags/进制转换/index.html","b3f4eb306798387805230c716701006c"],["/tags/逆波兰式/index.html","0d324221002b2caa6e8edf7c8869f945"],["/tags/锁机制/index.html","aa4a7709e9eba72a6575667fff0ce9c4"],["/tags/队列/index.html","5ea895f61adc0f35b715c9923e1c67de"],["/tags/静态库/index.html","4abe0dbd2050a1939ecfcc65e73792d1"],["/tags/面向对象/index.html","6c7f2a8a84a71ea7a6237bb1b80c1d33"]];
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




