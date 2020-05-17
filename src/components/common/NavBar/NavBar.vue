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
  width: 100%;
  height: 0.92rem;
  text-align: center;
  line-height: 0.92rem;
  box-shadow: 0 0.01rem 0.01rem rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0.15rem 0.1rem;
}

.left,
.right {
  width: 1rem;
}
.center {
  flex: 1;
}
</style>
