import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "main" */ "../views/Home.vue"),
  },
  {
    path: "/download",
    name: "Download",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/Download.vue"),
  },
  {
    path: "/my",
    name: "My",
    component: () => import(/* webpackChunkName: "main" */ "../views/My.vue"),
  },
  {
    path: "/open",
    name: "Open",
    component: () => import(/* webpackChunkName: "main" */ "../views/Open.vue"),
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/Teacher.vue"),
  },
  {
    path: "/tutor",
    name: "Tutor",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/Tutor.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/About.vue"),
  },
  {
    path: "/goods",
    name: "Goods",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/Goods.vue"),
  },
  {
    path: "/good-detail",
    name: "GoodDetail",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/GoodDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
