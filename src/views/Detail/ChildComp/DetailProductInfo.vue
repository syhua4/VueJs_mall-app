<template>
  <div class="info" v-if="Object.keys(info).length !== 0">
    <div class="title">{{info.title}}</div>
    <div class="price-column">
      <span class="price">{{info.price}}</span>
      <span class="sm-price">{{info.oldPrice}}</span>
      <span class="discount" :style="{'backgroundColor': info.discountColor}">{{info.discount}}</span>
    </div>
    <ul class="column">
      <li v-for="(i, index) in info.columns" :key="i+index">{{i}}</li>
    </ul>
    <ul class="services">
      <li v-for="(i, index) in info.services" :key="i+index">
        <img :src="i.icon" alt />
        {{i.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailProductInfo",
  props: {
    info: {
      type: Object,
      default: {
        return: {}
      }
    }
  }
};
</script>

<style scoped>
.info {
  padding: 0.3rem 0.16rem;
  color: #999;
  background-color: #fff;
  border-bottom: 0.1rem solid #eee;
}
.title,
.services {
  color: #222;
}
.price-column {
  margin-top: 0.2rem;
}
.price {
  font-size: 0.48rem;
  color: var(--color-tint);
}
.sm-price {
  font-size: 0.26rem;
  margin: 0 0.1rem;
  text-decoration: line-through;
}
.discount {
  font-size: 0.24rem;
  padding: 0.04rem 0.1rem;
  position: relative;
  top: -0.16rem;
  color: #fff;
  border-radius: 0.16rem;
}

.column,
.services {
  margin-top: 0.3rem;
  font-size: 0.26rem;
  justify-content: space-between;
  border-bottom: 0.02rem solid rgba(100, 100, 100, 0.1);
  line-height: 0.52rem;
}

.services {
  margin-top: 0;
  line-height: 1.2rem;
}
ul {
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* ul::after {
  content: "";
  flex: auto;
} */
ul > li {
  margin: 0;
  /* width: 30%; */
  /* display: inline-block; */
}
li img {
  width: 0.28rem;
  height: 0.28rem;
}
</style>