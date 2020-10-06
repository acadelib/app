import Vue from "vue";
import App from "./App.vue";
import ApiService from "./core/common/api.service";
import StoreService from "./core/common/store.service";
import RouterService from "@/core/common/router.service";
import { GET_USER } from "@/modules/auth/store/actions.type";

Vue.config.productionTip = false;
ApiService.init();

require("@/modules/auth");

const store = StoreService.init();
const router = RouterService.init();

store.dispatch(GET_USER).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
