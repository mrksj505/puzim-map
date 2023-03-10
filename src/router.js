import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "./views/MainScreen.vue";
import InfView from "./views/InfView.vue";
import EkoView from "./views/EkoView.vue";
import RolView from "./views/RolView.vue";
import InzView from "./views/InzView.vue";
import MechView from "./views/MechView.vue";
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
  {
    path: "/rol",
    name: "rol",
    component: RolView,
  },
  {
    path: "/inz",
    name: "inz",
    component: InzView,
  },
  {
    path: "/mech",
    name: "mech",
    component: MechView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
