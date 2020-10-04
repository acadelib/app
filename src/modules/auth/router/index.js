import guest from "./middleware/guest";

const routes = [
  {
    path: "/auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/layouts/Auth"),
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "auth" */ "../views/pages/Login"),
        meta: {
          middleware: [guest]
        }
      }
    ]
  }
];

export default routes;
