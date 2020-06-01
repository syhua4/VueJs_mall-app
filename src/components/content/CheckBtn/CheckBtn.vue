<template>
  <div class="check-btn">
    <i class="iconfont" :class="checked" @click="checkBtn" />
  </div>
</template>

<script>
export default {
  name: "CheckBtn",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // checked: this.isChecked,
      defaultClass: "icon-round",
      checkedClass: "icon-round-checked"
    };
  },
  methods: {
    checkBtn() {
      // this.checked = !this.checked;
      this.$emit("toggleBtn");
    }
  },
  computed: {
    checked() {
      return this.isChecked ? this.checkedClass : this.defaultClass;
    }
  }
};
</script>

<style scoped>
.icon-round,
.icon-round-checked {
  color: lightgray;
  font-size: 0.35rem;
}

.icon-round-checked {
  color: var(--color-tint);
}
</style>