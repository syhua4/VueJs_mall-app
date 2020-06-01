<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar {
  position: relative;
  box-shadow: 0 0.02rem 0.02rem rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 100%;
  height: 0.92rem;
  line-height: 0.92rem;
  text-align: center;
  display: flex;
}

.left,
.right {
  width: 1rem;
}
.center {
  flex: 1;
}
</style>
