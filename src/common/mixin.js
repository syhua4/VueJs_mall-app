import BackToTop from "components/content/BackToTop/BackToTop";
import Toast from "components/common/Toast/Toast";

import { BACK_TOP_POSITION } from "./const";

export const backTopMixin = {
  components: { BackToTop },
  data() {
    return {
      showBackTop: false
    };
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    isShowBackTop(position) {
      this.showBackTop = position.y <= -BACK_TOP_POSITION;
    }
  }
};

export const toastMixin = {
  components: { Toast },
  data() {
    return {
      toastText: "",
      toastDisplay: false
    };
  },
  methods: {
    showToast(msg, duration = 1500) {
      this.toastText = msg;
      this.toastDisplay = true;

      setTimeout(() => {
        this.toastDisplay = false;
        this.toastText = "";
      }, duration);
    }
  }
};
