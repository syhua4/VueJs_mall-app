<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :banner="banner"></swiper>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import Swiper from "./ChildComp/HomeSwiper";
import { getHomeData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
  },
  data() {
    return {
      banner: []
    };
  },
  created() {
    getHomeData().then(res => {
      this.banner = res.data.banner.list;
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
