import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListasView from "../views/ListasView.vue";
import JogadoresView from "../views/JogadoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/listas",
      name: "listas",
      component: ListasView,
    },
    {
      path: "/listaListas",
      name: "listaListas",
      component: JogadoresView,
    },
  ],
});

export default router;
