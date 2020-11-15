/* eslint-disable no-console */
<template>
  <div>
    <Carousel />
    <PostContainer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostContainer from "./../components/post/PostContainer";
import Carousel from "./../components/carousel/Carousel";

export default {
  computed: {
    ...mapGetters({
      posts: "posts",
    }),
  },
  components: {
    PostContainer,
    Carousel,
  },

  mounted() {},
  methods: {
    goToDetail(itemId) {
      this.$router.push({ name: "Details", params: { id: itemId } });
    },
  },
};
</script>
