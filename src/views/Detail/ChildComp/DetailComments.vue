<template>
  <div class="comments">
    <div class="comments-header">
      <div>用户评价</div>
      <div class="more">
        <span>更多</span>
        <i class="iconfont icon-next"></i>
      </div>
    </div>
    <div class="content" v-for="(rate,index) in info.list" :key="rate+index">
      <div class="user">
        <img :src="rate.user.avatar" />
        <span>{{rate.user.uname}}</span>
      </div>
      <p>{{rate.content}}</p>
      <div class="rate-desc">
        <span>{{rate.created | getDate(rate.created)}}</span>
        <span>{{rate.style}}</span>
      </div>
      <div class="rater-img" v-if="rate.images">
        <img v-for="(img, index) in rate.images" :src="img" :key="img+index" />
      </div>
    </div>
  </div>
</template>

<script>
import { fmtDate } from "common/utils";
export default {
  name: "DetailComments",
  props: {
    info: {
      type: Object,
      default: {
        return: {}
      }
    }
  },
  filters: {
    getDate(val) {
      // 1. timestamp to date
      const date = new Date(val * 1000);
      // 2. format date
      return fmtDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.comments {
  padding: 0 0.3rem 0.5rem;
  color: #333;
  font-size: 0.28rem;
  background-color: #fff;
  border-bottom: 0.1rem solid #eee;
}
.comments-header {
  display: flex;
  justify-content: space-between;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.3);
}
.comments-header div {
  margin: 0.1rem;
  font-size: 0.3rem;
}

.comments-header .more,
.comments-header .icon-next {
  font-size: 0.26rem;
}

.user {
  padding: 0.2rem 0 0.1rem;
  display: flex;
  justify-content: flex-start;
}
.user img {
  margin: 0;
  width: 0.84rem;
  height: 0.84rem;
  border-radius: 50%;
}
.user span {
  margin-left: 0.2rem;
  line-height: 0.84rem;
  font-size: 0.3rem;
}

p,
.rate-desc {
  color: #777;
}

.rate-desc {
  font-size: 0.24rem;
  margin-top: 0.2rem;
  color: #999;
}

.rate-desc span {
  padding-right: 0.2rem;
}

.rater-img {
  margin-top: 0.2rem;
}
.rater-img img {
  width: 1.4rem;
  height: 1.4rem;
  object-fit: cover;
  margin-right: 0.1rem;
}
</style>