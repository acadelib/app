import guest from "./middleware/guest";

const routes = [
  {
    path: "/auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/layouts/Auth"),
    meta: {
      middleware: [guest]
    },
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "auth" */ "../views/pages/Login")
      }
    ]
  }
];

export default routes;
