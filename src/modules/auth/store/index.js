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
    fullName: (state) => `${state.user.first_name} ${state.user.last_name}`,
  },
};

export default user;
