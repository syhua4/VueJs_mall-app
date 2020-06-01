<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="info.logo" />
      <span class="name">{{info.name}}</span>
    </div>
    <div class="shop-mid">
      <div class="shop-mid-left">
        <div class="info-sells">
          <div class="sells">{{info.sells | sellCountFilter}}</div>
          <div class="info-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods">{{info.goodsCount}}</div>
          <div class="info-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-mid-right">
        <table>
          <tr v-for="(i, index) in info.score" :key="i+index">
            <td>{{i.name}}</td>
            <td :class="{'high': i.isBetter}" class="score">{{i.score}}</td>
            <td class="isBetter">
              <span :class="{'high': i.isBetter}">{{i.isBetter ? "高" : "低"}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    info: {
      type: Object,
      default: {
        return: {}
      }
    }
  },
  filters: {
    sellCountFilter: function(val) {
      if (val < 10000) return val;
      return (val / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shop-info {
  padding: 0.5rem 0.16rem;
  color: #333;
  border-bottom: 0.1rem solid #eee;
  background-color: #fff;
}
.shop-top,
.shop-mid,
.shop-bottom {
  display: flex;
  align-items: center;
}

.shop-top {
  line-height: 0.9rem;
}
.shop-top img {
  width: 0.9rem;
  height: 0.9rem;
  border: 0.02rem solid #eee;
  border-radius: 50%;
}
.name {
  margin-left: 0.2rem;
  height: 0.9rem;
  width: 100%;
  line-height: 0.9rem;
}

.shop-mid,
.shop-bottom {
  margin-top: 0.3rem;
}

.shop-mid-left {
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  flex: 1;
  text-align: center;
  border-right: 0.02rem solid #eee;
  font-size: 0.36rem;
}

.shop-mid-right {
  flex: 1;
  font-size: 0.26rem;
}

.shop-mid-right table td {
  padding: 0.1rem;
}
.info-text {
  margin-top: 0.1rem;
  font-size: 0.24rem;
}

.score {
  color: #5ea732;
}
.score.high {
  color: #f13e3a;
}
.isBetter {
  color: #fff;
}
.isBetter span {
  background-color: #5ea732;
}

.isBetter span.high {
  background-color: #f13e3a;
}

.enter-shop {
  font-size: 0.28rem;
  background-color: #f2f5f8;
  text-align: center;
  line-height: 0.6rem;
  height: 0.6rem;
  width: 3rem;
  border-radius: 0.2rem;
}
</style>