import RouterService from "@/core/common/router.service";
import StoreService from "@/core/common/store.service";
import routes from "./router";
import store from "./store";

StoreService.addModule("auth", store);
RouterService.addRoutes(routes);
