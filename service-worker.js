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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","d8c352c9913d3ec94b95a18b85538e17"],["/2017/02/01/hello-world/index.html","7a3c9e7cfdc031a2d1b68f13abf164dd"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","e1fa5dd68b3f2863813fc6f01ab513a2"],["/2019/06/03/Linux-programming-examples/index.html","7daa583a89f9c354f5a375199d785ed7"],["/2019/06/10/Server-basics-and-configuration/index.html","adc61a9c1880f952f21645b8790edbc6"],["/2019/07/01/Linux-socket-communication-programming/index.html","29fec0120fa77e08aaebeda512ef43e8"],["/2019/10/04/Python-function-call-and-module/index.html","f82e3d7c539673264228e49b03cefb05"],["/2019/11/02/Python-100-days/index.html","3b89d4f03aaa823b9b621fa1bb3c9b27"],["/2020/01/10/C-or-C++_dynamic-array/index.html","16bc964523077020ad6231cb3578bad0"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","ea12ee8cf13050694782173f168df418"],["/2020/03/20/Jincheng-lanzhou/index.html","d3b758f5e96f59c04ed6537df57591ee"],["/2020/03/21/Cumt-aerial/index.html","80624b7159d7f3359940ca7fd93e9c15"],["/2020/03/25/Bitree-construction-and-traversal/index.html","61870294e9066a57c195fded42d8da98"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","a04d20d4510314d0a3263615a429ebb2"],["/2020/03/27/Stack-application-bracket-matching/index.html","eafa66b2fc68bed9aa3c0f3905797acb"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","b4ccce5b2483a21c456b67172ae470b1"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","2d83c04b94de0a451425f65967369467"],["/2020/05/30/School-celebration/index.html","eeaae5ae58517f762d1c365ee7a34cda"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","6effbc8c68c71fde895735a1b4dc2a80"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","a59f1f8507bc02b995c17ec4209bdfbd"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","558f3f2aaebe929ef98465c4613e5f3d"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","46f0d43cb96ee709dc653c40396ae946"],["/2020/10/09/Python-data-visualization/index.html","5bd7506389141f641851398c580a26a3"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","4ac4480061416a1604baeb39799b6e23"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","aada20fe514672cf88a010c53e4c444a"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","0f6906c9e0662d5191a46ffd34c4d7ff"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","a8802aa53e40e7edfdf5cbd96319a524"],["/2020/11/02/Data-visualization-matplotlib/index.html","00b14c41c9928cdfbaf46c439500c162"],["/2020/11/10/Naive-bayes/index.html","82de87c09e8e8bbb94f0fe4a7f33a853"],["/2020/11/28/Matplotlib-function/index.html","117084be5f65f1ead8541d4880f3c34c"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","9cd43afeed949f5546c45407aa99e2b3"],["/2021/04/27/Git-usage/index.html","99c1b8279d34108e11c12b7e5c513dc7"],["/2021/05/06/Arithmetic-expression/index.html","bde183a779c9ed9fe29f3ab3a1516367"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","dc49e6aab351378553132993782cc334"],["/2021/06/25/Classic_TopK_problem/index.html","ea5e4bc4fa9e66d25698ef3ef58aec5e"],["/2021/06/27/Calculate_prime_numbers/index.html","726944a9c8b44ffd9dcecb08a8841de0"],["/2021/06/28/Priority_queue_and_heap/index.html","8e8a2cbec8a4da5bc06c58e702200483"],["/2021/07/15/cpp_constructor_and_destructor/index.html","9b35af401aee062d1d986b4274330bd2"],["/2021/07/17/cpp_file_stream/index.html","552578994f864e0609a044e6e42709d8"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","3f5cabb0c69a32882887e02b6628ca42"],["/2021/07/22/cpp_this_pointer/index.html","45f90988d62c78b5ac67c4464b5e8778"],["/2021/07/26/cpp_algorithm_analysis/index.html","922781bd8d3602fbd24c471132d9a0f7"],["/2021/10/27/Git_common_commands/index.html","7e6313e15847bad7efc153b2a0e1387b"],["/2021/11/10/cpp_singleton_pattern/index.html","c798527543005f3c7b70dca96f98e040"],["/2021/12/05/Semantic_version_control/index.html","4a9ffe45ebcc6843cc50b5eb5c6ad9f0"],["/2022/01/10/cpp11_default_and_delete/index.html","429b102aa6baabfd9b6cbde4ef33def7"],["/2022/01/10/cpp_constructor_and_assign/index.html","385dba59b9c2bab18981c0a6a35401e3"],["/2022/03/18/Static_and_dynamic_libraries/index.html","85fa68803fb96fea48805b2592291228"],["/2022/05/07/cpp_main_function_parameters/index.html","f35aabb6286b066592b709f10334786f"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","6d6c93c703f12975155dd0ea1ee58a9b"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","4ad736d6065af4dc1253015665565316"],["/2022/05/10/leetcode_time_complexity_estimation/index.html","ab52431397dcb8c354a98069402b3e00"],["/2022/05/15/Hexo-melody-blog-beautification2/index.html","99776c6ec864b3a3df7492f22f9e3565"],["/404.html","648e3167aeaca37e5a3311aba1ec5889"],["/about/index.html","542f3632eff66c2277b3aba1a252cbac"],["/archives/2017/02/index.html","09d6788847d4b9e9680b2b5c5cc1b77a"],["/archives/2017/index.html","06dbbba303e3b95a467b4aaf92b18470"],["/archives/2019/01/index.html","0f933f2cc69788399da379993714c5c2"],["/archives/2019/06/index.html","badb3276a5dc193f1b988f29a44b83a8"],["/archives/2019/07/index.html","3059e7baef95548e1fb149cb6a25103d"],["/archives/2019/10/index.html","f8ffc09eeb2f93c6a2dcfca3cb2fcd82"],["/archives/2019/11/index.html","75538a894c40349239b12fb519168e3c"],["/archives/2019/12/index.html","0f9b3a69f74743797c4765700016238d"],["/archives/2019/index.html","3a1cc068c4409ab4582e25b93667bb36"],["/archives/2020/01/index.html","0b11e5cd0545b50838b77c3e588d9081"],["/archives/2020/02/index.html","5bbffe522ec5eb559ce135217c0fbd2a"],["/archives/2020/03/index.html","9992bb04e2526d77d6b5c962637e72f4"],["/archives/2020/04/index.html","612a3ddf0b1710a8b17538fc173fe934"],["/archives/2020/05/index.html","b02c4b9387abd6b47997d81062047980"],["/archives/2020/06/index.html","c7d7b3da83e054f5ead1c737156e4939"],["/archives/2020/07/index.html","e5389a26cd779aaba689aa3de0a4a195"],["/archives/2020/08/index.html","733f6a2099b6f99aaee1b92bb091b010"],["/archives/2020/09/index.html","6df0e2ce3128cb8394694d13b6ea2cae"],["/archives/2020/10/index.html","c839685fc27c36e12fbb62902480d45d"],["/archives/2020/11/index.html","d641cd546585e79e3101ed3181307344"],["/archives/2020/index.html","421f767966b578bb950fdc500bba1b81"],["/archives/2020/page/2/index.html","c452d6944e463d4ed2005c91c9f55da5"],["/archives/2020/page/3/index.html","a38311eda22e30dd9157944b347cc39b"],["/archives/2021/03/index.html","0d3d10b0056183ebe5b86c67c9b8a846"],["/archives/2021/04/index.html","a1b2d7f542b2a8b427ee4457ff77b54e"],["/archives/2021/05/index.html","c23f0c3640ec9af0772ab69cbfdc7a56"],["/archives/2021/06/index.html","5a2b38726d216488ef8cdaaa3bec3e0c"],["/archives/2021/07/index.html","946b99196ba343dc9346f9d8f2422c85"],["/archives/2021/10/index.html","1de9c837be039aaf2030e92bec731b64"],["/archives/2021/11/index.html","f1bd47de2eff3f3ae526af318e608eb0"],["/archives/2021/12/index.html","5f4e19407c83de173b75bab4641183ff"],["/archives/2021/index.html","3b3bd8d4631f2df0327c6b35b28728f1"],["/archives/2021/page/2/index.html","c633cfb222ad00f4a92aacc6beab9b1e"],["/archives/2022/01/index.html","e2c59e6d0ebc51c66ebb72d369046630"],["/archives/2022/03/index.html","583ca0e4da9693ae5b1e733dc656f58a"],["/archives/2022/05/index.html","d4e963be810ecfb7b5b4b626bbdc1b1a"],["/archives/2022/index.html","aabb8ede93bf7e322fa57b30a5590ab2"],["/archives/index.html","c0ad051d26d1bf215b79a9f47a2921da"],["/archives/page/2/index.html","1c3d31c0afed4fbe7195652e34ce8000"],["/archives/page/3/index.html","9ee2c0430889f9ed9e8be2e4bd89f637"],["/archives/page/4/index.html","1b5e033b1d509c8f780939af85982d47"],["/archives/page/5/index.html","d2e9c111dff8a602ac8c30edabe1e81c"],["/archives/page/6/index.html","1ed2c9f6c5126c84b329ca5094b6bd3f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","96a3355186d49f605ace1d6429992923"],["/categories/C-C/index.html","1a516a8fb2306583fc9bbeb3560594d9"],["/categories/C-C/page/2/index.html","ee9f5c7680039df578fd5b757886ca67"],["/categories/GitHub/index.html","21440945ecce714d8d0af9faf45aa852"],["/categories/Linux-学习/index.html","363f833888fd1a484b8e5a00a342f96f"],["/categories/index.html","c5ba8d88520cbb771e0e3ace3bd704ff"],["/categories/博客搭建/index.html","1e804150decb2178fa5428c66e9459a7"],["/categories/学习笔记/LeetCode刷题/index.html","10c0fbd99470638d25d4ec403ee5c05e"],["/categories/学习笔记/Machine-Learning/index.html","74aac3dab1bcbd20a2edc4f3e573aebb"],["/categories/学习笔记/Python/index.html","738a9f00b754ce61b925455171a58ada"],["/categories/学习笔记/index.html","d3e98ec324b2ec4c760e5c47acef5ebc"],["/categories/学习笔记/page/2/index.html","536d16ab7ecf692ffb491806bd02afce"],["/categories/转载/index.html","21e038ded5841caed51aaf38e5257049"],["/categories/随笔-杂谈/index.html","c923f839bdf2b732317f10a5161b16a7"],["/clover/index.html","5efdbc8aeec0b8d207e1e3d606119ab9"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","dc00d9d29e07f0f7c4e469255210f413"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","81a68aee69259e7fb8d8fc01cebee94a"],["/google85949087cc957523.html","ab45551618cc7efcde5f3af932e87af2"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","ef4df082e60e4121e3ccbbf6ee81bd0e"],["/interest/index.html","792bf6e4526e44942fab44adc3fc26e6"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","24e449947ac4b9981fb923bd610ebdaa"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","a86acd220fc25d27554c147130132c09"],["/page/2/index.html","1a23cd60b27e27e90efa24aa23ac1b0c"],["/page/3/index.html","db8d272dd88e079ab038e6c559861748"],["/page/4/index.html","67c769294072b02a48828f5ac2d7b322"],["/page/5/index.html","0645092d38b198b4689f24973f65a37d"],["/page/6/index.html","ed919a579538218c0ee22da79595252e"],["/tags/Binary/index.html","fb41590feb73ede642522906d9943750"],["/tags/C-C/index.html","2dd8eb34ccc521ba84a4a59dc65e4320"],["/tags/DCLP/index.html","217206477648b57ca5af6d14aaec19e3"],["/tags/Disqus/index.html","56a3c7348d0480158db201f7f7cb3431"],["/tags/DisqusJs/index.html","1ad5abf49bb94c0d91dc0fd96301c518"],["/tags/Git/index.html","25ae64af687488dee61b6c648522c23c"],["/tags/Java/index.html","e8f2af31cfbd077f2dfef4f254cc0550"],["/tags/Linux/index.html","6817aaad226ac27f8fa2c588d45ec77b"],["/tags/MNIST/index.html","da5116d0a31936bc63e95dd8216e3ece"],["/tags/Machine-Learning/index.html","a387076080c8c161714a0324142dfe2f"],["/tags/Melody/index.html","29b22ee191c7ce25fe21d9a80ea84f75"],["/tags/Python/index.html","49fb9937733df327321a04f8d09ca13a"],["/tags/STL/index.html","f029a53253125fd112104f9d00cb3ae4"],["/tags/Struct模块/index.html","44d50f0abd30f9bb325392d2bed8e8ee"],["/tags/Windows/index.html","bc95a3cd8dd19e87a4de424f39f32b8c"],["/tags/define/index.html","449b2327356cde8ab768872e21520527"],["/tags/github/index.html","984e03d9b193ae815654483a1131e8b1"],["/tags/hexo/index.html","c04228b46d8e246112b619e3b9e0c699"],["/tags/import/index.html","3527474918d391df2ad45ff02082f471"],["/tags/index.html","73d04ba182b3a3689772752e3b8d23f9"],["/tags/initializer-list/index.html","0922db76e8b1104e2ac415f611a3d0c8"],["/tags/main形参/index.html","b1ea2dd143488d67e54fea128a290751"],["/tags/matplotlib/index.html","d507eae6c625e66471c2df3dd60065eb"],["/tags/npm/index.html","9f0973eb1d019bce100cf6f0ab725405"],["/tags/priority-queue/index.html","ab60567c625f49cd8ae70e8e02dc14a9"],["/tags/rain杂货/index.html","301973eba4f2df45700ce5e0763b4430"],["/tags/socket通信/index.html","f14a46073b6343764a00421e6f84d043"],["/tags/this指针/index.html","5edf118ad5fb8ff88e384cfab80f0781"],["/tags/typedef/index.html","a10060f799fcb830a8554f1c9040606f"],["/tags/using/index.html","c2b83997ce72bd8ccaed4e106ad1b694"],["/tags/中序表达式/index.html","b0350d2d5596b9841f67e3974cc2574c"],["/tags/二叉树/index.html","025e572ae3dfa664bcf9da1ec533df77"],["/tags/二维数组/index.html","20626521fcf48abd11963f070380aed0"],["/tags/二进制处理/index.html","5d6f1c5310b9448b7fe1a749054816ad"],["/tags/优先级队列/index.html","9dbbaa423f526e766e6c2048858eb90e"],["/tags/内联函数/index.html","24e1110c9960b26b5a4552f65c9c6b74"],["/tags/减治法/index.html","60b638814638b3f7fb06384f47fef99b"],["/tags/函数/index.html","8b1726da46ade2d549870ec40f6f9db1"],["/tags/函数图像/index.html","c950f61062c39fdd3f4652355e5d1729"],["/tags/函数调用/index.html","09a146bfe5d02bc0790d096707db992a"],["/tags/分治法/index.html","f365d4525d2e90b46cfdd20781ea6c3d"],["/tags/前序表达式/index.html","0d462a048e3600716632ee82fdf04962"],["/tags/动态库/index.html","a4590db79e30667dd1ec357949e1871f"],["/tags/动态数组/index.html","2ae4b656fe40dd656e5aafb3e0396159"],["/tags/单例模式/index.html","dbbaa2415148f900b963c760ba488b96"],["/tags/单调栈/index.html","88e300e0e8b20958b8483029c1636c16"],["/tags/博客美化/index.html","daff1ca63edc07398789033e4c6959e4"],["/tags/参数传递/index.html","5a61a6c47d39b506b3219197411d4171"],["/tags/可变形参/index.html","584fa453e520c0e9a2cea20d668f480b"],["/tags/右值/index.html","5299114c83ea5b340874cd81e487b583"],["/tags/后序表达式/index.html","975b0d3f7bad68225ac74622fbac2996"],["/tags/基础/index.html","bfa37bd8be900ae5f990f9e6da3ef936"],["/tags/堆/index.html","65c07413218d1526255ac0d892c579e3"],["/tags/多线程/index.html","9235dbb40c2a436e109564d5a0bd7cca"],["/tags/宏/index.html","93df4fce8d933cf52aee6c84788e9ef3"],["/tags/左值/index.html","f0611a13a6cf83bb5cd4d655f6ec8df4"],["/tags/开源/index.html","590de23ab0104eb2aeb77798327338fe"],["/tags/影音视频/index.html","024faca3c7ff24a056f454d9150f118f"],["/tags/成员函数/index.html","bf5678e314e3e5aa7a4e2c42c9cd1ac4"],["/tags/括号匹配/index.html","86ca73684d4bf0fe1258e78545cd0fb1"],["/tags/排序/index.html","2102ac07549d72be0e94d83be00b7c3a"],["/tags/数据可视化/index.html","b967e7f20499943a939449ae6d7adb2b"],["/tags/数据解析/index.html","07dba7d182a256bdb9bd9f29244b5820"],["/tags/文件流/index.html","4fbea8c567edd8d2e5b30067214d5c97"],["/tags/服务器/index.html","a7fb5f55aea9c13600e4dd96ff6d9db4"],["/tags/朴素贝叶斯/index.html","ad1429baac7a37d93f495dd50955daf6"],["/tags/机器学习/index.html","dcc6c235b2f629a154c5f4e575b18846"],["/tags/构造函数/index.html","354d923ca26c1aba4d51ebf9944e3b2b"],["/tags/析构函数/index.html","da9cb2596944ae909a8e4177a85cf60a"],["/tags/标准库/index.html","5c024b1a15d2b96dccd4fa0bc4798a35"],["/tags/栈/index.html","1af98e59d4b1ebe217cd3973222c2a47"],["/tags/模块/index.html","bd0860eb355e54e598450c641e33c6a4"],["/tags/版本控制/index.html","530e6bffd415bf5d247b3998061e73d9"],["/tags/省略符形参/index.html","626ba8341f84de788e69ceba2abc24fd"],["/tags/神经网络/index.html","4cd87657a4cd12a2f77195ce800f1c06"],["/tags/程序设计语言原理/index.html","b8d4ffc2c24a57458b282e1b7cab23c5"],["/tags/算术表达式/index.html","df82fb941f64c3eb179465718aff017e"],["/tags/算法/index.html","b794053602610662791d0c35e3e2a66e"],["/tags/类/index.html","6931fa85500ee7249cd76859d63806c2"],["/tags/素数/index.html","1a3f9a178563fd001234b26241452a96"],["/tags/考研/index.html","84caafeac6b9adfdd433687e1d336ef9"],["/tags/莞尔日记/index.html","111b771e10cfd1ae2461aeaa0e5d4100"],["/tags/设计模式/index.html","2707b95488d7c1534d59759bb90070d0"],["/tags/赋值运算符/index.html","e21b55a7133c18917e1ac747e4b307d3"],["/tags/进制转换/index.html","289954af0f028a53283412cdd8f18c9e"],["/tags/逆波兰式/index.html","6fee2b2a5f81c377109bded6b79f2c7e"],["/tags/锁机制/index.html","a38535e3dab569387cae2b65879f588e"],["/tags/队列/index.html","564b374ef904ffae91cd5407e233622f"],["/tags/隐式内联/index.html","5382ea4b493cb38731a9bb77a1bdbe04"],["/tags/静态库/index.html","7f9af8ca20b736dc2d768b454b48617a"],["/tags/面向对象/index.html","98e046b143559f8e661d48f76cb8fd1c"]];
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




