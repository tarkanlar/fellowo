import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/points",
    name: "Points",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "points" */ "../views/Points.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "points" */ "../views/Profile.vue"),
  },
  {
    path: "/weekly",
    name: "Weekly",
    component: () =>
      import(/* webpackChunkName: "weekly" */ "../views/Weekly.vue"),
  },
  {
    path: "/invite",
    name: "Invite",
    component: () =>
      import(/* webpackChunkName: "invite" */ "../views/Invite.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import(/* webpackChunkName: "faq" */ "../views/Faq.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
