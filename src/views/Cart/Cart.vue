<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车 ({{length}})</div>
    </nav-bar>
    <scroll class="wrapper" ref="scroll">
      <cart-list class="cart-list" />
    </scroll>
    <tool-bar class="bar" @showToast="displayToast"></tool-bar>
    <toast :text="toastText" :showText="toastDisplay" />
  </div>
</template>

<script>
import CartList from "./ChildComp/CartList";
import ToolBar from "./ChildComp/CartToolBar";

import NavBar from "components/common/NavBar/NavBar";
import Scroll from "components/common/Scroll/Scroll";

import { toastMixin } from "common/mixin";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    ToolBar,
    Scroll
  },
  mixins: [toastMixin],
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    displayToast() {
      this.showToast("请选择要结算的商品", 1000);
    }
  },
  computed: {
    ...mapGetters({
      length: "getCartLength"
    })
  }
};
</script>

<style scoped>
.cart {
  /* height: calc(100vh - 0.88rem); */
  /* border: 10px solid red; */
  background-color: #efefef;
  /* margin-bottom: 0.98rem; */
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.wrapper {
  /* height: calc(100% - 0.88rem); */
  height: calc(var(--screen) - 0.65rem);
  /* border: 10px solid blue; */
}

.bar {
  background-color: #fff;
  height: 0.7rem;
  position: relative;
  z-index: 999;
}
</style>
