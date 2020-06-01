<template>
  <swiper v-if="banner.length > 0">
    <swiper-item lazy v-for="(banner, index) in banner" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" @load="imgLoaded" />
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
  },
  data() {
    return {
      isLoaded: false
    };
  },
  methods: {
    imgLoaded() {
      if (!this.isLoaded) {
        this.$emit("swiperImageLoaded");
        this.isLoaded = true;
      }
    }
  }
};
</script>

<style></style>
