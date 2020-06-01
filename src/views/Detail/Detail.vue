<template>
  <div class="detail">
    <nav-bar @tabClick="tabClick" ref="nav" />
    <scroll class="content" ref="scroll" @scrollPos="scrollPos" :probeType="3">
      <swiper :banners="bannerImg" />
      <product-info :info="product" />
      <shop-info :info="shop" />
      <detail-info :info="detailInfo" @detailImgLoaded="detailImgLoaded" />
      <goods-info :info="paramInfo" ref="param" />
      <comments :info="comment" ref="comment" />
      <recommend :info="recommend" ref="recommend" />
    </scroll>
    <back-to-top @click.native="backTop" v-if="showBackTop" />
    <toast :text="toastText" :showText="toastDisplay" />
    <tab-bar @addCart="addToCart" />
  </div>
</template>

<script>
import NavBar from "./ChildComp/DetailNavBar";
import Swiper from "./ChildComp/DetailSwiper";
import ProductInfo from "./ChildComp/DetailProductInfo";
import ShopInfo from "./ChildComp/DetailShopInfo";
import DetailInfo from "./ChildComp/DetailInfo";
import GoodsInfo from "./ChildComp/DetailGoodsParams";
import Comments from "./ChildComp/DetailComments";
import Recommend from "./ChildComp/DetailRecommend";

import Scroll from "components/common/Scroll/Scroll";
import TabBar from "components/content/MainTabBar/DetailTabBar";

import {
  getDetail,
  getRecommend,
  Product,
  Seller,
  GoodsParams
} from "network/detail";
import { debounce } from "common/utils";
import { backTopMixin, toastMixin } from "common/mixin";
import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    NavBar,
    Swiper,
    ProductInfo,
    ShopInfo,
    DetailInfo,
    GoodsInfo,
    Comments,
    Recommend,
    Scroll,
    TabBar
  },
  mixins: [backTopMixin, toastMixin],
  data() {
    return {
      iid: null,
      bannerImg: [],
      product: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      scrollPosition: [],
      getScrollPosition: null,
      tabIndex: 0,
      isScrolling: false
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      this.bannerImg = data.itemInfo.topImages;
      this.product = new Product(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Seller(data.shopInfo);

      this.detailInfo = data.detailInfo;

      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      this.comment = data.rate;
    });

    getRecommend().then(res => {
      this.recommend = res.data.list;
    });

    this.getScrollPosition = debounce(() => {
      const navHeight =
        0.92 *
        parseInt(document.getElementsByTagName("html")[0].style.fontSize);

      this.scrollPosition = [];
      this.scrollPosition.push(0);
      this.scrollPosition.push(-this.$refs.param.$el.offsetTop + navHeight);
      this.scrollPosition.push(-this.$refs.comment.$el.offsetTop + navHeight);
      this.scrollPosition.push(-this.$refs.recommend.$el.offsetTop + navHeight);
      this.scrollPosition.push(-Number.MAX_VALUE);
    }, 50);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("detailImgLoaded", () => {
      refresh();
      this.getScrollPosition();
    });
  },
  methods: {
    ...mapActions(["addCart"]),
    addToCart() {
      // 1.把需要的信息放入 Product Obj 中
      const product = {};
      product.thumbnail = this.bannerImg[0];
      product.title = this.product.title;
      product.price = this.product.price;
      product.iid = this.iid;

      // 2.把对象放入Vuex
      this.addCart(product).then(res => {
        this.showToast(res, 1000);
      });

      // 3.显示购物车添加成功
    },
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, this.scrollPosition[index], 300);
    },
    detailImgLoaded() {
      this.refresh;
      this.getScrollPosition();
    },
    scrollPos(position) {
      this.isShowBackTop(position);
      const n = this.scrollPosition.length;

      for (let i = 0; i < n - 1; i++) {
        if (
          this.tabIndex !== i &&
          position.y <= this.scrollPosition[i] &&
          position.y > this.scrollPosition[i + 1]
        ) {
          this.tabIndex = i;
          console.log(this.tabIndex);
          // this.$refs.nav.curIndex = this.tabIndex;
          this.$refs.nav.$refs.tab.curIndex = this.tabIndex;
        }
      }
    }
  }
};
</script>

<style scoped>
.detail {
  height: -webkit-fill-available;
  position: relative;
  z-index: 10;
  background-color: #eee;
}
.wrapper {
  height: var(--screen);
}
</style>
