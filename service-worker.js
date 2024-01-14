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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","a7f357e787cf69f8fe49e9d64ed27bb1"],["/2017/02/01/hello-world/index.html","2d902f28cfd2081f3a1502359b5d9a0a"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","b85d7ff6dd0028045d12881fc5338dce"],["/2019/06/03/Linux-programming-examples/index.html","cc0da9c96a5ffa0da6ee68835c99aadb"],["/2019/06/10/Server-basics-and-configuration/index.html","77c173b35310a310f7b9688863c142be"],["/2019/07/01/Linux-socket-communication-programming/index.html","56e2d4df6dadeda1af95e22afabd040b"],["/2019/10/04/Python-function-call-and-module/index.html","065aaae3d58928ad8678155011cea771"],["/2019/11/02/Python-100-days/index.html","190f3e3897840234826551ed2424b790"],["/2020/01/10/C-or-C++_dynamic-array/index.html","73e392bb361dccfa3508bf7024a0b5ee"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","ce869b493e59c95c746ef532592aa699"],["/2020/03/20/Jincheng-lanzhou/index.html","b73d1126b10dd128727739e691e55293"],["/2020/03/21/Cumt-aerial/index.html","4e2c3c9f1cc3be22f0fdc829bafbc5a5"],["/2020/03/25/Bitree-construction-and-traversal/index.html","8270f939419cb937e26f00d03438a4d5"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","1dcef2730179a641fba54052343b6318"],["/2020/03/27/Stack-application-bracket-matching/index.html","53af787f00d0760649ae7c560afc1c5e"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","f5780d310c836328fcd1e7cd96e7b955"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","3ead42a1ac0e4167a51805e418b8b286"],["/2020/05/30/School-celebration/index.html","f76db896223d42295617038cc29235a8"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","973191a4a86d6734062a09970886e0f1"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","df2c918f834a4570eaf0438782b5ab1b"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","ff8aa3c8bee4f944f49bf101addbc55d"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","7686080abfe71c3887ac86ed46cb9e33"],["/2020/10/09/Python-data-visualization/index.html","053e4c7cc1b01acd656f646bf089999c"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","e0a30eb8de1000d20fe0f0b16eea0b44"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","29f7ebf2298b0eca56fe4e7601117704"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","ee66954381f8b0d1a40ab2c770d31ad8"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","f117585c58156863380e7c4b6ec86938"],["/2020/11/02/Data-visualization-matplotlib/index.html","885440411460f78682f871ad1068c66c"],["/2020/11/10/Naive-bayes/index.html","e1837c3d26eececdf150e84b84e4ef40"],["/2020/11/28/Matplotlib-function/index.html","e426343f2923fcdaed59784388645999"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","3ecc9a45a3ce1ed6250170e951a58762"],["/2021/04/27/Git-usage/index.html","915fdf87a4ba90409a8a39184df2c0fd"],["/2021/05/06/Arithmetic-expression/index.html","c9a148b77e59555916ea2ba4b0808d89"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","7df43faf2d93f178ed846981b4f31aac"],["/2021/06/25/Classic_TopK_problem/index.html","00ccc4a7ab640f096c4af651080ed334"],["/2021/06/27/Calculate_prime_numbers/index.html","4bbf02a95af57445417a8b3f98730e65"],["/2021/06/28/Priority_queue_and_heap/index.html","6eee685420ab08ce44419c7ff64643d9"],["/2021/07/15/cpp_constructor_and_destructor/index.html","db15c69f186623fa0ba4826d8981d8b8"],["/2021/07/17/cpp_file_stream/index.html","7404f429af3cb422e3aec8f02834abed"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","0b73eaebc4eea9d5b315ebd00ff0de80"],["/2021/07/22/cpp_this_pointer/index.html","2a0cfc84a3e079a82fcc18339bbaa89f"],["/2021/07/26/cpp_algorithm_analysis/index.html","0335ec20f750321a320cecf0eed151cb"],["/2021/10/27/Git_common_commands/index.html","f5916a163947c8caadf6727fb352ef10"],["/2021/11/10/cpp_singleton_pattern/index.html","be1e089d4ef65ec1c5b08985e6c076bb"],["/2021/12/05/Semantic_version_control/index.html","2c2f5c7e4b0aa087e2d54866d4db55ff"],["/2022/01/10/cpp11_default_and_delete/index.html","3cea984cd461a96dd82e6da7c342dc40"],["/2022/01/10/cpp_constructor_and_assign/index.html","482e0921808e9b419338e87d4d69aae2"],["/2022/03/18/Static_and_dynamic_libraries/index.html","a12bd10876e35adbd059997a1db8de61"],["/2022/05/07/cpp_main_function_parameters/index.html","55cd2ceb3c0203cc03680d031be0c831"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","4acf1f79b0df3d64be4b86aa931259a4"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","d957141a006bc0f324287aa33d9dd978"],["/2022/05/10/leetcode_time_complexity_estimation/index.html","02b56526f041cfd4b757605e5207a010"],["/2022/05/15/Hexo-melody-blog-beautification2/index.html","3e0d389af0398e9fa2be3959216020dc"],["/2022/07/26/cpp_format_string/index.html","5ae1a2bf16baf6bf724f92a3adeb35b0"],["/2023/04/04/Qt_and_cpp_implementation_TODO/index.html","930d2b9ee11fd7cbdebe54f4c0f1b89c"],["/2024/01/07/Design_pattern_study_notes/index.html","4fffc849a20547c7761363c41428c085"],["/404.html","648e3167aeaca37e5a3311aba1ec5889"],["/about/index.html","13caa0c72e97309a0926b796e76bd231"],["/archives/2017/02/index.html","f385f9f87533157ec65ad786ca7691b3"],["/archives/2017/index.html","8416555e5053a6156b14a3517462d75a"],["/archives/2019/01/index.html","5874228a142a0b0a4d6c90021715cecc"],["/archives/2019/06/index.html","f0447e31258f637d0c6ad19e868788ce"],["/archives/2019/07/index.html","227c1ac46a60297b43a5d687bae94e75"],["/archives/2019/10/index.html","a8367cc0df2f9f543c90d3d7e59708f7"],["/archives/2019/11/index.html","0a767830cd8c82aa6c2120d60bed8bc8"],["/archives/2019/12/index.html","ef2ffe1e766ea8d30f07db4d4dd8eb5b"],["/archives/2019/index.html","001cadc596719a59f50e5ca74e5c183c"],["/archives/2020/01/index.html","f6930acb6a6c94df594940c35711e77e"],["/archives/2020/02/index.html","3d59db6f982ecbe18643f9dff7a4d4fa"],["/archives/2020/03/index.html","1878e018408b2fb59c401eb3209b5090"],["/archives/2020/04/index.html","be9d292190a7bf571082ce8f564e392c"],["/archives/2020/05/index.html","093d3d7c9520683001150c6f847c6fe9"],["/archives/2020/06/index.html","6575d26b7ba7b93f407c85740ab0c7cf"],["/archives/2020/07/index.html","ccaaa303116028b318856616649ed141"],["/archives/2020/08/index.html","441ac0aeb29157913fe6133a1e12a194"],["/archives/2020/09/index.html","18617a4fd041959c29d948c6fa97f7bb"],["/archives/2020/10/index.html","4b89d23e711c2f1af66d5f44457d66d0"],["/archives/2020/11/index.html","5f5c99851b6dab6a9c00043ce33f32c2"],["/archives/2020/index.html","c3d6cba8036b94fdb91144e5f3384ad2"],["/archives/2020/page/2/index.html","c34cf0357103bc60a5c341c16c083743"],["/archives/2020/page/3/index.html","c5685284b95df4a1fb40678a69ab5a07"],["/archives/2021/03/index.html","ed8768976c6bfdf053f9477f7cc0c8b5"],["/archives/2021/04/index.html","9a05afb934a074c3762cce329eab8145"],["/archives/2021/05/index.html","fd07fc46d298999117a92cc45cf96c3a"],["/archives/2021/06/index.html","3cd7174081ee519baaf3597a7941bbb1"],["/archives/2021/07/index.html","8a78ea5ff74beb49f3c6b244a28b14d5"],["/archives/2021/10/index.html","e44b7e397a212cd9a7eb469b72da100f"],["/archives/2021/11/index.html","fee47f16ae4b0e8c7598d97a86e415d3"],["/archives/2021/12/index.html","01423909312d678e456d7fea52b594f2"],["/archives/2021/index.html","0ca3e5720abfcc727cb23658608e23eb"],["/archives/2021/page/2/index.html","44730721a04a7505f87f76b19a6edcfd"],["/archives/2022/01/index.html","fd311833442b6831a252bb7f66a2136e"],["/archives/2022/03/index.html","b81f7189e89ff8f0698ab17757fabe6c"],["/archives/2022/05/index.html","e8f60dd64593b685c71c6f6e8db2288c"],["/archives/2022/07/index.html","e5e36e781ad362929150336a1f9cbb13"],["/archives/2022/index.html","e6a7247745fcfc338ec8447db4093d38"],["/archives/2023/04/index.html","103b29bd5d0e5e71e77fca4414f0ac8d"],["/archives/2023/index.html","18d12d1842b38c32d7fd60e3b97e8b92"],["/archives/2024/01/index.html","24085489ab5c54dd41ada07654e4c1f4"],["/archives/2024/index.html","5dc9d312693171f4e2a91dc42cd7fdcd"],["/archives/index.html","d2459d2bde3cff691b1a52fe7fd267d0"],["/archives/page/2/index.html","70b365f37abb4e6ae6733e10aa3873a0"],["/archives/page/3/index.html","2768c369bc0ab61d1df8c5cc23088f4c"],["/archives/page/4/index.html","f515140852a115818d995fb5f22fad7b"],["/archives/page/5/index.html","88c70895c186aa7f1684c443edf7f966"],["/archives/page/6/index.html","fefcfe9426629d8abaa832efbf3265f3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","367fe25bff30ad97d21178c5ad4cb71b"],["/categories/C-C/index.html","2db547e43c3f798366174545713572ad"],["/categories/C-C/page/2/index.html","c5845d1c81ec75034b22f6e5b70d809d"],["/categories/C-C/page/3/index.html","c550040a129a03730b50728159af6376"],["/categories/GitHub/index.html","209f2a4569f6821afd000392db3abc6d"],["/categories/Linux-学习/index.html","840ece8be18c344c2e6beda4dea50a02"],["/categories/index.html","ccf7dcefe79b4d50f923e3cacb6ef030"],["/categories/博客搭建/index.html","3d85381110f544bd649df0c9cefb75ba"],["/categories/学习笔记/LeetCode刷题/index.html","b51bbec5f44dbf9209970ef5b529c6f6"],["/categories/学习笔记/Machine-Learning/index.html","4caeb63b3cb97e57070ea1e3470d189b"],["/categories/学习笔记/Python/index.html","c527a912d88cd1d49f6707fef8e44199"],["/categories/学习笔记/index.html","3da16728a9852be8066547b131b6964a"],["/categories/学习笔记/page/2/index.html","7645892c9d0f11ed9c9f92d5522fcd58"],["/categories/学习笔记/软件设计与重构/index.html","4f19ca6dec137a126d1a33925f93e31a"],["/categories/转载/index.html","c2e1cf1d1aa8c4da68be17918582d287"],["/categories/随笔-杂谈/index.html","e468abe0f505b021f3175f4678e7dbb3"],["/clover/index.html","6bc98e9993f983db24cba9598572aa8c"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","dc00d9d29e07f0f7c4e469255210f413"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","db4ca4d2ebf0c46f2070875501e68e97"],["/google85949087cc957523.html","dbc6d116137825e0c2ed3fb520dfa2f7"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","ca2b6ca50d41437084b27964a0e6debf"],["/interest/index.html","ece64ae77149c8dd7cd3b5d09b8022e1"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","015a1c3afe63c4f0307395f55a836573"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","ff5102adae591a19c6f7e63f0298b186"],["/page/2/index.html","2884720cbe39f569340ed21004aa4400"],["/page/3/index.html","5609c00c3c3188e835b589ccb4699266"],["/page/4/index.html","a563899929790e3db9e5f854c8ab24b7"],["/page/5/index.html","ba88133912767663ba1616868b1541b6"],["/page/6/index.html","1a365c373c2dd36e580006801cc676cc"],["/tags/Binary/index.html","8d3db2aeacf5893a17058a202e35c11d"],["/tags/C-C/index.html","2cb2dd654309dd54c04ca5af66582700"],["/tags/DCLP/index.html","f211ad6d3e0e7376596fd6fd149a723f"],["/tags/Disqus/index.html","d7ee5bb88584c8a1c6e6d4aaf1bb124f"],["/tags/DisqusJs/index.html","e09c8f935eb56cb45d504e523c527743"],["/tags/Git/index.html","5a4bef3f7cb3924c8538a404ca836c47"],["/tags/Java/index.html","f2f5504935734b6d0d297a0983a59988"],["/tags/Linux/index.html","651f78b2f1dda6fd98a238e6591f465e"],["/tags/MNIST/index.html","c574bfc7787212ccc3ba3f08afb6cf90"],["/tags/Machine-Learning/index.html","5b6c34f466222556099e1e5d645df43b"],["/tags/Matplotlib/index.html","87a7d81c0f1349be815fdf097cc5c849"],["/tags/Melody/index.html","0c6108d0a1cb807971c66914ceaf356d"],["/tags/Python/index.html","e2db21054226964059caf8073743b41d"],["/tags/QT/index.html","392d7b2d3b13d095f03ce97cc20f5211"],["/tags/STL/index.html","6fa26ebb831fa253087f8fa55533df7d"],["/tags/Struct模块/index.html","28cb10dd84aea5ecc26e03c8d79f6ea9"],["/tags/UML类图/index.html","173a91ec219c9562f1ef451f5a39a427"],["/tags/Windows/index.html","60b7ff303c4711105578bd69ac2c2826"],["/tags/define/index.html","e5a4fcdc29cce036a4e6f082d2616499"],["/tags/github/index.html","244b339cc0445e86bb51e904302840e7"],["/tags/hexo/index.html","62e6a994b3ef14e09fe06770a5ddb123"],["/tags/import/index.html","657496ea8bbbf17adbf423a0842af65f"],["/tags/index.html","d347e85be26adda26fade6e006d3d8cf"],["/tags/initializer-list/index.html","558ab9fbd29b4a2cb4303e17b65fbba3"],["/tags/main形参/index.html","1fc9f20a1108df0307759e68e43d6790"],["/tags/npm/index.html","bcd4f04c19b5463356b1a07075fdf06d"],["/tags/priority-queue/index.html","11a251e81915136be6b0612140d571b4"],["/tags/rain杂货/index.html","06a7bed0ba23b4818d4a3f5f6f984e6b"],["/tags/socket通信/index.html","e6141e047f94ba47b38a559200205d5d"],["/tags/string/index.html","127b9620767fcc62c9a91ca32d14fdc8"],["/tags/stringstream/index.html","44ce89d0152362b251c466fbdc703afc"],["/tags/this指针/index.html","e1e8f0cd492c8784bc4a7daa79070fbd"],["/tags/typedef/index.html","d3796bfd561936c0d4f2eb59d53474b7"],["/tags/using/index.html","59098c3e15b48761d2a238cb0ec40c6b"],["/tags/中序表达式/index.html","63f2b79ec3a9732bfe1cedf535564f3f"],["/tags/二叉树/index.html","e732ea3e96e9508610e7812acbe61528"],["/tags/二维数组/index.html","70279a4d3d9a1403e0ca4d458893fa14"],["/tags/二进制处理/index.html","178e3cbe249e9d5b308cae983c1dfe84"],["/tags/优先级队列/index.html","cf41aae6afc29c8c1947d47f8c70105e"],["/tags/内联函数/index.html","f61893c5904c4c238ffe8fe3c0ad47c7"],["/tags/减治法/index.html","21c9eb5cb59be81b99a9ca94ef505b25"],["/tags/函数/index.html","bfb1d8b2afb33ce0f14627a8129841c2"],["/tags/函数图像/index.html","2ef9b4cdc5680d7c29554fbe6389b215"],["/tags/函数调用/index.html","eef604cac290357b0f73e1018bc10447"],["/tags/分治法/index.html","7c3d7a55dff78419272d5bec61295ec3"],["/tags/前序表达式/index.html","e00f108689139138e5fe5497f1c211e3"],["/tags/动态库/index.html","1d4d9885ee18593777b022a744ba1880"],["/tags/动态数组/index.html","6ac3a8704da48fd68fe0d1ff82e2850e"],["/tags/单例模式/index.html","4cc212280114b68071784ba24cb0457c"],["/tags/单调栈/index.html","0e0d1bc18afd478d3018f277317de5f8"],["/tags/博客美化/index.html","0c5bd54af54b1ec7c71f4d80c49d171c"],["/tags/参数传递/index.html","4a655bbf19ef7022947e0f88fe553fa4"],["/tags/可变形参/index.html","0921ecaefd9a27bb05968e4b956bc3a8"],["/tags/右值/index.html","ff736a5d91933aad24c091af1c983709"],["/tags/后序表达式/index.html","5c7ba2d2f566fd22f300df2741df6cd1"],["/tags/基础/index.html","453790699f7afe276303e217b01e0b98"],["/tags/堆/index.html","4af23155484cb13f977338be15339b2b"],["/tags/多线程/index.html","2e37e5e6f25294ec3f9a50cca60a1b31"],["/tags/字符串/index.html","bcabe8a59cd473084764bbddc0eaf470"],["/tags/宏/index.html","5982fc9922b10b3c1421a6910ff8bbb9"],["/tags/左值/index.html","17c7229730ebdd8b5d13734bd97f1d1c"],["/tags/开源/index.html","7f5efdba9874b4f8b74764bc531a6fe9"],["/tags/影音视频/index.html","690e4fd48b345036631459fef9a01e80"],["/tags/待办软件/index.html","e00ffe3145e1c5bd3a0093059e329452"],["/tags/成员函数/index.html","3989b94da512bad1f70935116c95bde8"],["/tags/括号匹配/index.html","f4ebdf087c286339ef1aa1d53bb8860a"],["/tags/排序/index.html","b0b194be38f7a2e52567560e5731bbb7"],["/tags/数据可视化/index.html","7e205c2a2580130d7c812086c5e4ae66"],["/tags/数据解析/index.html","5a3390c720a705c8eda6cbc3789b70c1"],["/tags/文件流/index.html","b5928e74d87a4b4dc80bed826b9e2a0b"],["/tags/服务器/index.html","4415d2e38a36302bf6f96927beea6275"],["/tags/朴素贝叶斯/index.html","89edbd2b4f3ebe038774c28e61441ea6"],["/tags/机器学习/index.html","0b9350c3b635a629e5c53eee112798c8"],["/tags/构造函数/index.html","8561de2fb920ca1ed3f367d54da1a80b"],["/tags/析构函数/index.html","77d273bda3c7c684ff645b0156991bef"],["/tags/标准库/index.html","8c5ac94a811a463b8207ce6fc598b70e"],["/tags/栈/index.html","d7c10cee75ff6a035330f17cf1f94ee2"],["/tags/模块/index.html","be89c63459e1b04f4c98ac2c3177a118"],["/tags/版本控制/index.html","f06d70f1ca31fa91a1073f59003eb3b2"],["/tags/电子便签/index.html","1a5164aa48259b3b61fc12ad49e37310"],["/tags/省略符形参/index.html","9ee85d86e2e0403f9cd86fd801edca9b"],["/tags/神经网络/index.html","a95047b38a4717a1f97b68d8bb8dd27e"],["/tags/程序设计语言原理/index.html","94fe4afaf30bc353e67eab9eb793662a"],["/tags/算术表达式/index.html","d8cc7129916f72c644dbec2cd27d4009"],["/tags/算法/index.html","e77fe6cbdbfbda9ab6aa3593e86fbb76"],["/tags/类/index.html","be6631462a702a2858739df202942017"],["/tags/素数/index.html","9d7da799a63d19a171faf4881fbc07df"],["/tags/考研/index.html","80e088b764569f0f9e5f108359128bf2"],["/tags/莞尔日记/index.html","5162fd97eee197f2238eb39fc32cefb5"],["/tags/设计原则/index.html","b31b48a72e1d0b53aff9bde004484bd5"],["/tags/设计模式/index.html","0beffe185c9cc7d3dcfe99de2577188d"],["/tags/赋值运算符/index.html","de5917ba3602cc9c2c8272532228d876"],["/tags/进制转换/index.html","26ee7424f3cb8624058cde64dcb423ca"],["/tags/逆波兰式/index.html","ce1f4034f4b94ad6379a6c63e8f63932"],["/tags/锁机制/index.html","1618358bf28e6328b135f5fb0217df38"],["/tags/队列/index.html","225b392a761d4b488307e2e3d7b99a6f"],["/tags/隐式内联/index.html","126b38c008f331a043174d08ff1c87f8"],["/tags/静态库/index.html","b3db2faf7f4ef1c37bc951a7f0a4d981"],["/tags/面向对象/index.html","a06239f77812b3161ae7a1810525724f"]];
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




