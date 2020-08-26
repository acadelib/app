import Vue from "vue";
import App from "./App.vue";
import ApiService from "./core/common/api.service";
import StoreService from "./core/common/store.service";
import RouterService from "@/core/common/router.service";

Vue.config.productionTip = false;
ApiService.init();

require("@/modules/auth");

const router = RouterService.init();
const store = StoreService.init();

router.beforeEach((to, from, next) => {
  if (!store.getters.isAuthenticated && to.name !== "login")
    next({ name: "login" });
  else next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
