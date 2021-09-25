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
  {
    path: "/test_Animation",
    name: "Test_Animation",
    component: () =>
      import(/* webpackChunkName: "test1" */ "../views/Test_Animation.vue"),
  },
  {
    path: "/loading",
    name: "Loading",
    component: () =>
      import(/* webpackChunkName: "Loading" */ "../views/Loading.vue"),
  },
  {
    path: "/FlyCom",
    name: "FlyCom",
    component: () =>
      import(/* webpackChunkName: "FlyBox" */ "../views/FlyCom.vue"),
  },
  {
    path: "/CompsUse",
    name: "CompsUse",
    component: () =>
      import(/* webpackChunkName: "CompsUse" */ "../views/CompsUse.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
