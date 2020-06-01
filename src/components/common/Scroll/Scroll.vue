<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      bounce: false
    });

    if (this.probeType >= 2) {
      this.scroll.on("scroll", position => {
        this.$emit("scrollPos", position);
      });
    }

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadMore");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("----");
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    getYPosition() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
.content {
  /* padding-top: 0.88rem; */
  /* min-height: 100%; */
  /* max-width: 7.5rem; */
}
</style>
