import { TOGGLE_SIDEBAR_STATE } from "./mutations.type";

const mutations = {
  [TOGGLE_SIDEBAR_STATE](state) {
    state.sidebarOpen = !state.sidebarOpen;
  },
};

export default mutations;
