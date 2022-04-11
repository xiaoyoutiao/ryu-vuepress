import { defineConfig } from "vuepress/config";
import path from 'path';

export default defineConfig({
  title: "Hello Ryu",
  description: "Just playing around",

  dest: path.resolve(__dirname, "../../dist"),

  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
  },

  themeConfig: {
    nav: [{ text: "主页", link: "/" }],
    sidebar: "auto",
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
        "@assets": "/assets",
      },
    },
  },
});
