<template>
  <div id="app">
    <toast-manager />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

import navbar from "./components/Navbar";
import ToastManager from "./components/Toast/ToastManager";

const defaultLayout = "home";

export default {
  name: "app",
  components: {
    navbar,
    "toast-manager": ToastManager,
  },

  mounted() {
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    isDashboard() {
      return this.$route.path === "/dashboard";
    },
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
};
</script>

<style src="./assets/tailwind.css" />
