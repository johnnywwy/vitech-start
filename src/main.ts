import { createApp } from "vue";
import { createPinia } from "pinia";

import "reset-css";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

const app = createApp(App);
app.use(router); //注册路由
app.use(pinia); // 注册pinia
app.mount("#app");
