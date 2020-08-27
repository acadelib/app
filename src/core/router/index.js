import Vue from "vue";
import VueRouter from "vue-router";
import auth from "@/modules/auth/router/middleware/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/App"),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("../views/Dashboard")
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
