import {
  ADD_QUANTITY,
  ADD_TO_CART,
  TOGGLE_CHECKBOX,
  CHECK_ALL,
  UNCHECK_ALL
} from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let existProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      if (existProduct) {
        context.commit(ADD_QUANTITY, existProduct);
        resolve("当前的商品数量 +1");
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("添加成功");
      }
    });
  },
  toggleCheckbox(context, payload) {
    let product = context.state.cartList.find(item => item.iid === payload);

    context.commit(TOGGLE_CHECKBOX, product);
  },
  toggleCheckAll(context, payload) {
    if (payload) {
      context.commit(CHECK_ALL, context.state.cartList);
    } else {
      context.commit(UNCHECK_ALL, context.state.cartList);
    }
  }
};
