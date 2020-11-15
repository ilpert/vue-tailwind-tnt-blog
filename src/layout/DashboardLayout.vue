<template>
  <body class="antialiased bg-gray-200 h-screen">
    <div class="h-screen flex overflow-hidden">
      <DashboardMenu
        :isSideMenuOpen="isSideMenuOpen"
        v-on:toggle-menu="toggleMenu()"
      />
      <div class="flex-1 flex-col relative z-0 w-full">
        <DashboardNav v-on:toggle-menu="toggleMenu()" />
        <!-- MAIN CONTAINER  -->
        <div class=" px-4 py-8 overflow-y-auto h-full">
          <slot />
        </div>
        <!-- FINE MAIN CONTAINER -->
      </div>
    </div>
  </body>
</template>

<script>
import { mapGetters } from "vuex";
import {
  DashboardMenu,
  DashboardNav,
  DashboardTable,
  PostTable,
} from "./../components/dashboard";
// import Alert from "./../../components/Alert/Alert";
// import Modal from "./../../components/Modal";

export default {
  name: "dashboard-layout",
  components: {
    DashboardMenu,
    DashboardNav,
  },
  data() {
    return {
      form: {
        title: "",
        descrizione: "",
        img: "",
      },
      error: null,
      isSideMenuOpen: false,
      isAlertOpen: false,
    };
  },
  mounted() {},
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      posts: "posts",
    }),
  },
  methods: {
    toggleMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
    toggleAlert() {
      this.isAlertOpen = !this.isAlertOpen;
    },
  },
};
</script>
