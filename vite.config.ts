import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuejsx from "@vitejs/plugin-vue-jsx";

import UnoCSS from "unocss/vite";

import VueRouter from "unplugin-vue-router/vite";
import AutoImport from "unplugin-auto-import/vite";

import { VueRouterAutoImports } from "unplugin-vue-router";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    vuejsx(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      imports: ["vue", VueRouterAutoImports, "@vueuse/core"],
    }),
    Components({
      // directoryAsNamespace: true, //文件名前缀
      // collapseSamePrefixes: true, //合并重复前缀
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
