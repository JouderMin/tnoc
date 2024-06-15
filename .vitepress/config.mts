import { defineConfig } from "vitepress";
import { katex } from "@mdit/plugin-katex";
import { footnote } from "@mdit/plugin-footnote";
import { figure } from "@mdit/plugin-figure";
import { imgSize } from "@mdit/plugin-img-size";
import { imgLazyload } from "@mdit/plugin-img-lazyload";
import { align } from "@mdit/plugin-align";
import { withMermaid } from "vitepress-plugin-mermaid";
import { spoiler } from "@mdit/plugin-spoiler";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "计算笔记",
    description: "The Note Of Calculation",
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
          text: "离散数学笔记",
          items: [{ text: "第 0 章. 序", link: "/离散数学笔记/第 0 章. 序" }],
        },
        {
          text: "微积分笔记",
          items: [
            {
              text: "第 1 章. 函数",
              link: "/微积分笔记/第 1 章. 函数",
            },
            {
              text: "附录 A. 参考文献",
              link: "/微积分笔记/附录 A. 参考文献",
            },
          ],
        },
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/joudermin/tnoc" },
      ],

      footer: {
        message: "This work is released under CC0 License.",
        copyright: "Pulic Domain",
      },
      search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
              },
            },
          },
        },
      },

      outline: {
        label: "页面导航",
      },
    },
    srcDir: "./doc",
    base: "/tnoc/",
    markdown: {
      config: (md) => {
        md.use(katex);
        md.use(footnote);
        md.use(imgLazyload);
        md.use(imgSize);
        md.use(figure);
        md.use(align);
        md.use(spoiler);
      },
    },
    locales: { root: { label: "Chinese", lang: "zh" } },
  })
);
