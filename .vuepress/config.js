module.exports = {
  "title": "张同学",
  "description": "無限進步",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/silanhua.svg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": [
    "@vuepress-reco/vuepress-plugin-comments",
  ],
  "theme": "reco",
  "themeConfig": {
    "valineConfig": {
      "appId": "NMhYswzSkI8tCbmyDKE5yuiI-gzGzoHsz",
      "appKey": "kr8ijgy6fcKCQ4YG6b4n9S6y",
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/zbl666",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "alan",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1561314334@qq.com",
        "link": "https://www.zhangbaolin001.cn/"
      },
    ],
    "logo": "/silanhua.svg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "alan",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017",
  },
  "markdown": {
    "lineNumbers": true
  }
}