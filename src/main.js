import { createApp } from "vue";
import App from "./App.vue";
import ApiService from "./core/common/api.service";
import StoreService from "./core/common/store.service";
import RouterService from "@/core/common/router.service";
import { GET_USER } from "@/modules/auth/store/actions.type";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouseUser,
  faCalendarDays,
  faComments,
  faSchool,
  faCoins,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHouseUser,
  faCalendarDays,
  faComments,
  faSchool,
  faCoins,
  faGears
);

ApiService.init();

require("@/modules/auth");

const store = StoreService.init();
const router = RouterService.init();

store.dispatch(GET_USER).then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
});
