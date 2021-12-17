module.exports = {
  title: '张同学',
  description: '無限進步',
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/silanhua.svg',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  plugins: [
    ['@vuepress-reco/vuepress-plugin-comments'],
    // 更新刷新插件
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toUTCString()
        },
      },
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "copy",
      tip: {
          content: "复制成功!"
      }
    }],
  ],
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: 'NMhYswzSkI8tCbmyDKE5yuiI-gzGzoHsz',
      appKey: 'kr8ijgy6fcKCQ4YG6b4n9S6y',
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/zbl666',
            icon: 'reco-github',
          },
        ],
      },
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: 'Category',
      },
      tag: {
        location: 3,
        text: 'Tag',
      },
      socialLinks: [{ icon: 'reco-github', link: 'https://github.com/zbl666' }],
    },
    friendLink: [
      {
        title: 'alan',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1561314334@qq.com',
        link: 'https://www.zhangbaolin001.cn/',
      },
    ],
    logo: '/silanhua.svg',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    author: 'alan',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2021',
  },
  markdown: {
    lineNumbers: true,
  },
}
