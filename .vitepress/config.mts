import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "计算笔记",
  description: "The Note Of Calculation",
  markdown: {
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/序" },
    ],

    sidebar: [
      {
        text: "序",
        link: "/序",
      },
      {
        text: "微积分笔记",
        items: [],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/joudermin/tnoc" },
    ],

    footer: {
        message: "This work is released under CC0 License.",
        copyright: "Pulic Domain"
    },
  },
  srcDir: "./doc",
  base: "/tnoc/",
});
