import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuejsx from "@vitejs/plugin-vue-jsx";

import UnoCSS from "unocss/vite";

import VueRouter from "unplugin-vue-router/vite";

import AutoImport from "unplugin-auto-import/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Components from "unplugin-vue-components/vite";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import Layouts from "vite-plugin-vue-layouts";

import { VitePWA } from "vite-plugin-pwa";

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
      resolvers: [
        IconsResolver({
          prefix: "icon", // 设置图标前缀
        }),
      ],
    }),
    Icons({
      /* options */
      autoInstall: true,
    }),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "default",
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   rollupOptions: {
  //     external: ["workbox-window"],
  //   },
  // },
});
