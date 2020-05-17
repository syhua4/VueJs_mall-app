<template>
  <div class="swiper-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: "SwiperItem"
};
</script>

<style scoped>
.swiper-item {
  width: 100%;
  flex-shrink: 0;
  line-height: 0;
}
.swiper-item img {
  width: 100%;
}
</style>
