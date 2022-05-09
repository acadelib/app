import { createRouter, createWebHistory } from "vue-router";
import auth from "@/modules/auth/router/middleware/auth";

const routes = [
  {
    path: "/",
    component: () => import("../views/layouts/App"),
    redirect: { name: "dashboard" },
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("../views/pages/Dashboard"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
