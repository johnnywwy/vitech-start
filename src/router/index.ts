import { createRouter, createWebHistory } from "vue-router";

// import Home from "../views/Home.vue";

import routes from "~pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/home") {
    next("/about");
  }
  next();
});

export default router;
