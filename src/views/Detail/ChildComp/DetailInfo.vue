<template>
  <div class="detail-info">
    <div class="start">
      <i class="iconfont icon-heart" />
    </div>
    <div class="desc">{{info.desc}}</div>
    <div class="end">
      <i class="iconfont icon-heart" />
    </div>
    <div class="imgList">
      <img v-for="img in getImgs" :src="img" :key="img" @load="imgLoaded" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    info: {
      type: Object,
      default: {
        return: {}
      }
    }
  },
  computed: {
    getImgs() {
      if (
        this.info &&
        this.info.detailImage &&
        this.info.detailImage[0] &&
        this.info.detailImage[0].list
      ) {
        return this.info.detailImage[0].list;
      }
    }
  },
  methods: {
    imgLoaded() {
      this.$emit("detailImgLoaded");
      // this.$bus.$emit("detailImgLoaded");
    }
  }
};
</script>

<style scoped>
.detail-info {
  background-color: #fff;
  padding: 0.4rem 0;
}

.desc {
  padding: 0.3rem;
}
.start,
.end {
  position: relative;
  height: 0.01rem;
  background-color: #000;
  width: 30%;
}
.icon-heart {
  position: absolute;
  font-size: 0.25rem;
  top: -0.15rem;
}

.start {
  transform: translateX(-100%);
}

.start .icon-heart {
  left: -0.15rem;
}

.end {
  transform: translateX(100%);
}

.end .icon-heart {
  right: -0.15rem;
}

.imgList {
  width: 100%;
  margin-top: 0.6rem;
}

.imgList img {
  width: 100%;
}
</style>