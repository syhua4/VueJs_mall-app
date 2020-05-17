<template>
  <swiper>
    <swiper-item lazy v-for="(banner, index) in banner" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/Swiper/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default: []
    }
  }
};
</script>

<style></style>
