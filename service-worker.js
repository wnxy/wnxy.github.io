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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","4d1cb0f7f99881e9513eda7434191da3"],["/2017/02/01/hello-world/index.html","1c78bf06e3011c129d1e51d3bdbf9873"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","0288cd1c83a37b525f3ad90a2797969d"],["/2019/06/03/Linux-programming-examples/index.html","1d3ab274852f967f3d431576de868e9d"],["/2019/06/10/Server-basics-and-configuration/index.html","8ac8ea882e05a6ebaaf7722ee08e4d74"],["/2019/07/01/Linux-socket-communication-programming/index.html","583296588f4486eba750a102444204e9"],["/2019/10/04/Python-function-call-and-module/index.html","33b7e24efaf2e677553708d80e459ed3"],["/2019/11/02/Python-100-days/index.html","8e824842e762ddca6ab65614b3c34db1"],["/2020/01/10/C-or-C++_dynamic-array/index.html","6d3dac120d356dfcbdc5bf32e1d74fc1"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","c6b75a36af6f0692874edbe03de2b22d"],["/2020/03/20/Jincheng-lanzhou/index.html","1c41914edd611e97524b77494e1bea33"],["/2020/03/21/Cumt-aerial/index.html","135f8493599b201a13b3f05cc9cb5681"],["/2020/03/25/Bitree-construction-and-traversal/index.html","7f6b32ef9874755b0c607d6a45382c64"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","a96732ceaca0a5bc2245799ce3a8d4df"],["/2020/03/27/Stack-application-bracket-matching/index.html","5e3a8217dae1cbb5aed06633741a95eb"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","d06e7b76ec024fb8b59e31ded9ba0dbf"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","83f5bb02ced2db0fd0ef8a50ce7f94c2"],["/2020/05/30/School-celebration/index.html","ec46e2fb4e8d4be60c8ed28b6a666e18"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","dad33d5066b82f224b8e99663d9276f7"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","4ae5a05f47e6d29cf6ec668127c53a4a"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","0714c8975b6d1d9af2c957c9f896e60a"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","d4f43783bca9f16cfb5189ec955db459"],["/2020/10/09/Python-data-visualization/index.html","5df204d4b182fa5a2d82b725c71d791b"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","f8aabb92dc72de37befb33c99a4c7043"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","fb1a3373f40f1a9a43b4422a19109f90"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","34227afbdcb9756b854b9f9902e97507"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","35a7c2424f93c24de87a2c75b82dc8c2"],["/2020/11/02/Data-visualization-matplotlib/index.html","c984d08b7cd4b587f73d326844233c92"],["/2020/11/10/Naive-bayes/index.html","0bc8dcfa18dc0af9a5bacf3c9a339a48"],["/2020/11/28/Matplotlib-function/index.html","485da81e019c1ce412d8397fa68d46a7"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","974302c2eb74d4af95dcbddc31b690b7"],["/2021/04/27/Git-usage/index.html","4f6a4bf54bd4c06807409badd6b7e349"],["/2021/05/06/Arithmetic-expression/index.html","effb363bec57cf009c85118a2c4ab7f0"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","282c393ede94f105b4b1656f1377e358"],["/2021/06/25/Classic_TopK_problem/index.html","b3beffa18627b42198455d98c5342393"],["/2021/06/27/Calculate_prime_numbers/index.html","57f61bab72acf2bc071e8b8b714baf4e"],["/2021/06/28/Priority_queue_and_heap/index.html","87074fa6cecce3dfbda7cc777ef8a72a"],["/2021/07/15/cpp_constructor_and_destructor/index.html","71b68be4803aa0280b7f3d1f52d7e03f"],["/2021/07/17/cpp_file_stream/index.html","319f4305a11679646fddf78aa13fd34f"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","543f188b7b549b8cd80e713bf1db105f"],["/2021/07/22/cpp_this_pointer/index.html","84854b2e5c3ba7269fac09867a7e3f85"],["/2021/07/26/cpp_algorithm_analysis/index.html","90cc568cd371407d8b342eee43f12f67"],["/2021/10/27/Git_common_commands/index.html","5c76ddb01c1360e99b2ee3b2b4d0db73"],["/2021/11/10/cpp_singleton_pattern/index.html","d9b0369637c09ddb960b372997b0c152"],["/2021/12/05/Semantic_version_control/index.html","46c96d67c6f7e9d8f14b2bfd03eec99e"],["/2022/01/10/cpp11_default_and_delete/index.html","886cc015be72ee8cd58344696c571b66"],["/2022/01/10/cpp_constructor_and_assign/index.html","083a40d2e2786fa268e4d54030ce025e"],["/2022/03/18/Static_and_dynamic_libraries/index.html","25ffe58520b42960efb8bcae6868d57e"],["/404.html","9c1750185e6813779f0dfb66ceeaf498"],["/about/index.html","89ef926d83ed7b807c513acf79348474"],["/archives/2017/02/index.html","98bd8bfd9ab3809b9995d212cea85b1f"],["/archives/2017/index.html","3d4f3054e3f2277e4a72335946db32a9"],["/archives/2019/01/index.html","417ba3ae2cda59e2e14d0f7d85299e1a"],["/archives/2019/06/index.html","8ce12e0b469b4ef68d6674c955e30af2"],["/archives/2019/07/index.html","742b39fbce1718f4c84daa16da47ebdb"],["/archives/2019/10/index.html","d6ad672a49c9b5a677227db0e03f570f"],["/archives/2019/11/index.html","b33d1df2a83ab4173eb03a54706a1cfb"],["/archives/2019/12/index.html","ade12d4b755a55a1d7b84f97c407828e"],["/archives/2019/index.html","b8594b0d6a66b182edfc120943af7531"],["/archives/2020/01/index.html","5d3509e9dd7797d0eae4ac5b1ecd92e4"],["/archives/2020/02/index.html","6d1999dfc7bb848eff7a1379e84cfa4b"],["/archives/2020/03/index.html","29214394c19542b38029d6001857f329"],["/archives/2020/04/index.html","5e74a691d420d77e67e867c1fe8b6aaf"],["/archives/2020/05/index.html","89532175fbb8b90a6183a9f91af96720"],["/archives/2020/06/index.html","1c484a37edb160b8367fe97081e54949"],["/archives/2020/07/index.html","67562b88560d1ab07b2c2d5ef0d84c3a"],["/archives/2020/08/index.html","f22937a44b243c51cc8bdb5f52078112"],["/archives/2020/09/index.html","bba97d607edb1bcdc1a98d78281ad7b9"],["/archives/2020/10/index.html","8b506951c7f0562ba1336324bbc209ad"],["/archives/2020/11/index.html","099acf768e68754e96d939fdfce96595"],["/archives/2020/index.html","0c85f47c184aa8ab02ba163b982c93ca"],["/archives/2020/page/2/index.html","81ae7f4dc95c425e5c54166362c5660b"],["/archives/2020/page/3/index.html","3db57c49a196ec35cd596ba3cc7f1a45"],["/archives/2021/03/index.html","4fc211971839398850827d6dd2a502e6"],["/archives/2021/04/index.html","b6f9e6bfe47eb5f69c7af52ff4e4387f"],["/archives/2021/05/index.html","bd9d1e12a55fe2bc62220bec2667f8ca"],["/archives/2021/06/index.html","47093bfe3ec85ecb29b7fbf9e0764dc4"],["/archives/2021/07/index.html","8efbde3bbff0f94352ebc1e232a2ee4c"],["/archives/2021/10/index.html","f321f0a21d6aca815c579d78198404bb"],["/archives/2021/11/index.html","3d7b37bf07c972477772ff8845e05e3e"],["/archives/2021/12/index.html","a6825f54f25ab6b4450190bdfce4ed41"],["/archives/2021/index.html","9b16feca20dd2d132060517501663d60"],["/archives/2021/page/2/index.html","83c8c2477b791b06f83a515a7ea4b4cc"],["/archives/2022/01/index.html","f496bab21c67b1f47ff5f720383f8eab"],["/archives/2022/03/index.html","2572634ac5cf339e43b591c367a08d7d"],["/archives/2022/index.html","cc7adf8681464339ee60e1ec9e348f8f"],["/archives/index.html","ef1975c20d7ebb7dfe7d0ff497580463"],["/archives/page/2/index.html","ac66e3e91faeab4d10589db7e30246de"],["/archives/page/3/index.html","ca3a0576496d39f0249be1b6f6e97cad"],["/archives/page/4/index.html","f6ae90326d38cd8bc704814a678ae095"],["/archives/page/5/index.html","6dda6bb662cae8c00c584667b1df5222"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","ab181a3e358cb04eb8145d5dbedefb89"],["/categories/C-C/index.html","a33bab241feb9cb0db21cb3d51851918"],["/categories/C-C/page/2/index.html","009f2d367c7221aad5ed1e0d6d419562"],["/categories/GitHub/index.html","7649721764caa6a652015dbcbdcd8a47"],["/categories/Linux-学习/index.html","5f8075410af6eee78eba68aa8e759c3d"],["/categories/index.html","e342e68e2c2bb4fa2d1debf1ffbc250d"],["/categories/博客搭建/index.html","0bc63e67b06aeeea4a87e53662dd0aea"],["/categories/学习笔记/LeetCode刷题/index.html","677f63496999745d7287921ce51583ae"],["/categories/学习笔记/Machine-Learning/index.html","85833e5d7bf2a133b0f7a6547578289a"],["/categories/学习笔记/Python/index.html","ccd27e6a4e8c57bdee43652e3b4865b0"],["/categories/学习笔记/index.html","01870d9e5a45cbfaf5c33cea4ccf5340"],["/categories/学习笔记/page/2/index.html","fd700c732881230e7f735d9d0a2b901e"],["/categories/转载/index.html","0bfc07d957bd2ae726f55a05400a3fd5"],["/categories/随笔-杂谈/index.html","59c20ad3e52ad397e0e8d27404dc69dc"],["/clover/index.html","929139610f4d22df680b8b8a9eb17d64"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","85ee2c15fdf2587eee3636de6d850b72"],["/google85949087cc957523.html","5c2efa9e4fcd55d7348f88b75bead5fc"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","c8c3d80521495a7775374f924b43edf4"],["/interest/index.html","1ae010df22c11bb545b17666a7c73170"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","9f8e6fb676a546231b1f51612ec98d33"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","9a4ecc0c50dbc033f7401c2c1e11451e"],["/page/2/index.html","4272566083e23a2a98f1a475fdc0ba98"],["/page/3/index.html","b961c5efa615c4e54abe4d6ac5b82ba6"],["/page/4/index.html","cf231e94a89f62fad2ce7978babcb307"],["/page/5/index.html","61845ccee157f54e53b5d167f847e8b6"],["/tags/Binary/index.html","edc87dfc112b88c9441ab5e5269bbef2"],["/tags/C-C/index.html","ae705cb69d0d4a7bfa7ded50e5da1a54"],["/tags/DCLP/index.html","2d08fb40a8bd8b277180fe95564fbc79"],["/tags/Git/index.html","a46530a16502f7e8d3db7d1a473eab90"],["/tags/Java/index.html","d04b8b5db2bd55f48222d05ce24d0d2c"],["/tags/Linux/index.html","eb13f29a464d7bc2eec89cc615ea5953"],["/tags/MNIST/index.html","873e3003e74d00de0ac8a6114118d13c"],["/tags/Machine-Learning/index.html","7b12ade55ed1c1fc9199b47b18f5653e"],["/tags/Python/index.html","2d2496d93f3af2299c01608a11e5b057"],["/tags/STL/index.html","93732f07b597c7b2c83b0410c3d453f8"],["/tags/Struct模块/index.html","7ed7987ae65061ca581c618defd9b62f"],["/tags/Windows/index.html","8f6ccb1e582b64183d4a7048496973d4"],["/tags/define/index.html","9ade60e5ad7b407f37e987097828cf7f"],["/tags/github/index.html","1c3bedcf03850de1b8bd36d6a3d145ed"],["/tags/hexo/index.html","074e78b6408e9a000038400c62150417"],["/tags/import/index.html","334089ff3dd9c6fb8ad4a824fdd4cc5b"],["/tags/index.html","24e33b47214b4992c2a777bee083ace0"],["/tags/matplotlib/index.html","87aa35a76af1abcfb4a7e99b63f12102"],["/tags/melody/index.html","06d425940779794405e88181488adb92"],["/tags/npm/index.html","af2dd454a0808f579326aa177aa5b114"],["/tags/priority-queue/index.html","cb2c1e1b3c90dc6fdee69f893ff7ac31"],["/tags/rain杂货/index.html","d348a2cf2569ae79cbfb066d9be82d9e"],["/tags/socket通信/index.html","de8af9bfabfcbf9fd56a7a1897d99dd4"],["/tags/this指针/index.html","80d38307c970a869b55d1a48b4e51f5c"],["/tags/typedef/index.html","418ea769e17ba20aaefce972dc23901a"],["/tags/中序表达式/index.html","994409ce74912436091b67381ab0f55c"],["/tags/二叉树/index.html","32aee58a6d767e2ebf9a53fdde7fb1b0"],["/tags/二维数组/index.html","5851128fdde7544ad3f7336b47faa36c"],["/tags/二进制处理/index.html","96fcc660fc9b20c330d2c04aeb3e0895"],["/tags/优先级队列/index.html","38381bf8ed0b043d5bed1d3c717f0b4e"],["/tags/减治法/index.html","307667e994dc333e3bdd973b9a7d40b0"],["/tags/函数图像/index.html","09dab4587829796ec6da8ec7fe76ce43"],["/tags/函数调用/index.html","8ed294442f4564096d49a20348b296be"],["/tags/分治法/index.html","1e4a537a39685b0aec298ca174347a6e"],["/tags/前序表达式/index.html","f039a4543dd25a514bb68b266224ab5b"],["/tags/动态库/index.html","8ecb44a077d31c03f008fc2eca9ac83b"],["/tags/动态数组/index.html","d65fb13f5e4c62923aa19c78393192ed"],["/tags/单例模式/index.html","be64bc97a0f12569f2fff5ac96f69b1b"],["/tags/单调栈/index.html","ea2af5f76c8f5e72ad42ead0a54a9e93"],["/tags/博客美化/index.html","d246c4bf7a435b10d599b28052753198"],["/tags/右值/index.html","8ce2140007229f5e24f835789d58fd74"],["/tags/后序表达式/index.html","4a610787f3a075e14c9faef26aef178f"],["/tags/基础/index.html","426b40e581f48e5c55d49bd552a64362"],["/tags/堆/index.html","f04e82587b544158ba6f298660cffeca"],["/tags/多线程/index.html","f979754cda264fb854144bf46c959aa1"],["/tags/宏/index.html","4b739f3bd692769d9e3cad92063b9fd1"],["/tags/左值/index.html","6527836224aa0af9d5f85e8de6868dc6"],["/tags/开源/index.html","b3de08e77f3ccb6df4548363d104eb4e"],["/tags/影音视频/index.html","258062594ed0d2f8090b0d4e5b1bda8f"],["/tags/括号匹配/index.html","f936c3b2d63b8726ce1e30aa4507c3ad"],["/tags/排序/index.html","d5e636de36b6e9cb8336099b40079462"],["/tags/数据可视化/index.html","e85578aaae68883622b16c6c2f40ccfe"],["/tags/数据解析/index.html","9cd7d930f59cfb449e85cb84a69db0a1"],["/tags/文件流/index.html","ad970c110fbf0d16e7155d34014e6140"],["/tags/服务器/index.html","c103c552a928fdc906ff996251779451"],["/tags/朴素贝叶斯/index.html","b595de510b7d8ee13d4d936ef354ce06"],["/tags/机器学习/index.html","ea823a72accca75c911d6507266a5893"],["/tags/构造函数/index.html","291e83fe58a1dbd7de820368806a43d5"],["/tags/析构函数/index.html","e8826dafa6032f9633f1e153836635c3"],["/tags/标准库/index.html","06abc26c79d95498afa8cf8d9ac3d098"],["/tags/栈/index.html","913002cfb4cdcecdc3a050ea5e9107f7"],["/tags/模块/index.html","a2f9631f31c8c2fd5663b23aa0db22df"],["/tags/版本控制/index.html","98322ce2f78b0b941c925e323cbca347"],["/tags/神经网络/index.html","199737faabcbf596c01c1be2548c3ac1"],["/tags/程序设计语言原理/index.html","3949a9bfae18d4647510d9ae9f53c87d"],["/tags/算术表达式/index.html","da00bf20823b07cde05f1e38c163aa9e"],["/tags/算法/index.html","9fc36c8fd9a6f6e4c9273938847b3a8c"],["/tags/素数/index.html","ebf83ec0ee360b363568d4cea4e48054"],["/tags/考研/index.html","ac6f07cef819d97e4e7edd14679392e7"],["/tags/莞尔日记/index.html","194cf291e5aab9b01ae402ab9a2c88c3"],["/tags/设计模式/index.html","0181d0db1b0ad294cb6f6cfc1f0b02db"],["/tags/赋值运算符/index.html","6b97edba5633ea5aff3e1becad73469d"],["/tags/进制转换/index.html","014a92f8bff3e688b18831a8fb69a51d"],["/tags/逆波兰式/index.html","a49bdabf81728b8cec6eb872b03bd1f4"],["/tags/锁机制/index.html","47fbd81436f360ae386f4176474ae359"],["/tags/队列/index.html","14b097d4e88b19b70a282c9ec6ca237c"],["/tags/静态库/index.html","947e9e04845208ff10eab89d2f6310bb"],["/tags/面向对象/index.html","56a33e76d4331a23dbe9895ec77b4fa9"]];
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




