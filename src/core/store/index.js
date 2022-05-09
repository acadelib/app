import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

export default createStore({
  state: {
    sidebarOpen: false,
  },
  actions,
  mutations,
  getters: {
    sidebarOpen: (state) => state.sidebarOpen,
  },
});
