import {
  ADD_QUANTITY,
  ADD_TO_CART,
  TOGGLE_CHECKBOX,
  CHECK_ALL,
  UNCHECK_ALL
} from "./mutation-types";
export default {
  [ADD_QUANTITY](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.isChecked = false;
    state.cartList.push(payload);
  },
  [TOGGLE_CHECKBOX](state, payload) {
    payload.isChecked = !payload.isChecked;
  },
  [CHECK_ALL](state, payload) {
    payload.forEach(element => {
      element.isChecked = true;
    });
  },
  [UNCHECK_ALL](state, payload) {
    payload.forEach(element => {
      element.isChecked = false;
    });
  }
};
