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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","23122cccc9ee609c1dfdf28d7d3a7951"],["/2017/02/01/hello-world/index.html","df2af216d790fa856356b74d79ef4bb2"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","58f57e15908aa79415180ac718b81896"],["/2019/06/03/Linux-programming-examples/index.html","524d12e4b54c91095ac73a53000a7e4b"],["/2019/06/10/Server-basics-and-configuration/index.html","b307ead1b3bc004cf73855935f611612"],["/2019/07/01/Linux-socket-communication-programming/index.html","7ad35cb920fff0c42957dcdf68a5fdaf"],["/2019/10/04/Python-function-call-and-module/index.html","1e2164a81438f09d4964852011af2fb4"],["/2019/11/02/Python-100-days/index.html","f1eadb164b8f821b6564d9024fb35393"],["/2020/01/10/C-or-C++_dynamic-array/index.html","a526d584607d59a8bfe86830f4f06211"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","8e520f11ce40614c0d7e86e2a737ee59"],["/2020/03/20/Jincheng-lanzhou/index.html","c8b0663dff34cd7592212944e06c8440"],["/2020/03/21/Cumt-aerial/index.html","4dc72225aeb0f672a031c861c8a15c99"],["/2020/03/25/Bitree-construction-and-traversal/index.html","de0bf2cbfe0e9b227f7970dbf051974f"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","797060a91b858130bc2ae9f3e683b2d1"],["/2020/03/27/Stack-application-bracket-matching/index.html","9af4d1777f9bed8800aff1fbabe63548"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","780aacc56d43f90a24e9d50fbbb0fc20"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","529f91d17d1798896bfd26e91f85d655"],["/2020/05/30/School-celebration/index.html","bd647d5524423cc55f9bfdfc9786085d"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","791ff8fb7eff0c4e8356bd3c1cf74223"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","a3d6e826ef7aa97ee297db713446b1e4"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","3792c9257af5817cf4526e30f47c408b"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","028e5693bf676b54fdb7c8d6942073e5"],["/2020/10/09/Python-data-visualization/index.html","7d04671c304948e4fc2d17b9e42cbe4c"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","bf05515fc82171e9cd681e5d7eac63e8"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","46a970f9ebab964aeb3a7ca57e5a7a0d"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","c937ac67717dd73b5e21e019a286f112"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","2ad489bc72b9fae5bdf7987a25ac13dc"],["/2020/11/02/Data-visualization-matplotlib/index.html","1636be73bef857bdedade76ece07e0d8"],["/2020/11/10/Naive-bayes/index.html","eb0b50a65a1c1f48b7b3601c514b4244"],["/2020/11/28/Matplotlib-function/index.html","b086aa561f5efc595e684380598ab2df"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","e23e1ac69470b5f46f8ed6a050ac9ac4"],["/2021/04/27/Git-usage/index.html","4ec32020bf7e5e2f171207fd5b9f0b72"],["/2021/05/06/Arithmetic-expression/index.html","90e18622805e30a6481469917b7002e1"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","70bb97b4ad311b8dbfc61c80e5596166"],["/2021/06/25/Classic_TopK_problem/index.html","ef118e1f49d54d5042c5f5b3baa76de0"],["/2021/06/27/Calculate_prime_numbers/index.html","ec91a4369a797ed0621faec91011dbe5"],["/2021/06/28/Priority_queue_and_heap/index.html","37f89ef2648c613a22c0332245c0e419"],["/2021/07/15/cpp_constructor_and_destructor/index.html","dcf0472decaa8c721d6d74bef2e2d270"],["/2021/07/17/cpp_file_stream/index.html","1de9166bf05b1cf29e4c641b6a494802"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","a382eecfab4475b578bb48fde159d240"],["/2021/07/22/cpp_this_pointer/index.html","862410fd689870c7a0bb068ef0f26995"],["/2021/07/26/cpp_algorithm_analysis/index.html","be1789bd57067056b1a34d1ad3142d35"],["/2021/10/27/Git_common_commands/index.html","cc0f030f22d3d6101cbc53bcea79f297"],["/2021/11/10/cpp_singleton_pattern/index.html","8d51bb2807b68d0999d2ec4b23384f04"],["/2021/12/05/Semantic_version_control/index.html","8dca809ca657847e3fae65ab250b4016"],["/2022/01/10/cpp11_default_and_delete/index.html","a76264eb3475b65f19734096eaf83b1f"],["/2022/01/10/cpp_constructor_and_assign/index.html","112911b7221f5517732ff3baf8d473c2"],["/2022/03/18/Static_and_dynamic_libraries/index.html","8796e14f7ed93518a0ce64c722b5eb15"],["/2022/05/07/cpp_main_function_parameters/index.html","c4f18029db6d671677a217e26e8f52f8"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","3da49d09e25fbb6c04be251a1135dd5a"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","577a4e28a5ebb2c07a2eccd6ff1213bc"],["/2022/05/10/pages/index.html","60bd6fbdb53919755aaef1948e0395bd"],["/404.html","d81d27eeaf5a3c659a2af468e845f466"],["/about/index.html","608a8554fbc62ecb83498e18cba8b78c"],["/archives/2017/02/index.html","a4c3778b5435b3643f12ab9bd93e097e"],["/archives/2017/index.html","cfe49fdf2005dd73825ac80f923a8520"],["/archives/2019/01/index.html","8d60488fb3a6f3c178c36fb9f73fc1e9"],["/archives/2019/06/index.html","9e11a65b9cc9da330b6dfc5d92c905ee"],["/archives/2019/07/index.html","c3fed0921ad9698a02d36ca2c9518a16"],["/archives/2019/10/index.html","d9abe21baba4753ff938edb810b5f524"],["/archives/2019/11/index.html","9ccde64ab7e25454aea009166b27cc6a"],["/archives/2019/12/index.html","6b676fb4bf968108527fe195d3f176ea"],["/archives/2019/index.html","37d7e59fa8837111133dce9af39ae5a0"],["/archives/2020/01/index.html","1f29ee1734b21096d0206b445cff43b2"],["/archives/2020/02/index.html","5b15da24829141a573881ab416bf1f8c"],["/archives/2020/03/index.html","e1f81a0b7e4406807f2f8ee468be8586"],["/archives/2020/04/index.html","d842680ede19a7c8ba9739fc4167eef3"],["/archives/2020/05/index.html","07d32c4db98f61d7ed6be30ee707a905"],["/archives/2020/06/index.html","8439b90e4e4a34aa0033779e08cd012e"],["/archives/2020/07/index.html","208443fcd6106ff6fbb6cccb9f5eed15"],["/archives/2020/08/index.html","54d8ee736864d9bf93ee31e81131906e"],["/archives/2020/09/index.html","2aceb9058f184a1fd89565d69d3a364e"],["/archives/2020/10/index.html","a25e79d9cc43506a977ff85295f20c60"],["/archives/2020/11/index.html","bf79458123a80b236f13f63f9c6ca9ad"],["/archives/2020/index.html","8c150284d6bf0a0d774f49e3643d00d1"],["/archives/2020/page/2/index.html","3ae51007d2ace1785f9c55d950ef538f"],["/archives/2020/page/3/index.html","38cc35353465364fd93db12389c1cd66"],["/archives/2021/03/index.html","b19de1098dbf336e665d00958f907390"],["/archives/2021/04/index.html","f5eb9ae7a257548c0488a02416970940"],["/archives/2021/05/index.html","b87f94aef6c867b99e2d4c421a861340"],["/archives/2021/06/index.html","95785857deea1d4a1e314c0e443b9faa"],["/archives/2021/07/index.html","dcfca3f763e848449e4b1f68ddbc6029"],["/archives/2021/10/index.html","536fd8393268fa5063968c35115ef8ad"],["/archives/2021/11/index.html","e6a7e22a2772708272c44e740eacd6dd"],["/archives/2021/12/index.html","48f60ed0e4122b34ef7984f362863072"],["/archives/2021/index.html","3ec03c13dace029a7dbfb03dc420fe4c"],["/archives/2021/page/2/index.html","beffdb2fa435aa70e0a193ab302e2380"],["/archives/2022/01/index.html","a1bfd006ea6459c81dc7a3f7ade78b1f"],["/archives/2022/03/index.html","0d17920c86b6f29fa4ec7b98dab58976"],["/archives/2022/05/index.html","deb05a5767f41a11c04a1f47da896e89"],["/archives/2022/index.html","d5b3524ec2355e8e74c61af23d11c8ac"],["/archives/index.html","dfba3119db3cad381c324e7a36a3fd5b"],["/archives/page/2/index.html","cb0eca6403df6262347c85138ef9f7ae"],["/archives/page/3/index.html","f3845e70dae3b03fdceaa011b0e49456"],["/archives/page/4/index.html","a52a1b17d99b1a85ed84bbf92ec511c8"],["/archives/page/5/index.html","4dc05765b3d00f71b79e7838a5c36691"],["/archives/page/6/index.html","43a5016ca914970eb3cb1a53dbc4d644"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","81ea171a6d36f20384af4b671cb1fcda"],["/categories/C-C/index.html","f476e4bfe5fe0d50e45d4ffaa4dbd8ac"],["/categories/C-C/page/2/index.html","67292c822b4987b0f5f532a5cae9b267"],["/categories/GitHub/index.html","8b949d5f8a330ce37c95887221cab813"],["/categories/Linux-学习/index.html","41f84cd30e77ee9088d67034caf07669"],["/categories/index.html","c0265c13fc45b180ae395d89a7c061bf"],["/categories/博客搭建/index.html","dd423956f3625df47d8ab672361fd551"],["/categories/学习笔记/LeetCode刷题/index.html","6e5d4b6fdc7482bfb13b56a0978d36c9"],["/categories/学习笔记/Machine-Learning/index.html","30389f5ae6819d847939ce9db805e9d4"],["/categories/学习笔记/Python/index.html","8ea33a4e1eb144e5c07fb1f48651d6a2"],["/categories/学习笔记/index.html","b81f9a83395443df4e5eecfb6b7ff1ff"],["/categories/学习笔记/page/2/index.html","461250ee3a11f3330d26a2ca5a59e466"],["/categories/转载/index.html","9c7d7b474577009831bf5f3afc71444a"],["/categories/随笔-杂谈/index.html","5d445ac13379ebccbdf466b842c0e21f"],["/clover/index.html","2ee2f26eb27c6a2fa58e7dae5afa3d23"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6fbc1fe5679b77e441b9ce353427788c"],["/google85949087cc957523.html","06f68cefad95aeb18b077ab093e0e107"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","e8362889c46985d82361319a043ebe46"],["/interest/index.html","9fe6de3927738a78d7acfe6cfe28e439"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","aa895342fad55aa57e2ff25934ff80dc"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","611201869b735d839757eb2413b3dce7"],["/page/2/index.html","e1ac68a4dcd5eadee0c0659359f68c15"],["/page/3/index.html","105b9083bfe104fb8f299853a9d0c373"],["/page/4/index.html","bc906d6db047d050c72cadc52eacc3ea"],["/page/5/index.html","7cf3934e6a868f63a8563e6fed3b47a3"],["/page/6/index.html","a0f19a67a6c4e2d70d379c2d1c83ca47"],["/tags/Binary/index.html","34648e3545420a76eb807f2a6a6c11d6"],["/tags/C-C/index.html","a828a81be31adc84bcbe4ee0cec85b6f"],["/tags/DCLP/index.html","d5685d5a6c885c8d7b95679574de6736"],["/tags/Git/index.html","232141d21d5b790d65eb78bfe7399e40"],["/tags/Java/index.html","d4158dbe958a5acfd42d8a1b56540fe4"],["/tags/Linux/index.html","1579c16e265184abfdcaa4602f9bc061"],["/tags/MNIST/index.html","b448ce0efee9594cfe9b9e340ff6285f"],["/tags/Machine-Learning/index.html","511b90645328faf1a1f0f1ed8805d3f4"],["/tags/Python/index.html","84389bcafa7409b59a1c6d47e4313303"],["/tags/STL/index.html","6bfaab4302492c01d9c3b6b7fd7cf576"],["/tags/Struct模块/index.html","34b3b7e8b55c4e900841d9261264a542"],["/tags/Windows/index.html","fd6cb4b5acfae6d31912bf7199477a14"],["/tags/define/index.html","041215149e94e7c178ebce8411f634a7"],["/tags/github/index.html","cd9a9ad25ac3a2c4f027a42d3ce1428b"],["/tags/hexo/index.html","fe8ec97e15dcb392f665f40629e6e239"],["/tags/import/index.html","4a6e1c79c279467b2d7937a6d31617af"],["/tags/index.html","db8d021c9f285770a95a7c2731be594d"],["/tags/initializer-list/index.html","8f95223089bf922bb749a48c78066925"],["/tags/main形参/index.html","2dcfb929635a1cf00f0f24613f6f8504"],["/tags/matplotlib/index.html","221632163f6792fd287e44e58ab720f3"],["/tags/melody/index.html","410d5bb5bb1c67d8ceb8363cc573e1b9"],["/tags/npm/index.html","479516c93b048944c45453d67c342b91"],["/tags/priority-queue/index.html","0d234fe3eff18d29d0df303d780d1960"],["/tags/rain杂货/index.html","a7ecc0063bd9f0131910d608ac645ecc"],["/tags/socket通信/index.html","77d64a8193c3ed27cb568ded5bf4dcc8"],["/tags/this指针/index.html","d8e519ae75bd09cc54b71d288a2697e4"],["/tags/typedef/index.html","30d1845e339865f51d9b6238ae23714c"],["/tags/using/index.html","f1f65be86f7d57a30b3e7d81dac90eba"],["/tags/中序表达式/index.html","8a12e19e671cd6cff8741ffeb1be3f89"],["/tags/二叉树/index.html","8b144183a6f538b51d571a16ae090ddc"],["/tags/二维数组/index.html","e6d0dfa2cb833f3d25dcefa22afd62d0"],["/tags/二进制处理/index.html","8c34663b974756bc23fc5edf03877eb7"],["/tags/优先级队列/index.html","337711d78127ef8095521e521a27c018"],["/tags/内联函数/index.html","5519f1a3ac887694b1fedea22561968e"],["/tags/减治法/index.html","646475595f5d24098f417cce1e18306c"],["/tags/函数/index.html","4c8aeb8264423f795f516c21c598d828"],["/tags/函数图像/index.html","b6f684ae4fa2b50d5364663cca8429f0"],["/tags/函数调用/index.html","d8a235ef91fffdeae2a98730053135e3"],["/tags/分治法/index.html","bc466672d70f612a91afc2a6662f715a"],["/tags/前序表达式/index.html","de0da8f3af734132f21b32563a603c59"],["/tags/动态库/index.html","e20fcbc6a945e6678b3ddbeb3f755719"],["/tags/动态数组/index.html","392f3b3be8f1d60528e7d7110a6a9872"],["/tags/单例模式/index.html","677a9f73a970514236ae853b6c2ec2df"],["/tags/单调栈/index.html","b399e9fc569620d5d461bb79cf0fb7fd"],["/tags/博客美化/index.html","a422a9c1ea91b640bfa495694a8c8d4c"],["/tags/参数传递/index.html","7030dd34115c9abc7846cf59072e277a"],["/tags/可变形参/index.html","067ee836ea7d1ad3a98681162c12202d"],["/tags/右值/index.html","3325551f72f345bd63bb9e1bc823e94e"],["/tags/后序表达式/index.html","bb227d3e537d607f31227b41b581d043"],["/tags/基础/index.html","4b0c2549175d1e0ae9f463afe607bd95"],["/tags/堆/index.html","45d1b29dc4502c04bc1e862f95e7205f"],["/tags/多线程/index.html","77cd57043e4ffa237194c05f7a07d559"],["/tags/宏/index.html","427eb728fb7bd6c0ff6ddbd0b6f6bad2"],["/tags/左值/index.html","326964badc0f77b4cce5c63a68cf11cb"],["/tags/开源/index.html","7bebe26f7533604eaaa50584d8c11355"],["/tags/影音视频/index.html","1de3a9bd2b1826e9b0cc00455cd1db1a"],["/tags/成员函数/index.html","9526d7658dfa9ba9d45dec113723af55"],["/tags/括号匹配/index.html","20a182273216be5a14c89b30700b6e4b"],["/tags/排序/index.html","f56f6dd62b05e97434205f752dbded03"],["/tags/数据可视化/index.html","300e7a786e1678ae7780fbefbf466da1"],["/tags/数据解析/index.html","ceb2af76e1dfb9c7d3aaf813a5447a9d"],["/tags/文件流/index.html","fdd8209f351c41ea67fc92a6006752a1"],["/tags/服务器/index.html","cc07e371c95912ba799e638b95ca2fd4"],["/tags/朴素贝叶斯/index.html","be0ac6da5858753111dd5e8be62d7e7b"],["/tags/机器学习/index.html","d3c5fae83b77778024776cfd4f63eada"],["/tags/构造函数/index.html","85205905d04870bb5cc5e209cf8ad09a"],["/tags/析构函数/index.html","6ca9b30b5f9536fbe3d4557bf34b8e7a"],["/tags/标准库/index.html","778c0b0c12de9a1c5d55b47e23ba2e7d"],["/tags/栈/index.html","8afca2675d76ea87d9c2c80e0dd2e4f3"],["/tags/模块/index.html","b31c715a18a6d4c59d327c785f700d93"],["/tags/版本控制/index.html","20205511a1169365a42c79e7917e9baf"],["/tags/省略符形参/index.html","dba9bae48d243a095dba56a8255776ff"],["/tags/神经网络/index.html","c2a039e464beb1cbb72dc7a6acf8b89f"],["/tags/程序设计语言原理/index.html","4a644876a49ac636c2b8c1f25bd52740"],["/tags/算术表达式/index.html","638e9108c8350359d63ecae90c6b1122"],["/tags/算法/index.html","9971931e91288f4ee8a1597cd55d4973"],["/tags/类/index.html","3021730750de541ef300cd304168ecb9"],["/tags/素数/index.html","3e1fa9aabcf6af2a0398cd388ffbc768"],["/tags/考研/index.html","e195c65c67df7fab1ce9a0346d770eaf"],["/tags/莞尔日记/index.html","b8f4e01aef3a28ed6adcde430e64ca47"],["/tags/设计模式/index.html","e824bf2223e8ae386d900ed8885778ab"],["/tags/赋值运算符/index.html","c9081ac3b90d1cf1add66afeb8f36cd7"],["/tags/进制转换/index.html","c9d9947c9ad82bd826e60371033ac41f"],["/tags/逆波兰式/index.html","5d5b11257031bd07a5fdb6bc5380c9c0"],["/tags/锁机制/index.html","92e13d9b5a9bf456192380931d51230a"],["/tags/队列/index.html","c71508a7bb1189820ece6af87319db25"],["/tags/隐式内联/index.html","8a297fa5831ef612c7f3d14bcab6685d"],["/tags/静态库/index.html","6786121552d7a1ce9a88b3e38d0d5d98"],["/tags/面向对象/index.html","c503347362eec516afe8c9b7199f7103"]];
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




