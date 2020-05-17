<template>
  <div class="tab-display-item">
    <img :src="goods.show.img" @load="imgLoaded" />
    <a class="item-info">
      <p>{{ goods.title }}</p>
      <span class="price">¥{{ goods.price }}</span>
      <span class="fav">
        <i class="iconfont icon-favor" />
        {{ goods.cfav }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "TabDisplayItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoaded() {
      this.$bus.$emit("imgLoaded");
    }
  }
};
</script>

<style scoped>
.tab-display-item {
  width: 3.5rem;
  margin: 0.3rem 0rem;
  background-color: #fff;
  border-radius: 0.1rem 0.1rem 0 0;
  overflow: hidden;
}

.tab-display-item img {
  width: 100%;
}

.item-info {
  display: block;
  padding: 0.24rem;
}

.item-info p {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin-bottom: 0.15rem;
}
.price,
.fav {
  font-size: 0.28rem;
  line-height: 0.16rem;
  height: 0.16rem;
  vertical-align: middle;
}
.price {
  color: var(--color-tint);
}
.fav {
  vertical-align: middle;
}
.icon-favor {
  font-size: 0.25rem;
  margin-left: 0.3rem;
  margin-bottom: 0.3rem;
}
</style>
