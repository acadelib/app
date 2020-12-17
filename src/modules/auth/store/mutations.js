import { SET_AUTH, PURGE_AUTH } from "./mutations.type";

const mutations = {
  [SET_AUTH](state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },

  [PURGE_AUTH](state) {
    state.user = {};
    state.isAuthenticated = false;
  },
};

export default mutations;
