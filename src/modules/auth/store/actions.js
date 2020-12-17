import ApiService from "@/core/common/api.service";
import { LOGIN, GET_USER, LOGOUT } from "./actions.type";
import { SET_AUTH, PURGE_AUTH } from "./mutations.type";

const actions = {
  async [LOGIN](context, credentials) {
    await ApiService.get("/sanctum/csrf-cookie");
    await ApiService.post("/login", credentials);

    await context.dispatch(GET_USER);
  },

  [GET_USER](context) {
    return ApiService.get("/api/user")
      .then((response) => {
        context.commit(SET_AUTH, response.data);
      })
      .catch(() => {
        context.commit(PURGE_AUTH);
      });
  },

  async [LOGOUT](context) {
    await ApiService.post("/logout");
    context.commit(PURGE_AUTH);
  },
};

export default actions;
