import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    component: () => import("@/views/Auth"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/Login")
      }
    ]
  },
  {
    path: "/",
    component: () => import("@/views/App"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
