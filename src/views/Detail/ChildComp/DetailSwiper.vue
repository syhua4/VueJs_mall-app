<template>
  <swiper v-if="banners.length > 0">
    <swiper-item lazy v-for="(banner, index) in banners" :key="index">
      <img :src="banner" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/Swiper/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
img {
  /* width: 5.2rem !important; */
  height: 7.8rem;
  object-fit: cover;
}
</style>