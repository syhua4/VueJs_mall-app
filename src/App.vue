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
</style>
