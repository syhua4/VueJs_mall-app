<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center" class="nav-title">购物街</div>
    </nav-bar>
    <tab-control
      :tabs="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
      class="fixed"
      ref="tabControlTop"
    />
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollPos="contentScroll"
      @loadMore="loadMore"
    >
      <swiper :banner="banner" @swiperImageLoaded="swiperImageLoaded" />
      <recommend :recommend="recommend" />
      <featured />
      <tab-control :tabs="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl" />
      <tab-display :display="getGoods" />
    </scroll>
    <back-to-top @click.native="backTop" v-if="showBackTop" />
  </div>
</template>

<script>
import Swiper from "./ChildComp/HomeSwiper";
import Recommend from "./ChildComp/HomeRecommend";
import Featured from "./ChildComp/HomeFeatured";

import NavBar from "components/common/NavBar/NavBar";
import Scroll from "components/common/Scroll/Scroll";

import TabControl from "components/content/TabControl/TabControl";
import TabDisplay from "components/content/TabDisplay/TabDisplay";

import { getHomeData, getTabData } from "network/home";
import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";

export default {
  name: "Home",
  components: {
    Swiper,
    Recommend,
    Featured,
    NavBar,
    Scroll,
    TabControl,
    TabDisplay
  },
  mixins: [backTopMixin],
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveYPosition: 0
    };
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveYPosition, 10);
  },
  deactivated() {
    console.log("deactive");
    this.saveYPosition = this.$refs.scroll.getYPosition();
  },
  created() {
    this.getHomeData();

    this.getTabData("pop");
    this.getTabData("new");
    this.getTabData("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("homeImgLoaded", () => {
      refresh();
    });
  },
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getTabData(type) {
      const page = this.goods[type].page + 1;
      getTabData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
        this.$refs.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          this.currentType = "pop";
      }

      this.$refs.tabControl.curIndex = index;
      this.$refs.tabControlTop.curIndex = index;
    },

    contentScroll(position) {
      this.isShowBackTop(position);
      this.isTabFixed = position.y < this.tabOffsetTop;
    },
    loadMore() {
      this.getTabData(this.currentType);
      // this.$refs.scroll.refresh();
    },
    swiperImageLoaded() {
      const navHeight =
        0.92 *
        parseInt(document.getElementsByTagName("html")[0].style.fontSize);
      this.tabOffsetTop = -this.$refs.tabControl.$el.offsetTop + navHeight;
    }
  },
  computed: {
    getGoods() {
      return this.goods[this.currentType].list;
    },
    getHeight() {
      return this.$refs.scroll.style.height;
    }
  }
};
</script>

<style scoped>
.home {
  background-color: #efefef;
  /* height: -webkit-fill-available; */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.home-nav .nav-title {
  font-size: 0.45rem;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.wrapper {
  height: var(--screen);
}

.fixed {
  position: fixed;
  top: 0.92rem;
  left: 0;
  right: 0;
}
</style>
