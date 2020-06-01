<template>
  <div class="cart-list-item">
    <div class="item-wrapper">
      <check-btn
        class="checkbox"
        @toggleBtn="toggleCheck(product.iid)"
        :isChecked="product.isChecked"
      />
      <div class="item-img">
        <img :src="product.thumbnail" />
      </div>
      <div class="item-desc">
        <div class="title">{{product.title}}</div>
        <div class="item-misc-wrapper">
          <span class="price">{{product.price}}</span>
          <span class="quantity">x{{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from "components/content/CheckBtn/CheckBtn";

import { mapActions } from "vuex";

export default {
  name: "CartListItem",
  components: { CheckBtn },
  props: {
    product: {
      type: Object,
      default: {
        return: {}
      }
    }
  },
  methods: {
    ...mapActions(["toggleCheckbox"]),
    toggleCheck(iid) {
      this.toggleCheckbox(iid);
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  background-color: #efefef;
  padding-top: 0.1rem;
  margin: 0 0.05rem;
}
.item-wrapper {
  background-color: #fff;
  margin: 0.14rem;
  display: flex;
  padding: 0.3rem 0.3rem 0.25rem 0.2rem;
  border-radius: 0.1rem;
}

.item-img {
  width: 1.5rem;
  height: 1.85rem;
  margin-right: 0.3rem;
  border-radius: 0.1rem;
  overflow: hidden;
}
.item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-desc {
  width: 5.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.28rem;
  justify-content: space-between;
}

.title {
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.item-misc-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.item-misc-wrapper span {
  margin: 0;
}

.price {
  color: var(--color-tint);
}

.checkbox {
  margin-right: 0.18rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>