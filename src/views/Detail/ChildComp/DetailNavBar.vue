<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" @click="backClick">
        <i class="iconfont icon-back"></i>
      </div>
      <div slot="center" class="titles">
        <tab-control
          :tabs="['商品', '参数', '评论', '推荐']"
          class="title"
          @tabClick="titleClick"
          ref="tab"
        />
      </div>
    </nav-bar>
  </div>
</template>

<script>
import TabControl from "components/content/TabControl/TabControl";
import NavBar from "components/common/NavBar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
    TabControl
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"]
      // curIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.$emit("tabClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.detail-nav {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

.titles {
  margin-top: 0.02rem;
}
.title {
  box-shadow: none;
}
.active span {
  border-bottom: none;
}
</style>
