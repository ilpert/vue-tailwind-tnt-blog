import Vue from "vue";
import Router from "vue-router";
import { Dashboard, Settings, NewPost, Details, Home, Login } from "../views";
import store from "../store";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // vue scroll https://stackoverflow.com/questions/42538449/vue-js-scroll-to-top-of-new-page-route-after-settimeout
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { layout: "home" },
    },
    {
      path: "/details/:name",
      name: "Details",
      component: Details,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true,
        layout: "dashboard",
      },
    },
    {
      path: "/dashboard/newpost",
      name: "New Post",
      component: NewPost,
      meta: {
        requiresAuth: true,
        layout: "dashboard",
      },
    },
    {
      path: "/dashboard/editpost/:id",
      name: "Edit Post",
      component: NewPost,
      meta: {
        requiresAuth: true,
        layout: "dashboard",
      },
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      meta: {
        requiresAuth: true,
        layout: "dashboard",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !store.state.user) {
    next("/login");
  } else {
    next();
  }
});

export default router;
