<template>
  <transition name="fade">
    <div class="toast" v-if="isShow">
      <div>{{text}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  props: {
    text: {
      type: String,
      default: ""
    },
    showText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isShow() {
      if (this.showText && this.text.trim().length > 0) {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 0.16rem 0.2rem;
  border-radius: 0.1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>