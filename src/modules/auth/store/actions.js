import ApiService from "@/core/common/api.service";
import { LOGIN, LOGOUT } from "./actions.type";
import { SET_AUTH, PURGE_AUTH } from "./mutations.type";

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.get("/sanctum/csrf-cookie").then(() => {
        ApiService.post("/login", credentials).then(() => {
          ApiService.get("/api/user").then(response => {
            context.commit(SET_AUTH, response.data);
            resolve();
          });
        });
      });
    });
  },

  [LOGOUT](context) {
    return new Promise(resolve => {
      ApiService.post("/logout").then(() => {
        context.commit(PURGE_AUTH);
        resolve();
      });
    });
  }
};

export default actions;
