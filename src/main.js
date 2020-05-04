import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApiService from "./common/api.service";

Vue.config.productionTip = false;
ApiService.init();

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
