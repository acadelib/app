import store from "../store";

class StoreService {
  constructor() {
    this.modules = {};
  }

  addModule(name, module) {
    this.modules[name] = module;
  }

  init() {
    for (const module in this.modules) {
      store.registerModule(module, this.modules[module]);
    }

    return store;
  }
}

export default new StoreService();
