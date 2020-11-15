<template>
  <div>
    <ul class="flex justify-start pb-6">
      <li class="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </li>
      <li class="mr-6">
        <a
          class="text-indigo-600 hover:text-blue-800 cursor-pointer"
          @click="goBack"
          >Dashboard</a
        >
      </li>
    </ul>

    <h3 class="text-gray-700 text-3xl font-semibold">{{ pageTitle }}</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <form @submit.prevent="submitToParent">
            <div class="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-4">
              <div>
                <label class="text-gray-700" for="title">title</label>
                <input
                  class="form-input mt-2
                focus:border-indigo-600 shadow appearance-none border rounded
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                "
                  type="text"
                  v-model="post.title"
                />
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress"
                  >descrizione</label
                >
                <input
                  class="form-input mt-2
                focus:border-indigo-600 shadow appearance-none border rounded
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                "
                  type="descrizione"
                  v-model="post.descrizione"
                />
              </div>

              <div>
                <label class="text-gray-700" for="img">Image url</label>
                <input
                  class="form-input mt-2
                focus:border-indigo-600 shadow appearance-none border rounded
                w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
                "
                  type="text"
                  v-model="post.img"
                />
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <button
                type="submit"
                :class="
                  !post.title && !post.descrizione && !post.img
                    ? 'cursor-not-allowed'
                    : ''
                "
                class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: null,
        descrizione: null,
        img: null,
      },
      pageTitle: null,
      isEdit: false,
    };
  },
  computed: {
    ...mapGetters({
      posts: "posts",
    }),
  },
  mounted() {
    this.pageTitle = this.$route.name;
    if (this.$route.name === "Edit Post") {
      this.isEdit = true;
      // console.log("this.posts", this.posts);
      const filteredPost =
        this.posts &&
        this.posts.filter((pos) => pos.id === this.$route.params.id);
      this.post = filteredPost[0];
    } else {
      this.isEdit = false;
    }
  },
  methods: {
    submitToParent() {
      const post = this.post;
      if (!post.title && !post.descrizione && !post.img) return;
      if (!this.isEdit) this.$emit("addpost", this.post);
      if (this.isEdit) this.$emit("updatepost", this.post);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
