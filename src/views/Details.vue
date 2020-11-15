<template>
  <div v-if="activeLayout == 1">
    <section class="text-gray-700 body-font bg-gray-200 min-h-screen">
      <div class="container px-5 pt-12 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              :src="details.img"
            />
          </div>
          <div class="flex flex-col  mt-10">
            <h1 class="text-center text-xl font-semibold capitalize">
              {{ details.title }}
            </h1>
            <div class=" sm:pl-8 sm:py-8  mt-4 pt-4 sm:mt-0 ">
              <p class="leading-relaxed text-lg mb-4">
                {{ details.descrizione }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else>
    <section
      class="flex flex-col md:flex-row h-screen items-center   px-5 md:px-0 lg:px-0"
    >
      <div class="lg:max-w-full w-full md:w-1/2 xl:w-1/2 h-full">
        <img
          sizes="(max-width: 300px) 100vw, 300px"
          alt="content"
          class="object-cover object-center h-full w-full"
          :src="details.img"
        />
      </div>
      <div
        class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/2 h-screen px-8
        flex items-center justify-center pt-5 md:pt-0 lg:pt-0 sm:px-0"
      >
        <div class="w-full h-100">
          <h1 class="text-center text-xl font-semibold capitalize">
            {{ details.title }}
          </h1>
          <div class=" sm:pl-8 sm:py-8  mt-4 pt-4 sm:mt-0 ">
            <p class="leading-relaxed text-lg mb-4">
              {{ details.descrizione }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeLayout: null,
    };
  },
  computed: {
    ...mapGetters({
      posts: "posts",
      details: "postDetail",
    }),
  },
  mounted() {
    this.activeLayout = this.getRandomIntInclusive(1, 3);
  },
  methods: {
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
    },
  },
};
</script>

<style scoped>
.h-screen {
  height: calc(100vh - 88px);
}
</style>
