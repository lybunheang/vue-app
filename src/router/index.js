import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Test from "../components/Test.vue";
import Search from "../components/Search.vue";
import Country from "../components/Country.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },

  {
    path: "/country",
    name: "Country",
    component: Country,
  },




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
