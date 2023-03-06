import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "./views/MainScreen.vue";
import InfView from "./views/InfView.vue";
import EkoView from "./views/EkoView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: MainScreen,
  },
  {
    path: "/inf",
    name: "inf",
    component: InfView,
  },
  {
    path: "/eko",
    name: "eko",
    component: EkoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
