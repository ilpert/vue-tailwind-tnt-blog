<template>
  <div>
    <PostForm
      v-on:addpost="addPost($event)"
      v-on:updatepost="updatePost($event)"
    />
  </div>
</template>

<script>
import { PostForm } from "./../components/dashboard";

export default {
  components: {
    PostForm,
  },
  methods: {
    addPost(event) {
      // console.log("ths", event);
      const data = {
        title: event.title,
        descrizione: event.descrizione,
        img: event.image,
      };

      const promise = new Promise((resolve, reject) => {
        if (this.$store.dispatch("addPost", data)) {
          resolve();
        } else {
          reject(Error("it broke"));
        }
      });

      promise.then(
        (result) => {
          this.$router.replace({ name: "Dashboard" });
          this.$store.dispatch("toastModule/displayNotification", {
            text: "Post inserito correttamente",
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

      // this.$router.replace(this.$route.query.redirect || "/app");

      // this.$store.dispatch("addPost", data).then((data) => console.log(data));
      // postsCollection.set(data);
    },
    updatePost(post) {
      const promise = new Promise((resolve, reject) => {
        if (this.$store.dispatch("updatePost", post)) {
          resolve();
        } else {
          reject(Error("it broke"));
        }
      });

      promise.then(
        (result) => {
          this.$router.replace({ name: "Dashboard" });
          this.$store.dispatch("toastModule/displayNotification", {
            text: "Post modificato   correttamente",
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
  },
};
</script>

<style></style>
