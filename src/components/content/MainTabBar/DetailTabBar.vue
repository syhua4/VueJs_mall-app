<template>
  <tab-bar class="detail-tabbar">
    <tab-bar-item activeColor="var(--color-high-text)">
      <i slot="item-icon" class="tabbar-icon iconfont icon-service" />
      <div slot="item-label" class="tabbar-label">客服</div>
    </tab-bar-item>
    <tab-bar-item>
      <i slot="item-icon" class="tabbar-icon iconfont icon-shop" />
      <div slot="item-label" class="tabbar-label">店铺</div>
    </tab-bar-item>
    <tab-bar-item>
      <i slot="item-icon" class="tabbar-icon iconfont icon-favor" />
      <div slot="item-label" class="tabbar-label">收藏</div>
    </tab-bar-item>
    <tab-bar-item>
      <div slot="item-label" class="tabbar-label cart" @click="addCart">加入购物车</div>
    </tab-bar-item>
    <tab-bar-item>
      <div slot="item-label" class="tabbar-label buy">购买</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  props: {
    activeColor: String
  },
  methods: {
    addCart() {
      this.$emit("addCart");
    }
  }
};
</script>

<style scoped>
.detail-tabbar {
  background-color: #fff;
}
.cart,
.buy {
  height: 0.98rem;
  line-height: 0.98rem;
}

.cart {
  background-color: #ffe817;
  color: #333;
}

.buy {
  color: #fff;
  background-color: #f69;
}
</style>
