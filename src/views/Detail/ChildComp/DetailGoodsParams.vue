<template>
  <div class="goods-params">
    <table v-for="(param, index) in info.size" :key="param+index" class="size-chart">
      <tr v-for="(tr, index) in param" :key="tr+index">
        <td v-for="(td, index) in tr" :key="td+index">{{td}}</td>
      </tr>
    </table>
    <table class="param">
      <tr v-for="(key, index) in info.info" :key="key+index">
        <td v-for="(val, index) in key" :key="val+index">{{val}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
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
.goods-params {
  font-size: 0.28rem;
  background-color: #fff;
}

.size-chart,
.param {
  padding: 0.3rem;
  width: 100%;
}

.size-chart tr,
.size-chart td,
.param tr,
.param td {
  padding: 0.1rem;
  border-bottom: 0.01rem solid #eee;
}

.param > tr > td:first-child {
  width: 20%;
}

.param > tr > td:nth-child(2) {
  color: var(--color-high-text);
}
</style>