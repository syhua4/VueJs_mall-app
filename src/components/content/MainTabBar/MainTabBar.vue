<template>
  <tab-bar>
    <tab-bar-item activeColor="var(--color-high-text)" path="/home">
      <i slot="item-icon" class="tabbar-icon iconfont icon-home_light" />
      <div slot="item-label" class="tabbar-label">首页</div>
    </tab-bar-item>
    <tab-bar-item activeColor="var(--color-high-text)" path="/category">
      <i slot="item-icon" class="tabbar-icon iconfont icon-list" />

      <div slot="item-label" class="tabbar-label">分类</div>
    </tab-bar-item>
    <tab-bar-item activeColor="var(--color-high-text)" path="/cart">
      <i slot="item-icon" class="tabbar-icon iconfont icon-cart_light" />

      <div slot="item-label" class="tabbar-label">购物车</div>
    </tab-bar-item>
    <tab-bar-item activeColor="var(--color-high-text)" path="/user">
      <i slot="item-icon" class="tabbar-icon iconfont icon-profile_light" />

      <div slot="item-label" class="tabbar-label">我的</div>
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
  }
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_1804924_rvsr4fk5xkk.css");
</style>
