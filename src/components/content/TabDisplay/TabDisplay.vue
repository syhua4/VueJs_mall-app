<template>
  <div class="tab-display">
    <tab-display-item v-for="(item, index) in display" :key="item + index" :goods="item" />
  </div>
</template>

<script>
import TabDisplayItem from "./TabDisplayItem";
export default {
  name: "TabDisplay",
  components: {
    TabDisplayItem
  },
  props: {
    display: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.tab-display {
  background-color: #eee;
  width: 7.5rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
}
</style>
