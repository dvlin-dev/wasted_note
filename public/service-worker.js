/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cd84202bbf56989836f68052384e70c3"
  },
  {
    "url": "assets/css/0.styles.cd8246f4.css",
    "revision": "d9d97db665fba3588f450dd0cc7559c2"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.0b821ee4.js",
    "revision": "f698f2ff30f7d8a603c596dabfc91983"
  },
  {
    "url": "assets/js/10.24f9b970.js",
    "revision": "c3e752bd65e40aa802a45ad0b05e7c42"
  },
  {
    "url": "assets/js/11.bbea4a45.js",
    "revision": "083184fcd5d2212636671cf60465199e"
  },
  {
    "url": "assets/js/12.9ecc6bb2.js",
    "revision": "f7c465e969d7fd9d6f9dc542a4385a77"
  },
  {
    "url": "assets/js/13.091ba82c.js",
    "revision": "1a1e7fd7b1fa5463b1b6e8cbadf38246"
  },
  {
    "url": "assets/js/14.9496fd08.js",
    "revision": "6f517e3f82ca3573181fc02d309346b0"
  },
  {
    "url": "assets/js/15.6c5e8dab.js",
    "revision": "68da7d819c78857c19d4c505694f90a8"
  },
  {
    "url": "assets/js/16.1aa027e6.js",
    "revision": "339cd95e8ce50bf9fcd54e4afddd38ea"
  },
  {
    "url": "assets/js/17.077344e4.js",
    "revision": "844d610c7bec3444b4ee58eebcb82c7f"
  },
  {
    "url": "assets/js/18.414a2125.js",
    "revision": "2b41b077bcbcb453db95a71a536a87b2"
  },
  {
    "url": "assets/js/19.8d7d47f6.js",
    "revision": "33b62247afcbdc71d787897700601c50"
  },
  {
    "url": "assets/js/20.d11125f3.js",
    "revision": "42cd41cc4ee198955faa51662d1452c8"
  },
  {
    "url": "assets/js/21.bc890d57.js",
    "revision": "170696b0dc7a54380e4c3dadcd8c05ab"
  },
  {
    "url": "assets/js/22.58526bd0.js",
    "revision": "4805af14190a835c6fc53b3ba01113cf"
  },
  {
    "url": "assets/js/23.dc151264.js",
    "revision": "2f5b52b2f4ea2263f7b59a1596e0853d"
  },
  {
    "url": "assets/js/3.384e470a.js",
    "revision": "cc54ddeda01976ad698c1c12dbb264bd"
  },
  {
    "url": "assets/js/4.2b491883.js",
    "revision": "041ed99cc88de051bfd361b04b0fda46"
  },
  {
    "url": "assets/js/5.a349674b.js",
    "revision": "ad8959baed55d8b614fdfa8a7cb1a4ac"
  },
  {
    "url": "assets/js/6.4e56b63d.js",
    "revision": "563d9331a6d9cf9611e9bca31659edf1"
  },
  {
    "url": "assets/js/7.50f605a5.js",
    "revision": "2e33bf9d6212a3ba27ef7a404fa35de2"
  },
  {
    "url": "assets/js/8.5f50b538.js",
    "revision": "002f0c3d046648649334d6bce44d8e0b"
  },
  {
    "url": "assets/js/9.60865958.js",
    "revision": "6c8c23d97e7ee14a3787b51908bb95ab"
  },
  {
    "url": "assets/js/app.0244fa7e.js",
    "revision": "f489774bca5051a076732bb00fd26c24"
  },
  {
    "url": "avatar.png",
    "revision": "e63bcd923be74380bc4f79ba9118ccf3"
  },
  {
    "url": "babel/001.png",
    "revision": "5d270d852640f323ef2f7ef1669c5dda"
  },
  {
    "url": "babel/002.png",
    "revision": "12d416a7e3081db01c0237ab741c69fd"
  },
  {
    "url": "babel/003.png",
    "revision": "1b91e7e308d9f69e1999a2c5f4ccb1ea"
  },
  {
    "url": "babel/functionAST.png",
    "revision": "0cd594f77e4e9fa60d67e530f9f140d2"
  },
  {
    "url": "bac.png",
    "revision": "5ec4114113732ca736e53b2570bc6b81"
  },
  {
    "url": "blogs/babel/001.html",
    "revision": "3cbbc55230703d50ad819342cbcbee1b"
  },
  {
    "url": "blogs/babel/js-interpreter.html",
    "revision": "17beb6859dad02c0cac662d8b3103b77"
  },
  {
    "url": "blogs/computer/1.html",
    "revision": "04e38f4859a7eae4dd9ff403d61f6e91"
  },
  {
    "url": "blogs/computer/2.html",
    "revision": "fbf45eebe0587965fdd2c8d01cb62275"
  },
  {
    "url": "blogs/computer/3.html",
    "revision": "767c9cebbb953b2b94ccc9ad46d515f6"
  },
  {
    "url": "blogs/computer/4.html",
    "revision": "b938becef91d052adc17e870cfa6171d"
  },
  {
    "url": "blogs/computer/5.html",
    "revision": "ca3ee0d7be80eba7f76a3a8130561e92"
  },
  {
    "url": "blogs/computer/6.html",
    "revision": "f38b4e1c3e4cd36e22e9678da6713901"
  },
  {
    "url": "blogs/JavaScript/js-this/suijikuaipai.html",
    "revision": "e7495c16fea45ef7cceebba7feee909b"
  },
  {
    "url": "categories/Babel/index.html",
    "revision": "1026b8561904aba1f0e5464a13fc0858"
  },
  {
    "url": "categories/index.html",
    "revision": "4ab34650aa199b9a9cefe07395187f97"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "76c3d0a987cef0136c3e9031546c47fd"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "944104393a682f4eb3615e309a2fb98c"
  },
  {
    "url": "categories/行思录/index.html",
    "revision": "2349ffd17e1b8bd628302722f9747a8b"
  },
  {
    "url": "categories/计算机基础/index.html",
    "revision": "df0a3b44f211197e027ffb3645ca5210"
  },
  {
    "url": "computer/001.png",
    "revision": "9cf035ed43c4827adbe41ac2710f3684"
  },
  {
    "url": "computer/002.png",
    "revision": "429367b3e400bf7211718c7c91a2faf5"
  },
  {
    "url": "computer/003.png",
    "revision": "7e8609e59c1a8e9041614c1a9cb26e62"
  },
  {
    "url": "computer/004.png",
    "revision": "15bf9a2aa347c03ab76049f3e303d42f"
  },
  {
    "url": "computer/005.png",
    "revision": "7a8ba0f203bff71c94c4443e8e045950"
  },
  {
    "url": "computer/006.png",
    "revision": "fc1d8633168430ed61083e431c73f35b"
  },
  {
    "url": "computer/007.png",
    "revision": "f7fc7005669676c5360ed922783015fd"
  },
  {
    "url": "computer/008.png",
    "revision": "57ecb66c4392d750a330a5e8b6e12b74"
  },
  {
    "url": "computer/009.png",
    "revision": "a58832c18c9b7160082af5d5f98273c1"
  },
  {
    "url": "computer/010.png",
    "revision": "66a80c420e219bffc074ef1c28ec2478"
  },
  {
    "url": "computer/011.png",
    "revision": "ebea79597c17ebfc52e82069288e6e89"
  },
  {
    "url": "computer/012.png",
    "revision": "9e3d6025e2b91362bb2108e4278cf2c4"
  },
  {
    "url": "computer/013.png",
    "revision": "a82702c4834f1db045fabf2ed4ff7da6"
  },
  {
    "url": "computer/014.png",
    "revision": "560bea58432ac6636a760c599dbeddfc"
  },
  {
    "url": "computer/015.png",
    "revision": "1e8a06fbf3a9c2e3f4a28fa0b045cb9f"
  },
  {
    "url": "computer/016.png",
    "revision": "fd2de7dbfb2a43c7a596e1b9338fe3e1"
  },
  {
    "url": "computer/017.png",
    "revision": "953776a2606f97e9cf081e7956bfa59a"
  },
  {
    "url": "computer/018.png",
    "revision": "fcc08240b65b0643018f5defbb0fa904"
  },
  {
    "url": "computer/019.png",
    "revision": "19db050fcc3c6d5b6f232aca1a7273c7"
  },
  {
    "url": "computer/020.png",
    "revision": "aedf3f0995a1c179d4ba0db5c1bc7045"
  },
  {
    "url": "computer/021.png",
    "revision": "e037206482530855ff3c625bf76aad4c"
  },
  {
    "url": "computer/022.png",
    "revision": "6233f9e2964c87b2dcf0023dc77d66f6"
  },
  {
    "url": "computer/023.png",
    "revision": "f90a950ed68802d6a202db42063f9a04"
  },
  {
    "url": "computer/024.png",
    "revision": "3462c0e361029931818042395ec01aba"
  },
  {
    "url": "computer/025.png",
    "revision": "c565a73fcf8a8fd6fb6519c33d47f8d6"
  },
  {
    "url": "computer/026.png",
    "revision": "8346ec6a5dd95f6bf97049b6a0b1308f"
  },
  {
    "url": "computer/027.png",
    "revision": "943d88c56d5fa8b0bfdcd1d43e194b7f"
  },
  {
    "url": "computer/028.png",
    "revision": "dd2758ba952a28ea0a3e87060df0372f"
  },
  {
    "url": "computer/029.png",
    "revision": "d7593cee68d58ff05e529a9867742775"
  },
  {
    "url": "computer/030.png",
    "revision": "cd277d8b402f2e9610c10b01985d0ebb"
  },
  {
    "url": "computer/031.png",
    "revision": "695491601f79d1c3ba4a8523929dfda1"
  },
  {
    "url": "computer/032.png",
    "revision": "241d1d8dcd12e59ad555ce0f091eac46"
  },
  {
    "url": "computer/033.png",
    "revision": "e6b4ed18aaf84aae6f6f72fec9b9ce51"
  },
  {
    "url": "computer/034.png",
    "revision": "be1c98ff49d52db857a4d0dd109b0b7b"
  },
  {
    "url": "computer/035.png",
    "revision": "5fd4eebbfbdad6853f518d1107dff280"
  },
  {
    "url": "computer/036.png",
    "revision": "9d894e5de6652ed61cb442db592a0af2"
  },
  {
    "url": "computer/037.png",
    "revision": "11d2d97d453d37ed7a10d817f3c0fbe2"
  },
  {
    "url": "computer/038.png",
    "revision": "31770fa6de5a42636967ed5c286534de"
  },
  {
    "url": "computer/039.png",
    "revision": "abe4af0439bcd46fadd9ec7364231286"
  },
  {
    "url": "course/001.jpg",
    "revision": "15ceb45d2f2307adf807c81715200904"
  },
  {
    "url": "course/blog/blog.html",
    "revision": "e8c21fe4d9af7d2a983ec170756e1f9c"
  },
  {
    "url": "course/vercel.jpg",
    "revision": "de9e70178504b08db8cfbdfe48204144"
  },
  {
    "url": "index.html",
    "revision": "023910a24a1663bafc35fcedbe61800c"
  },
  {
    "url": "silanhua.svg",
    "revision": "b5e026e65863aca0acc84d5aa62d75c1"
  },
  {
    "url": "tag/Babel/index.html",
    "revision": "2a2b992cd31b31435916e7f1dbc9160a"
  },
  {
    "url": "tag/index.html",
    "revision": "ebb2921d3e31097353deea56c95a2942"
  },
  {
    "url": "tag/教程/index.html",
    "revision": "a7008689de0b5d8f6794b597cfbc0e98"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "16d854784ec374c3df0cafac0e824d59"
  },
  {
    "url": "tag/杂记/index.html",
    "revision": "21cc5157b22038353daa8bec39d90a49"
  },
  {
    "url": "tag/计算机网络/index.html",
    "revision": "6c14840e083bb2dcd336f8c11d166426"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f485945425dabddd80817e980925093"
  },
  {
    "url": "web/21-12-18.html",
    "revision": "e03e65afa67518208d9f501b1d3f9c12"
  },
  {
    "url": "web/sanyuan.jpg",
    "revision": "70ce9099d2707b17563434d60ca3ec67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
