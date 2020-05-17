<template>
  <div class="app">
    <router-view />
    <tab-bar activeColor="red" />
  </div>
</template>

<script>
import TabBar from "components/content/MainTabBar/MainTabBar";

export default {
  name: "App",
  components: { TabBar }
};
</script>

<style>
@import url("assets/css/base.css");
@import url("//at.alicdn.com/t/font_1804924_qp6hamlg87.css");

.app {
  font-size: initial;
  margin: 0 auto;
  min-width: 320px;
  max-width: 7.5rem;
}
</style>
