import ApiService from "@/common/api.service";

const actions = {
  login(context, credentials) {
    return new Promise(resolve => {
      ApiService.get("/sanctum/csrf-cookie").then(() => {
        ApiService.post("/login", credentials).then(() => {
          ApiService.get("/api/user").then(response => {
            context.commit("SET_AUTH", response.data);
            resolve(response.data);
          });
        });
      });
    });
  },

  logout(context) {
    return new Promise(resolve => {
      ApiService.post("/logout").then(() => {
        context.commit("PURGE_AUTH");
        resolve();
      });
    });
  }
};

export default actions;
