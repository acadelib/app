import { SET_AUTH, PURGE_AUTH } from "@/store/mutations.type";

const mutations = {
  [SET_AUTH](state, user) {
    state.user = user;
  },

  [PURGE_AUTH](state) {
    state.user = {};
  }
};

export default mutations;
