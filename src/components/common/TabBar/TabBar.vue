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
<style lang="less" scoped>
.tabbar {
  width: 7.5rem;
  background-color: #f5f5f5;
  // height: 0.98rem;
  height: constant(safe-area-inset-bottom);
  font-size: 0.24rem;
  box-shadow: 0 -0.02rem 0.02rem rgba(0, 0, 0, 0.1);
  z-index: 9;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  text-align: center;
}
</style>
