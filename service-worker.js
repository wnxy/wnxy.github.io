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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","b7c67e6d80599fee5457f0cb5f73047e"],["/2017/02/01/hello-world/index.html","7b341cd0db40474776dfc7814b83bcbf"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","c669070e41da3372edda17d11c9e3fba"],["/2019/06/03/Linux-programming-examples/index.html","777bd97bd2426909fb0c69f451ef9d12"],["/2019/06/10/Server-basics-and-configuration/index.html","87a00c85b6ca873c1ce17b3589933fc1"],["/2019/07/01/Linux-socket-communication-programming/index.html","b067758bf6f12e4313f7acdaea39ed34"],["/2019/10/04/Python-function-call-and-module/index.html","35c2054e9be4813e9e67e836ab857c04"],["/2019/11/02/Python-100-days/index.html","2c6979c1ea194efa4b129f04e9c3ae95"],["/2020/01/10/C-or-C++_dynamic-array/index.html","4e815f2296be35f9c6fab06ea49e7563"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","d6fa7d74ae700db89a4d7f9747958079"],["/2020/03/20/Jincheng-lanzhou/index.html","634b89baaef7dc57f820b779b3b2a01d"],["/2020/03/21/Cumt-aerial/index.html","43a949551f45977918fba4b402b8a01d"],["/2020/03/25/Bitree-construction-and-traversal/index.html","0d55ea6d8034a556639a88d9dfed396a"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","5f79c8827d80704e0ee84909d3c1e006"],["/2020/03/27/Stack-application-bracket-matching/index.html","2385a4443ae6e79adac02f7f9eb9f33b"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","e360fdfd418c62c881fffe1ca5fd1906"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","6458132a64abd6ce53e4f9b14decd13a"],["/2020/05/30/School-celebration/index.html","b0879cedd19d160e8a0d421eb1fdeacc"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","c375ea9b526aa78a66ea6914dccad4bd"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","8a0f31f340f94ac6b487a778cdea60fe"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","3a0fa766db334c1765e486f946c0c609"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","c0d61d98173d9fe3a3ae99cf4dbf9090"],["/2020/10/09/Python-data-visualization/index.html","60670658cfadc53d7b62832668171ab0"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","d464d3877c2fd878625ad832f89d35f4"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","14398d2ffdb2eb0e120c680af9395ff6"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","14f3382a21351902a5d43b2b5115f29c"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","073073565aa02d3107d331bd9dcdc986"],["/2020/11/02/Data-visualization-matplotlib/index.html","b830d2b138500d94014cdd94c7a0dfab"],["/2020/11/10/Naive-bayes/index.html","8e1ef411519bc09ce8ea8130a066a179"],["/2020/11/28/Matplotlib-function/index.html","3caa5daa46bc1b348db608d38665e67a"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","cd1c12489298b9d154075e264db353cd"],["/2021/04/27/Git-usage/index.html","aeac0dc308217f79c58ec5e743ff8136"],["/2021/05/06/Arithmetic-expression/index.html","26660e7cddc673252818b3a009f441f2"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","abcc9571c6609fbc1705c134af5b2db8"],["/2021/06/25/Classic_TopK_problem/index.html","d5c24f734b18ef8d4d0d3f1a0856f1f8"],["/2021/06/27/Calculate_prime_numbers/index.html","3b89e62cf99fa1f85263356445d737c4"],["/2021/06/28/Priority_queue_and_heap/index.html","8fcdf81bd4fb6d65e2c59e2943d9b8a1"],["/2021/07/15/cpp_constructor_and_destructor/index.html","6ee1060edcbafc64d27a8101dcd6db67"],["/2021/07/17/cpp_file_stream/index.html","e3abdfb759bb7f77317e1d00fb1365ec"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","6f789cb3265e3f2c8d59db4968be6399"],["/2021/07/22/cpp_this_pointer/index.html","9ff1cf348dd6b74937aab0a130605aef"],["/2021/07/26/cpp_algorithm_analysis/index.html","dec886a1dedab27131a0dce6d4cfe143"],["/2021/10/27/Git_common_commands/index.html","94ce7f4e3b7ed833c6f4726fc8ad4a86"],["/2021/11/10/cpp_singleton_pattern/index.html","9df33ef0a0189bbb9e5cfe2aae10806f"],["/2021/12/05/Semantic_version_control/index.html","2ee9809213669022099804bca3691a4c"],["/2022/01/10/cpp11_default_and_delete/index.html","9937c0115280d5af3d09375f2ea25225"],["/2022/01/10/cpp_constructor_and_assign/index.html","fc0e15175596aa111a0542f8568dd0c0"],["/2022/03/18/Static_and_dynamic_libraries/index.html","06aaa8f8eff09fc53f631c2a7728b893"],["/2022/05/07/cpp_main_function_parameters/index.html","432accc930c33d59fb0cdbebdd3f04c6"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","c27ca97b2e14823a5a99d5b04870fb30"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","e55f42dac54af79e57954927bb624dde"],["/2022/05/10/leetcode_time_complexity_estimation/index.html","abcf31c58d0ecad2e997384b7594f046"],["/2022/05/15/Hexo-melody-blog-beautification2/index.html","c031d0da1e20e9a4a1e8ec500c4cd35d"],["/2022/05/15/pages/index.html","776405e0ef41ebefb4bfcc95f3114882"],["/404.html","648e3167aeaca37e5a3311aba1ec5889"],["/about/index.html","5287f7cb6f26ab4d7da850070718ae41"],["/archives/2017/02/index.html","cda78d12e84c6637ea13fc269d2ca9cc"],["/archives/2017/index.html","1639f3a2960f2f560f621cf093175501"],["/archives/2019/01/index.html","70270dbfd3b1140b7aa62c5c1ec8cb63"],["/archives/2019/06/index.html","ef0a67102a60ca18fb2b162c881dc406"],["/archives/2019/07/index.html","1744c5d6e1397e5ba11eeed2258dd9ef"],["/archives/2019/10/index.html","74326608fe6934a2e09fc01625fb9280"],["/archives/2019/11/index.html","4151b36669b40447fc791ebf5b57430e"],["/archives/2019/12/index.html","6fb5bd4f1448ede1bdbbee8b4b746cce"],["/archives/2019/index.html","6834f6607e0817089070c6ae0b9215b8"],["/archives/2020/01/index.html","45355e776c85866abb782709b56eb7e0"],["/archives/2020/02/index.html","8fa3418f5e483b4b94190fd553f5e803"],["/archives/2020/03/index.html","1fdabec3217adca40a929a3a6063a166"],["/archives/2020/04/index.html","f6cc5fb55f6a7ef5746ffceb662361f0"],["/archives/2020/05/index.html","133bcfd914e9a092309e0e91605463e6"],["/archives/2020/06/index.html","da063d68da76ae6947a77c93b58f0736"],["/archives/2020/07/index.html","854e50180930ff856ba21cb70f56d325"],["/archives/2020/08/index.html","9c5dd403f45116274752b0e2d040fe74"],["/archives/2020/09/index.html","0089057d54c3a051549c0d052fb2b6db"],["/archives/2020/10/index.html","4dd9f69985f27fd1b0027f7b3af8ac6d"],["/archives/2020/11/index.html","036442b667f361780d050920b1d0010a"],["/archives/2020/index.html","1165d0f61406fa1393a9f15390b8d5c4"],["/archives/2020/page/2/index.html","635317394bc2cbd87a36bdf68bea1772"],["/archives/2020/page/3/index.html","d583387880886acec783d6a0518b075a"],["/archives/2021/03/index.html","f065bd35de351d6a8253ee75db4d20c7"],["/archives/2021/04/index.html","285a40cc925c913a87fd8f57d3a9039a"],["/archives/2021/05/index.html","aca590ff9554d99365595b4072e525dc"],["/archives/2021/06/index.html","29da4db0ba4715dccf71921afc54db8b"],["/archives/2021/07/index.html","0e7a6211bc2c5e1e16e0d516cd0ee3d8"],["/archives/2021/10/index.html","af575e06bb21910599413e9eaff1ccf7"],["/archives/2021/11/index.html","1b71373da91564c32cec9f88a41b1e10"],["/archives/2021/12/index.html","e7687d268dbc17b22f5359d533c70325"],["/archives/2021/index.html","ff980354adc026dbcf38dca63d3ffbb4"],["/archives/2021/page/2/index.html","2b128a681e5d91854ac16db83ed4964a"],["/archives/2022/01/index.html","32f2f1a003d45a177d094bebe198e2ae"],["/archives/2022/03/index.html","af5209f8263a544f59880d09e51ad8d6"],["/archives/2022/05/index.html","a8981dbf26f7a16bb982cb1adfd51885"],["/archives/2022/index.html","32fb6dd6ac7a997673fe7a30a0c8c086"],["/archives/index.html","bfc2bedfb405dde60570672206532933"],["/archives/page/2/index.html","9875b48a4b140dc21889bd8947501489"],["/archives/page/3/index.html","69432e2e22197ef4c947bef1be5542f2"],["/archives/page/4/index.html","868f42e2a2958fdd70afbf5ea1b5ab13"],["/archives/page/5/index.html","f404c38bebedf816161522925e5aadd7"],["/archives/page/6/index.html","6c18b8f34a3263ce704f157e3c0e1a22"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","0feee2fa8e9999292e39603ef56272f3"],["/categories/C-C/index.html","4f30a553952ffc7b142ba8b952ada629"],["/categories/C-C/page/2/index.html","8c774614f34b7a4e8c69ff48391c0249"],["/categories/GitHub/index.html","66bb18aca0ef81560269474cc13424e0"],["/categories/Linux-学习/index.html","f3ae5d5a972a0eb5aac14845ca1cf301"],["/categories/index.html","f02c9efe4ced081dd4fb35db90db1915"],["/categories/博客搭建/index.html","9bcc85a98c235c43b948dc36fb7b8506"],["/categories/学习笔记/LeetCode刷题/index.html","b0444c1b5e0af9d7306be5aaaa123adc"],["/categories/学习笔记/Machine-Learning/index.html","9f5bff3e9ec3400ab730213a197a2f4e"],["/categories/学习笔记/Python/index.html","22a4729fff7d682d1448e27f137d1721"],["/categories/学习笔记/index.html","0f4dc3ca99574ebf3160df95a5769f6d"],["/categories/学习笔记/page/2/index.html","5d100dc0b53206a95305c2abd1e835aa"],["/categories/转载/index.html","1ad21939af69cfb939a78a7e2cfdf4fb"],["/categories/随笔-杂谈/index.html","cf58a1a6906e565bdb339a92e46102ee"],["/clover/index.html","a94876ae51ef46b372468fed0f57ceda"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","dc00d9d29e07f0f7c4e469255210f413"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e038e2c84d1040b762920931ebcd81b9"],["/google85949087cc957523.html","6f5c80c5123b29317bae34a0410758ba"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","fee5f0bba11bc4d22a508424263d446e"],["/interest/index.html","9d48258106786abe4d459316cf24ba15"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","3003226d6187ffc4e4519b5c7c04bfa5"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","409bd360e8fb56d29a1a7dbc39914990"],["/page/2/index.html","48245844e5af648e0af65802e7afcbba"],["/page/3/index.html","b2d942b6698d62bf8bdfbd1d298bc2da"],["/page/4/index.html","a65b129b4d5f641817dcf290da869e46"],["/page/5/index.html","4f9905ff32bcf1a3fc7021908846718c"],["/page/6/index.html","de595b9e9fbeddc6a5a7c5c7c06cea83"],["/tags/Binary/index.html","721cb8442718869dffd71a89963c28df"],["/tags/C-C/index.html","33c6f9fc9eb3cac7a3931c81c1680820"],["/tags/DCLP/index.html","16f71638f00b1c12d7a742407b41fa53"],["/tags/Disqus/index.html","084851e7e46cf1a9ec6a5f633f7810e3"],["/tags/DisqusJs/index.html","b6ad2ed4b9292eda74d7de966566dd5b"],["/tags/Git/index.html","c7c6002cd03f88d1f3c6c8387a02f8ec"],["/tags/Java/index.html","a25b12540e83235b4ded8da277a1ea87"],["/tags/Linux/index.html","9d4995ed5a2771898e8babfc0095b960"],["/tags/MNIST/index.html","ac208f765e1ba13f2437721a60d92c21"],["/tags/Machine-Learning/index.html","b1774177eb3bf236b5c21d4cc83101d6"],["/tags/Melody/index.html","be135d7220330672631adf58d6ba5b6f"],["/tags/Python/index.html","d7543c3eac770d9da38f9cb21266b7ab"],["/tags/STL/index.html","873252fb64796a583599ccb0891c5424"],["/tags/Struct模块/index.html","93c74f8d2416fffad9b0a4d99bc7b1fc"],["/tags/Windows/index.html","7a638d0f2dd651ff0089a6ba225ef5e1"],["/tags/define/index.html","e9ddb56478d2ad12273f99533f4b7a3c"],["/tags/github/index.html","c1ab200040ce0076a688496b241c9b42"],["/tags/hexo/index.html","8ec40d73ab7eea6a947b189b0979d46c"],["/tags/import/index.html","b3caea52e141ee4ebae32a26cb64a183"],["/tags/index.html","2cb93d61f30f211fbf905e78693c5743"],["/tags/initializer-list/index.html","512ce72e63cdc5c9c4dfc6eaf7bbbd54"],["/tags/main形参/index.html","135b3faad5ceae2174ef45084599d370"],["/tags/matplotlib/index.html","db273eaee73fcb33b08b701b31154977"],["/tags/npm/index.html","1e5da2ee8645f954177641b6165523b1"],["/tags/priority-queue/index.html","e1e657bfea3f43bafbae7c14baec2ee0"],["/tags/rain杂货/index.html","35b6fc53f46c15279bcf7487c96c2df6"],["/tags/socket通信/index.html","d75b322f9d6cf4543dcf741bc42058bb"],["/tags/this指针/index.html","0939dc43f8163b85fd3ed1eb82b9e2b2"],["/tags/typedef/index.html","6609e107bd931bc44339a304388da1e6"],["/tags/using/index.html","9386b76330b5f6c00327269612182c1c"],["/tags/中序表达式/index.html","6c773e804c0081bf178c169dd490182e"],["/tags/二叉树/index.html","50646f1533955415de2a29b01d3e0e74"],["/tags/二维数组/index.html","1e851ebb879a32ad17b44d3c2b3575e3"],["/tags/二进制处理/index.html","8e170c4de8cdb4b5128797bfffd50ea1"],["/tags/优先级队列/index.html","8ba83b2645f9c60591283456f17c2ddf"],["/tags/内联函数/index.html","c83d63f3c1469a57a981f460f2cb612f"],["/tags/减治法/index.html","5a644cc3f896226f5ad3c3bd66956456"],["/tags/函数/index.html","8496d8a3b26d5031544fde53c64f7f23"],["/tags/函数图像/index.html","fa1063658175f55b80af1b4a8bede156"],["/tags/函数调用/index.html","1f86cb4a626990d4d62f11e0bc8efe40"],["/tags/分治法/index.html","2c24fe7ca4e7b6cce6a964c95c86e1ed"],["/tags/前序表达式/index.html","bde00fd620d7aa3ceb7e3c4f65090ac2"],["/tags/动态库/index.html","6b53d918b9da9a78c248eefb3cbd2c14"],["/tags/动态数组/index.html","6dc0399ed20d95f50d24139d4a58ca4a"],["/tags/单例模式/index.html","e3b5b3ed6c162f9360c7eb125ffbe384"],["/tags/单调栈/index.html","899995dac958948f62379075c62d0f88"],["/tags/博客美化/index.html","15bb3700cf1d96375cbe40202eb4b813"],["/tags/参数传递/index.html","74f9d79851a91b3ac33f647f1b9b110f"],["/tags/可变形参/index.html","d20b86d86c6dcdea00c2b465f8ed3ff5"],["/tags/右值/index.html","2cd5c31c9de68e65d579cb16f65b47eb"],["/tags/后序表达式/index.html","6ff225c5a430225e526d4992c1d4b1f8"],["/tags/基础/index.html","cf300234781a652acd71fa6abf944ccb"],["/tags/堆/index.html","5743c155557419012b405b546b7b7c3d"],["/tags/多线程/index.html","5f9304beff0843b790ae386cfee3e8a7"],["/tags/宏/index.html","6e10ce3e597db499bf57b83f2a72fe46"],["/tags/左值/index.html","c6ba1fd9d28ddcb61fbb2d8522c4f857"],["/tags/开源/index.html","e6165c320d921a79b0340476a37521da"],["/tags/影音视频/index.html","ec6ec7e536857d0b658f1271616315dc"],["/tags/成员函数/index.html","c57f5e14a76234c0e1d7492be74cb7c6"],["/tags/括号匹配/index.html","509b4ce229f3759088c10db9857a5502"],["/tags/排序/index.html","4890510f6d696d6c468b73b1e9a60260"],["/tags/数据可视化/index.html","7d9426c79c3d7c0ee496bbf6280809b5"],["/tags/数据解析/index.html","7d7a458735264221c57697912163303a"],["/tags/文件流/index.html","43835ac2a0f22a69e9003ea791d1e597"],["/tags/服务器/index.html","dfd09be06ffd9adf43ac2d2c07562739"],["/tags/朴素贝叶斯/index.html","316e387ccac9750cac5abb4b8474c2e9"],["/tags/机器学习/index.html","04625759c68cc72c92e5c3dd21a8ca2c"],["/tags/构造函数/index.html","8588578ba6ddb93bd9e5a5142f95f810"],["/tags/析构函数/index.html","662cb32cc8c03e51067049a479f477e6"],["/tags/标准库/index.html","f79a2a2e10e9d73eb591b3f40fc3e31c"],["/tags/栈/index.html","6a9fadafa3760d6f9d93c39f179a5a5d"],["/tags/模块/index.html","2bffa86b5b89f4d913e13fdebf044723"],["/tags/版本控制/index.html","b09e29c018be9975fa2d5c0a7c8e2941"],["/tags/省略符形参/index.html","80eac8b74f996df3a58ffbb35538c32b"],["/tags/神经网络/index.html","6e365081295eec265eac172dee23bf36"],["/tags/程序设计语言原理/index.html","bd398e6b5cea8f547565729d05b10032"],["/tags/算术表达式/index.html","0e9462eb0dbf746eb02b53ed3797479c"],["/tags/算法/index.html","fa8c634da1160e828f9344ca1cbf7a6e"],["/tags/类/index.html","5490eab337f76d97473c8d5eb3450a8f"],["/tags/素数/index.html","6a32f6b27ddccb4d3f1a700382bf7849"],["/tags/考研/index.html","29aed8da8095ad2da1afbab784504fbe"],["/tags/莞尔日记/index.html","0a48839273bb48d814330ce83b3fad7f"],["/tags/设计模式/index.html","36a098db045fca70bfc3e22ed77c2d1b"],["/tags/赋值运算符/index.html","c1e87330c370d2bfecd975fb3afa7bbf"],["/tags/进制转换/index.html","0a8d9f3da31d3ca759ef250323f0d1bb"],["/tags/逆波兰式/index.html","7a4796a08d3e74d4c087100fe4f60a00"],["/tags/锁机制/index.html","ffd3a8f7d8173278094dc2e739aa5bd6"],["/tags/队列/index.html","fb4b28030f8cd67779d0d596b2242b80"],["/tags/隐式内联/index.html","f62f681c51e2450ea862a8f4e74b2564"],["/tags/静态库/index.html","9da4b0c2bac891917eb2fabf5355a6ef"],["/tags/面向对象/index.html","b2b31c41ad20a4586426b33b80908631"]];
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




