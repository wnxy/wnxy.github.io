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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","c26713088d82be937c3704d83b27786c"],["/2017/02/01/hello-world/index.html","1468c85380a0c0cddeadde55e64eb8b1"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","00aa5e1c787cc429548b5b7d3c79ceb7"],["/2019/06/03/Linux-programming-examples/index.html","30aa3aebae22246dec778f06aefbb3db"],["/2019/06/10/Server-basics-and-configuration/index.html","058a512322e04e080eb877a2fdd8a093"],["/2019/07/01/Linux-socket-communication-programming/index.html","7169faafc94201d97ce86330f101528b"],["/2019/10/04/Python-function-call-and-module/index.html","7e43b5204b52407a5fcf7db8d0a753e3"],["/2019/11/02/Python-100-days/index.html","44bb2f267b0896802da67b3698d75f8b"],["/2020/01/10/C-or-C++_dynamic-array/index.html","6cb0eaca2f12787a29265c6533243597"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","a9f27247c17d72b32be0fd390a9571f9"],["/2020/03/20/Jincheng-lanzhou/index.html","b138c071794cd30dd56f5cebc73d3043"],["/2020/03/21/Cumt-aerial/index.html","d22264b12a587a3763bbcf9250c1377a"],["/2020/03/25/Bitree-construction-and-traversal/index.html","82265520d4a349e7dd82fefd74f304a0"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","1c8be8efd9c96fc2ea4fd83ad189e32d"],["/2020/03/27/Stack-application-bracket-matching/index.html","eb1cac4108755693fd18ace32d69f9bf"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","d1ffe16a9a814df8103741c5379b7cb1"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","2aa1aaa4e06422f42017fe99bc297fa5"],["/2020/05/30/School-celebration/index.html","d20cda6325b6cab8c8eac8e4920c261f"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","26ff47702a4a1db72c0122ada3b9e919"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","4a5c69b7a23df97b7a82fda2862921ce"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","be12a9b255ee7620a8ea61b57be114bf"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","ea6919b82fb0c69fd0bbec71c7cda82c"],["/2020/10/09/Python-data-visualization/index.html","50dc9dab931af82a9d0e6df9c738038a"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","c70e7d2da05f694cb8580dafeca6f381"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","c25124babde65ac48a384458ea0bb927"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","bccf676896d59e35a74151994ded28ca"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","01b58ab6ee0f769feb1b137cffac5274"],["/2020/11/02/Data-visualization-matplotlib/index.html","ac974676d04efb168f2066d1f89116fe"],["/2020/11/10/Naive-bayes/index.html","09f5e2b73f257828e10b034b8147da7f"],["/2020/11/28/Matplotlib-function/index.html","65f2e500da9bea4756e2c9b5e4361051"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","328d3103c162142eb70f6e0f6897943e"],["/2021/04/27/Git-usage/index.html","2d0b689891af7906bb0808e2ab5e9c35"],["/2021/05/06/Arithmetic-expression/index.html","75959b96d713f900da2eb5ae1759a52c"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","dc174abc5d153481dbc9f5fb7c71ce5e"],["/2021/06/25/Classic_TopK_problem/index.html","8decc04a49aa65c5b1ef3073df365565"],["/2021/06/27/Calculate_prime_numbers/index.html","df43a9d88473d73120947749f51602a9"],["/2021/06/28/Priority_queue_and_heap/index.html","d25fc5b9792948ac8470309de4a421ea"],["/2021/07/15/cpp_constructor_and_destructor/index.html","3a87d051bf78cc8f2e54e1cbbccc6468"],["/2021/07/17/cpp_file_stream/index.html","c91c926ad8ea84c38625c645950d53ed"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","9e9f5e3da92fdc935e7ca589c36ce7a0"],["/2021/07/22/cpp_this_pointer/index.html","69f7d1283209419fc641c13bf8c596a2"],["/2021/07/26/cpp_algorithm_analysis/index.html","8a01878d9f47754fdc12136844a54332"],["/2021/10/27/Git_common_commands/index.html","f04af4b572ce5759ebad22ad585e6210"],["/2021/11/10/cpp_singleton_pattern/index.html","b9bd31b29e15b57994ba7cb1c85c2443"],["/2021/12/05/Semantic_version_control/index.html","9b8f5b60c8017571e1f8fabb7b78d6f8"],["/2022/01/10/cpp11_default_and_delete/index.html","4aa4b90e54bf8919e1aff7ee5bb8c606"],["/2022/01/10/cpp_constructor_and_assign/index.html","1b194d03421d817b8eb486f37a0e7c49"],["/2022/03/18/Static_and_dynamic_libraries/index.html","9dbc4ab57b395d3d54885106503dc9f8"],["/2022/05/07/cpp_main_function_parameters/index.html","7f9947547c43fa1e92c6be4db7620ea3"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","1623603fd4cef720f5640373e43b0eb4"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","0b6f8e114e5abea0f5f917780c495fca"],["/2022/05/10/leetcode_time_complexity_estimation/index.html","c97cc7f87e5cca28a5a8427257553e61"],["/2022/05/15/Hexo-melody-blog-beautification2/index.html","323c4289f4934459e195a79b885d3634"],["/2022/07/26/cpp_format_string/index.html","5db7fbb2ffda1633955aaf3d4b13c397"],["/2023/04/04/page/index.html","fe0f330e011a92920ccdc0d58a62b724"],["/404.html","648e3167aeaca37e5a3311aba1ec5889"],["/about/index.html","8880aa59312592999d6b1b0306f2c52d"],["/archives/2017/02/index.html","16b6dce86c3f99bab4c2bccbd68a3540"],["/archives/2017/index.html","0f320d13599bb4c75815772913c7cac9"],["/archives/2019/01/index.html","e2eab3350cf55f081fbc796189582212"],["/archives/2019/06/index.html","bf3ca0c7f9fae7370418596559eff3d2"],["/archives/2019/07/index.html","e3fa24e6f912029862dcbd310d10207c"],["/archives/2019/10/index.html","0f8edf3ea95cd8ad79750d8a7ab10fd4"],["/archives/2019/11/index.html","e022d935e987d26ec8f3186b37d5be91"],["/archives/2019/12/index.html","2ea5ff1edd0e5e52e133247996b34398"],["/archives/2019/index.html","d22c8429176ace7bfee32258d3f70312"],["/archives/2020/01/index.html","0bf5ed98cb432305d58430c32225afc3"],["/archives/2020/02/index.html","b1fef6d5682b0699d04e55b61732ed29"],["/archives/2020/03/index.html","4b3322c1e17fe5d806ef3e6d0c40f002"],["/archives/2020/04/index.html","51b2530a640318a848b7ce8fc7987a7b"],["/archives/2020/05/index.html","01156c300139d8c2b7fb0505c98edbd8"],["/archives/2020/06/index.html","086643ea4d53575eed3a37e572dbcea0"],["/archives/2020/07/index.html","c8c94340274cf812a88931c0ba4fd962"],["/archives/2020/08/index.html","eeb6f65686d77367f63c503e43220b83"],["/archives/2020/09/index.html","d0696c1aca6b08024fea03d585695e4f"],["/archives/2020/10/index.html","927d10bd8e6f403f5e8bd790e5b27af6"],["/archives/2020/11/index.html","e2f7ad592b23adea532f067d91f17f7c"],["/archives/2020/index.html","20d534343381ebc7ee58b73a96599c3e"],["/archives/2020/page/2/index.html","97ad30cfd6833256e7988846d5eeba63"],["/archives/2020/page/3/index.html","aeabea5aaa2e2d3efa0864b94c8b548f"],["/archives/2021/03/index.html","6a1b9a6596342b42b83491b1077615fe"],["/archives/2021/04/index.html","fddd9684e7c88eba986d8678809f2df6"],["/archives/2021/05/index.html","2b2e0f5568c61d324cecd9d4bf826707"],["/archives/2021/06/index.html","00980e1767ad08a1129690750ac20e2c"],["/archives/2021/07/index.html","dff000bb629d0c7210fdab3f16850a51"],["/archives/2021/10/index.html","cc86e240e9a9a94ad25908bf1e3b751a"],["/archives/2021/11/index.html","abff80bfb9bf1c87e9acd2a119193e86"],["/archives/2021/12/index.html","b22e4107c65aff9ad9796ae3cf9ce5e1"],["/archives/2021/index.html","7cacdeb71590b914bbe618a464e669c2"],["/archives/2021/page/2/index.html","f20d727d9b4771e7d9030bec5a9c9293"],["/archives/2022/01/index.html","6f28d5b181d5ca050b9406be43a5c114"],["/archives/2022/03/index.html","54654d55239a8eebb3eeaf90df533b39"],["/archives/2022/05/index.html","205b0ea2f716557fa5b4334eedf57d34"],["/archives/2022/07/index.html","5faf7855cf84789ef9c4042fc4fdd4e6"],["/archives/2022/index.html","38b59a7c33c645a40ec1a1227d0093a9"],["/archives/2023/04/index.html","042b57545548076d71215b4c7ac9e801"],["/archives/2023/index.html","9de6ad0e4c78dc47d31073c6467c244b"],["/archives/index.html","b9995e97d1092ffb02f6b57b61750f98"],["/archives/page/2/index.html","7665967c80d5d8e0222a94dc88e29e76"],["/archives/page/3/index.html","f8bd3ac9146792f00a00a08dbfa3a3dd"],["/archives/page/4/index.html","792770254a3e0a6560368441680b8d20"],["/archives/page/5/index.html","b0ba797e3c976be7cb9c95bc5eaec218"],["/archives/page/6/index.html","e5bfee7fd5cbaeea45b1993e9aefd1bf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","0c5d70a0a8bbfa6e863df11d7e0e752c"],["/categories/C-C/index.html","83d4efbdd0702c519bc49f4a9b886a4d"],["/categories/C-C/page/2/index.html","cecb6f628594ccb8dc3bf37cc2515389"],["/categories/C-C/page/3/index.html","d3cf6a09cec895f11f9c486ce9c256c7"],["/categories/GitHub/index.html","08a4d04a1c9e12ee3b38f59343ecd4cf"],["/categories/Linux-学习/index.html","369d3019c0de6d9ad2d3b5cf5b032592"],["/categories/index.html","c76acb1727f707afa0f00226190093ee"],["/categories/博客搭建/index.html","a30eceb5b13c4b8acba6913cd97621fc"],["/categories/学习笔记/LeetCode刷题/index.html","267c6569985a00a9ade81f427c4882c4"],["/categories/学习笔记/Machine-Learning/index.html","e6f81deca368f54d9645fe66a8f6c522"],["/categories/学习笔记/Python/index.html","afe408688d4a7425f9fe55df68dca909"],["/categories/学习笔记/index.html","75cf4ce318dc68c73486389a33cb3fff"],["/categories/学习笔记/page/2/index.html","51752353b2c5acd6d808c1ee81ad7324"],["/categories/转载/index.html","fd032378615a23c8a36c921cbf9f74e4"],["/categories/随笔-杂谈/index.html","336ca2a6e2f193125e5278463cfe0581"],["/clover/index.html","e109b419b5dc3a777335d0d4d41689ef"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","dc00d9d29e07f0f7c4e469255210f413"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","cd18a52dc88e53eb56fd99f6ec84aa69"],["/google85949087cc957523.html","a48f5ac98a177333349ab53cbf00878d"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","5a4acb01216fcdb383a05f120c029e6a"],["/interest/index.html","f8e883843e520e624851ae28910f1bdb"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","a75b360cd5c8d39907cf8f241f2e0afc"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","523cdb510b61ef831ade5cc23a039d09"],["/page/2/index.html","a5ba28f9d7bf98153495b060f4267485"],["/page/3/index.html","c6143e95277c7196725a615ed3ae1853"],["/page/4/index.html","fe869a3cd224b34b57eb73f76c093857"],["/page/5/index.html","b3188afacf1c81fd89648d95785bfc62"],["/page/6/index.html","fcf522402ffa3a19dee4a613914a60ba"],["/tags/Binary/index.html","b3c09da4f8e3ce97d54fc390cba2dca9"],["/tags/C-C/index.html","42ee69499ce228564abeff32def1ba4b"],["/tags/DCLP/index.html","a0162567b7383102c650c4d4c0c2ab08"],["/tags/Disqus/index.html","5603c13f56bb9fd9dacff8acb27fdad8"],["/tags/DisqusJs/index.html","e13621f1a8f58c52ae28e9f6e6a05936"],["/tags/Git/index.html","017d42b5f11ad5844e424d8991a3acbe"],["/tags/Java/index.html","1c69bd6fabb74c10ae6fc5663484bb19"],["/tags/Linux/index.html","8738ad5faa489e7e41b66ec2735fa75f"],["/tags/MNIST/index.html","e332ce8a4f3cff7d3e276005a1c2507e"],["/tags/Machine-Learning/index.html","deca15e3f71518a9df930a513e2521c9"],["/tags/Melody/index.html","29d612985bc598db8dfb024b96fc1a43"],["/tags/Python/index.html","7301786adf19e35b20347325ceff61f3"],["/tags/QT/index.html","efdef3f5cba3a3ebee23a15142a10714"],["/tags/STL/index.html","e4d0bc74bc353a43567f8766bb405efe"],["/tags/Struct模块/index.html","3a6f493498eba8eba9fba178db3ad7e7"],["/tags/Windows/index.html","76ee6b3eb055fc3cdbe227eafb1a8680"],["/tags/define/index.html","a1a4cfb114cf6810367be0f9a77c4aef"],["/tags/github/index.html","b59e17ba621fc02876b454a48fd48e88"],["/tags/hexo/index.html","cacfd3e34b85eed76f1a30731186b340"],["/tags/import/index.html","ec6c01bae0a82ade2031c5016179c4a8"],["/tags/index.html","0170bb70a4b445b90ebfc0801466f5f9"],["/tags/initializer-list/index.html","2415099deeb70c4aae13cc2d46999e5b"],["/tags/main形参/index.html","a3eac22917111f52cbe013528d819ac0"],["/tags/matplotlib/index.html","cf9434c9d0b1888bcb2b2784bca4a4ab"],["/tags/npm/index.html","d675e795bc197213c40daeb704a06d48"],["/tags/priority-queue/index.html","bf6da4e896671419c87f27708d7e6eda"],["/tags/rain杂货/index.html","33535a2397aa5febe96d58b6a8f49035"],["/tags/socket通信/index.html","85f3103122ce79e7fbd38e871196a873"],["/tags/string/index.html","e913c38bd43e6815aeacae47b04883ff"],["/tags/stringstream/index.html","3b02f7fc73720074d6f44dab932d51ff"],["/tags/this指针/index.html","1606f9c4317dde96f23bd487078aa80c"],["/tags/typedef/index.html","2db52ef08ceb17638c8fd3e6e1c43b15"],["/tags/using/index.html","8314e3aa4c439c514f3d8f4485ad73e8"],["/tags/中序表达式/index.html","93946eeaea6c7d5708c483f4204e74eb"],["/tags/二叉树/index.html","b397d95bb67a77ddb098cea21a482f49"],["/tags/二维数组/index.html","32d64782789245a841dff5cca4980d8d"],["/tags/二进制处理/index.html","ac9d679212dca7601bf104b1f4a9198e"],["/tags/优先级队列/index.html","ecfa18db66fad1ac8b5f55c30bd622e0"],["/tags/内联函数/index.html","1d12a96e190c05393940956e50de8dfd"],["/tags/减治法/index.html","4beb1ac5a002ab4294dd1ea0b7ae550e"],["/tags/函数/index.html","447b7b3096ef542cc53e91f89b4560fe"],["/tags/函数图像/index.html","ea8d332b8637022fe509d15bcc889e8b"],["/tags/函数调用/index.html","34cdc333a3022b00e460328acb16e50d"],["/tags/分治法/index.html","38e91e08989152fa2bd9324dde3b4545"],["/tags/前序表达式/index.html","a85e81d9d1720e60e29bbf52c9fdc352"],["/tags/动态库/index.html","84d0c4225231cc80c197d39ed2549cca"],["/tags/动态数组/index.html","32ff6d29292aeacfddb975ddb5b6954b"],["/tags/单例模式/index.html","3a5cacdd5d9255c9fced1bc5961d7b46"],["/tags/单调栈/index.html","7b87036be9c4e281b9125c7d53d7764f"],["/tags/博客美化/index.html","42621eadda874f7d93acae2936e564a3"],["/tags/参数传递/index.html","760d4423513111587e9291c6bd35788f"],["/tags/可变形参/index.html","aef2d371cf971030b9e63f6eacd616fa"],["/tags/右值/index.html","4d72e26239503d30537035655efe19db"],["/tags/后序表达式/index.html","6eb9d32303b6e65967e3fafdec2a72b5"],["/tags/基础/index.html","a07e170216390e2e105963d6f374e7a3"],["/tags/堆/index.html","6a526b479cdb33cddf6c6b7fb290e905"],["/tags/多线程/index.html","1a6d1077144da2f006f265eb6a46799b"],["/tags/字符串/index.html","e3d656597c0735bf71b371dbed69f937"],["/tags/宏/index.html","78264c2007e709eddfbebc3f83bac2de"],["/tags/左值/index.html","c86f43b4394af467fb05da02f4653b53"],["/tags/开源/index.html","f1cd300c8f05d46b967de4bc9a465619"],["/tags/影音视频/index.html","9c5279e2f921149c6bf4fa47319111ca"],["/tags/待办软件/index.html","dab543319748d39e3021371169e25494"],["/tags/成员函数/index.html","271e6658d8731f86e8c1f7e448230d4f"],["/tags/括号匹配/index.html","d6d536f08ae1d2a99cd4135b4b80e4e4"],["/tags/排序/index.html","54c97ed28f663ad79a6dae6d316c629d"],["/tags/数据可视化/index.html","fcbc9f391d18811fa98fb802ac209253"],["/tags/数据解析/index.html","3aaaaab4745f9866e29a21464cf99eb0"],["/tags/文件流/index.html","43d9c67a6a107827e0bf01747842654e"],["/tags/服务器/index.html","9d6c51805f4849016a28d10c6a1d2cc4"],["/tags/朴素贝叶斯/index.html","fcbf67edc1bdf7ac67c2b8d7bcb964f6"],["/tags/机器学习/index.html","1b4bdceb00d67c9aec57970f10c11fcb"],["/tags/构造函数/index.html","7eb36b3175f04797f308944ecc1a1a21"],["/tags/析构函数/index.html","045eb30a39e51634cfcb7cd7169d3518"],["/tags/标准库/index.html","4c9ac4fcb99467e3baf2879e1a0640ee"],["/tags/栈/index.html","828192644f7b88e6fde87a25f525d23d"],["/tags/模块/index.html","4261416f20429d74570e8dff8552bc30"],["/tags/版本控制/index.html","b22568b1ddb45702cbe7af82f5342bf2"],["/tags/电子便签/index.html","cfa802068cf430b726801837c40b054d"],["/tags/省略符形参/index.html","497db2eb7b47c4565ae4ace9a4651a16"],["/tags/神经网络/index.html","a46e5816b9949dd44690bb0cfdd93e7e"],["/tags/程序设计语言原理/index.html","08d9ef54382442e1ad9c41408be4ce8e"],["/tags/算术表达式/index.html","8416b27b040af05d98748b6db9318b7c"],["/tags/算法/index.html","5848b67cf09908171eb6c0c5dae571d6"],["/tags/类/index.html","8b816ec980c65e9ff250fd653b1bd68e"],["/tags/素数/index.html","8358073eafa35e3626ec9f98fc02030d"],["/tags/考研/index.html","d62cbfd5dd8b421cb7fe12493feb4266"],["/tags/莞尔日记/index.html","7fd195263ca1a80bdf03013f531cb702"],["/tags/设计模式/index.html","8b1ef12a67122f5940a3224388212615"],["/tags/赋值运算符/index.html","c4aa7ec123217fc319e08a9c11aa898a"],["/tags/进制转换/index.html","0c1c21826a16c4f729af854f41a0732a"],["/tags/逆波兰式/index.html","68381eda21e3fb5a56559b3ae965e20f"],["/tags/锁机制/index.html","2d2826b98ae56035a27375a6a30963b5"],["/tags/队列/index.html","cf49e24b5ee73cd8f095a9824bfc81ef"],["/tags/隐式内联/index.html","44e25c40d05f90f149a6b211235b26ab"],["/tags/静态库/index.html","b10d10e9aaa5492fe4c05661ec1d7bf0"],["/tags/面向对象/index.html","f53ed42bcffd0bbc2af1731377b7bf57"]];
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




