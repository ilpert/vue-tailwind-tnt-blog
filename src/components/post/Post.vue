<template>
  <div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="post.img"
        alt="blog"
      />
      <div class="p-6">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
          {{ post.title }}
        </h1>
        <p class="leading-relaxed mb-3">
          {{ post.descrizione }}
        </p>
        <div class="flex items-center flex-wrap ">
          <a
            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
            @click="goToDetail(post, post.title)"
            >Learn More
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
  mounted() {},
  methods: {
    goToDetail(post, title) {
      this.$store.dispatch("cachePostDetail", post);
      this.$router.push({ name: "Details", params: { name: title } });
    },
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
