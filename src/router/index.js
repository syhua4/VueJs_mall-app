import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/Home/Home");
const Category = () => import("views/Category/Category");
const Cart = () => import("views/Cart/Cart");
const User = () => import("views/User/User");

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/user",
    component: User
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
