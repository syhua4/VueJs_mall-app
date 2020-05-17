<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
.recommend {
  background-color: #fff;
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 0.3rem;
}
.recommend-item {
  width: 20%;
  margin: 0.2rem 0 0.3rem;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 0.16rem;
}

.recommend-item .title {
  font-size: 0.25rem;
  color: #999;
}
</style>
