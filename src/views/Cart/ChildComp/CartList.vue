<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in list" :key="item.iid+index" :product="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters({
      list: "getCartList"
    })
  }
};
</script>

<style scoped>
.cart-list {
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
}
</style>