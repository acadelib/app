import router from "../router";

class RouterService {
  constructor() {
    this.routes = [];
  }

  addRoutes(routes) {
    this.routes = [...this.routes, ...routes];
  }

  init() {
    router.addRoutes(this.routes);
    return router;
  }
}

export default new RouterService();
