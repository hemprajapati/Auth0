import { createRouter, createWebHistory } from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";
import HomeView from "../views/HomeView.vue";
const checkIsAuthenticated = (to, from, next) => {
  // console.log(to,from)
  const { user, isAuthenticated } = useAuth0();
  console.log(user, isAuthenticated.value);
  if (isAuthenticated.value) {
    return next();
  }
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      beforeEnter: checkIsAuthenticated,
      component: () => import("../views/Dashbord.vue"),
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("../views/callBack.vue"),
    },
  ],
});

export default router;
