<template>
  <div class="tabbar-item" @click="itemClick" :style="activeStyle">
    <slot name="item-icon" class="tabbar-icon"></slot>
    <slot name="item-label"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : null;
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path.indexOf(this.path) === -1) {
        this.$router.push(this.path);
      }
      // console.log(this.$router);
      console.log(this.$route.path.indexOf(this.path));
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
}

.tabbar-item .tabbar-icon {
  display: inline-block;
  font-size: 0.4rem;
}
</style>
