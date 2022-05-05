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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","417285d5f0c754badb4c8b63334ee9f4"],["/2017/02/01/hello-world/index.html","f0e61e844edbcf25db68184ec9f46eaa"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","9a11e6648793494676e14df63cdf111b"],["/2019/06/03/Linux-programming-examples/index.html","008e935671dc99aa77abec21477cd8b4"],["/2019/06/10/Server-basics-and-configuration/index.html","7a5f7d77338dedfed30987e19c344325"],["/2019/07/01/Linux-socket-communication-programming/index.html","a8a528d19a320fa68901f2e8df3cbc3e"],["/2019/10/04/Python-function-call-and-module/index.html","9d56d12a1072e023c58fc313717be94a"],["/2019/11/02/Python-100-days/index.html","0d7ad660a3b43a481044682f9dd58893"],["/2020/01/10/C-or-C++_dynamic-array/index.html","9923ca6e08e7eab9250992885e1f6eb5"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","5d7477983f5475923014cfb0eab02814"],["/2020/03/20/Jincheng-lanzhou/index.html","d29d18876203918d81c21199feaa6151"],["/2020/03/21/Cumt-aerial/index.html","e68af73d04a058f0970c23bbec4c137e"],["/2020/03/25/Bitree-construction-and-traversal/index.html","908b18885730bc4e1741370d4a53665b"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","6e915eedac2424d4a16502dfd9a53465"],["/2020/03/27/Stack-application-bracket-matching/index.html","8b0c67bd706d066858797a6a22f38fc3"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","2d555e90b7d4ffb6b6ffda1aac94c368"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","45e883d6eba03ada48cbad1ff47cfd93"],["/2020/05/30/School-celebration/index.html","5005d869dabd6ed3b287adba94857804"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","9e24324818eab8a5539d6cc233f1abad"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","3357378b6ed2d55d5a3fc270cfdb949a"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","dcdcef270dc10d1779431edb897ce10b"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","0aeb00086d51e4a6a2cdcd6dbcd6083a"],["/2020/10/09/Python-data-visualization/index.html","51bf2c1a9da7a7f3e9b8d3134ab05c79"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","adb4828878ef6f1f6deaf1fe75d15712"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","3eddf25e48fc66146eca486b9d3b58d5"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","e4b04eb0554228f7217e7966eb4c7920"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","6f52872500b13f6bef1fde39631d7d87"],["/2020/11/02/Data-visualization-matplotlib/index.html","d8e4f1802951411f29a8c45e393884cb"],["/2020/11/10/Naive-bayes/index.html","7e49023c0b1245e8b5f27a94064e5650"],["/2020/11/28/Matplotlib-function/index.html","3c8ca946688c63020860b239606badfa"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","142d35c6d834e53c279cb5c6660bf002"],["/2021/04/27/Git-usage/index.html","0285a83f2db59ca1efdfe5805a8b3096"],["/2021/05/06/Arithmetic-expression/index.html","cf59a4d0ba54d9c6549ea65020eecf50"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","d6c13b27727d6444028c413810371e10"],["/2021/06/25/Classic_TopK_problem/index.html","9a46692d1870e7e1b97cb3b7392f94b4"],["/2021/06/27/Calculate_prime_numbers/index.html","833d1f5a56956a076227052991733464"],["/2021/06/28/Priority_queue_and_heap/index.html","1bcd323790138607a8599bd50dc0d7eb"],["/2021/07/15/cpp_constructor_and_destructor/index.html","83ecb46c52f179620ef728ddc36db184"],["/2021/07/17/cpp_file_stream/index.html","0f1e871b36d42d8daad81f7a6d5c50fc"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","a276c2626264f209d0b05c84549dab46"],["/2021/07/22/cpp_this_pointer/index.html","823f2b43c35b99541b3889e6975373c6"],["/2021/07/26/cpp_algorithm_analysis/index.html","e00669dae69162f3fef8cc459c706555"],["/2021/10/27/Git_common_commands/index.html","2aae46538d7abc5f70244c4d0c34e773"],["/2021/11/10/cpp_singleton_pattern/index.html","09949339952a2a4633b3e739d9a932b1"],["/2021/12/05/Semantic_version_control/index.html","44fa8c02592fce2b4a54ba03210f20fa"],["/2022/01/10/cpp11_default_and_delete/index.html","c20add3c7bc359aca806a189d45405a5"],["/2022/01/10/cpp_constructor_and_assign/index.html","62494e0863145a20ebb03afc18ff2eaf"],["/2022/03/18/Static_and_dynamic_libraries/index.html","bf00597b5470bf9d85e2e00e109f7a20"],["/404.html","9d7725e6b028ba49bd645e2766e154bb"],["/about/index.html","fbb3246f67feb6791247f5e1e42ae8f3"],["/archives/2017/02/index.html","60606cb7dcaf1d51bb9a0b4692b5fe56"],["/archives/2017/index.html","7eaa58998dfd9385f29c5b554d780036"],["/archives/2019/01/index.html","362de3df444322b72072110e3e41461f"],["/archives/2019/06/index.html","e33987aff711391edae8b3999e22f1d9"],["/archives/2019/07/index.html","e39f8d0306167810da7c441c0f9cde43"],["/archives/2019/10/index.html","8082833a7a76c57afac75a6a73ca7df1"],["/archives/2019/11/index.html","c68a172a1cee9931dc5e6ef7346ae6f7"],["/archives/2019/12/index.html","7ff4353fd851935363c0ea945228468f"],["/archives/2019/index.html","5a0d098345b554735e44ed5de67d630e"],["/archives/2020/01/index.html","5e29f7d237996c10ae5a3dc1d9331b6f"],["/archives/2020/02/index.html","af97cb8cdc1fa7e994cc79bb7d8698cc"],["/archives/2020/03/index.html","635b53d6f2cc75a560b2b4d7f17130f2"],["/archives/2020/04/index.html","f85c4aeea921b047bcb8f7cc460919d6"],["/archives/2020/05/index.html","1e763b56380e715ffdcf4605e6223800"],["/archives/2020/06/index.html","22590138760be9a0b17c007430e915e9"],["/archives/2020/07/index.html","37f09f1b378be03662a83dbd8b015382"],["/archives/2020/08/index.html","20a2345e7a99cfe3db84a1cca2efd08a"],["/archives/2020/09/index.html","5992a2cd08f78b73b2094259b47620a2"],["/archives/2020/10/index.html","b12eae95fea6c644c499012aef39457c"],["/archives/2020/11/index.html","e605de0ad014bedc53d0199b390d6482"],["/archives/2020/index.html","f8242c506e933cc442f1e20437b816e2"],["/archives/2020/page/2/index.html","b6fea1f7bad63177d16e67222b627a11"],["/archives/2020/page/3/index.html","72bec768bf3b238359e6d0881d49b28c"],["/archives/2021/03/index.html","7ea60050fe79780a4bca53cb43dc29c6"],["/archives/2021/04/index.html","e833630d990b19df961bf7b1f8b6f139"],["/archives/2021/05/index.html","b02dd933f7c142aec5272ac3ed9e12f9"],["/archives/2021/06/index.html","6cfa8696f4db71ebd37eed6f45095eec"],["/archives/2021/07/index.html","4663bd464faeb8b49efe47f8270e0591"],["/archives/2021/10/index.html","9388b78daf8cb70a2e606efd1846d0d1"],["/archives/2021/11/index.html","c9458084c893c4ad72d62fb96ca44ebc"],["/archives/2021/12/index.html","c6fbfd0f6d5d6df320db3b0402e3cc94"],["/archives/2021/index.html","49014d97ce75f44faccea1cb1627279b"],["/archives/2021/page/2/index.html","7dc48b3e96a7ba102d1a915c240e2bd3"],["/archives/2022/01/index.html","94d42c2600ad0454a7f13990cfee89c7"],["/archives/2022/03/index.html","7f3b61b02e56d68aa2ec17143f703973"],["/archives/2022/index.html","9b90ac2747b91bd948444905d996275e"],["/archives/index.html","063c04d584f9e430900a02939dc88798"],["/archives/page/2/index.html","8c69e1897e5df858bb62c7c9d408a0d4"],["/archives/page/3/index.html","6fad080ef3c430792e2fb2b18ddd7150"],["/archives/page/4/index.html","df71839f4537ee967c77ed7c67acc712"],["/archives/page/5/index.html","8d4811019c18b53610f65735644bd84f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","e2f2f8dd63545ab2326bf2d0033d0fc2"],["/categories/C-C/index.html","8f73835ca05e72c33cf1ea58ba50f5d6"],["/categories/C-C/page/2/index.html","c1b589a25aa8e8ea4c07bdd9f3f0a5d8"],["/categories/GitHub/index.html","3f94fcc78ed9bcc6fa5e20d8bbe55fca"],["/categories/Linux-学习/index.html","1fa3de2d46c11cb231acc752455bf9e6"],["/categories/index.html","e6e6bff672161e43e7e840b9a48c3fb8"],["/categories/博客搭建/index.html","b3b9cedf3f79ca2732f8cee5e742af9c"],["/categories/学习笔记/LeetCode刷题/index.html","c4c98d1646225cfe6c511b3acfb19c3f"],["/categories/学习笔记/Machine-Learning/index.html","1d8f9a7c37fb831d661054fe785beba0"],["/categories/学习笔记/Python/index.html","bd53e36e6584d65255cd4e492d0f9f14"],["/categories/学习笔记/index.html","359ad312738c821c2157ff1ed57deaf9"],["/categories/学习笔记/page/2/index.html","91ccdf61d8afc13a745e819b7902f343"],["/categories/转载/index.html","c389a7df5dd69d95bd998f893c631f91"],["/categories/随笔-杂谈/index.html","ca4f28b58fe2751f31495b09fc7e5334"],["/clover/index.html","546ff4af0c0f8326c2aed7307be9ac12"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","eface440fa801c4b96c3c0cc86dd4ff8"],["/google85949087cc957523.html","5cdcdf12802c2aeb339e90e66a4c7054"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","241bc54791a3e4d0ad270838bf915dce"],["/interest/index.html","70dfadd7ecf50b612d357e6780e0027b"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","9a74cad705e509c3c46c6de39f087d93"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","c9a2c79cc173c0f5e7a1a8dc24a32005"],["/page/2/index.html","cdafd98949c502303d3516740053c17d"],["/page/3/index.html","2c1fd528edf974236a8d1be7014f6cbd"],["/page/4/index.html","ab363ccf87c7ed3391c8b20650a54b69"],["/page/5/index.html","fa1c5343b2f7bc32aeb855dd4caa61b7"],["/tags/Binary/index.html","8b0743223e999c879f94d25f7347adff"],["/tags/C-C/index.html","d4f2fdd351726becebf3f8539cae6167"],["/tags/DCLP/index.html","fa0b49d704c85ff48b7cb85a2c02eeac"],["/tags/Git/index.html","425ac034521be9c4ba376f0a81bbf43b"],["/tags/Java/index.html","63b1c639a4ced876f0fd3418777ba619"],["/tags/Linux/index.html","a4d23cc0d0235525393ffe20b572b1a1"],["/tags/MNIST/index.html","41b38471bd79969e216faee5fe03c0ec"],["/tags/Machine-Learning/index.html","763c1400fa802d85d539a6634b0eb19e"],["/tags/Python/index.html","78eee1af00b138721e6d57e1125568ab"],["/tags/STL/index.html","655fe719c768a17cd820f6ecd2750662"],["/tags/Struct模块/index.html","a7a51b4b8668bed6f45c3ccd7d2b5e9b"],["/tags/Windows/index.html","d8ff8a863e215e342702770c61306986"],["/tags/define/index.html","438060915f8c78c87dbce97e63ba7138"],["/tags/github/index.html","a15e126dd75520af104258f31eafb537"],["/tags/hexo/index.html","ef007c302f530244cbcbb7e9d2435cf3"],["/tags/import/index.html","55c443cd82969b9fcd42649285c815c4"],["/tags/index.html","9f45a690cb044d4bd510e9e468446620"],["/tags/matplotlib/index.html","ed9926e100360ccf9974235c7d56eec2"],["/tags/melody/index.html","7206e29c14192f72bc7f983534f57c43"],["/tags/npm/index.html","6ad24d08b750a957495405df5ad5d5c5"],["/tags/priority-queue/index.html","fc4c25322563ee8b32b2d0430a951b08"],["/tags/rain杂货/index.html","7192ec2bd04619087ae60f404ccbdb9a"],["/tags/socket通信/index.html","beed6b963f09fa0a5c9af4f31e24eaf2"],["/tags/this指针/index.html","e3f9acf548c5140130d852082d892fd7"],["/tags/typedef/index.html","36f968a040892fbd3ec352a1d1556d41"],["/tags/中序表达式/index.html","01873ddc296ba6ddaa0dc4b46055c4fd"],["/tags/二叉树/index.html","56e1aded168859b839fd389e11b02edf"],["/tags/二维数组/index.html","9c9c971460735b446db430f06c93b529"],["/tags/二进制处理/index.html","927fe4bb8ce47620b2a255eadea087a1"],["/tags/优先级队列/index.html","48a1d501018d9b15e5d80860fc37225c"],["/tags/减治法/index.html","631019224bfb586ede343cfcd0bd5828"],["/tags/函数图像/index.html","a45a87756d4822ea9a4c69a4660e78aa"],["/tags/函数调用/index.html","30a9f44e0d910f7bed340522ab48a544"],["/tags/分治法/index.html","6b843df75681cec8efb75d564702e9b5"],["/tags/前序表达式/index.html","ee162637fed335c4336cdea78a339c57"],["/tags/动态库/index.html","05159e73e366b5276703e0f2b115b8d7"],["/tags/动态数组/index.html","0d3f7c531e7b19c207371e9a8186c83f"],["/tags/单例模式/index.html","24b215042a6f71a7a1cb676b357cdf41"],["/tags/单调栈/index.html","7007025f6a681dfdb640527c9b0054d7"],["/tags/博客美化/index.html","6344d44334de94c6613fd305edac5159"],["/tags/右值/index.html","e999a63be3f416f4cac0f872c9d5c774"],["/tags/后序表达式/index.html","d924a7d6e73afee5a69f89f9806ea6af"],["/tags/基础/index.html","3d8c42e1421bea5a7ec076eaef6aab83"],["/tags/堆/index.html","373d84c30032b10b479a754d239d7428"],["/tags/多线程/index.html","a7c37f2a789069e0778ddc7055c8c6bd"],["/tags/宏/index.html","ca083188796d3c1faec660b613264739"],["/tags/左值/index.html","1ed9639f9a719297e6da1bb00848cc3d"],["/tags/开源/index.html","2ff3af92f44aa0b56b35d6506538b273"],["/tags/影音视频/index.html","b6d66083fe32480393ab63bf9382949f"],["/tags/括号匹配/index.html","c308cfe32ad979eea535f2418cab6344"],["/tags/排序/index.html","69a93d91076bdac8a90a6eef8dceadfa"],["/tags/数据可视化/index.html","f9dd4d2ec49eee29f17c4aea0f19a082"],["/tags/数据解析/index.html","aa04e2de7cedb65228b7df18acef9361"],["/tags/文件流/index.html","94912a3006ccda70ab600d7e61a813f0"],["/tags/服务器/index.html","3cd3364a49ff4410d56b27f25c61be90"],["/tags/朴素贝叶斯/index.html","ac28855a1eb59ff6c177cc822e8e36f6"],["/tags/机器学习/index.html","83837dc43b8f881a2113e4a49753366d"],["/tags/构造函数/index.html","f214282f3570ba758b712952920169e9"],["/tags/析构函数/index.html","0e71f6222fd3b47bde74d0ce75006ae9"],["/tags/标准库/index.html","9fac50985fa8dfcad59e14796fcecfaf"],["/tags/栈/index.html","e1ffd71cdbe4fca2726243cf64ef856e"],["/tags/模块/index.html","a581f6489c5bd31b730615eb3bc72445"],["/tags/版本控制/index.html","0b38b1db71b178f16052167d91456ed0"],["/tags/神经网络/index.html","192106da13a5498866d9597ab8929545"],["/tags/程序设计语言原理/index.html","53ca82dc66a92dce0caf7f8c958f0e14"],["/tags/算术表达式/index.html","5658c530ca77d4c141d5fe09549ff9d2"],["/tags/算法/index.html","07d1d8ef2bdeb769b129bebd5636047b"],["/tags/素数/index.html","1e9ed5782aadbcab67924427051f75db"],["/tags/考研/index.html","16ac8ec969d6e691b62e20fe66a570c2"],["/tags/莞尔日记/index.html","3092423610aa0854ae337c300c6df142"],["/tags/设计模式/index.html","945456e954dff772bdfa416deb8fdbac"],["/tags/赋值运算符/index.html","bba13f566d43e59cd53c93ea5752f8ca"],["/tags/进制转换/index.html","a84583a51199a13731c7f5846ecf8194"],["/tags/逆波兰式/index.html","5ec4ab69ba546c7cd2a68efe369025bc"],["/tags/锁机制/index.html","eab6a461c4d208bed8c6ab255e37b99a"],["/tags/队列/index.html","811671ee890d4e55af9333c8fa32b3ef"],["/tags/静态库/index.html","1657b6e39645a8d7e7e14d8190a3c516"],["/tags/面向对象/index.html","2ae58cfad80df59a8c7c21efb2149d50"]];
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




