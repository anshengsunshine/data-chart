import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/icon",
    name: "Icon",
    component: () =>
      import(/* webpackChunkName: "icon" */ "../views/Icon.vue"),
  },
  {
    path: "/test1",
    name: "Test1",
    component: () =>
      import(/* webpackChunkName: "test1" */ "../views/Test_one.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
