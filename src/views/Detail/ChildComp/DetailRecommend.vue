<template>
  <div class="recommend-wrapper">
    <div class="header">热门推荐</div>
    <recommend-display :display="info" class="recommend" />
  </div>
</template>

<script>
import RecommendDisplay from "components/content/TabDisplay/TabDisplay";
export default {
  name: "DetailRecommend",
  props: {
    info: {
      type: Array,
      default: []
    }
  },
  components: {
    RecommendDisplay
  }
};
</script>

<style scoped>
.recommend-wrapper {
  padding-top: 0.2rem;
  background-color: #fff;
  width: 7.5rem;
}
.header {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  padding-left: 0.16rem;
  font-size: 0.35rem;
  color: #333;
}

.recommend {
  background-color: #fff;
}
</style>