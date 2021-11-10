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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","08e96afa85c6a5fd9e595b6d34527601"],["/2017/02/01/hello-world/index.html","4a61909030e932988fa67d806795246b"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","a47a819b0f8db280ec1861fc3d22b79d"],["/2019/06/03/Linux-programming-examples/index.html","aef60d793a8d569a74cea0ef66a2d197"],["/2019/06/10/Server-basics-and-configuration/index.html","bd95775b42927ef498fbd26624467e3c"],["/2019/07/01/Linux-socket-communication-programming/index.html","9562ae13d6943a339d59a15ae5b11b79"],["/2019/10/04/Python-function-call-and-module/index.html","6cb1d1e6ebb704183a5a53de2015d33f"],["/2019/11/02/Python-100-days/index.html","1aeac7f9116fab752fd9a91946ea45cc"],["/2020/01/10/C-or-C++_dynamic-array/index.html","55b0c926136b5645d1d46624679d965a"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","1eed3b2951435000413f8f22d71dc18f"],["/2020/03/20/Jincheng-lanzhou/index.html","0f00c83dc23d3d2d57851943700537bc"],["/2020/03/21/Cumt-aerial/index.html","2095788a2e5d8b3ae03446fec046c086"],["/2020/03/25/Bitree-construction-and-traversal/index.html","711366d1f2743f5056050b7e45300d58"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","a43641c683dc678fa472f1343af5035a"],["/2020/03/27/Stack-application-bracket-matching/index.html","efa898425232a416cac782b348e998aa"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","482792b5220f4dc26087b1d9e70605cd"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","3df8fa64929a76192af47f3ef7c7f9e2"],["/2020/05/30/School-celebration/index.html","b3eb840ac9971525dc9b122a5434bf85"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","a249322562cee88b975951d98496cf17"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","a3d2a9e0b86fdab42337e2236d3d801f"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","f9de6900d723f7b76b6fdf6d270f8fe7"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","f4600e0c9994d5b31a79d2babfb86058"],["/2020/10/09/Python-data-visualization/index.html","ad9498e568758f5ece7ae3e0376eb057"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","8e2fa3307dbb86c9090bf11b6b5a23b7"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","36b5a6df268cb5d97f530310c26d550a"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","34b0d708b698e38016c63fb85f22ebbb"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","8e9deeded5d49af736462d9edc86f201"],["/2020/11/02/Data-visualization-matplotlib/index.html","15f858e02b6c17cd54c1cbf49b04c69d"],["/2020/11/10/Naive-bayes/index.html","2d6b6584743d6eafc5c434ec2693c400"],["/2020/11/28/Matplotlib-function/index.html","53c357bc42ea04dc7dc77f82b242b3b3"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","63fa67d3a4a36a7238c57bd118f74ac5"],["/2021/04/27/Git-usage/index.html","f81e317429de26dd1863b8b6d100c278"],["/2021/05/06/Arithmetic-expression/index.html","cefe793b8b446037c73d1228dc082d42"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","510acc247f9070e2a888053b285d9131"],["/2021/06/25/Classic_TopK_problem/index.html","746f2787c94f74ded9572f3dcaea2da0"],["/2021/06/27/Calculate_prime_numbers/index.html","da344e627f415f3b227fc41d8093d630"],["/2021/06/28/Priority_queue_and_heap/index.html","ec89ab0312aa10a5da860830325e63f7"],["/2021/07/15/cpp_constructor_and_destructor/index.html","69202d8a80db08cdad7ed8cccb7131cb"],["/2021/07/17/cpp_file_stream/index.html","b42198b5c0ea810acac0795f73445cfe"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","4bdd4f45a73f01041c5376f3e8a3f2af"],["/2021/07/22/cpp_this_pointer/index.html","03e6bd85dafdf708a4a9cbe1aad64711"],["/2021/07/26/cpp_algorithm_analysis/index.html","8b435589864cd2cdb1c4a80700bb3b3e"],["/2021/10/27/Git_common_commands/index.html","5b330fd521f3866be6db14ec155d159f"],["/2021/11/10/cpp_singleton_pattern/index.html","1354e35972be8ffe176c54a617a0e932"],["/404.html","9c1750185e6813779f0dfb66ceeaf498"],["/about/index.html","c8053faa00114031a8285aa0849b41fa"],["/archives/2017/02/index.html","a03c19ff0a115a85ee2a23f99865a069"],["/archives/2017/index.html","88836cc889b6f4602367b78700a08b8f"],["/archives/2019/01/index.html","b061a12b39fa15c5afb99b3f3ad71672"],["/archives/2019/06/index.html","0ba30dea59d38eda1c90d39d4e25c22d"],["/archives/2019/07/index.html","e82532082eadb25476b06d8e38c0242a"],["/archives/2019/10/index.html","82b2e9b1b8d82d634453949324e8938e"],["/archives/2019/11/index.html","1e8169346e967b3f701af2b180d072bc"],["/archives/2019/12/index.html","e4d4c0596a83edfe6f67a72a2f71e2cd"],["/archives/2019/index.html","79057db7d8490dfd9214de599a87f9ce"],["/archives/2020/01/index.html","0efa03d01fa134c3c84edaf3f99de8b8"],["/archives/2020/02/index.html","d58ff4049f295bf348da06bc5b105766"],["/archives/2020/03/index.html","96b6752030d1bb36aaaf985668cc4804"],["/archives/2020/04/index.html","744aef3e2d6134a7596d9533f75f312d"],["/archives/2020/05/index.html","ffbaf3b501f131b7dbae5feff316de78"],["/archives/2020/06/index.html","5b0ee5b7a7d4fd8e15112c71835bfdd4"],["/archives/2020/07/index.html","3b8452ce5a9610d56a7b4bcede78c34b"],["/archives/2020/08/index.html","07c5c075b1e83770c5100354a0e47567"],["/archives/2020/09/index.html","147f3507c1d1136d8061676dbb7f4091"],["/archives/2020/10/index.html","546c9565963d4b1b805cf1d776e5a593"],["/archives/2020/11/index.html","020d807000c4ae415eb17a5b514f01ad"],["/archives/2020/index.html","18acde8d070ed24bbe34b820a4568978"],["/archives/2020/page/2/index.html","7955b590680029a3dc37817e4ffa6d13"],["/archives/2020/page/3/index.html","018c78c29bf8f074c9e30a6a109a7e72"],["/archives/2021/03/index.html","607c8c5daa2acbcb8857fbc11cd76c43"],["/archives/2021/04/index.html","79567a2bb7e070dc8908198d50bf3e46"],["/archives/2021/05/index.html","a4e043d5c31de88ab4859feda6193e2f"],["/archives/2021/06/index.html","96aefd071bb211a4cd6ac3477ccf1792"],["/archives/2021/07/index.html","5b06dbdaf7a32b466347855fb50625cd"],["/archives/2021/10/index.html","399696f60694a7d203d04f323230afa8"],["/archives/2021/11/index.html","3f0a90867d8e8e5a92346801c915610d"],["/archives/2021/index.html","21c587d824faadb67782d08a6663bca5"],["/archives/2021/page/2/index.html","87ea8b00784b3b3fee695102710e341b"],["/archives/index.html","055633a513dd9084c9e2287bd022e88a"],["/archives/page/2/index.html","e1f6648c839066969bc4aee5515c8035"],["/archives/page/3/index.html","2caf33be9e798eb9921a8bd56446d5f9"],["/archives/page/4/index.html","9edeb1c3f60993e1cfaea108c054fa5d"],["/archives/page/5/index.html","0459262adb0cd8d55e6139d72dfd9cbe"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","0ed4638256edc19dba9ec296e7fa8884"],["/categories/C-C/index.html","5b9cb209deb3edd65f7bcbd7f72eb3b1"],["/categories/C-C/page/2/index.html","ee4e5ea44fe24af489f9d224b5f5b9a2"],["/categories/GitHub/index.html","6512a5341b190d04aac94b9411696c97"],["/categories/Hexo博客搭建/index.html","b1714fd39c8b2eabb48b4d35cbf8bed5"],["/categories/Linux-学习/index.html","a5747a062995318c0ccc76121411d4f0"],["/categories/index.html","ee3f88455e599fef51d7fc464e50ecd7"],["/categories/博客搭建/index.html","4b2319996f574ee0ee1f6d5bf5b30495"],["/categories/学习笔记/LeetCode刷题/index.html","60b257f65f17abbd72cf203623377eb7"],["/categories/学习笔记/Machine-Learning/index.html","a5ea599098c0ea798862a063998b96a9"],["/categories/学习笔记/Python/index.html","5ed14c165d4406ec564bdd6c8ec32f0e"],["/categories/学习笔记/index.html","77ef613174d2ab4d7d8a0809b4dc42e2"],["/categories/学习笔记/page/2/index.html","477da50a85f7a42a3308dee1e69ddce2"],["/categories/转载/index.html","509d62d808ee05429aae287e898f6ed8"],["/categories/随笔-杂谈/index.html","f6d0a3b3c256c2f8f1789be952e9af74"],["/clover/index.html","f058316f6804b5c6735313e7854d5696"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8970a8ea1ac2cf3e828148b9fd1cf571"],["/google85949087cc957523.html","ff99e052efefc69c30e175360e54e36f"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","ebc7a9906bf94fd5cc0db97999afcd10"],["/interest/index.html","8badaea5ec34a709526fff6a6600d420"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","308776830eea5872afe2c490fd189ede"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","c4dad3a90c0fe82abaaad737246857b4"],["/page/2/index.html","7dec01de8466cd34ab97656b97ba2072"],["/page/3/index.html","e70eeaf3fb9346c546674e9854954306"],["/page/4/index.html","4932db27b6f3d48d80dfd2288cd38573"],["/page/5/index.html","373fd2a776a72ddccafffa1fa0fe60d7"],["/tags/Binary/index.html","8e9f6010bd6908b8c79045b7d36fc891"],["/tags/C-C/index.html","6843cecfea9cd1d280d6146a1eca77a2"],["/tags/DCLP/index.html","4b9e9d440ed706186c83ca2c98b94776"],["/tags/Git/index.html","71cc1de243ae448743c4593fae714cb0"],["/tags/Java/index.html","8da9b3b951ff4cf3c7ee1d5afb09e2ab"],["/tags/Linux/index.html","184be7e8a30f66e455720386a1fc4a7d"],["/tags/MNIST/index.html","0bc463d96ffade292bc0bdb7a4acf378"],["/tags/Machine-Learning/index.html","f9b6be44fa9b8cd968f04c23f7912794"],["/tags/Python/index.html","08ea4dc2e2cf9e80fbbb81b53519a173"],["/tags/STL/index.html","c73ead525a6afbe500c9501aa7eb4a3b"],["/tags/Struct模块/index.html","ddff3e9c0a0b4f66e88dfe0568cba16a"],["/tags/define/index.html","62796f494c853d4b151671bc410fa136"],["/tags/github/index.html","a13a667e285cc7342538e60a2a4de109"],["/tags/hexo/index.html","52573ba082f3283d1180c7983d2ad9f9"],["/tags/import/index.html","dd699d7e99f9030cebcdb18c57f11da0"],["/tags/index.html","89937fc289c5516ed5d9b2d226b031f3"],["/tags/matplotlib/index.html","9f9c1ccda256f8c716e00500add75949"],["/tags/melody/index.html","fdb2b4c78a79e312f62ba594445f9f6c"],["/tags/npm/index.html","6602433d2c034a415e610fdb18bf7228"],["/tags/priority-queue/index.html","8387cb78dc3a912d4521d1867139bf64"],["/tags/rain杂货/index.html","3050768827224ac28c69e9a59744933d"],["/tags/socket通信/index.html","82c4d964d58ae95351549c10aca85195"],["/tags/this指针/index.html","fc7ca817ee2720e1aa7974e129bd98df"],["/tags/typedef/index.html","56e69dffcfbcd1cb6bd62420670a2274"],["/tags/中序表达式/index.html","b167e0af5b690b3cb1607da20c1ffc3c"],["/tags/二叉树/index.html","1617a216b4283b18684c42ffd1c60b1c"],["/tags/二维数组/index.html","8cb5fedb3ccca8233a57491f2d63e685"],["/tags/二进制处理/index.html","05ee6897f0e8268376d45e79bb5c9857"],["/tags/优先级队列/index.html","e99f65027bcb540b8c48f6ee15c158dc"],["/tags/减治法/index.html","4e326e14d51487438c7463160f794fdb"],["/tags/函数图像/index.html","1e1ccbcb3a0b58482460a8ff103d49a4"],["/tags/函数调用/index.html","8cba47b8c13bd738dd4852dcd4e3ac23"],["/tags/分治法/index.html","8748700aa68616a4bd02dc56026f95ef"],["/tags/前序表达式/index.html","208cea49063146f301696bb49e5cb803"],["/tags/动态数组/index.html","b010e8bbdc3e0932fc7c2c54fa726991"],["/tags/单例模式/index.html","7447d30d9f9da2088946fa34db444136"],["/tags/单调栈/index.html","0db2f5180cb5cd5fdb6745e2a7a87adc"],["/tags/博客美化/index.html","7c6767149e13ffed149e8d14c99752ad"],["/tags/右值/index.html","bbced9100aa7c0c694fab5de947eb897"],["/tags/后序表达式/index.html","134de9bfaa318d6b01c147c4060374f0"],["/tags/基础/index.html","1593f1f8d3d0e71adf5ea6ab4ab4f19c"],["/tags/堆/index.html","3666b824e93bb0da735f0c6760bd64a3"],["/tags/多线程/index.html","997af230e0be29c297572e16f3887c70"],["/tags/宏/index.html","6a4cf80071da4fe422c38ae6adc0303f"],["/tags/左值/index.html","3790d4f3af58f0babda74b0fe5f56b13"],["/tags/开源/index.html","dd9ae4cc4507fa31a112cb73834967be"],["/tags/影音视频/index.html","715f6742ff5696fbc00ba92b8ee0b18d"],["/tags/括号匹配/index.html","db3e48e9afc259bdaa26973080d2a0b9"],["/tags/排序/index.html","8224751444fcfcf853e1124b4d91005b"],["/tags/数据可视化/index.html","cf321ad7ae2685ad05ff355db2a1db97"],["/tags/数据解析/index.html","d1a78705127ff5ec180041e792d37348"],["/tags/文件流/index.html","b44d1760f00f43a4ee4941d721673ac9"],["/tags/服务器/index.html","ab28a4bb80bc0f1cc4326c59d2802774"],["/tags/朴素贝叶斯/index.html","97da254e6e929af3bfa23a370437b11a"],["/tags/机器学习/index.html","232ab1ee3d779a6fc6e82f99a5390798"],["/tags/构造函数/index.html","af7a5c6773f33bf913e2d431f5ee9a2a"],["/tags/析构函数/index.html","3b4b42bbaafe0ad696dc742dd7e038d3"],["/tags/标准库/index.html","9b12e6a7e297571ca09ae7943eb9226b"],["/tags/栈/index.html","b627d9bf66fa2fda592823204818a91d"],["/tags/模块/index.html","be9688d27a2f2510ec46f6d24fbc7eac"],["/tags/神经网络/index.html","a3ae17f29a4de589d6dcbd8f53993244"],["/tags/程序设计语言原理/index.html","ec2cf2a58e7a172df058765c08f68e2d"],["/tags/算术表达式/index.html","0b0532816f77511c1efafd5908f88b08"],["/tags/算法/index.html","b533ce7755e1a07ca3a92a4a7ace6fb5"],["/tags/素数/index.html","d38775a4ab667bf117872e04685dc730"],["/tags/考研/index.html","811c682aedba20cdb4c0b5a34d118b9a"],["/tags/莞尔日记/index.html","3371876884791e2fd51c2c42a0d044ce"],["/tags/设计模式/index.html","97708bfae70b9e73a183e79c4fa078e2"],["/tags/进制转换/index.html","d4ae5377ffba2f2be5d56b2808035e03"],["/tags/逆波兰式/index.html","a3ac745c8afedfd01cdb561f561b44e2"],["/tags/锁机制/index.html","c0a742f99520cd85910244c1bddd438f"],["/tags/队列/index.html","679ddff9fd31ed3bd252c475f074a85b"],["/tags/面向对象/index.html","9593f4e98de6f29a735895189d9f3168"]];
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




