import guest from "./middleware/guest";

const routes = [
  {
    path: "/auth",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth"),
    meta: {
      middleware: [guest]
    },
    children: [
      {
        path: "login",
        name: "login",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Login")
      }
    ]
  }
];

export default routes;
