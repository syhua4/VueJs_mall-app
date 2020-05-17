<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center" class="nav-title">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollPos="contentScroll"
      @loadMore="loadMore"
    >
      <swiper :banner="banner" />
      <recommend :recommend="recommend" />
      <featured />
      <tab-control
        class="tab-control"
        :tabs="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <tab-display :display="getGoods" />
    </scroll>
    <back-to-top @click.native="backTop" v-show="showBackTop" />
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
import BackToTop from "components/content/BackToTop/BackToTop";

import { getHomeData, getTabData } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    Swiper,
    Recommend,
    Featured,
    NavBar,
    Scroll,
    TabControl,
    TabDisplay,
    BackToTop
  },
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
      showBackTop: false
    };
  },
  created() {
    this.getHomeData();

    this.getTabData("pop");
    this.getTabData("new");
    this.getTabData("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("imgLoaded", () => {
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
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      let showPos = document.body.scrollHeight + 350;
      position.y <= -showPos
        ? (this.showBackTop = true)
        : (this.showBackTop = false);
    },
    loadMore() {
      this.getTabData(this.currentType);
      // this.$refs.scroll.refresh();
    }
  },
  computed: {
    getGoods() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style scoped>
.home {
  background-color: #eee;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  /* margin-bottom: ; */
}

.home-nav .nav-title {
  margin-top: -0.15rem;
  font-size: 0.45rem;
}

.tab-control {
  position: sticky;
  top: 0.88rem;
  background-color: #fff;
  z-index: 9;
}

.content {
  height: calc(100% - 1.9rem);
  overflow: hidden;
}
</style>
