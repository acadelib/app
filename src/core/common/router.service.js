import router from "../router";
import store from "../store";

class RouterService {
  constructor() {
    this.routes = [];
  }

  addRoutes(routes) {
    this.routes = [...this.routes, ...routes];
  }

  init() {
    router.addRoutes(this.routes);

    router.beforeEach((to, from, next) => {
      if (to.meta.middleware || to.matched.some(m => m.meta.middleware)) {
        const middleware = [
          ...(to.meta.middleware ?? []),
          ...to.matched.map(m => m.meta.middleware).flat()
        ];

        const context = {
          to,
          from,
          next,
          store
        };

        return middleware[0]({
          ...context,
          next: this.nextMiddleware(context, middleware, 1)
        });
      }

      return next();
    });

    return router;
  }

  nextMiddleware(context, middleware, index) {
    const nextMiddleware = middleware[index];

    if (!nextMiddleware) {
      return context.next;
    }

    return () => {
      nextMiddleware({
        ...context,
        next: this.nextMiddleware(context, middleware, index + 1)
      });
    };
  }
}

export default new RouterService();
