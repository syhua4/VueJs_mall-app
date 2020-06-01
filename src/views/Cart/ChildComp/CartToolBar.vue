<template>
  <div class="cart-tool-bar">
    <div class="check-wrapper">
      <check-btn class="check-all" :isChecked="isSelectAll" @click.native="selectAll" />
      <span>全选 ({{getSelected}})</span>
    </div>
    <div class="total">合计: ¥{{getTotalPrice}}</div>
    <div class="checkout" @click="goCheckout">结算</div>
  </div>
</template>

<script>
import CheckBtn from "components/content/CheckBtn/CheckBtn";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartToolBar",
  components: {
    CheckBtn
  },
  computed: {
    ...mapGetters({
      list: "getCartList"
    }),
    getTotalPrice() {
      return this.list
        .filter(item => item.isChecked === true)
        .reduce(
          (accum, item) =>
            accum + parseFloat(item.price.substring(1)) * item.count,
          0
        )
        .toFixed(2);
    },
    getSelected() {
      return this.list.filter(item => item.isChecked === true).length;
    },
    isSelectAll() {
      return this.getSelected === this.list.length;
    }
  },
  methods: {
    ...mapActions(["toggleCheckAll"]),
    selectAll() {
      let check = null;
      this.isSelectAll ? (check = false) : (check = true);
      this.toggleCheckAll(check);
    },
    goCheckout() {
      if (!this.getSelected) {
        this.$emit("showToast");
      } else {
        console.log("结算");
      }
    }
  }
};
</script>

<style scoped>
.cart-tool-bar {
  box-shadow: 0 -0.02rem 0.02rem rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.28rem;
  color: #999;
}
.check-wrapper {
  display: flex;
  margin: 0;
}
.check-all {
  padding-left: 0.4rem;
  margin-right: 0.1rem;
}

.check-wrapper span {
  margin: 0;
}

.total {
  margin: 0;
  margin-left: 0.4rem;
}
.checkout {
  background-color: var(--color-tint);
  width: 2rem;
  color: #fff;
  text-align: center;
  margin-right: 0;
}
</style>