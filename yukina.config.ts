import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "ice.Sheep",
  subTitle: "学习、项目与持续构建",
  brandTitle: "ice.Sheep",

  description: "ice.Sheep 的个人博客与开发者档案。",

  site: "https://icesheep2003.github.io",

  locale: "zh-CN", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/iceSheep2003",
    },
  ],

  username: "ice.Sheep",
  sign: "软件工程 · 持续学习与构建",
  avatarUrl: "/avatar.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/iceSheep2003",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
    "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
    "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
  ],

  slugMode: "RAW", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP",
};

export default YukinaConfig;
