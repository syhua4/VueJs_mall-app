<template>
  <div class="back-to-top">
    <i class="iconfont icon-top" />
  </div>
</template>

<script>
export default {
  name: "BackToTop"
};
</script>

<style scoped>
.back-to-top {
  padding: 0.4rem;
  background-color: #fff;
  color: var(--color-tint);
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  z-index: 10;
  right: 0.2rem;
  bottom: 1.2rem;
  box-shadow: 0rem 0.02rem 0.1rem rgba(0, 0, 0, 0.2);
}

.icon-top {
  font-size: 0.4rem;
  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3D(-50%, -45%, 0);
}
</style>
