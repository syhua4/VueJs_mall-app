<template>
  <div class="tab-control">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab-control-item"
      :class="{ active: curIndex === index}"
      @click="tabClick(index)"
    >
      <span>{{ tab }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      curIndex: 0,
      clicked: null
    };
  },
  methods: {
    tabClick(index) {
      this.curIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 0.82rem;
  font-size: 0.28rem;
  box-shadow: 0 0.02rem 0.02rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

span {
  padding: 0.1rem;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>
