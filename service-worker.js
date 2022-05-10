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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","59faddc78dd457e7f75a2f426ea33f25"],["/2017/02/01/hello-world/index.html","c30c599a50ebbdc10311b504ff76aaf2"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","e728e13a9f3d128e0a6418fdac75b732"],["/2019/06/03/Linux-programming-examples/index.html","87487ebecfcfa00c8b1696e5b2b4a9ed"],["/2019/06/10/Server-basics-and-configuration/index.html","a16d8e03d34b45c6f6b76b197b8499cc"],["/2019/07/01/Linux-socket-communication-programming/index.html","e788239b35b71d9824359313be970035"],["/2019/10/04/Python-function-call-and-module/index.html","3b90fc257681afde0562a90c41568218"],["/2019/11/02/Python-100-days/index.html","68b93f1fbedec189d4fcc7dbfd51d1a0"],["/2020/01/10/C-or-C++_dynamic-array/index.html","e238aa28bbc2954fb2474192d305df09"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","9713efc6ee2858211827b43a89e6f1d7"],["/2020/03/20/Jincheng-lanzhou/index.html","1b514062134bd920832d78f7aa5ed783"],["/2020/03/21/Cumt-aerial/index.html","842bee9c7c0aeafe1dd8b51a08c73473"],["/2020/03/25/Bitree-construction-and-traversal/index.html","407bfad40127e752ca787bf4d0906a09"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","56c151a9794e917efd043136d3d07848"],["/2020/03/27/Stack-application-bracket-matching/index.html","c7bf34fc18e8fb2340b8dcca46597c43"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","08ea2a38818485503cc0ea68e5c3cfac"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","31e5e1b7796ea355a6df4e21dd01471b"],["/2020/05/30/School-celebration/index.html","588cb2813f48040a5aef2c4a4585671f"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","b7c23c1aef1faf1c609ce0eccf2a57f9"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","eecd3cea1c54c798c15e624b7e0b4cad"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","546931d42f69e47d4127e151ac3d5717"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","b8efe0670a1dd21f9767d9b2ec85afd8"],["/2020/10/09/Python-data-visualization/index.html","62d3feefe89135a46c362ec193085e78"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","00d99b6130328d066fcad28a3428ff5b"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","0096dd3582e5f98b849a5171caf80970"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","bbe41a76432f7ec33e20ef0cab2154c4"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","fcf74c265fc7eba8a5030db23497065e"],["/2020/11/02/Data-visualization-matplotlib/index.html","d7f87dd3633fa86fc4adece3f73c6ac4"],["/2020/11/10/Naive-bayes/index.html","db61422d1e77810bb48f2a948f5b81ef"],["/2020/11/28/Matplotlib-function/index.html","3e4dfbb76e6eb89208fc641e61743aba"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","a371b09ec421f0e105b62d8818529b55"],["/2021/04/27/Git-usage/index.html","36e43a82f658fb497a62e0e76a942a9a"],["/2021/05/06/Arithmetic-expression/index.html","9caf01bafca9288867acdadef58705c1"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","4b0ba6b627aa14b1b3c362edaa2133d9"],["/2021/06/25/Classic_TopK_problem/index.html","65a218507b41ab1a0a4132749d4b0293"],["/2021/06/27/Calculate_prime_numbers/index.html","47df80a4b7b026d590d63319d523fe74"],["/2021/06/28/Priority_queue_and_heap/index.html","a60472dcc236b3bf63eabe34727757c5"],["/2021/07/15/cpp_constructor_and_destructor/index.html","b142405b98f6a81590b0dd80bf69d697"],["/2021/07/17/cpp_file_stream/index.html","d03d9c4bd27a1dfb0e105dc39975163b"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","3a64091a87f53c78da328c174f670de5"],["/2021/07/22/cpp_this_pointer/index.html","aba99e8f761ae3f7d65038a3236ba187"],["/2021/07/26/cpp_algorithm_analysis/index.html","c1f0776c527040c1fe704291f2b9ac91"],["/2021/10/27/Git_common_commands/index.html","620d542bb62cf86436d47f00ac86ad02"],["/2021/11/10/cpp_singleton_pattern/index.html","62b47bf17acb4745e5fc57f507b83c4b"],["/2021/12/05/Semantic_version_control/index.html","ecc79370dc4d0f6e3c2919f05da588d9"],["/2022/01/10/cpp11_default_and_delete/index.html","4de350cd71a2081f63c16887c570ac4e"],["/2022/01/10/cpp_constructor_and_assign/index.html","e2526130e0fd01f2915f8467610209cc"],["/2022/03/18/Static_and_dynamic_libraries/index.html","6c2607fe549222f86027ab9286e6ee97"],["/2022/05/07/cpp_main_function_parameters/index.html","a7d284444d4f10d5b6630ca58ff93cfc"],["/2022/05/09/cpp_function_with_variable_parameters/index.html","4e406d5e21d21742a02648bb5057d162"],["/404.html","2edcd6d20149d20b2fb142a86e8aec30"],["/about/index.html","55c7700a5f909f7a188dd80fdae1425d"],["/archives/2017/02/index.html","a1b7e9697320e149b8a96c1f8c16c06f"],["/archives/2017/index.html","b49b71b17e8dfb05df3e889de104df57"],["/archives/2019/01/index.html","70010fb0e522d2f24ef5c2aca85084e9"],["/archives/2019/06/index.html","9ad3e2392f44059e167e25383d4d698f"],["/archives/2019/07/index.html","0df58de5ff8998b8ff427c1c9c7ff111"],["/archives/2019/10/index.html","4a07e15fb56c466590637edb74954fd2"],["/archives/2019/11/index.html","6122e48dc7de44a0abd63930e2937e97"],["/archives/2019/12/index.html","8f3949e46bd4c84da0c75e89a7a35b92"],["/archives/2019/index.html","7719c2ba704a7d78ede0024abdf06477"],["/archives/2020/01/index.html","d61a4684bb59c770faa033f5cb68cc92"],["/archives/2020/02/index.html","81ffb18ac95c4e6bf7cd7f73778a3ca3"],["/archives/2020/03/index.html","6191cfbc919478a7fb54ae85f71b28d3"],["/archives/2020/04/index.html","42c5a519dcc13ff92f4784fe36ecd191"],["/archives/2020/05/index.html","f9e9bc3762abbf7f3958a1ad92a8d95d"],["/archives/2020/06/index.html","8765a146f138d7119580cca62847c187"],["/archives/2020/07/index.html","55265c76418bac17a9bfdaaaa24d6764"],["/archives/2020/08/index.html","45ef6e9d80f22dc229971e11b326572a"],["/archives/2020/09/index.html","bfbc0f2dc2dacadca751f979f8a3d6a3"],["/archives/2020/10/index.html","1ad12fd47fd4323716a1fd4f81b58687"],["/archives/2020/11/index.html","65fc3ce3d3400f7dad4aa1d9a7afdcbe"],["/archives/2020/index.html","a20796eaab73bdab15844fd01eb8ee96"],["/archives/2020/page/2/index.html","252d56886b0e59d5c0edf016e92674f9"],["/archives/2020/page/3/index.html","70c54c0904506515baf14f195bded3fe"],["/archives/2021/03/index.html","dfd909b832c00c27871232f450f41f36"],["/archives/2021/04/index.html","d727a5b717939f98209fa7344011712a"],["/archives/2021/05/index.html","f75f1869898d68e0122b39fee417140c"],["/archives/2021/06/index.html","ffc510124bf131cdb5e73944876fbbb5"],["/archives/2021/07/index.html","d556461be493654ba69aa297e6cfa807"],["/archives/2021/10/index.html","5d9e240c20c1d86e2411752a7c5115f1"],["/archives/2021/11/index.html","5d3d59e0bc7575e2835772f7272fc90b"],["/archives/2021/12/index.html","c25615e716d4152bda7e373221b06f47"],["/archives/2021/index.html","5b5f263921290615cdb38ebec4b6251b"],["/archives/2021/page/2/index.html","4b257eaed14b52231b3e99549ec7a724"],["/archives/2022/01/index.html","39da6eadf4154ef7ac884c80194e5024"],["/archives/2022/03/index.html","6920ffb2b7be321566a51b38f5967d4c"],["/archives/2022/05/index.html","0a77bd51f1d1c126bc2767813708e150"],["/archives/2022/index.html","b7fd515496230f6acd18baba23b129c1"],["/archives/index.html","eea79956cf9691b5e5cee1943b8641c8"],["/archives/page/2/index.html","4de98e28ff7dc9ef549ba2c6b55bbf50"],["/archives/page/3/index.html","fee3c9d605d13604b0c1ae82b472ba04"],["/archives/page/4/index.html","6728573ca572e9351a12983d61f1d7f4"],["/archives/page/5/index.html","8228e05775c506a5566b980feff30562"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","ab43879d0ac2db4fbcf21f6ec633ef22"],["/categories/C-C/index.html","1cad8aed33d5d3d0b4c0340d776a8ac7"],["/categories/C-C/page/2/index.html","4f0d8fc14d74a7320b920ce76ad54e93"],["/categories/GitHub/index.html","86b40b8ff9e392d310984df28089e2f8"],["/categories/Linux-学习/index.html","08e8a879c945a558e14334a5c888528f"],["/categories/index.html","b82819b121afc2c95f11a0937f2953c4"],["/categories/博客搭建/index.html","08f3bc5266a65204912396ff07c4e0c8"],["/categories/学习笔记/LeetCode刷题/index.html","36108434879d78245e96b5d0c4a92bab"],["/categories/学习笔记/Machine-Learning/index.html","d8e1c45fd24717b98d107c03570fd8ce"],["/categories/学习笔记/Python/index.html","3e36e7ca078a113ecf0f77ca852fdedf"],["/categories/学习笔记/index.html","218d33ac4bd716d73873c92a11e97397"],["/categories/学习笔记/page/2/index.html","36fd2a45f34b90fe4d43a3cb871ffa8e"],["/categories/转载/index.html","612230a8022bd7f2e5f5a693a933cae0"],["/categories/随笔-杂谈/index.html","e9da1156a6ed76b63ab4f720d1bd5696"],["/clover/index.html","258b8ea9a8aa73e110b774e5251bd394"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","3045153b961acadedf7eb8eb51b79fcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6da436c7d7c2f062bcdf179f83e9f4a9"],["/google85949087cc957523.html","80161406a2460e787477be86f15f4937"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","516795f53a8cc8a165d94b4fa7986396"],["/interest/index.html","f846266b323c39c83f7d9749d70d0f76"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","dcf86d8bb935571589bc3f522700582b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","3e206081653dd99ff1fa1d671856477a"],["/page/2/index.html","f44b9853da6dde3f24ee5b7a5b1be760"],["/page/3/index.html","fe4fe055ff1b99b8248261fe688358c6"],["/page/4/index.html","09d08285f38f82e3c9033834b1e0dd63"],["/page/5/index.html","a6800bcd28f90fcc4fa285a3d96c9361"],["/tags/Binary/index.html","60039c3dd786d83e92859af96f3dd754"],["/tags/C-C/index.html","a0df9369e315d4917f56edc30e2255fb"],["/tags/DCLP/index.html","edb4ff0d7f879b6dc640048e35ce96a9"],["/tags/Git/index.html","6b7513214527aa8c6043a7c16fe7ecd4"],["/tags/Java/index.html","587a7f28018c9f232b201eeb8de5fb54"],["/tags/Linux/index.html","5545d2a7e37485c87a23996e251aaf47"],["/tags/MNIST/index.html","616a00323166cf5439acea4230c9d9ec"],["/tags/Machine-Learning/index.html","d3cad0db1de4d7c857359d9501d6346d"],["/tags/Python/index.html","e5de65eaf9c1cfefee3f4aa04de1e447"],["/tags/STL/index.html","0a9a2149960fe23762fe46f960c591f0"],["/tags/Struct模块/index.html","e4aa0b9df7007c2aa93b8b7033ea5fb8"],["/tags/Windows/index.html","88492e92ed987174671f23d8c347889e"],["/tags/define/index.html","43d1a31a88bf3835e8e97d51f4763c3c"],["/tags/github/index.html","033c3169816a8655830e3571504c8914"],["/tags/hexo/index.html","a4caef096ded89573fbbaef662cbbc3e"],["/tags/import/index.html","313f159084afbaa8c6d879b36ac9b0e3"],["/tags/index.html","dd745d8882e7225fe7e56dbe33ced9f7"],["/tags/initializer-list/index.html","d47c31a62580de65ca87139e88305c92"],["/tags/main形参/index.html","0ed251ab60451c2ca39378d01c73ee0d"],["/tags/matplotlib/index.html","42e10ca69e41bde2f644e78ddd02ea66"],["/tags/melody/index.html","1b683fe288ebaf3d49a8cff4f4a20f28"],["/tags/npm/index.html","bced97bd0443c750541b628136b3886c"],["/tags/priority-queue/index.html","33fb13a9cc86e64ddaaaa325690947a1"],["/tags/rain杂货/index.html","f0d5022cf77bc42ab725e5a95de4e5ed"],["/tags/socket通信/index.html","fe0a3a8d7032009205e3a754d51261a0"],["/tags/this指针/index.html","cd278e05358769fb5a568d797c4956dd"],["/tags/typedef/index.html","b80cbf85d3dcc97cc6d7c5bf926db8ea"],["/tags/using/index.html","4b3984a4d97ace28b57fe1b349330bf5"],["/tags/中序表达式/index.html","309dad90c79a67981a43c8193c1511fe"],["/tags/二叉树/index.html","35643aa1ea8ee2a78cfb6a29e9889e8b"],["/tags/二维数组/index.html","b7e6fa3dba60ea6d76db02be39865f0d"],["/tags/二进制处理/index.html","e8957e2af1ce17073ad9c17cfc1169ef"],["/tags/优先级队列/index.html","9460d898bfb5c8d5b37331d9b89449e3"],["/tags/减治法/index.html","cf191856c8444610234b48a3c03510ef"],["/tags/函数/index.html","14467b4a3517c96bb29dedc157b8a75b"],["/tags/函数图像/index.html","9ba0eaceee15a60252c9920a2b34e8cf"],["/tags/函数调用/index.html","c3e30ad17897bd5c06b8059217435205"],["/tags/分治法/index.html","6a92ff8b840657c995862466bb1279b0"],["/tags/前序表达式/index.html","b73e4075bbe06c35990f0bb619c04352"],["/tags/动态库/index.html","5add21e1e67fc0abd0b881e64e8d1c20"],["/tags/动态数组/index.html","5dac42eaaec4b6dbe86dcea65afdb66f"],["/tags/单例模式/index.html","fdda1528155272d23b35814947d5738e"],["/tags/单调栈/index.html","96f43f87e469f2d2341afd87986039e0"],["/tags/博客美化/index.html","8ec68bec8ce912e5f3edf56baab05797"],["/tags/参数传递/index.html","93edc060724136778676e883f0be6376"],["/tags/可变形参/index.html","f1403e62bd5389ca5bd24163622981d5"],["/tags/右值/index.html","7ed2d27b87a84d7304bdb08092b3151c"],["/tags/后序表达式/index.html","a07e3fe59f76c1b6073c66e48be897ac"],["/tags/基础/index.html","86fc1c4620e331f4f54d58a0dc679f9c"],["/tags/堆/index.html","46d9eb021325948c35df54880f88a200"],["/tags/多线程/index.html","a37248e23bf4cec5c073b630aa9ba373"],["/tags/宏/index.html","03f96b2d48c3fe63f7e2c4ae389915df"],["/tags/左值/index.html","45db5b876bdf466718d4e6fa1ebab92d"],["/tags/开源/index.html","23ee85d1f906ac71c7e30e0be776902a"],["/tags/影音视频/index.html","86ecf3008d5e1b5097397bf7da63f876"],["/tags/括号匹配/index.html","4ce13f726c3129e76dc03a596fc3561d"],["/tags/排序/index.html","cc365cedc8efd7b8f0cd7a24f2906601"],["/tags/数据可视化/index.html","32a1f1c61fb143ea9fefc708cc55bbf9"],["/tags/数据解析/index.html","5dbe7091d7c23289488310ce4ba091f2"],["/tags/文件流/index.html","0e733d51eaed20c2e481be8b26003004"],["/tags/服务器/index.html","352e964877ae71818c07bb9dc4768a3f"],["/tags/朴素贝叶斯/index.html","359ffc3788f652ae9a6a33b957611563"],["/tags/机器学习/index.html","5541da7118ccc76b6fc0da771a48aee7"],["/tags/构造函数/index.html","06ed5b94dc849f90a1037322e8087916"],["/tags/析构函数/index.html","59b5496442e8c419952cf44451c1e756"],["/tags/标准库/index.html","28c4291dde49dccb4964d5be0886af3b"],["/tags/栈/index.html","5582fa232993055a9daf9ba56c43d041"],["/tags/模块/index.html","c02eb68306c3467d9e2041d4d50e2217"],["/tags/版本控制/index.html","11ea2b05e584aa97df7ea1263ef744fb"],["/tags/省略符形参/index.html","fadcbd89c5bf13d5d477cfd0888a6315"],["/tags/神经网络/index.html","69f2b5896dac425a22fa6ece79cb8663"],["/tags/程序设计语言原理/index.html","adb4c75049da74b9663c8536035928ed"],["/tags/算术表达式/index.html","4d594410f802105e4eeb513e6815a3c6"],["/tags/算法/index.html","a61e5f18fb0ae998bca176008f5fdf19"],["/tags/素数/index.html","55602d1d5f3a87bf2b44f032f678333c"],["/tags/考研/index.html","3b0f3f13e0b7cfbedc805b4775298536"],["/tags/莞尔日记/index.html","0056535371ea2aae3978bc33104a2d2e"],["/tags/设计模式/index.html","0b179040b55ab9ef327f6923051968e5"],["/tags/赋值运算符/index.html","2ebc2a3200d1b2634b7aa52fef0d1159"],["/tags/进制转换/index.html","cb571d599a9717761400b756bdef5c99"],["/tags/逆波兰式/index.html","fb07df32d00d5ec5c73dde1b93348b7b"],["/tags/锁机制/index.html","0f93a88a9a1c9b782fa60c58ee80bd58"],["/tags/队列/index.html","ca37060bf37bdb7601f3e2cf0f9426d4"],["/tags/静态库/index.html","4b8e5bac2ce27cdb6e54e32d1b49a182"],["/tags/面向对象/index.html","6df4c76696b22c9f8f6265f3dc614d24"]];
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




