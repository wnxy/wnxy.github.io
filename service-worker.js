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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","0f06b71ec408da500c5ac9065d5a27a2"],["/2017/02/01/hello-world/index.html","22317b726a45332c42e65ca2c505ee5c"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","294c987fb8257c758a02f7f2674316a5"],["/2019/06/03/Linux-programming-examples/index.html","be24d36f2fdd12793efc7a8110596744"],["/2019/06/10/Server-basics-and-configuration/index.html","caeee4acd7df584a095dc65ec5913035"],["/2019/07/01/Linux-socket-communication-programming/index.html","63dccbffdd17408364e4256a4e6d5800"],["/2019/10/04/Python-function-call-and-module/index.html","471418e6b96a0f30f57f8c035b7aeef1"],["/2019/11/02/Python-100-days/index.html","3b049e53f65476f12aa92f805598c1c7"],["/2020/01/10/C-or-C++_dynamic-array/index.html","7fea5edc7fee2bd65a244bc75c3dd2ea"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","d2c544eed57eb4c1d8936cb43d565965"],["/2020/03/20/Jincheng-lanzhou/index.html","a550049135a23857a2a17aa9ec899d3c"],["/2020/03/21/Cumt-aerial/index.html","e341a0606b50b95968b78dec85f5143a"],["/2020/03/25/Bitree-construction-and-traversal/index.html","b97ad37da554180004b2599470e9c49a"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","620beb1d5b73e7def7ed002f8ca7aa72"],["/2020/03/27/Stack-application-bracket-matching/index.html","e4e66472bcd0b1fede0af83ba89d05e2"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","a1c744590967d8b804876c230b218af2"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","7333299e8e8d43e5f599099fe7b4226e"],["/2020/05/30/School-celebration/index.html","b9e9250ff531a813f3650da28847643a"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","7489354bc1b783a8c26a0a503a60f278"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","1f31a30de04ee02266965d6eb783ed26"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","77ef43c4a4277012882ae4fab7853fc3"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","f7ffd1aa308dbadf13402bfe3d9a6870"],["/2020/10/09/Python-data-visualization/index.html","d91064d15c360f5bd5bc94382d872d9f"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","a5da671a587973557146ec8a8f1365f2"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","923eb37cbbb7e93726da8643dcebdb65"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","ef7e882b110c846336762ed507312b6f"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","d42f970e77659a86efadf96dea401280"],["/2020/11/02/Data-visualization-matplotlib/index.html","fb614bae1d39710270feffcd7d492175"],["/2020/11/10/Naive-bayes/index.html","110d96163251fecb476bb178b7342b62"],["/2020/11/28/Matplotlib-function/index.html","95cce279d659679173a6a116daf5aafc"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","1ad57a4cf6aba0a404f4e5d28dffd347"],["/2021/04/27/Git-usage/index.html","c8f7a6cfbd4d3cedc8440ca2994f9b09"],["/2021/05/06/Arithmetic-expression/index.html","9c3e454a24faffb79318153d267e4979"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","380748a4823eb4ee9ee8642764a5d664"],["/2021/06/25/Classic_TopK_problem/index.html","c8c0c51641623003552e224a0ec7eb66"],["/2021/06/27/Calculate_prime_numbers/index.html","89dbb73c9f61c7c490a2db92740072dd"],["/2021/06/28/Priority_queue_and_heap/index.html","dd96166cb732fd2689b446b2b2002f68"],["/2021/07/15/cpp_constructor_and_destructor/index.html","7e4da6a2ca0a9fdac72367156685126e"],["/2021/07/17/cpp_file_stream/index.html","2dffc1ac77cc19991898e4ffc84a9d0b"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","d15b4a2bd4f3a9392387ada79ced4b81"],["/2021/07/22/cpp_this_pointer/index.html","2c94f2c80072f60543f89229206f380c"],["/2021/07/26/cpp_algorithm_analysis/index.html","7552b81cfb1dcbfc10701864363f4b19"],["/2021/10/27/Git_common_commands/index.html","ec077a933338a536d7310fa6fdd480d0"],["/2021/11/10/cpp_singleton_pattern/index.html","5a9e13e1a60d55c7e2ee7d449a9dc6a5"],["/2021/12/05/Semantic_version_control/index.html","9042ff7ffd5911ca306ba0a8f27be5e3"],["/2022/01/10/cpp11_default_and_delete/index.html","806bd9e411bf66f95c33564dbd1b9b8d"],["/2022/01/10/cpp_constructor_and_assign/index.html","ae45461ce138074ab3ec70dcf230fe12"],["/2022/03/18/Static_and_dynamic_libraries/index.html","ee01ff1695f7cbedb5c801c21747fd0a"],["/2022/05/07/cpp_main_function_parameters/index.html","d09308efab57cf0c750cef3422e28004"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","eb60018a79bf9b0a48e9710c3ce9c9de"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","61b98f727730e851a2891cd0e0c2ff5a"],["/2022/05/10/leetcode_time_complexity_estimation/index.html","11c412da02fad0a54501873c79e828ec"],["/2022/05/15/Hexo-melody-blog-beautification2/index.html","d1a37fe9bb7f6fc817e7ff1efd711f89"],["/404.html","d4234ae8bcf12fe59860a13d2ed45c10"],["/about/index.html","4f6d902b34e3000f22713e181d4ad1ee"],["/archives/2017/02/index.html","513e2508bf65234b48a40336c5584eff"],["/archives/2017/index.html","b07540a0aa317dab526958a40e6e7489"],["/archives/2019/01/index.html","d6dadb7ddf3702cc075752f4edf4ee96"],["/archives/2019/06/index.html","5f31f51f96abc04c459658047a06e037"],["/archives/2019/07/index.html","e236c33a327ec77704f5093e845048fb"],["/archives/2019/10/index.html","6f5760cba89ea16687f8c0de764206d2"],["/archives/2019/11/index.html","82e3c0ca93fe173fd428ba91a20e7579"],["/archives/2019/12/index.html","f1a15c8c6b440c37ef4d8b84d88f0ee6"],["/archives/2019/index.html","e02d9c3acb9ac546b737eb608334fbbd"],["/archives/2020/01/index.html","3566c614f8db06e890d6622c06a234b3"],["/archives/2020/02/index.html","ae98bb7ca3c0c16280109c940309662c"],["/archives/2020/03/index.html","3d4d6ebd711cb189ea0a60dc3b7cf135"],["/archives/2020/04/index.html","4257515508899d1434d368c12ed5df83"],["/archives/2020/05/index.html","3be81052fabb43101238ffc4864ff8ec"],["/archives/2020/06/index.html","5eb33cc1e01a4b568c6ca173f8ca1215"],["/archives/2020/07/index.html","b682d04f67f45adba0d9e20ea16608ab"],["/archives/2020/08/index.html","8c34f9005295366b3605aa54ac32c63e"],["/archives/2020/09/index.html","57e4655ee92a73e773abc7cb262315f5"],["/archives/2020/10/index.html","66598b071155e6e2f35c6683c9dd3b91"],["/archives/2020/11/index.html","c1b23cc1e53a31b9c6923532ebdefb1d"],["/archives/2020/index.html","307244453a69b8f2cc57fc8294505404"],["/archives/2020/page/2/index.html","ffb686471d0458aa2f7c7cae89431c9d"],["/archives/2020/page/3/index.html","4ea1e58b397c5e79eacfa641a9f59227"],["/archives/2021/03/index.html","95bb589abf118094fc6c4351039fe625"],["/archives/2021/04/index.html","6fe0ce51acf1e8ed8f4e6365622209df"],["/archives/2021/05/index.html","6cf195bf35d348b41ed7fdb44206f4f3"],["/archives/2021/06/index.html","ccf915c7c056a1d62fd5401a1bca45fb"],["/archives/2021/07/index.html","354140250402e334fa8b98fbf5e6d7e4"],["/archives/2021/10/index.html","704c3f1387d783b30274f145a44c0e80"],["/archives/2021/11/index.html","409298f23aa89abde192f6dd3aaa9557"],["/archives/2021/12/index.html","b4946b513d108a5fa9b0ebaaf4455cf1"],["/archives/2021/index.html","12b7379a660db40df277bcca60b35f6d"],["/archives/2021/page/2/index.html","9827a5e000e7d745b414725163eb4885"],["/archives/2022/01/index.html","590b3b294b7866f9e92e8a83f96cf7b6"],["/archives/2022/03/index.html","8d1435a8a188dd86ff6ce6f24646d7a2"],["/archives/2022/05/index.html","90abbc63f4ab236ff2161e5a66d8ff8e"],["/archives/2022/index.html","2b95a595d418fddc2750ab349c11f72b"],["/archives/index.html","128abcc1a9166427aedf21115768966a"],["/archives/page/2/index.html","b0af0387c35def541a3743d42b4982f7"],["/archives/page/3/index.html","c822eb86a7e79e058a82d95b3926623d"],["/archives/page/4/index.html","74ebcbe69af98d91dbf432f66a92569b"],["/archives/page/5/index.html","ee40da2ea80925dba44006ff0bd52fee"],["/archives/page/6/index.html","6ef1459282fafe4f9f2b94e6b36279e8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","5e4c714b40a5febe27b3c90b469534f4"],["/categories/C-C/index.html","f54ae33ebfae1ad8d5a70c09ef1e15dc"],["/categories/C-C/page/2/index.html","4f7b686622e11ccdcff2c1a5c31b7a9b"],["/categories/GitHub/index.html","9705d70e85e62101400254feba5181da"],["/categories/Linux-学习/index.html","34ad5fd49ccb85f5415a3e4f0b1df9a3"],["/categories/index.html","6b686d1497d24d8326e069f9740024e3"],["/categories/博客搭建/index.html","a84a50fe8fdb2565b91de4c2c7be345f"],["/categories/学习笔记/LeetCode刷题/index.html","71be736eb3eb14f604ad339f033c4f06"],["/categories/学习笔记/Machine-Learning/index.html","c81586e1887d380dcd59984157ee6821"],["/categories/学习笔记/Python/index.html","b691794b981e04871fe5361e9dbae137"],["/categories/学习笔记/index.html","337ff96cfff8013fd9fee2ed75fc373b"],["/categories/学习笔记/page/2/index.html","d2fc989c57e0aa188da516b9af8bc42a"],["/categories/转载/index.html","f59d4009c581b92515a909af05a21877"],["/categories/随笔-杂谈/index.html","da32d4c0e4c04c4d8c39da0f108ea8c9"],["/clover/index.html","0cbbbbc674ff170437e2bfca69081d07"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","d9267b09dcab97387c5470e33c4a86ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","85501f7526aaaee1f4aba603b01406e1"],["/google85949087cc957523.html","a71faa3091b0a208d73b3c61830f845c"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","14880c120372c2cc2dbe154309b940e1"],["/interest/index.html","9d17c73287c9f9d72e8afff1e07e9ad8"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","d0c07059b6ce8fb0baa7d52c1fa62133"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","5fe1063802a93e274f9d76ec73fc6084"],["/page/2/index.html","bfef64d868e9ad0c020df7974cbbd81e"],["/page/3/index.html","dd9462dd937616350042986ec6d3d87a"],["/page/4/index.html","bcf505f7d1a7c43d29bdecc94726b960"],["/page/5/index.html","9936a62b07f89d14a14695e3e8b21d14"],["/page/6/index.html","1ee41ae21aeb455cb7c9289e0a667ca0"],["/tags/Binary/index.html","d6dbcc03a002514e1c074f468ff88a52"],["/tags/C-C/index.html","da547328f540ef166d7eff854af972fc"],["/tags/DCLP/index.html","f7877c9974b6a852ac75527f296473e3"],["/tags/Disqus/index.html","6c684d5a321d8cd2897bcf60a4bd3762"],["/tags/DisqusJs/index.html","94d4f97fce5e4d527fb4cee2e873098d"],["/tags/Git/index.html","6bddcdddb54a48a28acbc30cdba2f439"],["/tags/Java/index.html","dba2812f07beb02170687d24c08ec41d"],["/tags/Linux/index.html","f6f9fff0ad23d43d2a025e603198cee2"],["/tags/MNIST/index.html","ac47832ee3e566656294b656ea91af8a"],["/tags/Machine-Learning/index.html","2a7c939e8bada966b52c9782c136387d"],["/tags/Melody/index.html","396a2755c59293180e18f18f623cbfab"],["/tags/Python/index.html","367bc17eaaa61eec16e76656971b0a35"],["/tags/STL/index.html","df6a922223daea5a1695bdb7998a8651"],["/tags/Struct模块/index.html","714a96c377ee7fa87cb1832b3b59860b"],["/tags/Windows/index.html","4453fb0498ad4e2b0e2089a363ec41b5"],["/tags/define/index.html","c24cd2474a938092a12e5a4a96c180ef"],["/tags/github/index.html","96083f04abde86076df4ea1b870fbbac"],["/tags/hexo/index.html","c3965e5bf397268afc9871600514833f"],["/tags/import/index.html","a8fd72a49a48ea42f70ad9cb9a207f52"],["/tags/index.html","518b2354c9bd0ee36a099cda835af086"],["/tags/initializer-list/index.html","abe47bab8a1408a32407cbeeaeb236ff"],["/tags/main形参/index.html","d08803e09ab39069ce0b73fdda967a83"],["/tags/matplotlib/index.html","4413a817b8337bbdfcacc14a201665b7"],["/tags/npm/index.html","b94e62e7ce68265dc5b5a6db20d46b53"],["/tags/priority-queue/index.html","e09ed732811a19a77ea800f8d3ff8b59"],["/tags/rain杂货/index.html","bb07df2eab694b8db3df2dc2ec01f5a3"],["/tags/socket通信/index.html","1c88b281102de22512c65a1fce0f961f"],["/tags/this指针/index.html","8a2a52e23106df93bfb362eb86c2ce3c"],["/tags/typedef/index.html","0cc1a7e321bc9f6a2efd247c6f210072"],["/tags/using/index.html","829369ad8c84bc9c34f6de611ca4abc6"],["/tags/中序表达式/index.html","c853f33d3e6466f42545987725b7087d"],["/tags/二叉树/index.html","9fde887ce08c0910e0ba6c777ee00b6a"],["/tags/二维数组/index.html","1d50d72b4e3aa612849985418a66ecb1"],["/tags/二进制处理/index.html","b9eb9e55a97ad9b8dab5c9461565b308"],["/tags/优先级队列/index.html","a71d5910609a307fe27f7df46b375e61"],["/tags/内联函数/index.html","9abe4ee4115941b053e2066e817a41f7"],["/tags/减治法/index.html","961adb4347b12ac311626ec1e70e6ff4"],["/tags/函数/index.html","b13372ee3b2ed9901817212c5ccecb6a"],["/tags/函数图像/index.html","2509e5d2f9e611a3ec86ef771195debb"],["/tags/函数调用/index.html","f669acbfb83ab4e0ad2416e3e8485ed6"],["/tags/分治法/index.html","6dea518f92413cf1b6ae6aa9f0cc56a0"],["/tags/前序表达式/index.html","d46b2f6b4d9b95023ca71f2123bd46e1"],["/tags/动态库/index.html","c0e758054ba69c57e6f03d96e36cea8a"],["/tags/动态数组/index.html","e44d4cde5494fbf913e2667a5bdf1aac"],["/tags/单例模式/index.html","caabcd7c88cc7a42b98951db80a2379e"],["/tags/单调栈/index.html","d9219dbc0e2238d4daae7e4b179db038"],["/tags/博客美化/index.html","7c685eff3e1185d0349869f1e4b2977c"],["/tags/参数传递/index.html","fa54daf93568d2e269c746d5fc477a61"],["/tags/可变形参/index.html","9cf49124e50f759211dfdfd6a2bbf080"],["/tags/右值/index.html","12bf1d695842899000dcaa1d2b026b62"],["/tags/后序表达式/index.html","681015f7a273c3c0a9412b4f74278a83"],["/tags/基础/index.html","12c73a0a0f087621bf223fda49b12657"],["/tags/堆/index.html","3a2cd839fd39a89b74132d51dc73b77f"],["/tags/多线程/index.html","8b6b4266cb6df43e2ddf8cf5638ceaaf"],["/tags/宏/index.html","b4b4ce50178c90e7c625f08b42922464"],["/tags/左值/index.html","201796f26100afd4be3e240861cb270f"],["/tags/开源/index.html","5f417d829bd012ac786983de0108dfec"],["/tags/影音视频/index.html","d76715fe8f3ac9eeb807b71a04834d92"],["/tags/成员函数/index.html","23e048e70f59f4a49d277ea7f36af473"],["/tags/括号匹配/index.html","283b567dad3d97caebbd2667d7dc3ec3"],["/tags/排序/index.html","802a2ce0bbe0609b4478fd5772e814e5"],["/tags/数据可视化/index.html","6b79fbe16c93e536dced5c0f21b32b4a"],["/tags/数据解析/index.html","db596bf0814bbbf7b32eddef60a3fe85"],["/tags/文件流/index.html","7a3a35be7459388af039c26ed61eea9a"],["/tags/服务器/index.html","0abb4c15c3d7d43364f1a4062f88c6be"],["/tags/朴素贝叶斯/index.html","f0a35663c46191224cc4829f2673bccb"],["/tags/机器学习/index.html","668016453f246c62e7daeeeafade1f6b"],["/tags/构造函数/index.html","531d423ee61befb43f6dca6479038c00"],["/tags/析构函数/index.html","7dfaaf70734407ed3e3106679c56209d"],["/tags/标准库/index.html","86ffc5cbea41f4a0e0dc61862d7be434"],["/tags/栈/index.html","8c4c7bc90735079ccf898e96953654ed"],["/tags/模块/index.html","82f4bee103ed4b945c9965ec2b13c207"],["/tags/版本控制/index.html","50c5dc1b042f1fe523a96d060b99d41a"],["/tags/省略符形参/index.html","1bb3aa2e8d07661e11db58829b949c41"],["/tags/神经网络/index.html","09da1118b27875e1525b0b92c27df0d4"],["/tags/程序设计语言原理/index.html","50624359ca011647fd80902426185a2b"],["/tags/算术表达式/index.html","f509141c3bbfeb517851d9eaccb76669"],["/tags/算法/index.html","64c54f71dccb30ab372791a9230cd8e6"],["/tags/类/index.html","d233b19b0c46b66d651cabe5c9c2f184"],["/tags/素数/index.html","354731d57becedbc7b73e19b61798c3f"],["/tags/考研/index.html","fcf2be316d8617ee800b005f28146d8c"],["/tags/莞尔日记/index.html","2caf04b51094640d88eff6af7d142311"],["/tags/设计模式/index.html","c73d3eb06f10a386b1816f4e09473856"],["/tags/赋值运算符/index.html","3df32e1a48b5c21426ecac6792658160"],["/tags/进制转换/index.html","d3f75abbe51d4d0931f358f07ba4e749"],["/tags/逆波兰式/index.html","83b05595a31d41c0034d235940ba0861"],["/tags/锁机制/index.html","c01c8f1be6bb021dc830bda17cf92de3"],["/tags/队列/index.html","e4145051a46c184393a90ddb36467bc7"],["/tags/隐式内联/index.html","32a188ef858de2dd6298c3f27a03f039"],["/tags/静态库/index.html","bf2d981bbea3338dc4902a4b71469569"],["/tags/面向对象/index.html","9c6f6f3b76fd0de7dc127a34a29275f7"]];
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




