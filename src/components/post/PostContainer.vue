<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto ">
      <div class="flex flex-wrap -m-4">
        <Post v-bind:post="post" v-bind:key="post.id" v-for="post in posts" />
      </div>
    </div>
  </section>
</template>

<script>
import Post from "./../post/Post";
import { mapGetters } from "vuex";
export default {
  name: "PostContainer",
  components: {
    Post,
  },
  computed: {
    ...mapGetters({
      posts: "posts",
    }),
  },
};
</script>

<style scoped>
#deletePost {
  float: right;
}

.minHeight {
  min-height: 500px;
}
</style>
