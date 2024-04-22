import { createRouter, createWebHistory } from "vue-router/auto";

import { setupLayouts } from "virtual:generated-layouts";

// import Home from "../views/Home.vue";

// import routes from "~pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  extendRoutes: (routes) => setupLayouts(routes),

  // routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.path === "/home") {
//     next("/about");
//   }
//   next();
// });

export default router;
