import { TOGGLE_SIDEBAR } from "./actions.type";
import { TOGGLE_SIDEBAR_STATE } from "./mutations.type";

const actions = {
  [TOGGLE_SIDEBAR](context) {
    context.commit(TOGGLE_SIDEBAR_STATE);
  },
};

export default actions;
