const routes = [
  {
    path: "/auth",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth"),
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
