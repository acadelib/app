const mutations = {
  SET_AUTH(state, user) {
    state.user = user;
  },

  PURGE_AUTH(state) {
    state.user = {};
  }
};

export default mutations;
