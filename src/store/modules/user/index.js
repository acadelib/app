import actions from "./actions";
import mutations from "./mutations";

const user = {
  namespaced: true,
  state: {
    user: {}
  },
  actions,
  mutations
};

export default user;
