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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","b1baa4b8f2bba808c444c3911de5b762"],["/2017/02/01/hello-world/index.html","85f9fdaa8590746184cc71a9104aeb33"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","2b4b135d905ecc467eee58d2bad210b2"],["/2019/06/03/Linux-programming-examples/index.html","50c9d1d058d03adc47c7aa915a02299d"],["/2019/06/10/Server-basics-and-configuration/index.html","8ed77dbd6e08fd522999458995965a38"],["/2019/07/01/Linux-socket-communication-programming/index.html","fd6743383a9eaf0942cc2e948af52966"],["/2019/10/04/Python-function-call-and-module/index.html","1fceda7854dedfbbae3ffbf97e4fe81e"],["/2019/11/02/Python-100-days/index.html","820a97e23ceecd365d9841de32249b08"],["/2020/01/10/C-or-C++_dynamic-array/index.html","0219652135643705707ee15a379c3d4b"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","42644b631dd94b0f4d2c0b5b55ca7a91"],["/2020/03/20/Jincheng-lanzhou/index.html","571ae7553bc5315984283c2cd0f801b2"],["/2020/03/21/Cumt-aerial/index.html","cc8dfa15696f720b89caf45aa497b7ce"],["/2020/03/25/Bitree-construction-and-traversal/index.html","075065612d4a20b5cafe4c856e4077e1"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","0aa61e189c0158210e601cc2d1b362e9"],["/2020/03/27/Stack-application-bracket-matching/index.html","f7e5a99a4f80fdd2615fdc1392b23fa2"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","c4be32af1a83d8b214a38bb65ff1fb2d"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","4b2933cc52c576bbdfecff6754a095e9"],["/2020/05/30/School-celebration/index.html","ee8a3d98dd664421b0a9849364bb6aae"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","d11c79051b8373207909bd29c28c8579"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","c165e983f34086dfe898aaa32ee10982"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","f5a7a0563e13598c9e9de2d7d884fd48"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","77da424af256f2395a6b3f253c2e4f72"],["/2020/10/09/Python-data-visualization/index.html","f806abc0ca50c3a771b8499e6c36627c"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","7c618f5ccfd5bef3204e9e54e3ef3ab8"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","fb3f80394d35bb9cc07bd5db769e14e6"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","b1a3b01cf155371181b382600a353611"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","a391ff6560cacf38c1a1e290bae0104d"],["/2020/11/02/Data-visualization-matplotlib/index.html","36f7c39c76918a0bdaedbc950aa9c96e"],["/2020/11/10/Naive-bayes/index.html","f2e5c4a3d53bc35862ee42744cf3e566"],["/2020/11/28/Matplotlib-function/index.html","0e82dccebb5e7e0c5e04af52e85ddce1"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","05aeb1272197d2ab0ee4dab99c38e4ca"],["/2021/04/27/Git-usage/index.html","1531239a849c726e6605bb1349df25e1"],["/2021/05/06/Arithmetic-expression/index.html","08c9dd03fcc6da4ee75b5841c16ca411"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","330462dd2c078002abb4c3aeac672cda"],["/2021/06/25/Classic_TopK_problem/index.html","42f1b1144a60e60337c50848aba6a08a"],["/2021/06/27/Calculate_prime_numbers/index.html","973348d13d0bc5c73ca382b1e27d1ea5"],["/2021/06/28/Priority_queue_and_heap/index.html","4e3f3b603472c9d80495f147759dff8d"],["/2021/07/15/cpp_constructor_and_destructor/index.html","8b6c9b94e0d3bd2e06c927be584500a4"],["/2021/07/17/cpp_file_stream/index.html","77bda1708a2cb5756133da883ba8d427"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","a55d33b7734357e5799003215ea2d008"],["/2021/07/22/cpp_this_pointer/index.html","e6f97d3144f57d8e7f9910affaf225d7"],["/2021/07/26/cpp_algorithm_analysis/index.html","0942e0cb14d08912715fc140f0b5e9fe"],["/2021/10/27/Git_common_commands/index.html","d78ff2fd1976a05003dcd7ddd3e261b2"],["/2021/11/10/cpp_singleton_pattern/index.html","69b5e1a993378bc8229bb54c2024d0a5"],["/2021/12/05/Semantic_version_control/index.html","929563239ec1a6c39202a9df9f0b57c5"],["/2022/01/10/cpp11_default_and_delete/index.html","ff58242cc94ff3178bc767ca0c85e761"],["/2022/01/10/cpp_constructor_and_assign/index.html","3cded847ad4ebe96d095a30ff0655229"],["/2022/03/18/Static_and_dynamic_libraries/index.html","1926b8192d7e98d2894c078f6d082fee"],["/2022/05/07/cpp_main_function_parameters/index.html","8259cc4190999651b9c3e5e4915d5a84"],["/2022/05/09/cpp_function_with_variable_parameters/index.html","01c7da968c1f7ef14cdef07eb18724fa"],["/404.html","9d7725e6b028ba49bd645e2766e154bb"],["/about/index.html","db6d5c86e0a251f602cb77b3f33b2871"],["/archives/2017/02/index.html","7ad145fa8bb6243bdc9f740a96c8c762"],["/archives/2017/index.html","ab2e9b14208b3d7e9f67ab9f3102fa9c"],["/archives/2019/01/index.html","d45799af3eaf80fb9712751d69ef2a66"],["/archives/2019/06/index.html","85b64c243f76b35e0f1c5655435509d6"],["/archives/2019/07/index.html","dc73abea5958908b759ee9a03ce6ec48"],["/archives/2019/10/index.html","1b7a197d1983bdb819f4fef6f865f7ba"],["/archives/2019/11/index.html","da47662790082c31ea378eccd3873c03"],["/archives/2019/12/index.html","ba5a59ec92b316ad8c45081058637178"],["/archives/2019/index.html","7c692f021408d1425fc50cd109836213"],["/archives/2020/01/index.html","0efdd665317acf38b68b120a4afa637d"],["/archives/2020/02/index.html","5a9be23235ed930da771bcde247956a0"],["/archives/2020/03/index.html","946ff52d76fec0ef5c0083d06e75bc69"],["/archives/2020/04/index.html","34d0938d7086fa0bc9778bc2fefeb95e"],["/archives/2020/05/index.html","d53e9fd490dfa3ebad71817b0f44722d"],["/archives/2020/06/index.html","e54f194d9613033520f915257aad5dbe"],["/archives/2020/07/index.html","3fd0ce3505662697f01d1f11d84db615"],["/archives/2020/08/index.html","72306ac3facad4a2e45ca21c05f4ebac"],["/archives/2020/09/index.html","c5131de74f9fe83cd85cc7a75ca530fd"],["/archives/2020/10/index.html","5748ddd27f0f011194057a9631049776"],["/archives/2020/11/index.html","f98fa2895006029d514ed413dc586fa7"],["/archives/2020/index.html","d8b4416e7bf494d0ddd1005a839ebde0"],["/archives/2020/page/2/index.html","87f959f465788a8dfba8b3bb405a0e9d"],["/archives/2020/page/3/index.html","adb2cb1f1bb7a75230c09e55cd273264"],["/archives/2021/03/index.html","69931789799a957476f035d2fc866f84"],["/archives/2021/04/index.html","91a4e45976cf77b90c6a02dfdf586958"],["/archives/2021/05/index.html","b9a0a91e77a045936aa36654d14df977"],["/archives/2021/06/index.html","f4385644670301aebd9757468171c19f"],["/archives/2021/07/index.html","35bd0b7aea6357cd270bd7383368d459"],["/archives/2021/10/index.html","9f52fd81c631e2e7de0cc9d588446bb0"],["/archives/2021/11/index.html","e84647db23138f5901313070c4c794fa"],["/archives/2021/12/index.html","78326f1a9b665d1681cbe8826716f2ef"],["/archives/2021/index.html","08357923fe77982e7ae5adc3788e0a3b"],["/archives/2021/page/2/index.html","d0f4bb0f9f90a3413c85c9d5235c68d9"],["/archives/2022/01/index.html","c1de163221038fb84e7c4948bdd0b960"],["/archives/2022/03/index.html","79e72d7c0a016c25f3c8a748a78dbe5f"],["/archives/2022/05/index.html","3336f1b11c02945b7e993df0ce0cabd6"],["/archives/2022/index.html","e7098e445ce6574d05d2475a766ae27a"],["/archives/index.html","3dcf59107bdc0cca69ee7a6594016922"],["/archives/page/2/index.html","d50765f87d5f62b9825037bf34da13c1"],["/archives/page/3/index.html","9a1ed08c3da0594e87d9c14a00f88487"],["/archives/page/4/index.html","f8c0835c64e7bc2f91f656bbb69594d3"],["/archives/page/5/index.html","6c2240de85dadb3d40e0935b284125a4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","b92355faad7b253c33605d8929b97cff"],["/categories/C-C/index.html","6c0a6e34f96ac8d0329821253163f722"],["/categories/C-C/page/2/index.html","7b7f721dd741218d6d9bb8b89bdda60d"],["/categories/GitHub/index.html","2c1c7d51f87d687c5c0f2c9a111c343a"],["/categories/Linux-学习/index.html","bbc5fa7d61f503d52852fe099dda1e0c"],["/categories/index.html","b5936c9645df32160aa8203c6a76745f"],["/categories/博客搭建/index.html","90ab5491806e06ddfcc87e815ff3df80"],["/categories/学习笔记/LeetCode刷题/index.html","708dad831e7ae9bda15d623a54e3bd3b"],["/categories/学习笔记/Machine-Learning/index.html","172587a11aa5a706909d74112655fcc8"],["/categories/学习笔记/Python/index.html","32faf83013133212d904f3a7f7f57679"],["/categories/学习笔记/index.html","8b4aa13c230a797ffcda2717b001e4d1"],["/categories/学习笔记/page/2/index.html","06ae0eaf30c1330afd466b169e754dfa"],["/categories/转载/index.html","fcfc7e81e2d90f126b514dc7fa8dae4f"],["/categories/随笔-杂谈/index.html","50bed54549ae881015b4c844351df646"],["/clover/index.html","bdd4389537855db085a33b271129794e"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4cf756dfaca522e84cf6751c33bc08e4"],["/google85949087cc957523.html","f85965fab96c6f2d44874514c1b20e27"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","3046bb40b0c466af9a47d7b7e91f5b90"],["/interest/index.html","4895d295df916548391bddab511611c0"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","b3584f6e9a6ad06b3f28d26cef189fa8"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","968383de1a0ff796fb86550491f3dd1e"],["/page/2/index.html","d421a929edc296226b237ff7212aa56a"],["/page/3/index.html","9bc567694c62b6d5b243ff47935ce344"],["/page/4/index.html","3e68035bddf98c066cd2bae2747b7937"],["/page/5/index.html","74c366da42b11bcabc113c0fcfe5c55f"],["/tags/Binary/index.html","3b80be86c7358dd9fa67dec8dd5f6185"],["/tags/C-C/index.html","190e0638cff8fb0d70b189d9c1bc0804"],["/tags/DCLP/index.html","093a3395548aa3c025774319a5bff33e"],["/tags/Git/index.html","a1edc2483a968b172a8ea5eb77f21557"],["/tags/Java/index.html","f691ca70ab236c2d077feeb4fa269acd"],["/tags/Linux/index.html","a30d9bffbdc2d193286c5e7d1558cbbd"],["/tags/MNIST/index.html","8ed8ef32ddd8e3024f8bf764afde23a1"],["/tags/Machine-Learning/index.html","0edae3ab1c979e93f3e16c919a1dd384"],["/tags/Python/index.html","d1e5dc5d380689a53439e3a5915e6301"],["/tags/STL/index.html","1241b6763fa222319ca1819e1ced4631"],["/tags/Struct模块/index.html","60e5e51feac1a868fc01ec3bbb914787"],["/tags/Windows/index.html","3e2c60db33437a5f587209f5e2233a6f"],["/tags/define/index.html","53b277cb06c07c75a43f1dc728cb314f"],["/tags/github/index.html","c71beccd7b5bbbd842ebf1ea6025c7bd"],["/tags/hexo/index.html","c3f8b8152993c73fdfd3681494666e4c"],["/tags/import/index.html","fd4885979d749089790c448854627ad5"],["/tags/index.html","6882d00fcd3859f3f446a8a65c1bf10c"],["/tags/initializer-list/index.html","922e8a71da722dba2e6229b273c937b3"],["/tags/main形参/index.html","9cfa7bdfd8bf92875c9f4becc5ceb906"],["/tags/matplotlib/index.html","bcbe041c0f7477a387f6bd0f0747efb9"],["/tags/melody/index.html","7912de4111623480129fab8d102d6b2c"],["/tags/npm/index.html","77ec9f7c2ed6d3887a09db932705c28b"],["/tags/priority-queue/index.html","41f45e91f33a6fbc97a93d7f6e39730b"],["/tags/rain杂货/index.html","d543074d04e415f7da315665d0ae21f1"],["/tags/socket通信/index.html","15efb5138f60cab2b5b4227ca03a2ee6"],["/tags/this指针/index.html","771cea3d326a860c9830161d3a15f4fb"],["/tags/typedef/index.html","8bf762e63873133c0599c5e44d1bf88f"],["/tags/中序表达式/index.html","89f966423fed94496b2d6701ad547b09"],["/tags/二叉树/index.html","966e6a99769cc1f6636cef74b269cb1e"],["/tags/二维数组/index.html","139af2bc696fe523f10b81eee9449fc0"],["/tags/二进制处理/index.html","af0e86fc63ce3df52205afe5067517a2"],["/tags/优先级队列/index.html","404bb7fb99bf29f33a979c6dda4b500c"],["/tags/减治法/index.html","bf734d562fe4a7313ff36880868241c5"],["/tags/函数/index.html","4605f85fe71057905d330a788e716093"],["/tags/函数图像/index.html","3c83fca81fd49d0839f7aa2e64686839"],["/tags/函数调用/index.html","80f1b90b58d1ba87d1c363f5d227dcf4"],["/tags/分治法/index.html","2a2ed069ebf547f3ea046395212a3bba"],["/tags/前序表达式/index.html","19b241efa27df34bdd9194008a050927"],["/tags/动态库/index.html","c2b4b14d01533245c9186061c967c6c6"],["/tags/动态数组/index.html","ecb083130f36a86a1f8e84bddba7b60d"],["/tags/单例模式/index.html","1ae60d043d2fe336d681c413d0e552a9"],["/tags/单调栈/index.html","fc6d348a7cf7ea8134f5bba88fc00c48"],["/tags/博客美化/index.html","4d1b3cd19ae5111818d6b38ea04bad98"],["/tags/参数传递/index.html","60255a8dc06268b99ef0f2421744211b"],["/tags/可变形参/index.html","0b5363f7b4277b4e3591ff8a3a42d2f4"],["/tags/右值/index.html","3d37997f51be479309c07586c773cd91"],["/tags/后序表达式/index.html","e1048d71338b84a26154a73aec4d76fa"],["/tags/基础/index.html","acbec0458395a948ff2a3c1b1e7d4f30"],["/tags/堆/index.html","53adb73458f37035c7fb237a86903bf0"],["/tags/多线程/index.html","a6c2affeb029edc4cc6288f0a9236e9b"],["/tags/宏/index.html","c3f7153d00fb7b919b4923ffb19751ab"],["/tags/左值/index.html","84b432b9e9f966b809eb5c8fcfe6f654"],["/tags/开源/index.html","2e249623ea8ca5472c628b91f509e966"],["/tags/影音视频/index.html","bf11d700aec2eee48458b459c892fb88"],["/tags/括号匹配/index.html","bf6bc084fa296d58bfa07798e136d550"],["/tags/排序/index.html","606c68de382ca3c7373d088e0df7fe50"],["/tags/数据可视化/index.html","602d343e199dfd143c8d6bedc7b28873"],["/tags/数据解析/index.html","c7443defa1a0c7492444bcd2ee0102e8"],["/tags/文件流/index.html","6448d78d215fa565ec095221c19d0d16"],["/tags/服务器/index.html","8c70005cc92cc2019ba2415f050d1b3c"],["/tags/朴素贝叶斯/index.html","d6315fc95aec13648ae667974cd185a2"],["/tags/机器学习/index.html","996d6015e45eea026fc149912777a696"],["/tags/构造函数/index.html","bc3839a37443dc06b5ff69964be69b14"],["/tags/析构函数/index.html","bac9f7ffb4e1fed4eee1da09a35ab955"],["/tags/标准库/index.html","e2cc60ec721eda88c483f294f51e13f1"],["/tags/栈/index.html","1499cb45d9c8212657e2a13ade0c04c0"],["/tags/模块/index.html","2d358fb223d2398f903b8eb41e813647"],["/tags/版本控制/index.html","48e98219decb2ee5c6f5e97775301632"],["/tags/省略符形参/index.html","d323d1b8e17563368b4ac8ff3bbc17cb"],["/tags/神经网络/index.html","9212d01ca0e623233fd50cce8f234e6c"],["/tags/程序设计语言原理/index.html","d2ce4414bd5516545589c60032f9a405"],["/tags/算术表达式/index.html","255c810f22fb8af8d636170591fa3ce8"],["/tags/算法/index.html","a33a38abc48ba992027fb76f97c04182"],["/tags/素数/index.html","6052d22492507070456c35af2b10b08c"],["/tags/考研/index.html","d782a7a613e6184d0096aeb94882df75"],["/tags/莞尔日记/index.html","5f544fe79681a2ce06c7b0eff6582531"],["/tags/设计模式/index.html","e53102b281a3630e973b77627d410d97"],["/tags/赋值运算符/index.html","5a9af603e740c6d90af704a6aca3fab1"],["/tags/进制转换/index.html","fe3622a505e1290d64c194dcd7bda684"],["/tags/逆波兰式/index.html","080778cb0334e979a3ec52f9d1ec77f5"],["/tags/锁机制/index.html","5dcbd5f9af830a2961b64fa199027e20"],["/tags/队列/index.html","2866126d91ac51dfcbcf5d3edcbb306d"],["/tags/静态库/index.html","14160be614a57edc554899a763efa1c3"],["/tags/面向对象/index.html","8785550c4f9db6fc4d3da2329f0a0987"]];
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




