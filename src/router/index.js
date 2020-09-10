import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout";
import { auth } from "../plugins/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/d",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/points",
        name: "Points",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "points" */ "../views/Points.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/profile",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "points" */ "../views/Profile.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/weekly",
        name: "Weekly",
        component: () =>
          import(/* webpackChunkName: "weekly" */ "../views/Weekly.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/invite",
        name: "Invite",
        component: () =>
          import(/* webpackChunkName: "invite" */ "../views/Invite.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/faq",
        name: "Faq",
        component: () =>
          import(/* webpackChunkName: "faq" */ "../views/Faq.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/settings",
        name: "Settings",
        component: () =>
          import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});
export default router;
