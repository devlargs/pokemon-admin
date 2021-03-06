import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pokemon",
    component: () => import("@/views/Pokemon.vue")
  },
  {
    path: "/pokemons",
    name: "Pokemon",
    component: () => import("@/views/Pokemon.vue")
  },
  {
    path: "/pokemon/:id",
    name: "PokemonDetails",
    component: () => import("@/views/PokemonDetails")
  },
  {
    path: "/berries",
    name: "berries",
    component: () => import("@/views/Berries.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
