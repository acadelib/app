import actions from "./actions";
import mutations from "./mutations";

const user = {
  state: {
    user: {},
    isAuthenticated: false,
  },
  actions,
  mutations,
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
};

export default user;
