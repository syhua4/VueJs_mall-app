<template>
  <div class="swiper-wrapper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot />
    </div>
    <ul class="indicator" v-show="showIndicator && slideCount > 1">
      <li
        class="indicator-item"
        v-for="(item, index) in slideCount"
        :key="index"
        :style="isActive(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    showIndicator: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorColor: {
      type: String,
      default: "var(--color-tint)"
    }
  },
  computed: {
    isActive() {
      return function(index) {
        if (index == this.curIndex - 1) {
          return { backgroundColor: this.indicatorColor };
        }
      };
    }
  },
  data() {
    return {
      slideCount: 0,
      curIndex: 1,
      elStyle: null,
      moving: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();

      this.startTimer();
    }, this.interval);
  },
  methods: {
    handleDom: function() {
      let el = document.getElementsByClassName("swiper")[0];
      let slides = el.getElementsByClassName("swiper-item");
      this.slideCount = slides.length;
      if (this.slideCount > 1) {
        let cloneFirst = slides[0].cloneNode(true);
        let cloneLast = slides[this.slideCount - 1].cloneNode(true);
        el.insertBefore(cloneLast, slides[0]);
        el.appendChild(cloneFirst);
        this.elStyle = el.style;
      }

      this.elStyle.transform = `translateX(-${this.curIndex * 100}%)`;
    },
    startTimer: function() {
      this.timer = window.setInterval(() => {
        this.curIndex++;
        this.scrollContent();
      }, this.interval);
    },
    stopTimer: function() {
      window.clearInterval(this.timer);
    },
    scrollContent: function() {
      this.moving = true;
      this.elStyle.transition = "all 0.2s";
      this.elStyle.transform = `translateX(${-this.curIndex * 100}%)`;
      this.checkPosition();
      this.moving = false;
    },
    checkPosition: function() {
      window.setTimeout(() => {
        this.elStyle.transition = "0ms";
        if (this.curIndex >= this.slideCount + 1) {
          this.curIndex = 1;
          this.elStyle.transform = `translateX(${-this.curIndex * 100}%)`;
        } else if (this.curIndex <= 0) {
          this.curIndex = this.slideCount;
          this.elStyle.transform = `translateX(${-this.curIndex * 100}%)`;
        }
        // this.$emit("transitionEnd", this.curIndex - 1);
      }, 200);
    },
    touchStart: function(e) {
      if (this.moving) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove: function(e) {
      this.curX = e.touches[0].pageX;
      this.distance = this.curX - this.startX;
      let moveDistance = this.distance - this.curIndex * 100;
      this.elStyle.transition = "0ms";
      this.elStyle.transform = `translateX(${moveDistance}%)`;
    },
    touchEnd: function(e) {
      let curMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (this.distance > 0 && curMove > 0) {
        this.curIndex--;
      } else {
        this.curIndex++;
      }
      this.scrollContent();
      this.startTimer();
    }
  }
};
</script>

<style scoped>
.swiper-wrapper {
  position: relative;
  overflow: hidden;
}
.swiper {
  width: 100%;
  display: flex;
  transform: translateX(0%);
}

.indicator {
  width: 100%;
  position: absolute;
  bottom: 0.2rem;
  padding: 0.1rem 0.15rem;
  z-index: 1;
  align-items: center;
}
.indicator-item {
  box-sizing: border-box;
  display: inline-block;
  width: 0.15rem;
  height: 0.15rem;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 0.1rem;
}

.indicator-item.active {
  background-color: var(--color-tint);
}
</style>
