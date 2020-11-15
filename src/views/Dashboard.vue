<template>
  <!-- MAIN CONTAINER  -->
  <div class=" md:mx-auto px-4 py-8">
    <Alert
      type="error"
      strong="Account due!"
      message="Please renew your account to continue using our services."
      v-on:close-alert="isAlertOpen = !isAlertOpen"
      v-if="isAlertOpen"
    />
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-gray-800">Dashboard</h2>

      <button
        class="shadow inline-flex items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-4 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 w-5 h-5"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <router-link to="/dashboard/newpost"> Create post</router-link>
      </button>
    </div>
    <!-- <Modal /> -->
    <PostTable
      :posts="posts"
      class=" mb-10 "
      v-on:delete-post="deletePost($event)"
      v-on:edit-post="goToEditDetails($event)"
      v-on:update-post="updatePost($event)"
    />
  </div>
  <!-- FINE MAIN CONTAINER -->
</template>

<script>
import { mapGetters } from "vuex";
import {
  DashboardMenu,
  DashboardNav,
  DashboardTable,
  PostTable,
} from "./../components/dashboard";
import Alert from "./../components/Alert/Alert";
import Modal from "./../components/Modal";

export default {
  components: {
    Alert,
    PostTable,
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
    ...mapGetters({
      posts: "posts",
    }),
  },
  methods: {
    submit() {
      const data = {
        title: this.form.title,
        descrizione: this.form.descrizione,
        img: this.form.img,
      };

      this.$store.dispatch("addPost", data);
    },
    toggleMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
    toggleAlert() {
      this.isAlertOpen = !this.isAlertOpen;
    },
    deletePost(id) {
      const promise = new Promise((resolve, reject) => {
        if (this.$store.dispatch("deletePost", id)) {
          resolve();
        } else {
          reject(Error("it broke"));
        }
      });
      promise.then(
        (result) => {
          this.$store.dispatch("toastModule/displayNotification", {
            text: "Post eliminato correttamente",
            type: "success",
          });
        },
        (err) => {
          this.$store.dispatch("toastModule/displayNotification", {
            text: err,
            type: "error",
          });
        }
      );
    },
    goToEditDetails(post) {
      this.$router.push({
        name: "Edit Post",
        params: { id: post.id },
      });
    },
  },
};
</script>
