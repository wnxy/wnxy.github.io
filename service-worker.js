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

var precacheConfig = [["/2017/02/01/Begin-Hexo/index.html","28f391b8aaf20ede5951c090c2b7303c"],["/2017/02/01/hello-world/index.html","9cb330f03136359507eeb3d0457f8664"],["/2019/01/01/Disadvantages-and-problems-of-object-oriented-languages/index.html","95f9fd864733c386dd49d301bfa04a59"],["/2019/06/03/Linux-programming-examples/index.html","7e9fdf65d3a94e9c74bcc61801587ea0"],["/2019/06/10/Server-basics-and-configuration/index.html","9c8fe3a72399b4057c68b7f7faf836b2"],["/2019/07/01/Linux-socket-communication-programming/index.html","0efed01f2300d10aa750dd08b2f7bfef"],["/2019/10/04/Python-function-call-and-module/index.html","6de12d019818a4067f30dc7767afa576"],["/2019/11/02/Python-100-days/index.html","ab71a5c956f752ace810474ce72c435a"],["/2020/01/10/C-or-C++_dynamic-array/index.html","5aeb17d164e0091e1cfd4ad853bedc6d"],["/2020/02/10/C++_decimal-and-binary-conversion/index.html","3b7e7032bc9d135e0d63e85aab922585"],["/2020/03/20/Jincheng-lanzhou/index.html","d8700bdcac5606b08db354c8d3801614"],["/2020/03/21/Cumt-aerial/index.html","3a6840347418396b4a54e5107583003e"],["/2020/03/25/Bitree-construction-and-traversal/index.html","fb9569fd022e561287c877df84f8cee9"],["/2020/03/26/Definition-and-use-of-stacks-and-queues/index.html","6c933a1894eb5e5bb093242e94ed44d8"],["/2020/03/27/Stack-application-bracket-matching/index.html","cf5c70599cf4694a08beb66006e26791"],["/2020/04/29/Development-document-of-vehicle-trajectory-tracking-system/index.html","de960439213b2c9cfabf27f3e4235f9f"],["/2020/05/01/C-or-C++_two-dimensional-array-parameter-transfer/index.html","14e697b42565f9e55f3572189b6005ff"],["/2020/05/30/School-celebration/index.html","99370b595b422e14d2a7a2457c917cc5"],["/2020/06/22/Graduation-season-Time-at-No.1-University-Road/index.html","40650d62fc699f9b34bd2c0c9b6020b5"],["/2020/07/20/github-readme-stats-Make-a-personalized-GitHub-profile-page/index.html","7522b0ba994832f009723cddf41c568c"],["/2020/08/11/Starlight-lives-up-to-the-traveler/index.html","e2be437a5e8de4083912011b523a77e5"],["/2020/09/19/Hexo-melody-blog-beautification1/index.html","e56ce78087fb1d870397687a993cda00"],["/2020/10/09/Python-data-visualization/index.html","70aa43ce5b50a26204dc47d2487b5871"],["/2020/10/11/Machine-learning-logistic-regression-algorithm/index.html","d571d8e32c923fcc384cb600e4d6fa66"],["/2020/10/17/Daily-usage-of-Struct-module-in-Python/index.html","acf219f34e065a5b1f09b299b9ebae27"],["/2020/10/18/Data-analysis-of-MNIST-handwritten-character-set/index.html","b6e7b5eaafb37e9799c2f1be81e88c8f"],["/2020/10/25/Neural-networks-realizes-MNIST-handwriting-recognition/index.html","8c05b5ee7f00511d8a73a2bd9a96f5f3"],["/2020/11/02/Data-visualization-matplotlib/index.html","bed1b10b31c0acc52eaa7296a3df954e"],["/2020/11/10/Naive-bayes/index.html","2c9750f5228ae6dd5aa3bbe9b4971e94"],["/2020/11/28/Matplotlib-function/index.html","8e4d02f80cdae6b9c594385f46d451cd"],["/2021/03/17/C-typedef-and-define-specific-explain/index.html","798f237dc10fdbc5ce6ddf1965195172"],["/2021/04/27/Git-usage/index.html","f69decba8ac04e41c8e4101e1e0cbeee"],["/2021/05/06/Arithmetic-expression/index.html","fc429e051ae3288c75aadb5b6f6bc34b"],["/2021/05/08/Understanding-and-use-of-monotone-stack/index.html","66faf6f845b9ff64e4317683c963cf5b"],["/2021/06/25/Classic_TopK_problem/index.html","d3f502da0bdc75dc6185161d3da8ce21"],["/2021/06/27/Calculate_prime_numbers/index.html","859c7605afa5e0f639d4ff16f603a472"],["/2021/06/28/Priority_queue_and_heap/index.html","2bd5557ea00cc4ab17b10566c2f7566a"],["/2021/07/15/cpp_constructor_and_destructor/index.html","13074ccf1f26e4a4816f518f94668562"],["/2021/07/17/cpp_file_stream/index.html","882529594c1763cc1635806618b01587"],["/2021/07/20/cpp_leftvalue_and_rightvalue/index.html","ba01e4b315ff6efdb0b5f82ed1ad3e25"],["/2021/07/22/cpp_this_pointer/index.html","75cdc332725442253b4d218797fe8b59"],["/2021/07/26/cpp_algorithm_analysis/index.html","d80258eb3693c25bc001d5ec26878dd8"],["/2021/10/27/Git_common_commands/index.html","cffd3943ca79e3e8069c4947bf52736c"],["/2021/11/10/cpp_singleton_pattern/index.html","d11f0ae00a3d0a0ed1ec3bb9cee4ce8c"],["/2021/12/05/Semantic_version_control/index.html","1ff331a08d260140d3b00f26fb1252d4"],["/2022/01/10/cpp11_default_and_delete/index.html","597fe0b2cdbe7631a9123e5eef9642dd"],["/2022/01/10/cpp_constructor_and_assign/index.html","a497685bd07d94108ee01667a68fe964"],["/2022/03/18/Static_and_dynamic_libraries/index.html","bbd8b3eaf3aae929599af91291f2dc94"],["/2022/05/07/cpp_main_function_parameters/index.html","55a746e89909466436173c8661fc0377"],["/2022/05/09/cpp_func_with_variable_parameters/index.html","6258e8dcc288c9da0bed973f3cd1228d"],["/2022/05/10/cpp_class_mem_func_and_inline_func/index.html","150aef979bb7ba322150c35d675ef52b"],["/2022/05/10/leetcode_time_complexity_estimation/index.html","5a3a8c70c98cc95f3ebd620660d75f67"],["/2022/05/15/Hexo-melody-blog-beautification2/index.html","a8a540fac406d0ff07db3620ff735087"],["/2022/07/26/cpp_format_string/index.html","48265734a4b7280f231afee63ba8a15a"],["/404.html","648e3167aeaca37e5a3311aba1ec5889"],["/about/index.html","93af374bfb073b7f7201db548f5a994e"],["/archives/2017/02/index.html","260c71beeea55a72b8c337b8f05912da"],["/archives/2017/index.html","14f1ac8f08db48e4a84f0dfe0c73cd56"],["/archives/2019/01/index.html","85119d1406c2e21fd2869da3b8c29e08"],["/archives/2019/06/index.html","10337c411a5a77e450a126d489033f3f"],["/archives/2019/07/index.html","1203f0f835844dae171eacaada6c7d78"],["/archives/2019/10/index.html","d7772540df2507cb035f9b841ade94a9"],["/archives/2019/11/index.html","9619beabe22e567220c35ed54ddd1660"],["/archives/2019/12/index.html","f0111cab81363d5fc3f2fc2d2953e00c"],["/archives/2019/index.html","4537d6f2bedbfc33ff9f2afbfc5551f9"],["/archives/2020/01/index.html","d10b7f88063b1b23fb6234c114be3504"],["/archives/2020/02/index.html","572c5753924d896509a2f6758b7fa56a"],["/archives/2020/03/index.html","997be7ef7dbf44e7c154f8bddf3c1995"],["/archives/2020/04/index.html","29cf10bb67e2ba04dced8a6483c1bc6a"],["/archives/2020/05/index.html","bfda65356efae834ba01cf3cf7110db4"],["/archives/2020/06/index.html","3023add13f13afa364406184160da88f"],["/archives/2020/07/index.html","4ff73ea4fa9217f131626f76820b029d"],["/archives/2020/08/index.html","f6c44166881d0da96e16e7232bc4f325"],["/archives/2020/09/index.html","8251b6240a07bc7c9686e0f1d171f630"],["/archives/2020/10/index.html","5c973e4fa8af28ec0e898df234190592"],["/archives/2020/11/index.html","862b4a42695c5bffaf7471503b266306"],["/archives/2020/index.html","fdfa1d7ed52f56e94c022aba394e7555"],["/archives/2020/page/2/index.html","f2c5af87504ef52df92e588f0d9d60e6"],["/archives/2020/page/3/index.html","de2e56787f7900554ae5143157d2332c"],["/archives/2021/03/index.html","c43639c34339901e825681985b4d53ae"],["/archives/2021/04/index.html","8dc51cccd24d9b3024cb357802479a48"],["/archives/2021/05/index.html","155de5da9452e0ff2f20bb6b9e1ec36c"],["/archives/2021/06/index.html","a4bb17211d5f625c5a9a23fd565facdd"],["/archives/2021/07/index.html","f89db1e6180c6192e837c8993b37849b"],["/archives/2021/10/index.html","47002f127ea4026dba6127458d752aa9"],["/archives/2021/11/index.html","6682e193ea62c439604bb2bae76b35bd"],["/archives/2021/12/index.html","6ca33b88d51faa195a21f1165de96c43"],["/archives/2021/index.html","628a076faf4730871e548ea150a63933"],["/archives/2021/page/2/index.html","0d0e1d68965d890875f37be1413811c5"],["/archives/2022/01/index.html","577b9ce8f10204453ad508a50e2e3c1a"],["/archives/2022/03/index.html","2d557b8b0f93462f45c6c3266077c061"],["/archives/2022/05/index.html","4c37c464dcbaa48ad731d5e0ea1fd593"],["/archives/2022/07/index.html","ad3add8d1581d8219f7f0ff0a6b555ec"],["/archives/2022/index.html","38caeed70caaeaf6fad6b523a5f00713"],["/archives/index.html","6a247d60cc4ab34de399501995024cda"],["/archives/page/2/index.html","2dc0fd626ea439c2533512d561844e30"],["/archives/page/3/index.html","6b01a3bc9e495ec7143bd11a250b8eb9"],["/archives/page/4/index.html","dfd7fb847a7314e7b6df39a3068b230f"],["/archives/page/5/index.html","79e0b3af7b207e7045086aca3c1216b3"],["/archives/page/6/index.html","f085ba32151d300a039ae5da9b2e3a0d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-CXwMRRtRRZ.html","179cdf77ee8ef36e6f2a769857c52f69"],["/categories/C-C/index.html","e7f9c6e6d85fa3af36cebad93cd49a5b"],["/categories/C-C/page/2/index.html","5ad982a0d69b033b8aa992aa7df26005"],["/categories/GitHub/index.html","f0c8127e01ec89b0d06ed4a0824fd138"],["/categories/Linux-学习/index.html","0ce28dc890c48ffaf183b50fa0960ad4"],["/categories/index.html","4075259a1f28266b9ea7d0c09950f97e"],["/categories/博客搭建/index.html","aaef5b3d5d60992ce6c5f0c38bf4c294"],["/categories/学习笔记/LeetCode刷题/index.html","1f0c1ff9a09330cf9432b67e8074651b"],["/categories/学习笔记/Machine-Learning/index.html","2c5aea40aa143eed05cb7bb85fc97b63"],["/categories/学习笔记/Python/index.html","daf711a11582720168a603dcc6b71130"],["/categories/学习笔记/index.html","1ce2a1282de9f98eee391548e1a6356a"],["/categories/学习笔记/page/2/index.html","5e63b02e64b46bb2bf1dc825063ea928"],["/categories/转载/index.html","f907d40e4870716f0798e68892778935"],["/categories/随笔-杂谈/index.html","13c36019791a890cb79973c4bca934f6"],["/clover/index.html","761e848f24026e24614ef6df01f26f27"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","dc00d9d29e07f0f7c4e469255210f413"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ab00d6eff8fb771795526c118909678e"],["/google85949087cc957523.html","fad47476ab8ec99475f77fad58037b98"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/header_ava.png","b3f134d3f2fc59eb561c078af2393b69"],["/index.html","2210655b22a5d0f8231474ca4a643317"],["/interest/index.html","de2ca3677d153b3c06162f98914a08f6"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/crash_cheat.js","5a61c1a84ab1ea21f0abe71971d59186"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/links/index.html","1a70666beeb398ebc57fae9bc34a4f20"],["/loading.gif","1dc5cf6d1e46017bfef7b5788c6d7550"],["/message/index.html","b64c2fb95fe07848b8a7321dac6714fe"],["/page/2/index.html","300b97cd13ea3df1699dc928043a933b"],["/page/3/index.html","ab2c45869d6113af198e1524fec1954e"],["/page/4/index.html","6530446b788ad74df05b7d550a774a9c"],["/page/5/index.html","2869912e37686cd3c3e363ac47000cd0"],["/page/6/index.html","c14f2fef6da54caffbe6658983ae8ce8"],["/tags/Binary/index.html","8c123e3822e7804b8ceaa0ec387b6c98"],["/tags/C-C/index.html","6e831d13c3bddc72559548a502f9fa0e"],["/tags/DCLP/index.html","46c8eda120218f06d2d8f0dbe60301c5"],["/tags/Disqus/index.html","f29bd949c8b61c35ad4dea31b8892224"],["/tags/DisqusJs/index.html","42894320263d10a765237eec5331f998"],["/tags/Git/index.html","813212c6c0affa0d4149f53e2fea81c3"],["/tags/Java/index.html","7fc5b0f12e5c28cf1eec8efbd78406bc"],["/tags/Linux/index.html","92d3b9ffbd7f62efbff98c1e6980cb8c"],["/tags/MNIST/index.html","00c7c5adb57accaecf2b1083a87e8640"],["/tags/Machine-Learning/index.html","d53f967fbd7ab86f5cc27d9afb993f6b"],["/tags/Melody/index.html","b70cfbd22c5c5bf3785430ccc37f6e70"],["/tags/Python/index.html","8b00516a20d591c11e4e5194e2cbf79b"],["/tags/STL/index.html","14e6af98915a35e56be9fcc5c4a1a4e9"],["/tags/Struct模块/index.html","61ddffbb973cdbb13f6b28fe748acdc9"],["/tags/Windows/index.html","23f5ecc16b2a4435c0d4dcd40c5db7ca"],["/tags/define/index.html","afdebc575faf763d5063c2b66b02d026"],["/tags/github/index.html","7e33e044b71273c3d6e8709fb44b67f8"],["/tags/hexo/index.html","2679b5f3664eb400c8eef59492ed219a"],["/tags/import/index.html","c31c6b81f41a15134db65911c650f6ad"],["/tags/index.html","a357e2325f4ecfedf912248888f2f61a"],["/tags/initializer-list/index.html","9ebe9ae00a0010333bc8b7cc01e12aeb"],["/tags/main形参/index.html","6202855071c96f34b9d5d91d314f026c"],["/tags/matplotlib/index.html","d063b30f60075f0913386d591e717f42"],["/tags/npm/index.html","702bfdd476950fa294cab0eef780bba2"],["/tags/priority-queue/index.html","648838486a6808c32b6ae020bf7f314a"],["/tags/rain杂货/index.html","06926a38e24de18729109d254f08f9ad"],["/tags/socket通信/index.html","9c2682f76edebc29a292a6e55a6a424d"],["/tags/string/index.html","b3677a7dc8481951db8db3f631a3ff61"],["/tags/stringstream/index.html","61c4d0286cf215630152046a8b1f871c"],["/tags/this指针/index.html","fe7fb488b636ee7579a82056c9127b8c"],["/tags/typedef/index.html","8ad82c0cd24a473b2a3cee9daee948d0"],["/tags/using/index.html","258440dc95f9bcb07d9573c00bb351fa"],["/tags/中序表达式/index.html","95de49952d84050d7e5f97a38b6ff976"],["/tags/二叉树/index.html","e75072f600561d0d4d6a465bb86d8cf1"],["/tags/二维数组/index.html","2fa784e102b4a3ec0167f526bdadbbd0"],["/tags/二进制处理/index.html","f7bdc4f330952880c4addf65bd02e53b"],["/tags/优先级队列/index.html","d91b92d34dc2138fca273d9456464f28"],["/tags/内联函数/index.html","1f5eb2620eeb5166eaab8f4e62a839ab"],["/tags/减治法/index.html","f9ea10ed14aeffa86caee4fabf80c76b"],["/tags/函数/index.html","768a502be1b672ec113de65c3c132f8a"],["/tags/函数图像/index.html","e6ec39425634aa9e1de66fa152f3079f"],["/tags/函数调用/index.html","046ed193406fd0339045ca32f2b45906"],["/tags/分治法/index.html","3f7ca29f7e68d25d90186e5c153e35b7"],["/tags/前序表达式/index.html","1870ca9ff438b5b5562a50a8307f1542"],["/tags/动态库/index.html","fe41f73b4f4c7ed2b5b1255878dac781"],["/tags/动态数组/index.html","2eb69dc4cc97a78f796f411afde98479"],["/tags/单例模式/index.html","335884212e061050f82b90867fdab58c"],["/tags/单调栈/index.html","ba812aa85ffaa147281e9689fd921393"],["/tags/博客美化/index.html","4e6fe3689ba9197fc048980dbd578b2f"],["/tags/参数传递/index.html","fa222682c4ac1b7e9c74bd1ed052a46c"],["/tags/可变形参/index.html","e77a1ede24b4d69022130c98ed37993a"],["/tags/右值/index.html","582bb70ab9b9ab2f7e33065b36f654f4"],["/tags/后序表达式/index.html","ae0b24f18e049619be31ee8bcd1d97ad"],["/tags/基础/index.html","d7b7208c0e8d90a64b303e0013075b7d"],["/tags/堆/index.html","c1a2beb4c9bd87c8488d38a9c179e9aa"],["/tags/多线程/index.html","1b90238858edfab1c5d9d0403c9a9c8a"],["/tags/字符串/index.html","3343cfd32275946f6af3d2d27391dff9"],["/tags/宏/index.html","2907af13b7b4cf15901cda59a4296759"],["/tags/左值/index.html","82a5632fa407b6bb931e5fa8c79a193f"],["/tags/开源/index.html","97849e438b51230f23625e186733d754"],["/tags/影音视频/index.html","0930644f676c4aac81787b540478bf6b"],["/tags/成员函数/index.html","eed153592e4916ee2b1f3a2a82086076"],["/tags/括号匹配/index.html","ca4c3fdfd01766c505eac5c1382945da"],["/tags/排序/index.html","4fae350a1e50676e46573d026cec6127"],["/tags/数据可视化/index.html","84cd0890fd51ae27bc8adbd45e745476"],["/tags/数据解析/index.html","14955a4c830158103633e580bce0984a"],["/tags/文件流/index.html","6664671bc59c1ef804f93ddb6ce6e7c3"],["/tags/服务器/index.html","598322b0ae19eb2d3842a07a3afe124c"],["/tags/朴素贝叶斯/index.html","03c47635132b9d4bbbe2c9070862b10e"],["/tags/机器学习/index.html","39c79c301df0fff51198d885210745ce"],["/tags/构造函数/index.html","26914ce2972730f7cd1317b678a9ff10"],["/tags/析构函数/index.html","e9fd96b9abb9cde25e881576a62531ec"],["/tags/标准库/index.html","c3069009ef658e60c30effd3285613b1"],["/tags/栈/index.html","d89290478b53f94258f07aaf5ce9a493"],["/tags/模块/index.html","fcf789160ab5dcf9719b06ac30d40ce6"],["/tags/版本控制/index.html","583ff4c69c827854fa3e4209755ff823"],["/tags/省略符形参/index.html","81af540133da8b1dbbb4d6e69a43bc52"],["/tags/神经网络/index.html","26e98a19d3800ede03fff68989dc0467"],["/tags/程序设计语言原理/index.html","4a52262770ee0a54030fe881428f50eb"],["/tags/算术表达式/index.html","49d2a45bb8b90e48f09a13cdbdf4ef39"],["/tags/算法/index.html","d49d2c9ab89f097127855328c28b92ca"],["/tags/类/index.html","8e1dc2e3b44b5a204c632e7ea821eba7"],["/tags/素数/index.html","2dc3a4ba26748bdb5cac471936287869"],["/tags/考研/index.html","2a8de6158cbd644daae613c6008b1c6b"],["/tags/莞尔日记/index.html","49e0e30538b7f5d9bef2c0ee87c7b571"],["/tags/设计模式/index.html","958d69ac8a94105dba67b8a2c66af412"],["/tags/赋值运算符/index.html","5792e966d0959ec1651c81281b44b485"],["/tags/进制转换/index.html","424a69206cb60baede9fa77a6c7edee1"],["/tags/逆波兰式/index.html","76930c2c4586486a341d53ce9ec67b31"],["/tags/锁机制/index.html","0cc6d4f630558489c5a4a980fda4ffe4"],["/tags/队列/index.html","1ed846d00a7f23252644f1c97ecdca2b"],["/tags/隐式内联/index.html","b8ee4019e3f2c1db9b2d771b13f43cf2"],["/tags/静态库/index.html","7852a7fb5cd8c885ad384704bdaa4f28"],["/tags/面向对象/index.html","b47fe827630d1f16d39363fe333e6f3a"]];
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




