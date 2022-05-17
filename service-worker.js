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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","eb98a182a0b55e52df641e5f6176480f"],["/2017/02/01/hello-world/index.html","75929b9b94c2af4553ea26ea697901b1"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","eee9cc0d684bcda32a5842ddfcab53b4"],["/2019/06/03/Linux-programming-examples/index.html","0c28bef068599be663be2259f11b9d77"],["/2019/06/10/Server-basics-and-configuration/index.html","7497e9fe0d148cfb2f305c8ccc03865a"],["/2019/07/01/Linux-socket-communication-programming/index.html","506062658410dbae5a1a7031e3ae73c9"],["/2019/10/04/Python-function-call-and-module/index.html","f1a9d9c013ff3a5c27cf65294893f762"],["/2019/11/02/Python-100-days/index.html","0c5fa7ba1234618eb10bc32a9862ba07"],["/2020/01/10/C-or-C++_dynamic-array/index.html","20fd59c6a7547f165356318bf6f632a0"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","1d2ef6fee76fa3f4aed2982c6d4ed65a"],["/2020/03/20/Jincheng-lanzhou/index.html","f30dea4dcf09aa363989a61395e71a10"],["/2020/03/21/Cumt-aerial/index.html","dae824d76befad78ea916347ac0bef12"],["/2020/03/25/Bitree-construction-and-traversal/index.html","7b7ba20203a5e5b81597e07f4ab78c6e"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","d38bac6302f6b80e0c3b1030819fb462"],["/2020/03/27/Stack-application-bracket-matching/index.html","b411abab0c3b26d21c5fa481afcd6c26"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","938acd38e6b8672fbba76017e84f84d0"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","f0c3815114e8d2bf88be8557a99a0bf3"],["/2020/05/30/School-celebration/index.html","a8b0f0b431f2b9340425d6ee3eaf4b7f"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","480ee260c964819dcfa669d308111059"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","91113986cb9525386841ec4896f32a49"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","1db19c0f014a19b4bc6861cb34844e54"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","7a3ed2fd087d47efe80abe235f2d8fd0"],["/2020/10/09/Python-data-visualization/index.html","cca72a075e5d9ff64242188782ea1d49"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","f430a48896bf509a89541cac91546b54"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","4b5f76c9c1182e02e775bdef09311976"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","dc19876bcbfedbdd17fb90c9eb42324a"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","fe32353560f8f68886d047e3230c0c1f"],["/2020/11/02/Data-visualization-matplotlib/index.html","83df96e9d944aa1d4c7cd81251ed23f9"],["/2020/11/10/Naive-bayes/index.html","2c2610c797350469c576e5ab059174b7"],["/2020/11/28/Matplotlib-function/index.html","c7826e36b303c23ff6ec6782f9040562"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","125e261683733babfba6c6d53c13eb76"],["/2021/04/27/Git-usage/index.html","777e5524d71ddd747f1301937efeb8d9"],["/2021/05/06/Arithmetic-expression/index.html","e6f935c84a18df6bc4bec67bc21478ab"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","eabe72fa0aa3b3842b4140c58dbe7ed5"],["/2021/06/25/Classic_TopK_problem/index.html","dac4a24b23b46082cc7b993659bd15e0"],["/2021/06/27/Calculate_prime_numbers/index.html","584a7353f0e69dbaa8aa9e45f15d0a89"],["/2021/06/28/Priority_queue_and_heap/index.html","6172210813a9474a62d06e2e3a40cdbc"],["/2021/07/15/cpp_constructor_and_destructor/index.html","abae4b0d1d4081bc8ee55d232eaaee08"],["/2021/07/17/cpp_file_stream/index.html","6ac45933f843c40e9b72f4a6a5d9db8e"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","b2cde370f129babf3f9a9614cd7c7d60"],["/2021/07/22/cpp_this_pointer/index.html","5b54d2f3e07a439b98854b483823ea83"],["/2021/07/26/cpp_algorithm_analysis/index.html","3d821ab5f15ebe1233ab7e4ad204d8ee"],["/2021/10/27/Git_common_commands/index.html","9257f2bd237e31a7c70f963a3d67e33d"],["/2021/11/10/cpp_singleton_pattern/index.html","88e7a4306b4a624f77d877a6cbe5a281"],["/2021/12/05/Semantic_version_control/index.html","f17a2ab108a8c232203b44e30c910a2e"],["/2022/01/10/cpp11_default_and_delete/index.html","567f80362bd32ef718d1530ddc566ee3"],["/2022/01/10/cpp_constructor_and_assign/index.html","325a4cc8fdcfac56a7e5b847a4c0b4ef"],["/2022/03/18/Static_and_dynamic_libraries/index.html","f243c90f969d0f6f4f790cf2b7d0e419"],["/2022/05/07/cpp_main_function_parameters/index.html","a5cffaaa6907359806f48c1f92b110ba"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","1e91af0ffdf7bd19d0d249c292792247"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","d42812c8748749f13f2a525c42647a3d"],["/2022/05/10/leetcode_time_complexity_estimation/index.html","30d3ad36229a2208f43ed50f705d7f24"],["/2022/05/15/Hexo-melody-blog-beautification2/index.html","f9379e38cf7bf45780670f17ca8afe2f"],["/2022/05/15/pages/index.html","8a720a27859ec82cf5526dce545d2644"],["/404.html","d4234ae8bcf12fe59860a13d2ed45c10"],["/about/index.html","314ec8a293d95c26ca505163245f4697"],["/archives/2017/02/index.html","518e1667f1dd0b6b7b79eab1c1f90e00"],["/archives/2017/index.html","3ca1159a5a8533c77cff8da366278d06"],["/archives/2019/01/index.html","bfc47b075e36c13ed63a4b90d7619ccd"],["/archives/2019/06/index.html","506ce2f466fe6ba48d8915e6c667829f"],["/archives/2019/07/index.html","f67104ce0b7e9240715f10b46a09c17e"],["/archives/2019/10/index.html","95c9702f663f09208c134c8d9dc65d70"],["/archives/2019/11/index.html","4a83c4b3f9e8488c9cc804d29f25b945"],["/archives/2019/12/index.html","1644132958a54a67d1a2cb978d5440ba"],["/archives/2019/index.html","8abf1129d01f55e8261090760a744541"],["/archives/2020/01/index.html","c4ae889ecdb17c6096d4758439d0ece5"],["/archives/2020/02/index.html","18380469650730c0ab202d8f8d9c6585"],["/archives/2020/03/index.html","6238ad97f1e13406925731df62487e99"],["/archives/2020/04/index.html","ae733641f63cc14860ec49ea0bc40a05"],["/archives/2020/05/index.html","90f04b6c14d5272fae67b994a2e71a4f"],["/archives/2020/06/index.html","1e4db5adccaec2130ae943181347ee42"],["/archives/2020/07/index.html","1cca7086748159675b5a0cae0bec5eed"],["/archives/2020/08/index.html","e02918e05f471a72c57ac839feb460e1"],["/archives/2020/09/index.html","c1e5a54ef2f23bb567683005e877aa2a"],["/archives/2020/10/index.html","4883ceab41b0d6c62421bea1eb68dda5"],["/archives/2020/11/index.html","13fae5e00968cd882717f795da6b5920"],["/archives/2020/index.html","94c38255350ed6c353670b88ecaea02e"],["/archives/2020/page/2/index.html","f68f6903845d2043b403fd41b1a11384"],["/archives/2020/page/3/index.html","ac1cecb896686e711be31a7a32480545"],["/archives/2021/03/index.html","5657accfb37d78eb8eea2bfe526d870b"],["/archives/2021/04/index.html","7d565c1a789e609c27f1bd06f8069383"],["/archives/2021/05/index.html","717765c101d1bde20adb3db6f0f0d266"],["/archives/2021/06/index.html","b722b639068e2815dfca35d31b3589ea"],["/archives/2021/07/index.html","57ce80f6b523fc70f81536da65eb67e2"],["/archives/2021/10/index.html","00f59b823597e61b160e4681954a3a85"],["/archives/2021/11/index.html","85bea8b43995b16e8e032882ad26ed37"],["/archives/2021/12/index.html","609b33455cb8f105094f2b5069daa813"],["/archives/2021/index.html","5f3de9ebee36c7ed14f90867cc045df2"],["/archives/2021/page/2/index.html","7a0e514bad3c028415f5774c36f5305b"],["/archives/2022/01/index.html","5871ca4fd52681d1ef8c6e27c15f49e8"],["/archives/2022/03/index.html","d40c084cdeb0626fd612325edde18563"],["/archives/2022/05/index.html","3756552674a17f7e7fc606c53b3eb722"],["/archives/2022/index.html","4f924e29cad8e0175e15ad16f60369f2"],["/archives/index.html","758990b8b3ef453218644ae5439d1c3b"],["/archives/page/2/index.html","1b7afead7f668490c4215723b44f40ee"],["/archives/page/3/index.html","fa5a1673a57edfabab950f0d6814238c"],["/archives/page/4/index.html","0047d39cfa9de6442c406810f4347c44"],["/archives/page/5/index.html","1b1567063eee8b1ae0162c8bef1d1879"],["/archives/page/6/index.html","4ac66d5ab7d921ba59f41c7096cdb94a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","275c8f622597e266160d60a5e82f9d2b"],["/categories/C-C/index.html","d00b0b773fc9372eb8d44e2cb02f4125"],["/categories/C-C/page/2/index.html","b07bbfb6bbebb58473c5b194dfc1d863"],["/categories/GitHub/index.html","a1b32174aa4d78dcee5a1672693fb40f"],["/categories/Linux-学习/index.html","fecfa2fc4cd950e21b26ed80673ebb47"],["/categories/index.html","0f0cbd4a640d0860cf5b21dd1369cd1f"],["/categories/博客搭建/index.html","edbd812635249f6300f13954b286383a"],["/categories/学习笔记/LeetCode刷题/index.html","310740b00752e2d2bfd82e1094391927"],["/categories/学习笔记/Machine-Learning/index.html","058b01fb85d09fb8461257a9c21f95dd"],["/categories/学习笔记/Python/index.html","7369e27db85fa7ee750b522066f295e2"],["/categories/学习笔记/index.html","fd9f4bda75182992984863dc7ffd67c1"],["/categories/学习笔记/page/2/index.html","ba7070b65decdf2643ecd21fa3b205f6"],["/categories/转载/index.html","918a0a17e55ab8e97c3a96d5e30cbfd7"],["/categories/随笔-杂谈/index.html","fcb4834957bd496a20f9f192324792be"],["/clover/index.html","adc655ce7a072e605bc190466e0a5300"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","709ceeef3e4205d57d384e41d7e6d891"],["/google85949087cc957523.html","e8ef6651e548dceddcb61db48344add8"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","3bae62781c76636b7461e80004ade16a"],["/interest/index.html","4105167d7b3eaa60743ff71003e5929e"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","cac8509ce8dedd31e9304a2151c71221"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","eef0ac0e8baa67b97cad4d42eda45a63"],["/page/2/index.html","b867e5a77f396cfe61fd34b796f1db1d"],["/page/3/index.html","f23aad1ccd85b3d2628be39c2d2d2415"],["/page/4/index.html","fe3be61c7250cc7bfc1c856d9ba3faf9"],["/page/5/index.html","53ac08cbecca0bdfde11987f9c67f289"],["/page/6/index.html","f203344f6342efd6bf44a7142e555dd8"],["/tags/Binary/index.html","b56b65a8123c1c674fcef116c2390840"],["/tags/C-C/index.html","2c9ae17fa4dca66ddf516478adb8327f"],["/tags/DCLP/index.html","eccf5bd33bbbe54d3fb4a43604ce061c"],["/tags/Disqus/index.html","00c040c8fcd485b678b1f8483ee12014"],["/tags/DisqusJs/index.html","6900338454d03a53f94b3fd85a23dd21"],["/tags/Git/index.html","f4c7c9fcf07ed1ad4fc41670ebe8fcb0"],["/tags/Java/index.html","ea7d333a99b487d441cc9074277c2cb8"],["/tags/Linux/index.html","ae43d478e73f795f6463cfc32cd41548"],["/tags/MNIST/index.html","c629dde8bc9f8b20dfd9f5d9ce7af58f"],["/tags/Machine-Learning/index.html","c59b32976fc5dc4be1f9efca2a9fda79"],["/tags/Melody/index.html","1a9c0d95ae045e4237befdcf490c74cc"],["/tags/Python/index.html","9d558353bf8a850a7037e9ae1c716674"],["/tags/STL/index.html","5edaaf1c114bdc98bf1aaa4b0381b167"],["/tags/Struct模块/index.html","d5ce77ac953d340072dd514a910a7adb"],["/tags/Windows/index.html","47e860fce179fe0741cc4805bf183f6a"],["/tags/define/index.html","495f6c8b83fea4982408a44e8aea5105"],["/tags/github/index.html","12fbe1fc12ca2ce6b5f499a1647f0678"],["/tags/hexo/index.html","ab8315cc90b164ae8d920478289f7258"],["/tags/import/index.html","e5ffb19849f1acf790ef0baed5aa75f8"],["/tags/index.html","2b5ccaa280a3441548a0d693395a5611"],["/tags/initializer-list/index.html","fbb69aa3b254b9436dd77059d743b505"],["/tags/main形参/index.html","e17b4150f36b66644b9a6c09cc23808c"],["/tags/matplotlib/index.html","42ef4529fb24fd319e36b6b95f2d0f5b"],["/tags/npm/index.html","ec5e1b688136cc4b559cfa67ac2e10a2"],["/tags/priority-queue/index.html","bcacb0659035430d023da6507ce96945"],["/tags/rain杂货/index.html","a8ada3f8d370317d8e5ebe6ff10d40d7"],["/tags/socket通信/index.html","1ad333990e3532c3f561224ed5ec97f9"],["/tags/this指针/index.html","1f935b99438ac8f133121478dd92f7f8"],["/tags/typedef/index.html","df7c794bf225cdfdbc50da1b6db651fb"],["/tags/using/index.html","2fe4ef12a627270ee1222543210895db"],["/tags/中序表达式/index.html","6f4e29db8c7949c2b3fcaf8a42a48b9e"],["/tags/二叉树/index.html","a2dbf93e0d92038e5e9cbf46d3285877"],["/tags/二维数组/index.html","d4d958c935ffb8c16c4c3e4e2e4b3a43"],["/tags/二进制处理/index.html","92ba37fb6540d4f86afdb2ceea2fffc0"],["/tags/优先级队列/index.html","24f487c9cd61b8eb59798de6c7bc8799"],["/tags/内联函数/index.html","8220fe9335640fd6da4a476be89f31cc"],["/tags/减治法/index.html","f5469e59b37ae30eaeab514eada3c4f4"],["/tags/函数/index.html","316d01de4ae208e17484df9d8bb5a312"],["/tags/函数图像/index.html","11f99d6022381702a0280d719c198424"],["/tags/函数调用/index.html","50a42c8ca126bcffb0ac546f085df7e1"],["/tags/分治法/index.html","51d339af43f8e47da4f5042e7033a71f"],["/tags/前序表达式/index.html","487f0257e85074dd7c904582b8b5b7ef"],["/tags/动态库/index.html","77ec7ab67f300d871122a0e825f8c27a"],["/tags/动态数组/index.html","cf5adbbd1b9b9bb79f441e4bf34e4fb0"],["/tags/单例模式/index.html","b1f5de21d2d5813288d3a0b7e53f85f2"],["/tags/单调栈/index.html","54d828daeee44aeeb4b94344cee427e4"],["/tags/博客美化/index.html","86ec2a461de8164f19df6ab6feea3163"],["/tags/参数传递/index.html","e184ff171194b94fb50aa8d70c98a1db"],["/tags/可变形参/index.html","1a6865a570ef985d56e7e2c9b642cf24"],["/tags/右值/index.html","f54f60f564c1f32c54bd554d9d8826a4"],["/tags/后序表达式/index.html","3076b72d9f902286aab7efe33c7badd8"],["/tags/基础/index.html","60b63116f0cad0a23bc853ca27a9404a"],["/tags/堆/index.html","f4915e4a2967c1409d3c11fefb97ba8e"],["/tags/多线程/index.html","17bcd73b3110ec17dcf258d4a662e7d1"],["/tags/宏/index.html","925cf7e93826bc646dbf2a6592713dd1"],["/tags/左值/index.html","7976e1dedb1fd6350ee02b8003eb6955"],["/tags/开源/index.html","e1c0b4c4ab6b194abcda30abbdb0cde0"],["/tags/影音视频/index.html","4d76d2536d76da40a1e86c57cee989a2"],["/tags/成员函数/index.html","e35f18705be79f56c41f7c3ed2a3e487"],["/tags/括号匹配/index.html","a6295e05f6784824a114906701230805"],["/tags/排序/index.html","4a901c1e256047dbc89500e0af16b00a"],["/tags/数据可视化/index.html","0fd38c0da5417326e5781bf234d8e7aa"],["/tags/数据解析/index.html","f13556191876a504ff8b8c0c2a71c9e7"],["/tags/文件流/index.html","d8a0bb469553ea9fcff6ccbe89c899ce"],["/tags/服务器/index.html","51143a935f62ec62f3b15763b7a486da"],["/tags/朴素贝叶斯/index.html","34d99e328d39eec11575983e088bc533"],["/tags/机器学习/index.html","ab19b18c6e36ace518b9fa5987b504f4"],["/tags/构造函数/index.html","0efd64856adb977fcfefb3d9518c246d"],["/tags/析构函数/index.html","f94e280a2875e0cf46fdf08829fbfff6"],["/tags/标准库/index.html","5878ff491ac8cf42e0d5ece2b327de8e"],["/tags/栈/index.html","aca75956de119a1bfedeadb0cf919633"],["/tags/模块/index.html","60efcc49c94f35ae8d7fa2af04dc43e7"],["/tags/版本控制/index.html","ffb087a72c6b083c6817fbc3629a64a1"],["/tags/省略符形参/index.html","40aabc936c47163d6290fa832572b322"],["/tags/神经网络/index.html","2a806f250aaa332eff794a60fb8ea2af"],["/tags/程序设计语言原理/index.html","2d147aadb54bd3175608568477dcffd5"],["/tags/算术表达式/index.html","d3903a84ce2f91cec48ab7e2385b494e"],["/tags/算法/index.html","823f3f0459c977f290382ceadc38023e"],["/tags/类/index.html","56d7db3978cedce1891d4771ff7b0845"],["/tags/素数/index.html","7def6d7d813136ebd641c81934be967c"],["/tags/考研/index.html","f7bf0edbc99a774a54a31fb6c5f312c0"],["/tags/莞尔日记/index.html","3fe0e59171a1622149cfc70248ae73a3"],["/tags/设计模式/index.html","b69237a87b69b4f1470648389d904584"],["/tags/赋值运算符/index.html","85707ace75870c8b672119392491aa38"],["/tags/进制转换/index.html","17b4bcc98a28f51a55f14e1e8c6541b0"],["/tags/逆波兰式/index.html","b1f616ddd4e20b29544ee5d14c70649b"],["/tags/锁机制/index.html","82064278aa367ea253026a7fac4e1dc8"],["/tags/队列/index.html","2130e36f3eda4625540bc49f14e234f4"],["/tags/隐式内联/index.html","538f7af70af3692a64af97fcefe93bce"],["/tags/静态库/index.html","94f418177edb5740dd413b798840d38d"],["/tags/面向对象/index.html","40616c835fa288bf81b31bf5e0ba6723"]];
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




