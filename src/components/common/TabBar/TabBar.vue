<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
.tabbar {
  background-color: #f5f5f5;
  height: 49px;
  font-size: 12px;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  text-align: center;
}
</style>
